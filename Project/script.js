
const arrayPlays = ["Rock", "Paper", "Scissors"];

let scoreP = 0;
let scoreAi = 0;

const	scorePc = document.getElementById("score-c");
const	scorePlayer = document.getElementById("score-p");
const	result = document.getElementById("result");

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
	else
	{
		scoreAi++;
		return `Player wins ! ${playerchoice} beats ${computerResult}`; 
	}

}
