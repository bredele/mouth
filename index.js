
/**
 * Expression and identifier regexp.
 * @param  {RegExp}
 */

var brackets = new RegExp(/\$\{([^{}]*)\}/g);


/**
 *
 *
 */


module.exports = function(str) {
  var list = [];
  str = str.replace(brackets, function(_, expr) {
    list.push(expr);
    return 'model.' + expr;
  });
  return [new Function('model', 'return ' + str), list];
};




