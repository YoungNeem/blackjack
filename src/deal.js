function Deal() {
  var suit = Math.floor(Math.random() * 4 + 1);
  var number = Math.floor(Math.random() * 13 + 1);
  var card = new Card(suit, number);
  return card;
}
