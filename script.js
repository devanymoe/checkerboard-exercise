// Your JS goes here
(function() {
  'use strict';
  var body = document.getElementsByTagName('body')[0];

  var rValue = function() {
    var count = 255;

    return function() {
      count -= 10;
      return count;
    };
  };
  var rOne = rValue();

  var gValue = function() {
    var count = 230;

    return function() {
      count -= 20;
      return count;
    };
  };
  var gOne = gValue();

  var bValue = function() {
    var count = 242;

    return function() {
      count -= 20;
      return count;
    };
  };
  var bOne = bValue();

  var g2 = function() {
    var count = 204;

    return function() {
      count -= 20;
      return count;
    };
  };
  var gTwo = g2();

  var b2 = function() {
    var count = 179;

    return function() {
      count -= 20;
      return count;
    };
  };
  var bTwo = b2();

  for (var i = 0; i <= 80; i++) {
    var newDiv = document.createElement('div');

    newDiv.style.width = '11.1%';
    newDiv.style.float = 'left';
    newDiv.style.paddingBottom = '11.1%';
    body.appendChild(newDiv);
  }

  var divies = document.getElementsByTagName('div');

  for (var i = -9; i <= 80; i += 9) {
    var r1 = rOne();
    var g1 = gOne();
    var b1 = bOne();
    var g2 = gTwo();
    var b2 = bTwo();

    for (var x = i + 9; x <= i + 18; x += 2) {
      var divs = divies[x];

      r1 -= 10;
      g1 -= 20;
      b1 -= 10;
      g2 -= 20;
      b2 -= 10;
      divs.style.backgroundColor = 'rgba(' + r1 + ',' + g1 + ',' + b1 + ',1)';
    }
    for (var x = i + 10; x <= i + 18; x += 2) {
      var divs = divies[x];

      divs.style.backgroundColor = 'rgba(' + r1 + ',' + g2 + ',' + b2 + ',1)';
    }
  }
})();
