let canvas;
let canvasContext;
let snakeHeadX = 30;
let snakeHeadY = 30;
let appleX = 200;
let appleY = 400; 

window.onload = () => {
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');
    setInterval(() => {
        drawEverything();
        moveSnake();
    }, 400);
}
function drawEverything () {
    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);
    drawSnake();
    drawApple();
}

function drawApple () {
    canvasContext.fillStyle = 'red';
    canvasContext.fillRect(appleX, appleY, 20, 20)
}
function drawSnake() {
    canvasContext.fillStyle = 'green';
    canvasContext.fillRect(snakeHeadX, snakeHeadY, 20, 20)
}
function moveSnake() {
    snakeHeadX += 20;
}