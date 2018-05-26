document.addEventListener('DOMContentLoaded', function() {
  var cardImages = [
    'images/cat_bowl.gif',
    'images/hedgehog_piano.gif',
    'images/red_work_out.gif',
    'images/superman_dog.gif',
    'images/cat_bowl.gif',
    'images/hedgehog_piano.gif',
    'images/red_work_out.gif',
    'images/superman_dog.gif'
  ];

  var playButton = document.getElementById('play_button');
  playButton.addEventListener('click', shuffle);

  var cardsContainer = document.querySelector('#cards_container');
  cardsContainer.addEventListener('click', showcard);

  function shuffle() {
    var currentIndex = cardImages.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = cardImages[currentIndex];
      cardImages[currentIndex] = cardImages[randomIndex];
      cardImages[randomIndex] = temporaryValue;
    }

    return cardImages;
  }

  function showcard(e) {
    let cardId = e.target.id;
    e.target.style.backgroundImage = `url(${cardImages[cardId]})`;
  }
});
