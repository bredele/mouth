
/**
 *
 *
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



function parse(str, arr) {
  return str.replace(/\.\w+|"[^"]*"|'[^']*'|\/([^/]+)\/|[a-zA-Z_]\w*/g, function(expr) {
    if(forbidden.indexOf(expr[0]) > -1) return expr;
    if(!~arr.indexOf(expr)) arr.push(expr);
    return 'model.' + expr;
  });
}


