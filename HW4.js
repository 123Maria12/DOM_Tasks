function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
  var x = getRandomArbitrary(1, 100);
  console.log(x)