
/**
 *
 *
 */


module.exports = function(str) {
  var list = [];
  str = str.replace(/\$\{([^{}]*)\}/g, function(_, expr) {
    list.push(expr);
    return 'model.' + expr;
  });
  return [new Function('model', 'return ' + str), list];
};




