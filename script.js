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

function createObstacles() {
    let obsX = 100 + Math.floor(Math.random() * (900 - 100));
    const waterObs = new Obstacles(obsX, 0, 50, 50);
    waterObs.draw();  
    obstacles.push(waterObs);
}; 

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
    pizza.onload = () => {
      this.pizza = pizza;
    };
    const burguer = new Image();
    burguer.src = "./images/burger.png";
    burguer.onload = () => {
      this.burguer = burguer;
    };
    const iceCream = new Image();
    iceCream.src = "./images/ice.png";
    iceCream.onload = () => {
      this.iceCream = iceCream;
    };
    const orange = new Image();
    orange.src = "./images/orange.png";
    orange.onload = () => {
      this.orange = orange;
    };
    const frenchFries = new Image();
    frenchFries.src = "./images/french-fries.png";
    frenchFries.onload = () => {
      this.frenchFries = frenchFries;
    };
    const ribs = new Image();
    ribs.src = "./images/spare-ribs.png";
    ribs.onload = () => {
      this.ribs = ribs;
    };
  }
  drawPizza() {
    ctx.drawImage(this.pizza, this.x, this.y, 50, 50);
  }
  drawBurguer() {
    ctx.drawImage(this.burguer, this.x, this.y, 50, 50);
  }
  drawFrenchFries() {
    ctx.drawImage(this.frenchFries, this.x, this.y, 50, 50);
  }
  drawIceCream() {
    ctx.drawImage(this.iceCream, this.x, this.y, 50, 50);
  }
  drawOrange() {
    ctx.drawImage(this.orange, this.x, this.y, 50, 50);
  }
  drawRibs() {
    ctx.drawImage(this.ribs, this.x, this.y, 50, 50);
  }

  newPos() {
    this.y += this.speedY;
  }

  //moveDown() {}

  // imagens foods
  // foods de cima para baixo
  // math.random
}
const pizza = new Foods(100, 0, 50, 50);
const burguer = new Foods(150, 0, 50, 50);

class Obstacles {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    const water = new Image();
    water.src = "./images/water.png";
    water.onload = () => {
      this.water = water;
    };
  }

  draw() {
    ctx.drawImage(this.water, this.x, 0, 50, 50);
  }
}; 


function updateCanvas() {
  clearCanvas();
  drawGameBackground();
  cat.draw();
  createObstacles();

  requestAnimationFrame(updateCanvas);
}
