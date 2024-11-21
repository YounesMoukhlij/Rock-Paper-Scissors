const Choices = ["Rock", "Paper", "Scissors"];

let scoreUser = document.getElementById("score-p");
let scoreComputer = document.getElementById("score-c");


function getRandomComputerChoice()
{
	let index = Math.floor(Math.random() * Choices.length);
	return (Choices[index]);
}

function isPl
