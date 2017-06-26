describe('FIZZBUZZ - index.html', function() {
    beforeEach(function() {
        jasmine.getFixtures().fixturesPath = '.';
        loadFixtures('index.html');
        $.holdReady(false);
    });

    xit("displays 1 if value is 1", function() {
      $('#fizzbuzz_number').val('1');
      $('#submit_fizzbuzz').trigger('click');
      expect($('#display_value').text()).toBe('1');
    });

    xit("displays fizz if value is 3", function() {
      $('#fizzbuzz_number').val('3');
      $('#submit_fizzbuzz').trigger('click');
      expect($('#display_value').text()).toBe('fizz');
    });

    xit("displays buzz if value is 5", function() {
      $('#fizzbuzz_number').val('5');
      $('#submit_fizzbuzz').trigger('click');
      expect($('#display_value').text()).toBe('buzz');
    });

    xit("displays fizzbuzz if value is 15", function() {
      $('#fizzbuzz_number').val('15');
      $('#submit_fizzbuzz').trigger('click');
      expect($('#display_value').text()).toBe('fizzbuzz');
    });

    xit("displays knas! if value isNaN", function() {
      $('#fizzbuzz_number').val('fyra');
      $('#submit_fizzbuzz').trigger('click');
      expect($('#display_value').text()).toBe('knas!');
    });

});
