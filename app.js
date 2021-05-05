let canvas;
let canvasContext;
canvas = document.getElementById('gameCanvas');
canvasContext = canvas.getContext('2d');

let rightPressed = false;
let leftPressed = false;
let upPressed = false;
let downPressed = false;
document.addEventListener('keydown', handleKeyDown, false);

let snakeHeadX = 300;
let snakeHeadY = 300;

let appleX = Math.floor(Math.random() * canvas.width);
let appleY = Math.floor(Math.random() * canvas.height);; 

document.getElementById('start').addEventListener('click', () => {
    document.querySelector('#start').disabled = true;
    setInterval(() => {
        drawEverything();
        detectWallCollisions();
    }, 30);
 
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
        snakeHeadX += 4;
    }
    if(leftPressed) {
        snakeHeadX -= 4;
    }
    if(downPressed) {
        snakeHeadY += 4;
    }
    if(upPressed) {
        snakeHeadY -= 4;
    }
}

function detectWallCollisions() {
    if (snakeHeadX >= canvas.width -15  || snakeHeadX <=  -5
        || snakeHeadY >= canvas.height -15 || snakeHeadY <= -5) {
        playerScore = 0;
        document.location.reload();
        clearInterval();
        alert('Game Over')
    }
}

function handleKeyDown(e) {
    if(e.keyCode == 39) {
        rightPressed = true;
        leftPressed = false;
        upPressed = false;
        downPressed = false;
    }
    if(e.keyCode == 37) {
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
    if(e.keyCode == 38) {
        upPressed = true;
        rightPressed = false;
        leftPressed = false;
        downPressed = false;
    }
}
