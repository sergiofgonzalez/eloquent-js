'use strict';

const squareWorker = new Worker('./javascript/lib/square-worker.js');
squareWorker.addEventListener('message', evt => {
  console.log(`A message has been received from the worker: evt.data=${ evt.data }`);
});

squareWorker.postMessage(10);
squareWorker.postMessage(24);