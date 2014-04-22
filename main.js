window.onload = function() {
var dice = document.getElementById('dice');
var dice2 = document.getElementById('dice2');
var value = 0;
var playerWins = 0;
var compWins = 0;
var text = document.getElementById('text');
var playerScore = document.getElementById('player');
var compScore = document.getElementById('computer');
var roll = document.getElementById('play');

roll.addEventListener('click', function() {
		compRoll();
		rollDice();
		if (value == value2) {
			text.innerHTML = 'you tied'
		}
		else if (value > value2) {
			text.innerHTML = 'you won!'
			playerWins++;
			playerScore.innerHTML = 'Player: ' + playerWins;


		}
		else {
			text.innerHTML = 'you lose'
			compWins++;
			compScore.innerHTML = 'Computer: ' + compWins;
		}
	})

var rollDice = function () {
	value = Math.round(Math.random()*5 + 1);
	switch (value) {
		case 1:
			dice.src = 'img/Dice-1.png';
			break;
		case 2:
			dice.src = 'img/Dice-2.png';
			break;
		case 3:
			dice.src = 'img/Dice-3.png';
			break;
		case 4:
			dice.src = 'img/Dice-4.png';
			break;
		case 5:
			dice.src = 'img/Dice-5.png';
			break;
		case 6:
			dice.src = 'img/Dice-6.png';
			break;
		}
		return value;
	}

var compRoll = function() {

	value2 = Math.round(Math.random()*5 + 1);
	switch (value2) {
		case 1:
			dice2.src = 'img/Dice-1.png';
			break;
		case 2:
			dice2.src = 'img/Dice-2.png';
			break;
		case 3:
			dice2.src = 'img/Dice-3.png';
			break;
		case 4:
			dice2.src = 'img/Dice-4.png';
			break;
		case 5:
			dice2.src = 'img/Dice-5.png';
			break;
		case 6:
			dice2.src = 'img/Dice-6.png';
			break;
		}
		return value2;
	}
};