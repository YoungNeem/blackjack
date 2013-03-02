describe('Hand', function() {
  var hand;
  beforeEach(function() {
    hand = new Hand();
  });

  it('contains two cards, upon initial deal', function() {
    expect(hand.cardsInHand()).toEqual(2);
  });

  it('gains one card, when choosing to \'hit\'', function() {
    hand.hit();
    expect(hand.cardsInHand()).toEqual(3);
  });
});