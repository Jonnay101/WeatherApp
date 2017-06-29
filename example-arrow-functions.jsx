function add (a, b) {
  return a + b;
}

console.log('add', add(4,5));
console.log('add', add(9,-3));

var addStatement = (a, b) => {
  return a+b
}

console.log('addStatement', addStatement(4,5));
console.log('addStatement', addStatement(9,-3));

var addExpression = (a, b) => a+b;

console.log('addExpression', addExpression(4,5));
console.log('addExpression', addExpression(9,-3));
