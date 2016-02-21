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

for (var x = 0; x <= 8; x = x + 2){
  var divs = divies[x];
  divs.style.backgroundColor = 'rgba(255,230,242,1)';
}
for (var x = 1; x <= 8; x = x + 2){
  var divs = divies[x];
  divs.style.backgroundColor = 'rgba(255,204,179,1)';
}

for (var i = 0; i <= 80; i = i + 9){
  var r = rOne();
  var b = bOne();
  var g = gOne();
  var b2 = bTwo();
  var g2 = gTwo();
  for (var x = i + 9; x <= i + 18; x = x + 2){
    var divs = divies[x];
    divs.style.backgroundColor = 'rgba(' + r + ',' + g + ',' + b + ',1)'
  }
  for (var x = i + 10; x <= i + 18; x = x + 2){
    var divs = divies[x];
    divs.style.backgroundColor = 'rgba(' + r + ',' + g2 + ',' + b2 + ',1)'
  }
}
