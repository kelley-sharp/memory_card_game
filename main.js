document.addEventListener('DOMContentLoaded', function() {
  const cardImages = [
    'images/cat_bowl.gif',
    'images/cat_toothbrush.gif',
    'images/pug_face.gif',
    'images/high_five.gif',
    'images/cat_bowl.gif',
    'images/cat_toothbrush.gif',
    'images/pug_face.gif',
    'images/high_five.gif',
    'images/dog_swing.gif',
    'images/dog_swing.gif',
    'images/cat_flower.gif',
    'images/cat_flower.gif',
    'images/bathtime_dog.gif',
    'images/bathtime_dog.gif'
  ];

  //game state
  const state = {
    firstFlip: { id: null, img: null },
    pairsComplete: 0,
    guess: 0,
    highScore: null
  };

  //if all the cards are showing, display "You win"

  const cardsContainer = document.querySelector('#cards_container');
  cardsContainer.addEventListener('click', showcard);

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
      //give image a border
      card.style.border = '10px solid black';
      // store flip in state
      state.firstFlip.id = card.id;
      state.firstFlip.img = img;
    } else {
      state.guess++;
      document.getElementById('guess_counter').innerText = state.guess;
      // set second card image
      card.style.backgroundImage = `url(${img})`;
      card.style.border = '10px solid black';

      // if there was no match
      if (img !== state.firstFlip.img) {
        setTimeout(function() {
          // look up the first card in the DOM and reset its background
          var firstCard = document.getElementById(state.firstFlip.id);
          firstCard.style.backgroundImage = null;
          firstCard.style.border = null;

          // reset the second card (current card)
          card.style.backgroundImage = null;
          card.style.border = null;

          // clear out state
          state.firstFlip.id = null;
          state.firstFlip.img = null;
        }, 1000);
      } else {
        state.firstFlip.id = null;
        state.firstFlip.img = null;
        state.pairsComplete++;

        if (state.pairsComplete === 7) {
          alert('* !! You WON !! *');
          var guess = state.guess;
          var highScore = state.highScore;
          if (guess > highScore) {
            highScore = guess;
            guess = 0;
            document.getElementById('informer').innerText = 'New High Score!';
            document.getElementById(
              'score'
            ).innerText = `High Score: ${highScore}`;
          }
          //add event listener to shuffle button
          const shuffleButton = document.getElementById('shuffle_button');
          shuffleButton.addEventListener('click', newGame);
        }
      }
    }
  }

  function newGame() {
    state.highScore = null;
    state.guess = 0;
    var cards = document.querySelectorAll('.card');
    for (let i = 0; i < cards.length; i++) {
      cards[i].style.backgroundImage = null;
      cards[i].style.border = null;
    }
    document.getElementById('informer').innerText = null;
    state.guess = 0;
    document.getElementById('guess_counter').innerText = '0';

    shuffle();
  }

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
});

//reset game on shuffle
