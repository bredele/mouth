
/**
 * Expose 'Mod'
 */

module.exports = function(text, data) {

  /**
   * Substitute data variables in
   * template string.
   *
   * Examples:
   *
   *   var tmpl = mouth('${ beep }');
   *   tmpl(data);
   *   
   * @param  {String} str
   * @return {String}
   * @api public
   */
  
  var tmpl = function(store) {
    store = store || data;
    return text.replace(/\$\{([^{}]*)\}/g, function(_, expr) {
      return store[expr.trim()] || '';
    });
  };

  if(data) return tmpl();


  /**
   * Data.
   * @type {Object}
   */
  
  data = data || {};

  return tmpl;
};



