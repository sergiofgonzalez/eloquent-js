
addEventListener('message', evt => {
  console.log(`A message has been received from the main script: evt.data=${ evt.data }`);
  postMessage(evt.data * evt.data);
});