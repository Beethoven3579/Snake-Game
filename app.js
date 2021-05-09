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

let snake = {radius: 10, x: 300, y: 300};
                // { radius: 10, x: 280, y: 300},
                // { radius: 10, x: 260, y: 300};       

let apple = {radius: 10, 
            x: Math.floor(Math.random() * canvas.width - 5),
            y: Math.floor(Math.random() * canvas.height - 5)};

let playerScore = 0;
let highScore = 0;

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
    document.addEventListener('keydown', handleKeyDown, false);
    canvasContext.fillStyle = 'green';
    canvasContext.beginPath();
    canvasContext.arc(snake.x, snake.y, snake.radius, 0, Math.PI*2, true);
    // canvasContext.arc(snake[1].x, snake[1].y, snake[1].radius, 0, Math.PI*2, true);
    // canvasContext.arc(snake[2].x, snake[2].y, snake[2].radius, 0, Math.PI*2, true);
    canvasContext.fill();

    
    if(rightPressed) {
        snake.x += 4;
        
    }
    if(leftPressed) {
        snake.x -= 4;
        
    }
    if(downPressed) {
        snake.y += 4;
        
    }
    if(upPressed) {
        snake.y -= 4;
       
    }
}

function detectCollisions() {
        if (snake.x >= canvas.width  || snake.x == 0
        || snake.y >= canvas.height || snake.y == 0) {
        playerScore = 0;
        document.location.reload();
        clearInterval();
        alert('Game Over')  
       
    }
    snakeEatsApple();
}

function snakeEatsApple() {
    let deltaX = snake.x - apple.x;
    let deltaY = snake.y - apple.y;
    let distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    let userScore = document.getElementById("player-score");
    let bestScore = document.getElementById("high-score");
    
    if (distance < snake.radius + apple.radius) {
        playerScore += 1;
        apple.x = Math.floor(Math.random() * canvas.width + 5);
        apple.y = Math.floor(Math.random() * canvas.height + 5); 
        console.log("Player Score :", playerScore)
        userScore.textContent = `Player Score: ${playerScore}`;
    }
    if (playerScore > highScore) {
        highScore = playerScore;
        bestScore.textContent = `High Score: ${highScore}`;
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