
/**
 * Expose 'mouth'
 */

module.exports = function(obj) {

	var data = obj || {};

	var plugins = {};

	var tmpl = function(str) {
		//NOTE: get better regexp with middlewares
		return str.replace(/\$([^{}]*)\{([^{}]*)\}/g, function(_, name, expr) {
			var plugin = plugins[name];
			// NOTEL should we trim expr
			if(plugin) return plugin.call(data, expr);
			return data[expr.trim()] || '';
		});
	};

	tmpl.use = function(name, fn) {
		plugins[name] = fn;
	};

	return tmpl;
};