const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let backgroundImg = new Image();
backgroundImg.src = "./images/backgroundintro.jpg";
backgroundImg.onload = () => {
  ctx.drawImage(backgroundImg, 0, 0, 900, 500);
};

const gameMusic = new Audio("/musics/SuperMarioWorld-music.mp3");
const gameOverSound = new Audio("/musics/GameOver-music.mp3");

let frames = 0;

function clearCanvas() {
  ctx.clearRect(0, 0, 900, 500);
}

function drawGameBackground() {
  let backImg = new Image();
  backImg.src = "./images/background01.jpg";
  ctx.drawImage(backImg, 0, 0, 900, 500);
  gameMusic.play();
}

let stopGame = true;

function showGameOverArea() {
  clearCanvas();
  let gameOverImg = new Image();
  gameOverImg.src = "./images/tela game over.jpg";
  gameOverImg.onload = () => ctx.drawImage(gameOverImg, 0, 0, canvas.width, canvas.height);

  gameMusic.pause();
  gameOverSound.play();
}

document.addEventListener("keydown", (event) => {
  if (event.code === "Space" && stopGame) {
    stopGame = false; 
    updateCanvas();
  }
  if (event.code === "ArrowRight") {
    cat.moveRight();
  }
  if (event.code === "ArrowLeft") {
    cat.moveLeft();
  }
});

const obstacles = [];
const foods = [];

// CAT:
class Cat {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.height = 130;
    this.width = 130;
    this.speed = 20;

    const catImg = new Image();
    catImg.src = "./images/gato.png";
    catImg.onload = () => {
      this.catImg = catImg;
    };
  }
  draw() {
    ctx.drawImage(this.catImg, this.x, this.y, this.width, this.height);
  }

  moveLeft() {
    if (this.x > 0) {
      this.x -= this.speed;
    }
  }

  moveRight() {
    if (this.x < canvas.width - 130) {
      this.x += this.speed;
    }
  }
  left() {
    return this.x;
  }
  right() {
    return this.x + this.width;
  }
  top() {
    return this.y;
  }
  bottom() {
    return this.y + this.height;
  }
  crashWith(obstacle) {
    return !(
      this.bottom() < obstacle.y ||
      this.top() > obstacle.y + obstacle.height ||
      this.right() < obstacle.x ||
      this.left() > obstacle.x + obstacle.width
    );
  }
}

const cat = new Cat(300, 276);

// FOODS:
class Foods {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = 50;
    this.height = 50;
    this.speed = 6;

    const pizza = new Image();
    pizza.src = "./images/pizza.png";

    const burguer = new Image();
    burguer.src = "./images/burger.png";

    const iceCream = new Image();
    iceCream.src = "./images/ice.png";

    const orange = new Image();
    orange.src = "./images/orange.png";

    const frenchFries = new Image();
    frenchFries.src = "./images/french-fries.png";

    const ribs = new Image();
    ribs.src = "./images/spare-ribs.png";

    const foodsArr = [pizza, burguer, iceCream, orange, frenchFries, ribs];

    let randomIndex = Math.floor(Math.random() * foodsArr.length);
    for (let i = 0; i < foodsArr.length; i++) {
      this.img = foodsArr[randomIndex];
    }
  }

  draw() {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  newPos() {
    this.y += this.speed;
  }
}

function createFoods() {
  let foodsX = 130 + Math.floor(Math.random() * canvas.width - 130);
  let foodsY = 0;
  let food = new Foods(foodsX, foodsY);
  foods.push(food);
}

function updateFoods() {
  if (frames % 60 === 0) {
    createFoods();
  }
  for (let i = 0; i < foods.length; i++) {
    foods[i].newPos();
    foods[i].draw();
    if (foods[i].y > 356) {
      foods.splice(i, 1);
    }
  }
}

// OBSTACLES:
class Obstacles {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 40;
    this.height = 40;
    this.speed = 5;

    const water = new Image();
    water.src = "./images/water.png";
    this.water = water;
  }

  draw() {
    ctx.drawImage(
      this.water,
      83,
      50,
      85,
      101,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }

  newPos() {
    this.y += this.speed;
  }
}

function createObstacles() {
  let x = 20 + Math.floor(Math.random() * (900 - 20));
  let y = 0;
  let waterObs = new Obstacles(x, y);
  obstacles.push(waterObs);
}

function updateObstacles() {
  if (frames % 60 === 0) {
    createObstacles();
  }
  for (let i = 0; i < obstacles.length; i++) {
    obstacles[i].newPos();
    obstacles[i].draw();
    if (obstacles[i].y > 306) {
      obstacles.splice(i, 1);
    }
  }
}

// SCORE:
let points = 0;

function createScore() {
  ctx.font = '30px "VT323"';
  ctx.textAlign = "right";
  ctx.fillStyle = "white";
  ctx.fillText(`Score: ${points}`, canvas.width - 50, canvas.height - 455);
}

function updateScore() {
  // points = Math.floor(frames / 10);
}

function checkGameOver() {
  const crashed = obstacles.some((obstacle) => cat.crashWith(obstacle));

  if (crashed) {
    console.log(cat, obstacles);
    stopGame = true;
  }
}

function updateCanvas() {
  clearCanvas();
  drawGameBackground();
  cat.draw();
  createScore();
  // updateScore();
  updateObstacles();
  updateFoods();

  checkGameOver();

  if (!stopGame) {
    requestAnimationFrame(updateCanvas);
  } else {
    showGameOverArea();
  }

  frames += 1;
}
