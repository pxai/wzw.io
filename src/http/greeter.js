exports.greet = function (msg) {
  return new Promise(function(resolve, reject) {
      setTimeout(function () {
            if (msg.length > 0) {
                resolve(msg);
            } else {
                reject(Error('Msg not valid'));
            }
        }, 1000);
  });
  
}