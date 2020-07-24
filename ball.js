class Ball extends Shape {
  constructor() {
    super(width / 2, height - 30, 12, 12);
    this.r = 6;
    this.angle = -90;
    this.speed = 3;
    this.xspeed = this.speed * cos(this.angle);
    this.yspeed = this.speed * sin(this.angle);
  }

  show() {
    fill(255);
    ellipse(this.x, this.y, this.r * 2);
  }

  move() {
    if (this.right > width || this.left < 0) {
      this.xspeed *= -1;
    }
    if (this.top < 0) {
      this.yspeed *= -1;
    }

    this.x += this.xspeed;
    this.y += this.yspeed;

    this.updateSides();
  }

  hits(s) {
    if (
      this.right > s.left &&
      this.left < s.right &&
      this.bottom > s.top &&
      this.top < s.bottom
    ) {
      return true;
    }
  }

  changeDirection(b) {
    if ((this.bottom > b.bottom) && (this.top > b.top)) {
      this.y = this.top + this.r;
      this.yspeed *= -1;
    } else if ((this.top < b.top) && (this.bottom < b.bottom)) {
      this.y = this.bottom - this.r;
      this.yspeed *= -1;
    } else if ((this.right > b.right) && (this.left > b.left)) {
      this.x = this.left + this.r;
      this.xspeed *= -1;
    } else if ((this.left < b.left) && (this.right < b.right)) {
      this.x = this.right - this.r;
      this.xspeed *= -1;
    }

    this.updateSides();
  }

  bounceOff(p) {
    const diff = this.x - p.x;
    this.angle = map(diff, -50, 50, -135, -45);
    this.xspeed = this.speed * cos(this.angle);
    this.yspeed = this.speed * sin(this.angle);
  }

  hitsFloor() {
    return (this.y + this.r > height);
  }

  render() {
    this.show();
    this.move();
  }
}