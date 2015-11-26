
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



function parse(str, arr) {
  return str.replace(/\.\w+|"[^"]*"|'[^']*'|\/([^/]+)\/|[a-zA-Z_]\w*/g, function(expr) {
    if(!~arr.indexOf(expr)) arr.push(expr);
    return 'model.' + expr;
  });
}


