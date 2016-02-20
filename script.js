// Your JS goes here
var body = document.getElementsByTagName('body')[0];

for (i = 0; i <= 80; i++){
  var divies = document.createElement('div');
  divies.style.width = '11.1%';
  divies.style.float = 'left';
  divies.style.paddingBottom = '11.1%';
  body.appendChild(divies);
}

var divies = document.getElementsByTagName('div')

for (i = 0; i <= 80; i = i + 2){
  divies[i].className = "odd";
  divies[i].style.backgroundColor = 'black';
}

for (i = 1; i <= 80; i = i + 2){
  divies[i].className = "even";
  divies[i].style.backgroundColor = 'red';
}
