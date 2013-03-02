describe('Card', function() {
  var jack, queen, king, ace;
  beforeEach(function() {
    jack = new Card(1, 11);
    queen = new Card(2, 12);
    king = new Card(3, 13);
    ace = new Card(4, 1);
  });

  describe('is worth', function() {
    it('ten points when it\'s a Jack, Queen, or King', function() {
      expect(jack.cardValue() && queen.cardValue() && king.cardValue()).toBe(10);
    });

    it('eleven points when it\'s an Ace', function() {
      expect(ace.cardValue()).toBe(11);
    });

    it('its numerical value, otherwise', function() {
      var randomNumber = Math.floor(Math.random() * 9) + 2;
      var randomCard = new Card(1, randomNumber);
      expect(randomCard.cardValue()).toBe(randomNumber);
    });
  });

  describe('has one of four suits', function() {
    it('hearts', function() {
      expect(jack.suitName()).toMatch('Hearts');
    });

    it('diamonds', function() {
      expect(queen.suitName()).toMatch('Diamonds');
    });

    it('clubs', function() {
      expect(king.suitName()).toMatch('Clubs');
    });

    it('spades', function() {
      expect(ace.suitName()).toMatch('Spades');
    });
  });
});