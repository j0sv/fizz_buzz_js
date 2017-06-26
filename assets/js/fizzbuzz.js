function FizzBuzz() {}

FizzBuzz.prototype.get_fizzbuzz = function(value) {

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

function get_random_color() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function fizzbuzz_output() {
  var fizzbuzz_number = $('#fizzbuzz_number').val();
  var fb_machine = new FizzBuzz();
  var div_html = $('#fizzbuzz_output').html();
  var fizzbuzz_text = "";
  var color = get_random_color();
  var fizzbuzz_return = fb_machine.get_fizzbuzz(fizzbuzz_number);
  $('#display_value').css("visibility", 'false');

  $('#fizzbuzz_output').html(
    "<span class='fizzbuzz' style='color:" + color + ";'>"
    + fizzbuzz_number + " gave "
    + fizzbuzz_return
    + "</span> " + div_html);

    $('#display_value').html(fizzbuzz_return);
    $("#display_value").css("color", color);

    $('#display_value').css("visibility", 'visible');
    $('#display_value').css("opacity", '0.80');
    $('#display_value').animate({opacity: '0.98'}, "slow");
}

$(document).ready(function () {
    $('#submit_fizzbuzz').click(function () {
    fizzbuzz_output();
    $('#fizzbuzz_number').val(Math.floor(Math.random() * 100));
  });

  $('#submit_fizzbuzz_100').click(function () {
    for(var i=0; i < 100; i++){
      fizzbuzz_output();
      $('#fizzbuzz_number').val(Math.floor(Math.random() * 100));
    }
  });

});
