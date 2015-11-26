
/**
 * Compile mouth expression.
 *
 * Examples:
 ę
 *   // compiled expression
 *   var expr = mouth('${ beep }');
 *   expr[0](data);
 *
 *   // expresssion unique identifiers
 *   expr[1]; // => ['beep']
 *   
 * @param  {String} str
 * @return {Object} 
 * @api public
 */

module.exports = function(str) {
  var list = [];
  str = str.replace(/\$\{([^{}]*)\}/g, function(_, expr) {
    return parse(expr, list);
  });
  return [new Function('model', 'return ' + str), list];
};


/**
 * Forbidden characters.
 * @type {Array}
 */

var forbidden = ['"', '.'];


/**
 * Parse expression and replace
 * identifier.
 *
 * Examples:
 *
 *   compile('name + last');
 *   // => model.name + model.last
 *
 *   compile('name[0]');
 *   // => model.name[0]
 *   
 * @param  {String} str
 * @param  {Array} arr
 * @return {String}
 * @api private
 */

function parse(str, arr) {
  return str.replace(/\.\w+|"[^"]*"|'[^']*'|\/([^/]+)\/|[a-zA-Z_]\w*/g, function(expr) {
    if(forbidden.indexOf(expr[0]) > -1) return expr;
    if(!~arr.indexOf(expr)) arr.push(expr);
    return 'model.' + expr;
  });
}


