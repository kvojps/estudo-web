Object.prototype.objCustom = function() {};
Array.prototype.arrCustom = function() {};

const iterable = [3, 5, 7];
iterable.foo = 'hello';

for (const i in iterable) {
  console.log(i); // logs "0", "1", "2", "foo", "arrCustom", "objCustom"
}

console.log("--------------")

for (const i in iterable) {
  if (iterable.hasOwnProperty(i)) {
    console.log(i); // logs "0", "1", "2", "foo"
  }
}

console.log("--------------")

for (const i of iterable) {
  console.log(i); // logs 3, 5, 7
}

const words = ['one', 'two', 'three', 'four'];
words.forEach((word) => {
  console.log(word);
  if (word === 'two') {
    words.shift(); //'one' will delete from array
  }
}); // one // two // four

console.log(words); // ['two', 'three', 'four']

