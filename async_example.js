function resolveAfter2Seconds(x) {
  return new Promise(resolve => {
    console.log('resolve', resolve)
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}


async function add1(x) {
  const a = await resolveAfter2Seconds(20);
  console.log('a', a)
  const b = await resolveAfter2Seconds(30);
  console.log('a', b)
  return x + a + b;
}

add1(10).then(v => {
  console.log(v);  // prints 60 after 4 seconds.
});
