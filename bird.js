// Class Brid for our bird:

class Bird{
  constructor(){
    // Initializing Object
    this.x = 150;
    this.y = height/2;
    this.width = 64;
    this.height = 64;
    this.velocity = 0;
    this.gravity = 0.5;
  }

  jump(){
    // Jumps 10 pixels up
    this.velocity = -10;
  }

  show(){
    // draws the bird every frame
    fill(120);
    ellipse(this.x, this.y, this.width, this.height);
  }

  update(){
    // Updates the velocity and position of the bird
    this.velocity += this.gravity;
    this.y += this.velocity;
    if(this.y >= height - this.height / 2){
      this.y = height - this.height / 2;
      this.velocity = 0;
    }
    if(this.y <= this.height/2){
      this.y = this.height / 2;
      this.velocity = 0;
    }
  }
}
