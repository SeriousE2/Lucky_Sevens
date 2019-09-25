// Roll dice function
function rollDice() {
	return Math.floor(Math.random() * 6) + 1;
}

// Function to play
function play() {
	var startBet = Number(document.forms["luckySevens"]["bet"].value);
	var money = startBet;
	var firstDie;
	var secondDie;
	var diceSum;
	var maxWins = 0;
	var rolls = 0;
	var rollsAtMax = 0;

	// Informing the user that the game requires a number greater than 0.
	if (money <= 0) {
		alert("Starting bet needs to be greater than $0");
	}
	// When user inputs a number greater then 0, the game runs the following loop.
	else {
		while (money > 0) {
			firstDie = rollDice();
			secondDie = rollDice();
			diceSum = firstDie + secondDie;
			rolls++;
			if (diceSum != 7) {
				money--;
				console.log("You Lose");
			}
			else {
				money += 4;
				if (money > maxWins) {
					maxWins += (money - maxWins);
					rollsAtMax = rolls;
				}
				console.log("You Win");
			}
		}
	}
	document.getElementById("results").style.display = "block";
	document.getElementById("submitButton").innerText = "Play Again!";
	document.getElementById("start").innerText = startBet;
	document.getElementById("rollsNum").innerText = rolls;
	document.getElementById("max").innerText = maxWins;
	document.getElementById("rollsAtMax").innerText = rollsAtMax;
	return false;
}