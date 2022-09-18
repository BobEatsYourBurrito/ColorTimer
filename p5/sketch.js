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
  console.log(time);
}
