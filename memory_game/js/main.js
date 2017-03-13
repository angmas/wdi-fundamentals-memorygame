console.log("Up and running!");

//set var for cards
var cards = ["queen", "queen", "king", "king"]

//variable to hold cards in play
var cardsInPlay = [];

var checkForMatch = function() {
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");
		} else {
			alert("Sorry, try again.");
			}
	};

};

//function for remembering user actions
var flipCard = function (cardId) {
	//variable to hold the first flipped card

	console.log("User flipped " + cards[cardId]);

	cardsInPlay.push(cards[cardId]);
	checkForMatch();

	
};



flipCard(0);
flipCard(2);


