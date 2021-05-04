let canvas;
let canvasContext;
canvas = document.getElementById('gameCanvas');
canvasContext = canvas.getContext('2d');
document.addEventListener('keydown', handleKeyDown, false);

let rightPressed = false;
let leftPressed = false;
let upPressed = false;
let downPressed = false;

let snakeHeadX = 30;
let snakeHeadY = 30;

let appleX = Math.floor(Math.random() * canvas.width);
let appleY = Math.floor(Math.random() * canvas.height);; 

document.getElementById('start').addEventListener('click', () => {
    document.querySelector('#start').disabled = true;
    setInterval(() => {
        drawEverything();
        detectWallCollisions();
    }, 400);
 
})

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
    document.addEventListener('keydown', handleKeyDown, false);

    if(rightPressed) {
        snakeHeadX += 20;
    }
    else if(leftPressed) {
        snakeHeadX -= 20;
    }
    if(downPressed) {
        snakeHeadY += 20;
    }
    else if(upPressed) {
        snakeHeadY -= 20;
    }
}
function detectWallCollisions() {
    if (snakeHeadX > canvas.width || snakeHeadX < 0
        || snakeHeadY > canvas.height || snakeHeadY <= 0) {
        alert('Game Over');
        playerScore = 0;
        rightPressed = false;
        leftPressed = false;
        upPressed = false;
        downPressed = false;
    }
}

function handleKeyDown(e) {
    if(e.keyCode == 39) {
        rightPressed = true;
        leftPressed = false;
        upPressed = false;
        downPressed = false;
    }
    else if(e.keyCode == 37) {
        leftPressed = true;
        rightPressed = false;
        upPressed = false;
        downPressed = false;
    }
    if(e.keyCode == 40) {
        downPressed = true;
        rightPressed = false;
        leftPressed = false;
        upPressed = false;
    }
    else if(e.keyCode == 38) {
        upPressed = true;
        rightPressed = false;
        leftPressed = false;
        downPressed = false;
    }
}
