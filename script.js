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
  // imagens foods
  // foods de cima para baixo
  // math.random
}

class Obstacles {
  // imagens obstacles
  // de cima para baixo
  // math.random
}
