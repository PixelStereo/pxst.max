const path = require('path');
const Max = require('max-api');

var fs = require('fs');
var dir = '~/Library/Application Support/PixelStereo/';

Max.addHandler("check", () => {
	if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}
});

