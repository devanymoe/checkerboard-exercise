// Your JS goes here
var body = document.getElementsByTagName('body')[0];

function r () {
  var count = 255;
  return function() {
    return count = count - 10;
  }
}
var rOne = r();

function g () {
  var count = 230;
  return function() {
    return count = count - 20;
  }
}
var gOne = g();

function b () {
  var count = 242;
  return function() {
    return count = count - 20;
  }
}
var bOne = b();

function g2 () {
  var count = 204;
  return function() {
    return count = count - 20;
  }
}
var gTwo = g2();

function b2 () {
  var count = 179;
  return function() {
    return count = count - 20;
  }
}
var bTwo = b2();

for (var i = 0; i <= 80; i++){
  var divies = document.createElement('div');
  divies.style.width = '11.1%';
  divies.style.float = 'left';
  divies.style.paddingBottom = '11.1%';
  body.appendChild(divies);
}

var divies = document.getElementsByTagName('div');

for (var i = -9; i <= 80; i = i + 9){
  var r = rOne();
  var g = gOne();
  var b = bOne();
  var g2 = gTwo();
  var b2 = bTwo();
  for (var x = i + 9; x <= i + 18; x = x + 2){
    r = r - 10;
    g = g - 20;
    b = b - 10;
    g2 = g2 - 20;
    b2 = b2 - 10;
    var divs = divies[x];
    divs.style.backgroundColor = 'rgba(' + r + ',' + g + ',' + b + ',1)'
  }
  for (var x = i + 10; x <= i + 18; x = x + 2){
    var divs = divies[x];
    divs.style.backgroundColor = 'rgba(' + r + ',' + g2 + ',' + b2 + ',1)'
  }
}
