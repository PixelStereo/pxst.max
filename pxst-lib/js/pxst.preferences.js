const path = require('path');
const Max = require('max-api');

var fs = require('fs');
var dir = '';

Max.addHandler("check", (dir) => {
	if (dir){
		if (!fs.existsSync(dir)){
    		fs.mkdirSync(dir);
			Max.outlet("missing", dir + '/pxst.max-preferences.json');
			}
		else{
			Max.outlet("test", dir + '/pxst.max-preferences.json');
			}
		}
	else {
		Max.outlet("please give me a path !");
		}
});