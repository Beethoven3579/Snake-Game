let canvas;
let canvasContext;
canvas = document.getElementById('gameCanvas');
canvasContext = canvas.getContext('2d');

let rightPressed = false;
let leftPressed = false;
let upPressed = false;
let downPressed = false;
document.addEventListener('keydown', handleKeyDown, false);

const appleWidth = 20;
const appleHeight = 20;

let snakeHead = {radius: 10, x: 300, y: 300};
let apple = {radius: 10, 
            x: Math.floor(Math.random() * canvas.width),
            y: Math.floor(Math.random() * canvas.height)};

let playerScore = 0;
let highScore = 0;
let userScore = document.getElementById("player-score")

document.getElementById('start').addEventListener('click', () => {
    document.querySelector('#start').disabled = true;
    setInterval(() => {
         drawEverything();
         detectCollisions();
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
    canvasContext.beginPath();
    canvasContext.arc(apple.x, apple.y, apple.radius, 0, Math.PI*2, true);
    canvasContext.fill();
}
function drawSnake() {
    canvasContext.fillStyle = 'green';
    canvasContext.beginPath();
    canvasContext.arc(snakeHead.x, snakeHead.y, snakeHead.radius,  
        0, Math.PI*2, true);
        canvasContext.fill();
    document.addEventListener('keydown', handleKeyDown, false);

    if(rightPressed) {
        snakeHead.x += 4;
    }
    if(leftPressed) {
        snakeHead.x -= 4;
    }
    if(downPressed) {
        snakeHead.y += 4;
    }
    if(upPressed) {
        snakeHead.y -= 4;
    }
}

function detectCollisions() {
   
    if (snakeHead.x >= canvas.width  || snakeHead.x == 0
        || snakeHead.y >= canvas.height || snakeHead.y == 0) {
        playerScore = 0;
        document.location.reload();
        clearInterval();
        alert('Game Over')
    }
    snakeHitsApple();
}

function snakeHitsApple() {
    let deltaX = snakeHead.x - apple.x;
    let deltaY = snakeHead.y - apple.y;
    let distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    if (distance < snakeHead.radius + apple.radius) {
        playerScore += 1;
        apple.x = Math.floor(Math.random() * canvas.width);
        apple.y = Math.floor(Math.random() * canvas.height);
        console.log("Player Score :", playerScore)
        userScore.textContent = `Player Score: ${playerScore}`;
        // if (userScore > highScore){
        //     highScore += userScore;
        //     console.log("High Score: ", highScore)
        // }
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