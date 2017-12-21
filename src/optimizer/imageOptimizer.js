

exports.ImageOptimizer =  function (url) {

	this.optimize = function(image) {
            return new Promise(function(resolve, reject) {
				if (image===null) {
					resolve(null);
				} else {
               		resolve(image);
				}
            });
        }

	this.toString = function () {
		return 'Name: ImageOptimizer';
	}
}
