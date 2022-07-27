const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let backgroundImg = new Image();
backgroundImg.src = "./images/backgroundintro.jpg";
backgroundImg.onload = () => {
  ctx.drawImage(backgroundImg, 0, 0, 900, 500);
};

let frames = 0;

function clearCanvas() {
  ctx.clearRect(0, 0, 900, 500);
};

function drawGameBackground() {
  let backImg = new Image();
  backImg.src = "./images/background01.jpg";
  ctx.drawImage(backImg, 0, 0, 900, 500);
};

document.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    updateCanvas();
  };
  if (event.code === "ArrowRight") {
    cat.moveRight();
  };
  if (event.code === "ArrowLeft") {
    cat.moveLeft();
  };
});

const obstacles = [];
const foods = [];

// CAT:
class Cat {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = 20;

    const catImg = new Image();
    catImg.src = "./images/gato.png";
    catImg.onload = () => {
      this.catImg = catImg;
    };
  }
  draw() {
    ctx.drawImage(this.catImg, this.x, this.y, 130, 130);
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
}
const cat = new Cat(300, 276);

// FOODS:
class Foods {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
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
    ctx.drawImage(this.img, this.x, this.y, 50, 50);
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
   // if (foods[i].y == cat.y) {
   // foods.splice(i, 1);
    //}
  }
};

// OBSTACLES:
class Obstacles {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = 5;

    const water = new Image();
    water.src = "./images/water.png";
    this.water = water;
  }

  draw() {
    ctx.drawImage(this.water, this.x, this.y, 100, 100);
  }

  newPos() {
    this.y += this.speed;
  }
}

function createObstacles() {
  let obsX = 20 + Math.floor(Math.random() * (900 - 20));
  let obsY = 0;
  let waterObs = new Obstacles(obsX, obsY);
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
let score = 0;

function createScore() {
  ctx.font = '30px "VT323"';
  ctx.textAlign = "right";
  ctx.fillStyle = "white";
  ctx.fillText(`Score: ${score}`, canvas.width - 50, canvas.height - 455);
};

function updateScore() {
   // teste:  score += 1; 
}


function updateCanvas() {
  clearCanvas();
  drawGameBackground();
  cat.draw();
  createScore();
  updateScore();
  updateObstacles();
  updateFoods();

  requestAnimationFrame(updateCanvas);

  frames += 1;
}
