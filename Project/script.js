const Choices = ["Rock", "Paper", "Scissors"];


let PlayerScore = 0;
let ComputerScore = 0;

let scoreUser = document.getElementById("score-p");
let scoreComputer = document.getElementById("score-c");


function getRandomComputerChoice()
{
	let index = Math.floor(Math.random() * Choices.length);
	return (Choices[index]);
}

function isPlayerWons(userOption, computerOption)
{
	return (userOption == "Rock" && computerOption == "Scissors"
		|| userOption == "Paper" && computerOption == "Rock"
		|| userOption == "Scissors" && computerOption == "Paper");
}

function getResult(userOption)
{
	let computerChoice = getRandomComputerChoice();

	if (isPlayerWons(userOption, computerChoice)) {
		PlayerScore++;
		return `Player wins! ${userOption} beats ${computerChoice}`;
	}
	else if (userOption == computerChoice)
		return `No Winner! They both choose ${userOption}`;
	else
	{
		ComputerScore++;
		return `Computer wins! ${computerChoice} beats ${userOption}`;
	}
}

let result = document.getElementById("result");
let winner = document.getElementById("whoWins");
let reset = document.getElementById("btn-win");

let rock_button = document.getElementById("Rock");
let scissors_button = document.getElementById("Scissors");
let paper_button = document.getElementById("Paper");

let	optionContainer = document.getElementById("button-container");
let	resultContainer = document.getElementById("result-container");



function Game(userOption)
{
	let results =  getResult(userOption);


	scoreUser.innerText = PlayerScore;
	scoreComputer.innerText = ComputerScore;

	result.innerText = results;

	if (PlayerScore == 3 || ComputerScore == 3)
	{
		winner.innerText = `${PlayerScore == 3 ? "Player" : "Computer" }  has won the game :) `;
		optionContainer.style.display = "none";
		resultContainer.style.display = "block";
		reset.style.display = "block";
		PlayerScore = 0;
		ComputerScore = 0;
		scoreUser.innerText = 0;
		scoreComputer.innerText = 0;
	}
	
}

function resetGame()
{
	optionContainer.style.display = "block";
	resultContainer.style.display = "block";
	reset.style.display = "none";
	PlayerScore = 0;
	ComputerScore = 0;
	scoreUser.innerText = 0;
	scoreComputer.innerText = 0;

	winner.innerText = "";

}

reset.onclick = function ()
{
	resetGame();
}


rock_button.onclick = function ()
{
	Game("Rock");	
}
scissors_button.onclick = function ()
{
	Game("Scissors");	
}
paper_button.onclick = function ()
{
	Game("Paper");	
}


// function resetGame() {


// 	playerScore = 0;
// 	computerScore = 0;
// 	playerScoreSpanElement.innerText = 0;
// 	computerScoreSpanElement.innerText = 0;
// 	winnerMsgElement.innerText = "";
// 	roundResultsMsg.innerText = "";
// 	resetGameBtn.style.display = "none";
// 	optionsContainer.style.display = "block";
	
	
// 	};