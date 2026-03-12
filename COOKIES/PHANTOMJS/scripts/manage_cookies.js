var fs = require('fs');
var page = require('webpage').create();

var url = "https://example.com";  // <-- your URL here
var outputFile = "cookies_exported.txt";

// 1) Display cookies loaded during starting
console.log("Cookies loaded from --cookies-file :");
console.log(JSON.stringify(phantom.cookies, null, 4));

// 2) Load page
page.open(url, function(status) {
    if (status !== "success") {
        console.log("Error : impossible to load page");
        phantom.exit();
    }

    console.log("\nPage loaded :", url);

    // 3) Display cookies updated
    console.log("\nCookies after loading :");
    console.log(JSON.stringify(phantom.cookies, null, 4));

    // 4) Export cookies into a file
    fs.write(outputFile, JSON.stringify(phantom.cookies, null, 4), 'w');

    console.log("\nCookies exported into :", outputFile);

    phantom.exit();
});