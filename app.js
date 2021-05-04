let canvas;
let canvasContext;
let snakeHeadX = 30;
let snakeHeadY = 30;
let appleX = 200;
let appleY = 400; 

window.onload = () => {
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');
    setInterval(drawEverything, 500);
}
function drawEverything () {
    snakeHeadX += 15;
    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);
    canvasContext.fillStyle = 'green';
    canvasContext.fillRect(snakeHeadX, 200, 25, 25)
    drawApple();
}

function drawApple () {
    canvasContext.fillStyle = 'red';
    canvasContext.fillRect(appleX, appleY, 25, 25)
}