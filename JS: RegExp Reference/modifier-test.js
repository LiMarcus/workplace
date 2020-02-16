var newStringA = 'abc12345#$*%'.replace(/[abc]/g, 5);
console.log(newStringA);  // 55512345#$*%

var newStringB = 'abc12345#$*%'.replace(/[^ab]/i, 5);
console.log(newStringB);  // ab512345#$*%

var newStringC = 'abc12345#$*%'.replace(/(a|b)/m, 5);
console.log(newStringC);  // 5bc12345#$*%