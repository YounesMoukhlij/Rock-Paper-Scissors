const Choices = ["Rock", "Paper", "Scissors"];


let	i = 0;
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

let rock_button = document.getElementById("Rock");
let scissors_button = document.getElementById("Scissors");
let paper_button = document.getElementById("Paper");


function resetGame()
{
	PlayerScore = 0;
	ComputerScore = 0;
	scoreUser.innerText = 0;
	scoreComputer.innerText = 0;
}


function Game(userOption)
{
	let results =  getResult(userOption);


	scoreUser.innerText = PlayerScore;
	scoreComputer.innerText = ComputerScore;

	result.innerText = results;

	if (PlayerScore == 3 || ComputerScore == 3) {


		console.log("WA HAANA");
		
		if (PlayerScore > scoreComputer)

			winner.innerText = "AI Gonna Eat You Someday!";
		resetGame();
	}
	i++;
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

