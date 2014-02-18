var game_time = function(actual) {
  guess = parseInt(prompt("Guess a number between 1 and 10!"));
  guesses = 1;
  while (guess !== actual) {
    if (guess > actual) {
      guess = parseInt(prompt("Too high! Guess again!"));
      guesses++;
    } else if (guess < actual) {
      guess = parseInt(prompt("Too low! Guess again!"));
      guesses++;
    }
  }
  alert("You win! It took you " + guesses + " guesses.");
}

game_time(Math.ceil((Math.random()* 10)));
