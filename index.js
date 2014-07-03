
/**
 * Expose 'mouth'
 */

module.exports = function(obj, text) {

	/**
	 * Data.
	 * @type {Object}
	 */
	
	var data = obj || {};


	/**
	 * Plugins.
	 * @type {Object}
	 */
	
	var plugins = {};


	/**
	 * Substitute data variables in
	 * template string.
	 *
	 * Examples:
	 *
	 *   tmpl('${ beep }');
	 *   
	 * @param  {String} str
	 * @return {String}
	 * @api public
	 */
	
	var tmpl = function(str) {
		//NOTE: get better regexp with middlewares
		return str.replace(/\$([^{}]*)\{([^{}]*)\}/g, function(_, name, expr) {
			var plugin = plugins[name];
			// NOTEL should we trim expr
			if(plugin) return plugin.call(data, expr);
			return data[expr.trim()] || '';
		});
	};


	/**
	 * Add template plugin.
	 *
	 * A plugin is a function that takes
	 * the template expression as arguments
	 * and the data as scope.
	 * 
	 * Examples:
	 *
	 *   tmpl.use('path', cb);
	 *   tmpl('$path{ something }');
	 *   
	 * @param  {String}   name
	 * @param  {Function} fn
	 * @api public
	 */
	
	tmpl.use = function(name, fn) {
		plugins[name] = fn;
	};


	if(text) return tmpl(text);
	return tmpl;
};