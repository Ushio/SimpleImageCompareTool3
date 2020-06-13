fs = require("fs");
exr = require("./exr-wrap.js");

window.loadExr = function(arrayBuffer, onLoadExr)
{
	exr().then(function(loader) {
		var image = loader.loadEXRStr(arrayBuffer);
		
		onLoadExr( image );

		image.delete();
	});
};
