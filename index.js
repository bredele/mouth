
/**
 * Expression and identifier regexp.
 * @param  {RegExp}
 */

var identifier = new RegExp(/\.\w+|\w+ *\(|"[^"]*"|'[^']*'|\/([^/]+)\/|[a-zA-Z_]\w*/g);
var brackets = new RegExp(/\$\{([^{}]*)\}/g);


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


module.exports = function(str) {
  var props = [];
  var text = str.replace(brackets, function(_, expr) {
    return compile(expr, props);
  });
  return {
    text: Function('o', 'return ' + text),
    props: props
  };
};


/**
 * Replace expression
 * identifier.
 *
 * Examples:
 *
 *   compile('name + last');
 *   // => o.name + o.last
 *
 *   compile('name[0]');
 *   // => o.name[0]
 *   
 * @param  {String} str
 * @return {String}
 * @api private
 */

function compile(str, arr) {
  return str.replace(identifier, function(expr) {
    console.log(expr);
    if(arr.indexOf(expr) < 0) arr.push(expr);
    return 'o.' + expr;
  });
}


