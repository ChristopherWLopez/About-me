'use strict';


let count = 0;

function getAnswer (message, correct1, correct2) {
  let answer = prompt(message).toLowerCase();
  if (answer === correct1 || answer === correct2) {
    alert('You nailed it!');
    count++
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
//   count++;
// } else if (userAnswer === 'no' || userAnswer ==='n'){
//   alert('well i dont like Rom Coms');
// }

// let musicAnswer = prompt();
// musicAnswer = musicAnswer.toLowerCase();
// console.log(musicAnswer);

// if (musicAnswer === 'yes' || musicAnswer === 'y'){
//   alert('Well... well... well... You can read! I know how!.. or do I... ?');
//   count++;
// // eslint-disable-next-line no-dupe-else-if
// } else if (musicAnswer === 'no' || musicAnswer === 'n'){
//   alert('I absolutely love hip-hop');
// }

// let guitarAnswer = prompt('Do I love white guitars?');
// guitarAnswer = guitarAnswer.toLowerCase();
// console.log(guitarAnswer);

// if (guitarAnswer === 'yes' || guitarAnswer === 'y'){
//   alert('I LOVE  White Guitars!');
//   count++
// } else if (guitarAnswer === 'no' || guitarAnswer === 'n'){
//   alert ('Youre not wrong but youre not right!');
// }

// let newManAnswer = prompt('Do I love Newman?');
// newManAnswer = newManAnswer.toLowerCase();
// console.log(newManAnswer);

// // tried to word things differently with the 'not equal' to sign
// if (newManAnswer === 'yes' || newManAnswer === 'y'){
//   alert('You must be Newman');
// } else if (newManAnswer ==='no' || newManAnswer ==='n'){
//   alert ('youre right, i hate him');
//   count++
// }

// let foodAnswer = prompt('Are you hungry ?');
// foodAnswer = foodAnswer.toLowerCase();
// console.log(foodAnswer);

// // experimenting with a catch all.
// if (foodAnswer === 'yes' || foodAnswer === 'y'){
//   alert('make sure you eat some food!');
//   count++
// } else if (foodAnswer === 'no'|| foodAnswer === 'n') {
//   alert ('Its okay, just make sure youre drinking water');
// }


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
      // console.log(userAnswer);
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
