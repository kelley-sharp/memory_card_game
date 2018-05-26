document.addEventListener('DOMContentLoaded', function() {
  var cardImages = [
    'images/cat_bowl.gif',
    'images/cat_toothbrush.gif',
    'images/pug_face.gif',
    'images/two_dogs.gif',
    'images/cat_bowl.gif',
    'images/cat_toothbrush.gif',
    'images/pug_face.gif',
    'images/two_dogs.gif'
  ];

  //game state
  var state = {
    firstFlip: { id: null, img: null },
    secondFlip: null,
    didWin: false,
    timer: 0
  };

  //play button clicked, shuffles cards
  var playButton = document.getElementById('play_button');
  playButton.addEventListener('click', shuffle);

  //play button clicked, says reset. resets game.
  playButton.addEventListener('click', reset);

  //if all the cards are showing, display "You win"

  var cardsContainer = document.querySelector('#cards_container');
  cardsContainer.addEventListener('click', showcard);

  function reset() {}

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
    let gif = cardImages[cardId];
    e.target.style.backgroundImage = `url(${gif})`;
    //if two cards are shown and images are not equal, change images back to white_back.
    //if there wasnt a first card showing,
    if (state.firstFlip.id === null) {
      state.firstFlip.img = gif;
      state.firstFlip.id = cardId;
      //else there was a first card showing, make both cards revert to white_back.
    } else if (state.firstFlip.id !== null) {
      e.target.style.backgroundImage = null;
      state.firstFlip.img = null;
    }
  }
});
