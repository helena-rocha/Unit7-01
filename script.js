// connect "guess" button to "random" function
document.getElementById('button-1').addEventListener('click', randomizer)
let randomNumber = 0
let userGuess = 0

function randomizer () {
  // get number typed in by user and convert to an intiger
  userGuess = document.getElementById('input-1')
    .value
  userGuess = parseInt(userGuess)

  // generate random number between 1 and 6
  randomNumber = (Math.random() * 6) + 1
  randomNumber = parseInt(randomNumber)
  // compare user's guess with random number
  if (userGuess === randomNumber) {
    document.getElementById('answer-1').innerHTML = 'You Win!'
  }
}
