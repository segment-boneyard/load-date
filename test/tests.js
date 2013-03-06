describe('load-date', function () {

  var date   = require('load-date')
    , assert = require('component-assert')
    , type   = require('component-type');

  it('should return a Date', function () {
    assert(type(date) === 'date');
  });

  it('should equal `responseEnd`', function () {
    assert(date.getTime() === window.performance.timing.responseEnd);
  });

});