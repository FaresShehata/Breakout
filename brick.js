class Brick extends Shape {
  constructor(x, y, state) {
    super(x, y, 50, 20);
    this.state = state;
  }

  render() {
    if (this.state == 4) fill(10, 255, 20);
    else if (this.state == 3) fill(255, 255, 10);
    else if (this.state == 2) fill(255, 150, 0);
    else if (this.state == 1) fill(255, 10, 10);
    else fill(0);


    rect(this.x, this.y, this.w, this.h);
  }
}