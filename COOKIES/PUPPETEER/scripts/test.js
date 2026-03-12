const puppeteer = require('puppeteer');

(async () => {
	//  const browser = await puppeteer.launch();
	//  const browser = await puppeteer.launch({
	//  channel: "chrome"
	//});
	const browser = await puppeteer.launch({
		executablePath: "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
		headless: true
	});
	console.log('Browser version:', await browser.version());
	const page = await browser.newPage();
	await page.goto('https://www.yoururlexampledontforgettochangeithere.com');
	console.log(await page.title());
	
	const cookies = await page.cookies();
	console.log(cookies);
	
	await browser.close();
})();