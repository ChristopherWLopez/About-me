'use strict';


let count = 0;

function getAnswer (message, correct1, correct2) {
  let answer = prompt(message).toLowerCase();
  if (answer === correct1 || answer === correct2) {
    alert('You nailed it!');
    count++;
    return;
  }
  alert('That\'s not correct');
}
getAnswer ('Do I like "horror" films?', 'y', 'yes');
getAnswer ('Do I like any hiphop?', 'y', 'yes');
getAnswer ('Do I love white guitars?', 'y', 'yes');
getAnswer ('Do I love Newman?', 'n', 'no');
getAnswer ('Are you hungry?', 'y', 'yes');


//   // eslint-disable-next-line no-unused-vars



function guessingGame(){
  let correctAnswer = 5;
  for (let i=0; i< 4 ;i++){
    let userAnswer = prompt('Guess my favorite number');
    if (userAnswer == correctAnswer){
      alert('well played');
      count++
      break;
    }else if (i >= 3){
      alert('all out of tries');
      break;
    }else if (userAnswer < correctAnswer){
      alert('too low');

    } else if (userAnswer > correctAnswer){
      alert('too high');
      console.log(userAnswer);
    }
  }
}
guessingGame();

function guitarPedals(){
  let rightPedalsAnswer = ['chorus','phaser','fuzz'];
  for (let i=0; i<5; i++){
    let userAnswer = prompt('Which of these pedals are always on my pedal board? (chorus, delay, phaser, rainbow machine, fuzz )');
    for (let j=0; j<rightPedalsAnswer.length; j++) {
      if (userAnswer === rightPedalsAnswer[j]){
        alert('Nailed it!');
        count++;
        return;
      }
    }
    alert('I love it but not my only one.');
  }
}
guitarPedals();

alert('you guessed ' + count + ' correct!');
