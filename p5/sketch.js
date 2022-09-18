let time = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  frameRate(60);
  background(0);

  time++;

  if (time >= 350) {
    background(3, 252, 60);
  }

  if (time > 475) {
    time = 0;
    background(0);
  }

  push();
  fill(255);
  translate(width / 2.35, 40);
  textSize(30);
  text("Bens Mini-Map Trainer", 0, 0);
  pop();
}
