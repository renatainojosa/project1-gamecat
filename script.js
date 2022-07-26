const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let backgroundImg = new Image();
backgroundImg.src = "./images/backgroundintro.jpg";
backgroundImg.onload = () => {
  ctx.drawImage(backgroundImg, 0, 0, 900, 500);
};

function clearCanvas() {
  ctx.clearRect(0, 0, 900, 500);
}

function drawGameBackground() {
  let backImg = new Image();
  backImg.src = "./images/background01.jpg";
  ctx.drawImage(backImg, 0, 0, 900, 500);
}

document.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
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

class Cat {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = 15;

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
    this.x -= this.speed;
  }

  moveRight() {
    this.x += this.speed;
  }
}
const cat = new Cat(300, 276);

class Foods {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speedY = 0;

    const pizza = new Image();
    pizza.src = "./images/pizza.png";
      this.pizza = pizza;
    
    const burguer = new Image();
    burguer.src = "./images/burger.png";
      this.burguer = burguer;
    
    const iceCream = new Image();
    iceCream.src = "./images/ice.png";
      this.iceCream = iceCream;
   
    const orange = new Image();
    orange.src = "./images/orange.png";
      this.orange = orange;
    
    const frenchFries = new Image();
    frenchFries.src = "./images/french-fries.png";
      this.frenchFries = frenchFries;
    
    const ribs = new Image();
    ribs.src = "./images/spare-ribs.png";
      this.ribs = ribs;
  }
  draw() {
    ctx.drawImage(this.pizza, this.x, this.y, 50, 50);
    ctx.drawImage(this.burguer, (this.x + 130), this.y, 50, 50);
    ctx.drawImage(this.frenchFries, (this.x + 230), this.y, 50, 50);
    ctx.drawImage(this.iceCream, (this.x + 330), this.y, 30, 50);
    ctx.drawImage(this.orange, (this.x + 430), this.y, 50, 50);
    ctx.drawImage(this.ribs, (this.x + 530), this.y, 50, 50);
  }
  

  newPos() {
    this.y += this.speedY;
  }

  //moveDown() {}

  // imagens foods
  // foods de cima para baixo
  // math.random
}



class Obstacles {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    const water = new Image();
    water.src = "./images/water.png";
    this.water = water;
  }

  draw() {
    ctx.drawImage(this.water, this.x, this.y, 100, 100);
  }

  moveDown() {
    this.y += this.speed;
  }
}

function createObstacles() {
  let obsX = 20 + Math.floor(Math.random() * (900 - 20));
  let obsY = Math.floor(Math.random() * 300);
  let waterObs = new Obstacles(obsX, obsY);
  waterObs.draw();
  obstacles.push(waterObs);
}

function createFoods() {
    let foodsX = 130 + Math.floor(Math.random() * (900 - 130));
    let foodsY = Math.floor(Math.random() * 300); 
    let food = new Foods(foodsX, foodsY);
    food.draw();
    foods.push(food); 
}

function updateCanvas() {
  clearCanvas();
  drawGameBackground();
  cat.draw();
  createFoods();
  createObstacles(); 

  requestAnimationFrame(updateCanvas);
}
