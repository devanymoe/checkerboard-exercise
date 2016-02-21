// Your JS goes here
var body = document.getElementsByTagName('body')[0];

for (i = 0; i <= 80; i++){
  var divies = document.createElement('div');
  divies.style.width = '11.1%';
  divies.style.float = 'left';
  divies.style.paddingBottom = '11.1%';
  body.appendChild(divies);
}

setInterval(function() {
  for (i = 0; i <= 80; i++){
    var divies = document.getElementsByTagName('div');
    var divs = divies[i];
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    var colors = 'rgba(' + r + ',' + g + ',' + b + ',1)';
    divs.style.backgroundColor = colors;
  }
}, 2000);

var song = document.createElement('audio');
body.appendChild(song);
song.src = "http://devany.moe/images/Crimewave.mp3";
song.autoplay = "autoplay";
