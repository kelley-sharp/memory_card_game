document.addEventListener('DOMContentLoaded', function() {
  var cardImages = [
    'images/cat_bowl.gif',
    'images/racoon_sprinkler.gif',
    'images/red_work_out.gif',
    'images/superman_dog.gif'
  ];
  var cards = document.querySelector('.cards');

  // var playButton = document.getElementById('play_button');
  // playButton.addEventListener('click', timer());

  cards.addEventListener('click', showcard);

  function showcard(e) {
    let i = e.target.id;
    e.target.style.backgroundImage = `url(${cardImages[i]})`;
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
