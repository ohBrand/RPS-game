const btn = document.querySelectorAll('button')
const gameEl = document.querySelector('#game-el')
const fightEl = document.querySelector('#fight-el')
const asciiPlayer = document.querySelector('#player-choice')
const asciiComp = document.querySelector('#computer-choice')
const choices = ['rock', 'paper', 'scissors']
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


function getCompChoice() {
    return choices[Math.floor(Math.random() * choices.length)]
}


// function rpsGame(playerChoice, computerChoice) {
//     if (playerChoice === btn[0] && computerChoice === choices[1]) {
//         console.log('computer wins!');
//     } else if  (playerChoice === btn[0] && computerChoice === choices[2]) {
//         console.log('player wins!')
//     } else if (playerChoice === btn[1] && computerChoice === choices[0]) {
//         console.log('player wins') 
//     } else if (playerChoice === btn[1] && computerChoice === choices[2]) {
//         console.log('computer wins!')
//     } else if (playerChoice === btn[2] && computerChoice === choices[0]) {
//         console.log('computer wins!')
//     } else if (playerChoice === btn[2] && computerChoice === choices[1]) {
//         console.log('player wins!')
//     } else if (playerChoice === btn[0] && computerChoice === choices[0]) {
//         console.log('its a tie')
//     } else if (playerChoice === btn[1] && computerChoice === choices[1]) {
//         console.log('its a tie')
//     } else if (playerChoice === btn[2] && computerChoice === choices[2]) {
//         console.log('its a tie')
//     }
        
// }

gameEl.addEventListener('click', (event,) => {
    let computerChoice = getCompChoice()

    if (event.target === btn[0] && computerChoice === choices[1]) {
        fightEl.style.display = 'flex'
        asciiPlayer.style.display = 'block'
        asciiComp.style.display = 'block'
        asciiPlayer.textContent = asciiArray[0]
        asciiComp.textContent = asciiArray[1]
        console.log('computer wins!')
    } else if  (event.target === btn[0] && computerChoice === choices[2]) {
        fightEl.style.display = 'flex'
        asciiPlayer.style.display = 'block'
        asciiComp.style.display = 'block'
        asciiPlayer.textContent = asciiArray[0]
        asciiComp.textContent = asciiArray[2]
        console.log('player wins!')
    } else if (event.target === btn[1] && computerChoice === choices[0]) {
        fightEl.style.display = 'flex'
        asciiPlayer.style.display = 'block'
        asciiComp.style.display = 'block'
        asciiPlayer.textContent = asciiArray[1]
        asciiComp.textContent = asciiArray[0]
        console.log('player wins') 
    } else if (event.target === btn[1] && computerChoice === choices[2]) {
        fightEl.style.display = 'flex'
        asciiPlayer.style.display = 'block'
        asciiComp.style.display = 'block'
        asciiPlayer.textContent = asciiArray[1]
        asciiComp.textContent = asciiArray[2]
        console.log('computer wins!')
    } else if (event.target === btn[2] && computerChoice === choices[0]) {
        fightEl.style.display = 'flex'
        asciiPlayer.style.display = 'block'
        asciiComp.style.display = 'block'
        asciiPlayer.textContent = asciiArray[2]
        asciiComp.textContent = asciiArray[0]
        console.log('computer wins!')
    } else if (event.target === btn[2] && computerChoice === choices[1]) {
        fightEl.style.display = 'flex'
        asciiPlayer.style.display = 'block'
        asciiComp.style.display = 'block'
        asciiPlayer.textContent = asciiArray[2]
        asciiComp.textContent = asciiArray[1]
        console.log('player wins!')
    } else if (event.target === btn[0] && computerChoice === choices[0]) {
        fightEl.style.display = 'flex'
        asciiPlayer.style.display = 'block'
        asciiComp.style.display = 'block'
        asciiPlayer.textContent = asciiArray[0]
        asciiComp.textContent = asciiArray[0]
        console.log('its a tie')
    } else if (event.target === btn[1] && computerChoice === choices[1]) {
        fightEl.style.display = 'flex'
        asciiPlayer.style.display = 'block'
        asciiComp.style.display = 'block'
        asciiPlayer.textContent = asciiArray[1]
        asciiComp.textContent = asciiArray[1]
        console.log('its a tie')
    } else if (event.target === btn[2] && computerChoice === choices[2]) {
        fightEl.style.display = 'flex'
        asciiPlayer.style.display = 'block'
        asciiComp.style.display = 'block'
        asciiPlayer.textContent = asciiArray[2]
        asciiComp.textContent = asciiArray[2]
        console.log('its a tie')
    }
});