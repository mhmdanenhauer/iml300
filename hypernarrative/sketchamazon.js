var c1, c2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Define colors
  c1 = color("black");
  c2 = color("gold");
  setGradient(c1, c2);
}

function setGradient(c1, c2) {
  // noprotect
  noFill();
  for (var y = 0; y < height; y++) {
    var inter = map(y, 0, height, 0, 1);
    var c = lerpColor(c1, c2, inter);
    stroke(c);
    line(0, y, width, y);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  
}