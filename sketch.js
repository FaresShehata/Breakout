let paddle;
let ball;
let bricks = [];


function setup() {
	createCanvas(600, 400);
	rectMode(CENTER);
	angleMode(DEGREES);
	noStroke();
	textAlign(CENTER, CENTER);
	textSize(150);
	textStyle(BOLD);

	paddle = new Paddle();
	ball = new Ball();

	// Row 1
	bricks.push(
		new Brick(width / 2, 75, 1),

		new Brick(width / 2 - 50, 100, 2),
		new Brick(width / 2 + 50, 100, 2),

		new Brick(width / 2 - 100, 125, 2),
		new Brick(width / 2, 125, 3),
		new Brick(width / 2 + 100, 125, 2),

		new Brick(width / 2 - 150, 150, 2),
		new Brick(width / 2 - 50, 150, 3),
		new Brick(width / 2 + 50, 150, 3),
		new Brick(width / 2 + 150, 150, 2),

		new Brick(width / 2 - 100, 175, 2),
		new Brick(width / 2, 175, 3),
		new Brick(width / 2 + 100, 175, 2),

		new Brick(width / 2 - 50, 200, 2),
		new Brick(width / 2 + 50, 200, 2),

		new Brick(width / 2, 225, 1)
	);
}

function draw() {
	background(0);

	if (ball.hits(paddle)) ball.bounceOff(paddle);

	if (bricks.length == 0) win();

	paddle.render();
	ball.render();

	for (let i = 0; i < bricks.length; i++) {
		const brick = bricks[i];

		brick.render();

		if (ball.hits(brick)) {
			ball.changeDirection(brick);
			brick.state -= 1;
		}

		if (brick.state == 0) {
			bricks.splice(i, 1);
		}
	}

	if (ball.hitsFloor()) gameOver();

}

function keyPressed() {
	if (key === "D") {
		paddle.movingRight = true;
		paddle.moving = true;
	} else if (key === "A") {
		paddle.movingRight = false;
		paddle.moving = true;
	}
}

function keyReleased() {
	if (key === "D" || key === "A") paddle.moving = false;
}

function gameOver() {
	fill(232, 23, 23);
	text("GAME\nOVER", width / 2, height / 2);
	noLoop();
}

function win() {
	fill(10, 255, 20);
	text("YOU\nWIN", width / 2, height / 2);
	noLoop();
}