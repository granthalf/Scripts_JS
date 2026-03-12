const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
	//  const browser = await puppeteer.launch();
	//  const browser = await puppeteer.launch({
	//  channel: "chrome"
	//});
	const browser = await puppeteer.launch({
		headless: true,
		executablePath: "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
		args: ["--headless=new", "--disable-gpu"]
	});
	
	console.log('Browser version:', await browser.version());
	
	const page = await browser.newPage();
	await page.goto('https://www.yoururlexampledontforgettochangeithere.com');
	console.log(await page.title());
	
	const cookies = await page.cookies();
	
	console.log(cookies);
	fs.writeFileSync("cookies.json", JSON.stringify(cookies, null, 2));
	
	await browser.close();

})();
