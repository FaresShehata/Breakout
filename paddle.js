class Paddle extends Shape {
  constructor() {
    super(width / 2, height - 20, 100, 10);

    this.speed = 4;
    this.moving = false;
    this.movingRight = true;
  }

  move() {
    if (this.moving) {
      if (this.movingRight) this.x += this.speed;
      else this.x -= this.speed;
    }
    if (this.x - this.w / 2 < 0) this.x = this.w / 2;
    if (this.x + this.w / 2 > width) this.x = width - this.w / 2;
    this.updateSides();
  }


  show() {
    fill(255);
    rect(this.x, this.y, this.w, this.h);
  }

  render() {
    this.show();
    this.move();
  }
}