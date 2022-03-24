const path = require('path');
const Max = require('max-api');

var fs = require('fs');
var dir = '';

Max.addHandler("check", (dir) => {
	if (dir){
		if (!fs.existsSync(dir)){
			Max.outlet("creating", dir + '/pxst.max-preferences.json');
    		fs.mkdirSync(dir);
			}
		else{
			Max.outlet("exists", dir + '/pxst.max-preferences.json');
			}
		}
	else {
		Max.outlet("please give me a path !");
		}
});