var webPage = require('webpage');
var system = require('system');

var page = webPage.create();

page.settings.userAgent = 'Mozilla/5.0 (Linux; U; Android 4.4.2; en-us; SCH-I535 Build/KOT49H) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30';
//page.settings.userAgent = 'Mozilla/5.0 (iPhone; CPU iPhone OS 7_0 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11A465 Safari/9537.53';

page.onUrlChanged = function(targetUrl) {
	  console.log('=>' + targetUrl);
};

page.onNavigationRequested = function(newUrl, type, willNavigate, main) {
	console.log("\turl changed to "+newUrl)
}

page.onLoadFinished = function(status) {
	console.log('Status: ' + status);
	phantom.exit(0);
};

console.log("OPENING ["+system.args[1]+"]");
page.open(system.args[1]);




