class Shape {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.top = this.y - this.h / 2;
    this.right = this.x + this.w / 2;
    this.bottom = this.y + this.h / 2;
    this.left = this.x - this.w / 2;
  }

  updateSides() {
    this.top = this.y - this.h / 2;
    this.right = this.x + this.w / 2;
    this.bottom = this.y + this.h / 2;
    this.left = this.x - this.w / 2;
  }
}