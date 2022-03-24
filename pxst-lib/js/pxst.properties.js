	
/*
	properties of the patcher
*/

outlets = 1;
setoutletassist(0,"patcher filepath and more");

const fs = require("fs");

function bang()
{
	outlet(0, "isplugin", max.isplugin);
	outlet(0, "isruntime",max.isruntime);
	outlet(0, "name",patcher.name);
	outlet(0, "filepath",patcher.filepath)
	outlet(0, "apppath",max.apppath + "/")
}


function createFolder(dir)
{
	if (!fs.existsSync(dir)){
    	fs.mkdirSync(dir);
	}
}
