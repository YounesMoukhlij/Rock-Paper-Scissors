
const arrayPlays = ["Rock", "Paper", "Scissors"];

let scoreP = 0;
let scoreAi = 0;

const	result = document.getElementById("result");
const	winner = document.getElementById("whoWins");
const	scorePc = document.getElementById("score-c");
const	scorePlayer = document.getElementById("score-p");

function getRandomComputerPlay ()
{
	return (MATH.floor(Math.floor() * arrayPlays.length));
}

function isPlayerWon(computer, player)
{
	return (player == "Rock" && computer == "Scissors" ||
			player == "Scissors" && computer == "Paper" ||
			player == "Paper" && computer == "Rock");
} 

function getResults(playerchoice)
{
	let computerResult = getRandomComputerPlay();

	if (isPlayerWon(computerResult, playerchoice))
	{
		scoreP++;
		return `Player wins ! ${playerchoice} beats ${computerResult}`; 
	}
	else if (computerResult === playerchoice)
		return `It's a tie! Both chose ${playerchoice}`;
	else
	{
		scoreAi++;
		return `Computer wins ! ${computerResult} beats ${playerchoice}`; 
	}
}

function showResults(userOption)
{
	let Pc = getRandomComputerPlay();



}

const	rockBtn = document.getElementById("Rock");
const	paperBtn = document.getElementById("Paper");
const	scissorsBtn = document.getElementById("Rock");