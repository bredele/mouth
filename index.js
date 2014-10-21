
/**
 * Expose 'Mod'
 */

module.exports = function(text, data) {

  var tmpl = function(store) {
    store = store || data;
    return text.replace(/\$\{([^{}]*)\}/g, function(_, expr) {
      return store[expr.trim()] || '';
    });
  };

  if(data) return tmpl();

  data = data || {};
  
  return tmpl;
};

