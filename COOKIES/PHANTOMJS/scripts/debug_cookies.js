var fs = require('fs');
var page = require('webpage').create();
var system = require('system');

phantom.cookiesEnabled = true;
console.log("\uFEFF"); // BOM UTF‑8 to force encoding
phantom.outputEncoding = "utf-8";

// Check if a parameter has been set
if (system.args.length < 2) {
    console.log("Usage : phantomjs debug_cookies.js <url>");
    phantom.exit(1);
}

// Récupérer le paramètre
var param = system.args[1];

//var url = "https://example.com";  // <-- set your URL here
if (param) {
	var url = param
} else {
	var url = "https://www.yourdefaulturlheretochangeit.com"
}
var outputFile = "cookies_exported.txt";
var outputFile_evt = "events_exported.txt";

console.log("=== BEGINNING of SCRIPT ===");

// 1) Display cookies on the start
console.log("\n[1] Cookies on start :");
console.log(JSON.stringify(phantom.cookies, null, 4));
console.log("Number of cookies on the start :", phantom.cookies.length);

// Log for events of the page
page.onLoadFinished = function(status) {
    console.log("\n[EVENT] onLoadFinished :", status);
};

page.onResourceReceived = function(res) {
    if (res.stage === "end") {
	fs.write(outputFile_evt, "[EVENT] Resource received :" + res.url + "\n", 'a');
        console.log("[EVENT] Resource received :", res.url);
    }
};

// 2) Load the page
console.log("\n[2] Open this URL :", url);

page.open(url, function(status) {
    console.log("\n[3] Callback page.open, status =", status);

    if (status !== "success") {
        console.log("Fail to load page, cancel.");
        phantom.exit();
        return;
    }

    // 3) Display cookies after loading
    console.log("\n[4] Cookies after loading :");
    console.log(JSON.stringify(phantom.cookies, null, 4));
    console.log("Number of cookies after loading :", phantom.cookies.length);

    // 4) Export cookies
    try {
        fs.write(outputFile, JSON.stringify(phantom.cookies, null, 4), 'w');
        console.log("\n[5] Cookies written into :", outputFile);
    } catch (e) {
        console.log("\n[ERROR] Writing file :", e);
    }

    console.log("\n=== END of SCRIPT ===");
    phantom.exit();
});
