let clicks = 0;

function myFunction (note) {
  navigator.clipboard.writeText(note)
  document.body.style.backgroundImage = "url('images/leftPaw.png')"
  clicks ++;
  document.getElementById('clicks').innerHTML = clicks;
}

function myFunction2 (note) {
  navigator.clipboard.writeText(note)
  document.body.style.backgroundImage = "url('images/rightPaw.png')"
  clicks ++;
  document.getElementById('clicks').innerHTML = clicks;
}