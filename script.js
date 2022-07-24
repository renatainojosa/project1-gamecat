const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let backgroundImg = new Image();
backgroundImg.src = "./images/backgroundintro.jpg";
backgroundImg.onload = () => {
  ctx.drawImage(backgroundImg, 0, 0, 900, 500);
};

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
  }
  if (event.code === "ArrowRight") {
    cat.moveRight();
  }
  if (event.code === "ArrowLeft") {
    cat.moveLeft();
  }
});

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
    ctx.drawImage(this.catImg, this.x, this.y, 100, 100);
  }

  moveLeft() {
    this.x -= this.speed;
  }

  moveRight() {
    this.x += this.speed;
  }
}
const cat = new Cat(300, 300);

function updateCanvas() {
  clearCanvas();
  drawGameBackground();
  cat.draw();

  requestAnimationFrame(updateCanvas);
}

class Foods {
  constructor(x, y) {
    this.x = x;
    this.y = y;

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
  draw() {
    ctx.drawImage(this.pizza, this.x, this.y, 50, 50);
    ctx.drawImage(this.burguer, this.x, this.y, 50, 50);
    ctx.drawImage(this.iceCream, this.x, this.y, 50, 50);
    ctx.drawImage(this.orange, this.x, this.y, 50, 50);
    ctx.drawImage(this.frenchFries, this.x, this.y, 50, 50);
    ctx.drawImage(this.ribs, this.x, this.y, 50, 50);
  }
  moveDown() {}

  // imagens foods
  // foods de cima para baixo
  // math.random
}

class Obstacles {
  // imagens obstacles
  // de cima para baixo
  // math.random
}
