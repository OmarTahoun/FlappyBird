var bird;

function setup() {
  createCanvas(1000, 700);
  bird = new Bird();
}

function draw(){
  background(51);
  bird.update();
  bird.show();
}

function keyPressed(){
  if(key == ' '){
    bird.jump();
  }
}
