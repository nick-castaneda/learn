const winMessage = document.getElementById('win');
const loseMessage = document.getElementById('lose');
const drawMessage = document.getElementById('draw');

let isUsersTurn = false;

function resetGame() {
	console.log('Resetting game');
}

function aiMove() {
	console.log('The computer is thinking');
}






/* js for test area */

function toggleWin() {
	console.log('Toggling win');

	if (winMessage.className === 'hiddenMessage') {
		winMessage.className = 'visibleMessage';
	} else if (winMessage.className === 'visibleMessage') {
		winMessage.className = 'hiddenMessage';
	}
}

function toggleLoose() {
	console.log('Toggling loose');

	if (loseMessage.className === 'hiddenMessage') {
		loseMessage.className = 'visibleMessage';
	} else if (loseMessage.className === 'visibleMessage') {
		loseMessage.className = 'hiddenMessage';
	}
}

function toggleDraw() {
	console.log('Toggling draw');

	if (drawMessage.className === 'hiddenMessage') {
		drawMessage.className = 'visibleMessage';
	} else if (drawMessage.className === 'visibleMessage') {
		drawMessage.className = 'hiddenMessage';
	}
}