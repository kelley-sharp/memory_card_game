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
  var cardsContainer = document.querySelector('#cards_container');

  // var playButton = document.getElementById('play_button');
  // playButton.addEventListener('click', timer());

  cardsContainer.addEventListener('click', showcard);

  function showcard(e) {
    let cardId = e.target.id;
    e.target.style.backgroundImage = `url(${cardImages[cardId]})`;
  }

  function shuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
});
