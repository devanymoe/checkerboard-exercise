// Your JS goes here
var body = document.getElementsByTagName('body')[0];

var color = function(){
  var r = Math.floor(Math.random() * 255);
  var g = Math.floor(Math.random() * 255);
  var b = Math.floor(Math.random() * 255);
  return 'rgba(' + r + ',' + g + ',' + b + ',1)';
}

for (i = 0; i <= 80; i++){
  var divies = document.createElement('div');
  divies.style.width = '11.1%';
  divies.style.float = 'left';
  divies.style.paddingBottom = '11.1%';
  divies.style.backgroundColor = color();
  body.appendChild(divies);
}
