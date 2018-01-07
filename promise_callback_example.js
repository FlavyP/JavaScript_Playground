function greeting(name) {
  console.log('Hello ' + name);
}

function processUserInput(callback) {
  var name = 'Bambi'
  callback(name);
}

processUserInput(greeting);

const wait = time => new Promise((resolve) => setTimeout(resolve, time));

wait(3000).then(() => console.log('Finally!'));
