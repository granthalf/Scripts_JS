var page = require('webpage').create();

console.log("Cookies loaded :");
console.log(JSON.stringify(phantom.cookies, null, 4));

phantom.exit();
