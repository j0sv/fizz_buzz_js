describe("FizzBuzz", function() {
  var subject;

  beforeEach(function() {
    subject = new FizzBuzz();
  });

  it("#get_fuzzbizz returns fizz if value is 3", function() {
    expect(subject.get_fizzbuzz(3)).toEqual('fizz');
  });

  it("#get_fuzzbizz returns buzz if value is 5", function() {
    expect(subject.get_fizzbuzz(5)).toEqual('buzz');
  });

  it("#get_fuzzbizz returns fizzbuzz if value is 15", function() {
    expect(subject.get_fizzbuzz(15)).toEqual('fizzbuzz');
  });

  it("#get_fuzzbizz returns 1 if value is 1", function() {
    expect(subject.get_fizzbuzz(1)).toEqual(1);
  });

});
