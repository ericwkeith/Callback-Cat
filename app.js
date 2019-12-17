let clicks = 0;

function myFunction (note) {
  clicks ++;
  document.getElementById('clicks').innerHTML = clicks;
  navigator.clipboard.writeText(note);
  isEven(clicks);
}

function isEven(value) {
	if (value%2 == 0)
    document.body.style.backgroundImage = "url('images/rightPaw.png')";
	else
    document.body.style.backgroundImage = "url('images/leftPaw.png')";
}

