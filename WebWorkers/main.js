var worker = new Worker('worker.js')

worker.postMessage('Hello from');

worker.addEventListener('message', function(e) {
  console.log(e.data);
})
