//
const grid = document.querySelector('.grid')
const boxContainer = document.querySelector('.box')
const startBtn = document.querySelector('#startBtn')
const score = document.querySelector('#score')

let currentScore = 0
let squares = [] 
let currentSnake = [2,1,0]
let snakeHead = currentSnake[0]
let direction = 1
let snakeWidth = 10
let appleIndex = 0
let speed = 1000


function startGame(){
    startBtn.innerText = 'Restart'
    currentSnake.forEach(index => squares[index].classList.remove('snake'))
    squares[appleIndex].classList.remove('apple')


    currentSnake = [2,1,0]
    currentScore = 0
    score.textContent = currentScore
    direction = 1
    speed = 1000
    generateApples()
    currentSnake.forEach(index => squares[index].classList.add('snake'))
    timerId = setInterval(move, speed)
}

startBtn.addEventListener('click', startGame)

function createGrid(){
    for (i=0; i<100; i++){
        const square = document.createElement('div')
        square.classList.add('square')
        grid.appendChild(square)
        squares.push(square)
    }
}

createGrid()

function generateApples(){
    do{
        appleIndex = Math.floor(Math.random() * squares.length)
    }
    while (squares[appleIndex].classList.contains('snake'))
    squares[appleIndex].classList.add('apple')
}

generateApples()

currentSnake.forEach(function(eachIndex){
    let part = squares[eachIndex]
    part.classList.add('snake')
})

function control(e){
    //Direction
    if (e.keyCode == 37 ){
        //console.log('Left');
        direction = -1
        move()
    }
    if (e.keyCode == 38 ){
        //console.log('Up');  
        direction = -snakeWidth
        move() 
    }
    if (e.keyCode == 39 ){ 
        //console.log('Right');
        direction = 1
        move()
    }
    if (e.keyCode == 40 ){
        //console.log('Down'); 
        direction = snakeWidth
        move()
    }
}

document.addEventListener('keydown', control)

function gameOVer(){
    score.textContent = 'GAME OVER!'
    score.classList.add('gameOver')
    clearInterval(timerId)
}

function move(){

    // Collision detection
  if (
    // if the snake is going up and hits the top wall
    (direction === -snakeWidth && currentSnake[0] < snakeWidth) ||

    // if the snake is going down and hits the bottom wall
    (direction === snakeWidth && currentSnake[0] + snakeWidth >= squares.length) ||

    // if the snake is on the right wall and tries to go right again
    (direction === 1 && currentSnake[0] % 10 === 9) ||

    // if the snake is on left wall and tries to go left again
    (direction === -1 && currentSnake[0] % 10 === 9) ||

     // check for collision with itself 
     currentSnake.slice(1).includes(currentSnake[0] + direction)
   ) {
     return gameOVer()
   }

   let tail = currentSnake.pop();
   squares[tail].classList.remove('snake');
   let newHead = currentSnake[0] + direction;
   currentSnake.unshift(newHead);
   squares[currentSnake[0]].classList.add('snake');

    if (squares[currentSnake[0]].classList.contains('apple')) {
        squares[currentSnake[0]].classList.remove('apple');
        currentScore += 1;
        currentSnake.push(tail)
        generateApples();
        speed = speed * (9/10)
    }

} 
 
//clearInterval(timerId)

;

