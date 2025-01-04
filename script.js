'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highscore = 0;
const displayMessage= function(message){
  document.querySelector('.message').textContent = message;

}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess, typeof guess);

  //when there is no input
  if (!guess) {
    displayMessage('🙅 No Click!');
  }
  //when player wins
  else if (guess === secretNumber) {
    displayMessage('🎉🥳🥹 Correct Number');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  //when guess is wrong
  else if(guess!==secretNumber){
    if (score>1){
    // document.querySelector('.message').textContent=guess>secretNumber ? 'Too High 😱' : 'Too low 😒';
    displayMessage(guess>secretNumber ? 'Too High 😱' : 'Too low 😒');
          score--;
      document.querySelector('.score').textContent = score;
  }
  else {
    displayMessage( 'You lost the game 😶‍🌫️🤐');
    document.querySelector('.score').textContent = 0;
  }
  }



  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too High 😱';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game 😶‍🌫️🤐';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }

  // //when guess is too low
  // else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too low 😒';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game 😶‍🌫️🤐';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guesssing');
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
