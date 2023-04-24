const choices = ["Rock", "Paper", "Scissors"];

const btn_paper = document.querySelector('#btn-paper')
const btn_rock = document.querySelector('#btn-rock')
const btn_scissors = document.querySelector('#btn-scissors')
const player_score_div = document.querySelector('#player-score')
const machine_score_div = document.querySelector('#machine-score')

let player_score = 0
let machine_score = 0
let winner
let computerSelection
let result

//event listeners
btn_paper.addEventListener('click', () => {
    playRound("PAPER");
});

btn_rock.addEventListener('click', () => {
    playRound("ROCK");
});

btn_scissors.addEventListener('click', () => {
    playRound("SCISSORS");
});


//Gets random choice
function getMachineChoice() {
    let computerNumber = Math.floor(Math.random() * 3);
    computerSelection = choices[computerNumber].toUpperCase();
    return computerSelection;
}

function checkResult(playerSelection, computerSelection) {
    //check result
    if (playerSelection == computerSelection) {
        result = "Draw"
    } else if (playerSelection == "SCISSORS" && computerSelection == "PAPER") {
        result = "You win"
    } else if (playerSelection == "ROCK" && computerSelection == "SCISSORS") {
        result = "You win"
    } else if (playerSelection == "PAPER" && computerSelection == "ROCK") {
        result = "You win"
    } else {
        result = "You loose"
    }
    return result
}

// Juega una ronda 
function playRound(playerSelection) {
    //Generate ramdom machine choice
    computerSelection = getMachineChoice()
    result = checkResult(playerSelection, computerSelection)
    //check who won
    if (result == "You win") {
        player_score += 1
    } else {
        machine_score += 1
    }

    //Set results
    player_score_div.innerHTML = player_score
    machine_score_div.innerHTML = machine_score

    //check if 5 victorys
    if (player_score == 5) {
        winner = "PLAYER WON"
        window.alert(winner)
    }
    else if (machine_score == 5) {
        winner = "MACHINE WON"
        window.alert(winner)

    }

    //console.log
    console.log(`MACHINE -> ${computerSelection}`)
    console.log(`PLAYER -> ${playerSelection}`)
    console.log("-----------")
    console.log(result)
    return result;

}


