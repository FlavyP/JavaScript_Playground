self.addEventListener('message', function(e) {
  var message = e.data + ' the other side!';
  self.postMessage(message);
  self.close();
})
