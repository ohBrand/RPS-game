const btn = document.querySelectorAll('button')
const gameEl = document.querySelector('#game-el')
const fightEl = document.querySelector('#fight-el')
const asciiPlayer = document.querySelector('#player-choice')
const asciiComp = document.querySelector('#computer-choice')
const choices = ['rock', 'paper', 'scissors']
const playerScoreEl = document.querySelector('#playerscore-el')
const computerScoreEl = document.querySelector('#compscore-el')
const asciiArray = [`    _______
---'   ____)
      (_____)
      (_____)
      (____)
---.__(___)
`,`_______
---'   ____)____
          ______)
          _______)
         _______)
---.__________)`, `_______
---'   ____)____
          ______)
       __________)
      (____)
---.__(___)`]

let playerScore = 0
let compScore = 0

function getCompChoice() {
    return choices[Math.floor(Math.random() * choices.length)]
}


gameEl.addEventListener('click', (event,) => {
    let computerChoice = getCompChoice()

    if (event.target === btn[0] && computerChoice === choices[1]) {
        fightEl.style.display = 'flex'
        asciiPlayer.textContent = asciiArray[0]
        asciiComp.textContent = asciiArray[1]
        compScore++
        computerScoreEl.innerHTML = `Computer Score:<br> ${compScore}`
        playerScoreEl.innerHTML = `Player Score:<br> ${playerScore}`
    } else if  (event.target === btn[0] && computerChoice === choices[2]) {
        fightEl.style.display = 'flex'
        asciiPlayer.textContent = asciiArray[0]
        asciiComp.textContent = asciiArray[2]
        playerScore++
        computerScoreEl.innerHTML = `Computer Score:<br> ${compScore}`
        playerScoreEl.innerHTML = `Player Score:<br> ${playerScore}`
    } else if (event.target === btn[1] && computerChoice === choices[0]) {
        fightEl.style.display = 'flex'
        asciiPlayer.textContent = asciiArray[1]
        asciiComp.textContent = asciiArray[0]
        playerScore++
        computerScoreEl.innerHTML = `Computer Score:<br> ${compScore}`
        playerScoreEl.innerHTML = `Player Score:<br> ${playerScore}`
    } else if (event.target === btn[1] && computerChoice === choices[2]) {
        fightEl.style.display = 'flex'
        asciiPlayer.textContent = asciiArray[1]
        asciiComp.textContent = asciiArray[2]
        compScore++
        computerScoreEl.innerHTML = `Computer Score:<br> ${compScore}`
        playerScoreEl.innerHTML = `Player Score:<br> ${playerScore}`
    } else if (event.target === btn[2] && computerChoice === choices[0]) {
        fightEl.style.display = 'flex'
        asciiPlayer.textContent = asciiArray[2]
        asciiComp.textContent = asciiArray[0]
        compScore++
        computerScoreEl.innerHTML = `Computer Score:<br> ${compScore}`
        playerScoreEl.innerHTML = `Player Score:<br> ${playerScore}`
    } else if (event.target === btn[2] && computerChoice === choices[1]) {
        fightEl.style.display = 'flex'
        asciiPlayer.textContent = asciiArray[2]
        asciiComp.textContent = asciiArray[1]
        playerScore++
        computerScoreEl.innerHTML = `Computer Score:<br> ${compScore}`
        playerScoreEl.innerHTML = `Player Score:<br> ${playerScore}`
    } else if (event.target === btn[0] && computerChoice === choices[0]) {
        fightEl.style.display = 'flex'
        asciiPlayer.textContent = asciiArray[0]
        asciiComp.textContent = asciiArray[0]
        computerScoreEl.innerHTML = `Computer Score:<br> ${compScore}`
        playerScoreEl.innerHTML = `Player Score:<br> ${playerScore}`
    } else if (event.target === btn[1] && computerChoice === choices[1]) {
        fightEl.style.display = 'flex'
        asciiPlayer.textContent = asciiArray[1]
        asciiComp.textContent = asciiArray[1]
    } else if (event.target === btn[2] && computerChoice === choices[2]) {
        fightEl.style.display = 'flex'
        asciiPlayer.textContent = asciiArray[2]
        asciiComp.textContent = asciiArray[2]
    }
 
    if (compScore === 5) {
        console.log('Computer Wins!')
        playerScore = 0
        compScore = 0
    } else if (playerScore === 5) {
        console.log('Player Wins!')
        playerScore = 0
        compScore = 0
    }
});