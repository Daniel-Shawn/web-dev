
let startGameBtn = document.getElementById('start-game')
let newCardBtn = document.getElementById('new-card')
let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById('cards-sum')
let cardsEl = document.getElementById('cards')
let notifyEl = document.getElementById('notify')


function restartGame(){
    cards = []
    sumOfCards = 0
    cardsEl.textContent = 'Cards: '
    sumEl.innerHTML = 'Sum: '
    messageEl.innerHTML = 'Dealer: Want to play a round?'
    isAlive = true
    newCardBtn.style.display = 'none'
    startGameBtn.style.display = 'block'
    hasBlackJack = false
    drawCount = 1
    notifyEl.style.display = 'none'
}


function getRandomCard(){
    randomNumber = Math.floor(Math.random() * 13)
    if (randomNumber == 1){
        return 11
    }
    else if (randomNumber >= 11 && randomNumber <= 13){
        return 10
    }
    else{
        return randomNumber
    }
}

message = ''
drawCount = 1
let cards = []
let sumOfCards = 0

function startGame(){
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards.push(firstCard)
    cards.push(secondCard)
    sumOfCards += firstCard + secondCard
    hasBlackJack = false
    isAlive = true
    renderGame(true, false, sumOfCards)
}

 
function renderGame(isAlive_param, hasBlackJack_param, sumOfCards_param){
    isAlive = isAlive_param
    sumOfCards = sumOfCards_param
    hasBlackJack = hasBlackJack_param
    if (isAlive){
        
        cardsEl.textContent = 'Cards: ' + cards

        if (sumOfCards == 21){
            message = 'BlackJack!!!!'
            hasBlackJack = true
            newCardBtn.style.display = 'none'
            startGameBtn.style.display = 'none'
        }
        else if (sumOfCards < 21){
            message = 'Draw again?'
            newCardBtn.style.display = 'block'
            startGameBtn.style.display = 'none'
        }
        else{
            message = 'Game Over!!'
            isAlive = false
            newCardBtn.style.display = 'none'
            startGameBtn.style.display = 'none'
            notifyEl.style.display = 'block'

            setTimeout(restartGame, 5000)
        }
        
        messageEl.innerHTML = 'Dealer: ' + message
        messageEl.style.backgroundColor = '#ffd900a1'
        sumEl.innerHTML = 'Sum: ' + sumOfCards
    }
}



startGameBtn.addEventListener('click', startGame)

function drawCard(){
    if (isAlive && !hasBlackJack){
        drawCount += 1
        newCard = getRandomCard()
        cards.push(newCard)
        sumOfCards += newCard
        renderGame(true, false, sumOfCards)
    }
}

newCardBtn.addEventListener('click', drawCard)