const puppeteer = require('puppeteer');
const fs = require('fs');

// Get URL as Parameter
const url = process.argv[2];

if (!url) {
  console.error("❌ NO URL given. Use : node test.js https://example.com");
  process.exit(1);
}

function getRootDomain(url) {
  const hostname = new URL(url).hostname; // ex: "www.google.com"
  const parts = hostname.replace(/^www\./, "").split("."); // ex: ["google","com"]
  
  if (parts.length >= 2) {
    return parts[parts.length - 2]; // ex: "google"
  }

  return hostname; // fallback
}

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    executablePath: "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
    args: ["--headless=new"]
  });

  const rootdomain = getRootDomain(url);
  const page = await browser.newPage();
  //const url = "https://www.setyoururlpathhere.com"; // Set your URL here (replace)
  await page.goto(url, { waitUntil: "networkidle2" });

  // --- Get cookies ---
  const cookies = await page.cookies();

  // --- Cookies are exported raw ---
    const data = {
    url,
    decodeUrl: "https://iabtcf.com/#/decode",
    cookies
  };

  fs.writeFileSync("deep__cookies_" + rootdomain + ".json", JSON.stringify(data, null, 2));

  // --- Category ---
  const analyticsPatterns = [/ga/i, /gid/i, /utm/i, /_fbp/i, /_cl/i];
  const marketingPatterns = [/ads/i, /doubleclick/i, /gads/i, /_gcl/i];
  const essentialPatterns = [/session/i, /csrftoken/i, /auth/i];

  const categorized = {
    essential: [],
    analytics: [],
    marketing: [],
    unknown: []
  };

  for (const c of cookies) {
    const name = c.name;

    if (essentialPatterns.some(p => p.test(name))) {
      categorized.essential.push(c);
    } else if (analyticsPatterns.some(p => p.test(name))) {
      categorized.analytics.push(c);
    } else if (marketingPatterns.some(p => p.test(name))) {
      categorized.marketing.push(c);
    } else {
      categorized.unknown.push(c);
    }
  }

  // --- Detection of conformity ---
  const nonCompliant = [
    ...categorized.analytics,
    ...categorized.marketing
  ];

  const rapport = {
    url,
    timestamp: new Date().toISOString(),
    totalCookies: cookies.length,
    categories: {
      essential: categorized.essential.map(c => c.name),
      analytics: categorized.analytics.map(c => c.name),
      marketing: categorized.marketing.map(c => c.name),
      unknown: categorized.unknown.map(c => c.name)
    },
    nonCompliant: nonCompliant.map(c => c.name),
    isCompliant: nonCompliant.length === 0
  };

  // --- Export du rapport JSON ---
  fs.writeFileSync("deep__rapport_cookies.json", JSON.stringify(rapport, null, 2));

  console.log("Analyze achieved.");
  console.log("Cookies exported into deep__cookies_" + rootdomain + ".json");
  console.log("Rapport exported int deep__rapport_cookies_" + rootdomain + ".json");

  await browser.close();
})();
