
/**
 * Expression and identifier regexp.
 * @param  {RegExp}
 */

var identifier = new RegExp(/\.\w+|\w+ *\(|"[^"]*"|'[^']*'|\/([^/]+)\/|[a-zA-Z_]\w*/g);
var brackets = new RegExp(/\$\{([^{}]*)\}/g);


/**
 * Compile expression.
 *
 * Examples:
 ę
 *   // compiled expression
 *   var tmpl = mouth('${ beep }');
 *   tmpl.text(data);
 *
 *   // expresssion unique identifiers
 *   tmp.props;
 *   
 * @param  {String} str
 * @return {Object}
 * @api public
 */


module.exports = function(str) {
  var props = [];
  var text = str.replace(brackets, function(_, expr) {
    return '"+' + compile(expr, props) + '+"';
  });
  return {
    text: Function('o', 'return "' + text + '"'),
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
    if(arr.indexOf(expr) < 0) arr.push(expr);
    return 'o.' + expr;
  });
}


