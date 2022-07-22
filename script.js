    const canvas = document.getElementById('canvas'); 
    const ctx = canvas.getContext('2d');

    let backgroundImg = new Image()
    backgroundImg.src = './images/backgroundintro.jpg';
    backgroundImg.onload = () => {
        ctx.drawImage(backgroundImg, 0, 0)
    }; 

    function gameStart() {
        const buttonStart = document.getElementById('start-button');
        buttonStart.onclick = () => {
            ctx.clearRect(0, 0, 900, 500);

        let backImg = new Image();
        backImg.src = './images/background01.jpg'
        backImg.onload = () => {
            ctx.drawImage(backImg, 0, 0);

        let cat = new Image();
        cat.src = './images/gato.png'
        cat.onload = () => {
            ctx.drawImage(cat, 300, 252, 100, 100)
        }
        } 
        };     
    }
    gameStart();
   
    



    
    









// javascripts/intro.js


//window.onload = function() {
    //const canvas = document.getElementById('canvas');
    //const ctx = canvas.getContext('2d');
    //const img = document.getElementsByClassName('back-img')
    
    //const backgroundImg = new Image();
    //backgroundImg.src = './images/background01.jpg'; 
    
    //ctx.drawImage(img, 300, 500);




