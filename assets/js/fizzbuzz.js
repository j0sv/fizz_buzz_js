function FizzBuzz() {}

FizzBuzz.prototype.get_fizzbuzz = function(value) {
  //this.someAttribyte = 'Yay!';

    switch (true) {
      case (value % 15 === 0):
        return 'fizzbuzz';
      case (value % 5 === 0):
        return 'buzz';
      case (value % 3 === 0):
        return 'fizz';
      default:
        return value;
    }

};

FizzBuzz.prototype.mySecondFunction = function (val_1, val_2) {
  var result = val_1 + val_2;
  return result;
};

FizzBuzz.prototype.myThirdFunction = function () {
  return true;
};
