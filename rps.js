const btn = document.querySelectorAll('button')
const gameEl = document.querySelector('#game-el')
const choices = ['rock', 'paper', 'scissors']


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
        console.log('computer wins!')
    } else if  (event.target === btn[0] && computerChoice === choices[2]) {
        console.log('player wins!')
    } else if (event.target === btn[1] && computerChoice === choices[0]) {
        console.log('player wins') 
    } else if (event.target === btn[1] && computerChoice === choices[2]) {
        console.log('computer wins!')
    } else if (event.target === btn[2] && computerChoice === choices[0]) {
        console.log('computer wins!')
    } else if (event.target === btn[2] && computerChoice === choices[1]) {
        console.log('player wins!')
    } else if (event.target === btn[0] && computerChoice === choices[0]) {
        console.log('its a tie')
    } else if (event.target === btn[1] && computerChoice === choices[1]) {
        console.log('its a tie')
    } else if (event.target === btn[2] && computerChoice === choices[2]) {
        console.log('its a tie')
    }
});