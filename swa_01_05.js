var a = [1, 2, 3, 5, 8];

console.log("a) What's a[5]?");
console.log(a[5]);
console.log("-------------------------------");

console.log("b) Make a loop that prints the elements of a");
for(var i = 0; i < a.length; i++) {
  console.log(a[i]);
}
console.log("-------------------------------");

console.log("c) Make a loop that adds the elements of a");
var sum = 0;
for(var i = 0; i < a.length; i++) {
  sum += a[i];
}
console.log(sum);
console.log("-------------------------------");

console.log("d) Make a function that takes an array and returns the sum of its elements");
function sumArray(arr) {
  var sum = 0;
  for(var i = 0; i < a.length; i++) {
    sum += a[i];
  }
  return sum;
}
console.log(sumArray(a));
console.log("-------------------------------");

console.log("e) Add an element to a like this: a[8] = 55");
a[8] = 55;
console.log("-------------------------------");

console.log("f) What’s a[8]?");
console.log(a[8]);
console.log("-------------------------------");

console.log("g) What’s the length of a?")
console.log(a.length);
console.log("-------------------------------");

console.log("h) What happens if you print a to the console?");
console.log(a);
console.log("-------------------------------");

console.log("i) What happens with your loops from (b) and (c)?")
for(var i = 0; i < a.length; i++) {
  console.log(a[i]);
}
var sum = 0;
for(var i = 0; i < a.length; i++) {
  sum += a[i];
}
console.log("SUM = " + sum);
console.log("-------------------------------");
