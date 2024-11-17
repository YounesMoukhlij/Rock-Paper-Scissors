
const arrayPlays = ["Rock", "Paper", "Scissors"];

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

function getResults(playerch)
{

}
