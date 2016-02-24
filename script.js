// Your JS goes here
(function() {
  'use strict';
  var body = document.getElementsByTagName('body')[0];

  for (var i = 0; i <= 80; i++) {
    var divies = document.createElement('div');

    divies.style.width = '11.1%';
    divies.style.float = 'left';
    divies.style.paddingBottom = '11.1%';
    body.appendChild(divies);
  }

  setInterval(function() {
    for (var x = 0; x <= 80; x++) {
      var allDivs = document.getElementsByTagName('div');
      var divs = allDivs[x];
      var rs = Math.floor(Math.random() * 255);
      var gs = Math.floor(Math.random() * 255);
      var bs = Math.floor(Math.random() * 255);
      var colors = 'rgba(' + rs + ',' + gs + ',' + bs + ',1)';

      divs.style.backgroundColor = colors;
    }
  }, 2000);

  var song = document.createElement('audio');

  body.appendChild(song);
  song.src = 'http://devany.moe/images/Crimewave.mp3';
  song.autoplay = 'autoplay';
})();
