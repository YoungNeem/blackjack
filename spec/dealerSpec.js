describe('Dealer', function() {
  var dealerHand = new Dealer();

  it('will continue to \'hit,\' if own score is below 17', function() {
    expect(dealerHand.score()).toBeGreaterThan(16);
  });
});
