var players = {
	player1: {
		name: "Player 1",
		symbol: "0"
	},
	player2: {
		name: "Player 2",
		symbol: "x"
	}
};

// Set up player 1
players.player1.name = window.prompt("Player 1: please enter your name");

if (players.player1.name != null) {
	window.alert("hello " + players.player1.name + "!");
}


// Set up player 2
players.player2.name = window.prompt("Player 2: please enter your name");

if (players.player2.name != null) {
	window.alert("hello " + players.player2.name + "!");
}

var squares = document.querySelectorAll(".square");

var activePlayer = 'player1';

// console.log(squares);

for (var i = 0; i < squares.length; i += 1) {
	// console.log(squares[i]);
	squares[i].addEventListener("click", function(event) {
		var contents = event.target.innerHTML.replace(/\s+/, '');
		if (contents == '') {
			event.target.innerHTML = players[activePlayer].symbol;
			if (activePlayer == 'player1') {
				activePlayer = 'player2';
			} else {
				activePlayer = 'player1';
			}
		}
	}, false);
}
