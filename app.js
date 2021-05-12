let canvas;
let canvasContext;
canvas = document.getElementById('gameCanvas');
canvasContext = canvas.getContext('2d');
canvasContext.fillStyle = 'black';
canvasContext.fillRect(0, 0, canvas.width, canvas.height);

let rightPressed = false;
let leftPressed = false;
let upPressed = false;
let downPressed = false;
document.addEventListener('keydown', handleKeyDown, false);

let snake = [{radius: 10, x: 300, y: 300},
            { radius: 10, x: 280, y: 300},
            { radius: 10, x: 260, y: 300}];       

let apple = {radius: 10, 
            x: Math.floor(Math.random() * canvas.width),
            y: Math.floor(Math.random() * canvas.height)};

let playerScore = 0;
let highScore = 0;

document.getElementById('start').addEventListener('click', () => {
    document.querySelector('#start').disabled = true;
    setInterval(() => {
         moveSnake();
         drawEverything();
         detectCollisions();
    }, 100);
 
})

function drawEverything () {
    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);
    drawSnake();
    drawApple();
}

function drawSnake() {
    document.addEventListener('keydown', handleKeyDown, false);
    canvasContext.fillStyle = 'green';
    canvasContext.beginPath();
    canvasContext.arc(snake[0].x, snake[0].y, snake[0].radius, 0, Math.PI*2, true);
    canvasContext.arc(snake[1].x, snake[1].y, snake[1].radius, 0, Math.PI*2, true);
    canvasContext.arc(snake[2].x, snake[2].y, snake[2].radius, 0, Math.PI*2, true);
    canvasContext.fill();
    for (let i = 0; i < snake.length; i++){
        canvasContext.fillStyle = 'green';
        canvasContext.beginPath();
        canvasContext.arc(snake[i].x, snake[i].y, snake[i].radius, 0, Math.PI*2, true);
        canvasContext.fill();
    }


    for (let i = snake.length - 1; i > 0; i--) {
        const parent = snake[i - 1];
        snake[i].x = parent.x;
        snake[i].y = parent.y;

      }
}

function drawApple () {
    canvasContext.fillStyle = 'red';
    canvasContext.beginPath();
    canvasContext.arc(apple.x, apple.y, apple.radius, 0, Math.PI*2, true);
    canvasContext.fill();

}

function detectCollisions() {

// let snakeBody = snake.slice(1); 
//     for (let i = 0; i < snake.length; i ++) {
//         if (snake[0].x == snakeBody[i].x || snake[0].y == snakeBody[i].x) {
//             playerScore = 0;
//             document.location.reload();
//             clearInterval();
//             alert('Game Over')  
//         }
//     }
    
        if (snake[0].x >= canvas.width  || snake[0].x == 0
        || snake[0].y >= canvas.height  || snake[0].y == 0 ) {
            playerScore = 0;
            document.location.reload();
            clearInterval();
            alert('Game Over')  
        }
    snakeEatsApple();
}

function snakeEatsApple() {
    let deltaX = snake[0].x - apple.x;
    let deltaY = snake[0].y - apple.y;
    let distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    let userScore = document.getElementById("player-score");
    let bestScore = document.getElementById("high-score");
    
    if (distance < snake[0].radius + apple.radius) {
        playerScore += 1;
        snake.push({radius: 10, x: apple.x, y: apple.y});
        apple.x = Math.floor(Math.random() * canvas.width - 20);
        apple.y = Math.floor(Math.random() * canvas.height - 20); 
        userScore.textContent = `Player Score: ${playerScore}`;
    
    }
    if (playerScore > highScore) {
        highScore = playerScore;
        bestScore.textContent = `High Score: ${highScore}`;
    }
}

function moveSnake() {

    if(rightPressed) {
        snake[0].x += 20;
        
    }
    if(leftPressed) {
        snake[0].x -= 20;
        
    }
    if(downPressed) {
        snake[0].y += 20;
        
    }
    if(upPressed) {
        snake[0].y -= 20;
       
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

