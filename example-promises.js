function addPromise (a, b) {
  return new Promise(function (resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    } else {
      reject('This function requires you to give 2 numbers');
    }
  });
};

addPromise(6,'eight').then(function (result) {
  console.log('promise success', result);
}, function (err) {
  console.log('promise error', err);
});
