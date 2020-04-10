'use strict';

function time(marker, actionFn) {
  var startMillis = Date.now();
  actionFn();
  const msg = `${ marker } took ${ Date.now() - startMillis } ms to complete`;
  console.log(msg);
  alert(msg);
}

export default time;