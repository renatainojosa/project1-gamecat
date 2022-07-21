// javascripts/intro.js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function game() {
    const backgroundImg = new Image();
    backgroundImg.src = './images/background01.jpg'; 

    ctx.drawImage(backgroundImg, 0, 0, 350, 550);
}
