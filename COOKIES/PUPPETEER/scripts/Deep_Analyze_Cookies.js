const puppeteer = require('puppeteer');
const fs = require('fs');

// How to launch?
// With Puppeteer
// With NodeJS
// CMD, cd "directory for NodeJS"
// node .\jsfiles\Deep_Analyze_Cookies.js

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    executablePath: "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
    args: ["--headless=new"]
  });

  const page = await browser.newPage();
  const url = "https://www.setyoururlpathhere.com"; // Set your URL here (replace)
  await page.goto(url, { waitUntil: "networkidle2" });

  // --- Get cookies ---
  const cookies = await page.cookies();

  // --- Cookies are exported raw ---
  fs.writeFileSync("deep__cookies.json", JSON.stringify(cookies, null, 2));

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
  console.log("Cookies exported into deep__cookies.json");
  console.log("Rapport exported int deep__rapport_cookies.json");

  await browser.close();
})();
