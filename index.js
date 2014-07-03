
/**
 * Expose 'mouth'
 */

module.exports = function(obj) {

	var data = obj || {};

	var tmpl = function(str) {
		return str.replace(/\$\{([^{}]*)\}/g, function(_, expr) {
			return data[expr.trim()] || '';
		});
	};

	return tmpl;
};