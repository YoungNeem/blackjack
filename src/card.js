function Card(suit, number) {
  var cardSuit = suit;
  var cardNumber = number;

  this.cardValue = function() {
    if(cardNumber === 11 || cardNumber === 12 || cardNumber === 13) {
      return 10;
    }
    else if(cardNumber === 1) {
      return 11;
    }
    else {
      return cardNumber;
    }
  };

  this.suitName = function() {
    var suitName = '';

    if(cardSuit === 1) {
      suitName = 'Hearts';
    }
    else if(cardSuit === 2) {
      suitName = 'Diamonds';
    }
    else if(cardSuit === 3) {
      suitName = 'Clubs';
    }
    else if(cardSuit === 4) {
      suitName = 'Spades';
    }

    return suitName;
  };

  this.faceCard = function() {
    var rank = '';

    if(cardNumber === 1) {
      rank = 'Ace';
    }
    else if(cardNumber === 13) {
      rank = 'King';
    }
    else if(cardNumber === 12) {
      rank = 'Queen';
    }
    else if(cardNumber === 11) {
      rank = 'Jack';
    }
    else {
      rank += cardNumber;
    }

    return rank;
  };
}
