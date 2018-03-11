function funTimes(m,n) {
  if(n == null) {
    console.log("DOIN FACTORIAL");
    return factorial(m);
  }
  console.log("DOIN POW");
  return Math.pow(m, n);
}
function factorial(n) {
  var fact = 1;
  for(var i = 1; i <= n; i++) {
    fact *= i;
  }
  return fact;
}
console.log("TWO ARGS = " + funTimes(2,2));
console.log("ONE ARG = " + funTimes(3));
