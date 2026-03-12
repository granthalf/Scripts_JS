```
####################################################################################
#                                 COOKIES on the WEB
#
#                         Part from my scripts, for some usings
#
####################################################################################


The idea for this tiny project is:
- OK, I did JS Scripts as bookmarklet compatible with Tampermonkey => mainly to annihilate bad views as cookies wall
- But... Is the website use without consent cookies?

Cookies are a topic extremely sensitive.
In Europa, Public National Groups is trying to regulate this topic with laws.

During this waiting time about any law will be effective, websites uses different tricks in order to monetize their web pages.


                                      PREPARATION

PRE-REQUISITES

python3: OK (see python part in order to know how to do, if you need)
NodeJS: https://nodejs.org/fr/download (download the zip standalone)
Visual Studio: https://code.visualstudio.com
Build Tools pour Visual Studio 2026 (Free): https://visualstudio.microsoft.com/fr/downloads/
Puppeteer (install by using command-line/tool npm)

Notes:
1. My First Try was with PhantomJS.
But… this software is outdated. The author has also closed it.
Keep in mind (in a specific case in future), but not use for now.

2. Build Tools pour Visual Studio 2026, choose Modules:
- Développement Desktop en C++
- MSVC v143
- Windows 10/11 SDK

3. NPM & NodeJS
If you have installed NodeJS in a directory called "C:\Users\firstname.name\Documents\nodejs", npm cannot be linked.
In order to correct PATH with a standalone version, create this file:
- npm.bat
- insert this code:
@echo off
"C:\Users\firstname.name\Documents\nodejs\node.exe" "C:\Users\firstname.name\Documents\nodejs\node_modules\npm\bin\npm-cli.js" %*

4. Puppeteer:
- with pre-requisite from the point 3, you don't encounter errors with a good link between NodeJS+NPM
- with CMD, in NodeJS directory, npm install puppeteer

5. Corrections Puppeteer
If any error, please run as described
- npm audit fix

6. Create a directory called "jsfiles" in the NodeJS-Directory
7. Create all your JS Files here


---

                                      SCRIPTS


A. Create this test.js file with this content:
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

B. This Test file is ready to use with these features:
- by default, it was using Edge in my environment (company policy) but it's better if you set yourself
- I keep idea to switch browser into another type (uncomment and try with chrome, if you need)
- I don't want Chrome, so I don't share tests with it
- this file has trace into console.logs to know what kind of broser is really used
- this file has trace into console.logs to know about cookies from the page loaded

C. Open CMD, go to Node.JS directory, launch:
node .\jsfiles\<jsfile>.js











```


