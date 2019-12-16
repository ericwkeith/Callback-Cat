// myWindow = window.open("", "", "width=320, height=280");

let clicks = 0;

function myFunction (note) {
  document.body.style.backgroundImage = "url('images/leftPaw.png')"
  clicks ++;
  document.getElementById('clicks').innerHTML = clicks;
  navigator.clipboard.writeText(note)
}

function myFunction2 (note) {
  document.body.style.backgroundImage = "url('images/rightPaw.png')"
  clicks ++;
  document.getElementById('clicks').innerHTML = clicks;
  navigator.clipboard.writeText(note)
}