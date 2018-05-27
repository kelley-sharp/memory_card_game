document.addEventListener('DOMContentLoaded', function() {
  const cardImages = [
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
  const state = {
    firstFlip: { id: null, img: null },
    pairsComplete: 0,
    guess: 0,
    highScore: null
  };

  //play button clicked, shuffles cards, changes "play game" to "reset"
  const shuffleButton = document.getElementById('shuffle_button');
  shuffleButton.addEventListener('click', shuffle);

  //

  //if all the cards are showing, display "You win"

  const cardsContainer = document.querySelector('#cards_container');
  cardsContainer.addEventListener('click', showcard);

  function shuffle() {
    let currentIndex = cardImages.length,
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
  }

  function showcard(e) {
    const card = e.target;
    const img = cardImages[card.id];

    if (card.className !== 'card' || card.style.backgroundImage) {
      return;
    }

    // if this is the first flip
    if (state.firstFlip.id === null) {
      // set the image
      card.style.backgroundImage = `url(${img})`;
      // store flip in state
      state.firstFlip.id = card.id;
      state.firstFlip.img = img;
    } else {
      state.guess++;
      document.getElementById('guess_counter').innerText = state.guess;
      // set second card image
      card.style.backgroundImage = `url(${img})`;

      // if there was no match
      if (img !== state.firstFlip.img) {
        setTimeout(function() {
          // look up the first card in the DOM and reset its background
          document.getElementById(
            state.firstFlip.id
          ).style.backgroundImage = null;

          // reset the second card (current card)
          card.style.backgroundImage = null;

          // clear out state
          state.firstFlip.id = null;
          state.firstFlip.img = null;
        }, 1000);
      } else {
        state.firstFlip.id = null;
        state.firstFlip.img = null;
        state.pairsComplete++;

        if (state.pairsComplete === 4) {
          alert('YOU WON!');
        }
      }
    }
  }
});
