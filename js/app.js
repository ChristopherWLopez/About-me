'use strict';


let count = 0;

let userAnswer = prompt('Do I Like "horror" films?');
userAnswer = userAnswer.toLowerCase();
console.log(userAnswer);

if (userAnswer === 'yes' || userAnswer === 'y'){
  alert('You Nailed it! I love horror films');
  // eslint-disable-next-line no-unused-vars
  count++;
} else if (userAnswer === 'no' || userAnswer ==='n'){
  alert('well i dont like Rom Coms');
}

let musicAnswer = prompt('Do I like any hiphop?');
musicAnswer = musicAnswer.toLowerCase();
console.log(musicAnswer);

if (musicAnswer === 'yes' || musicAnswer === 'y'){
  alert('Well... well... well... You can read! I know how!.. or do I... ?');
  count++;
// eslint-disable-next-line no-dupe-else-if
} else if (musicAnswer === 'no' || musicAnswer === 'n'){
  alert('I absolutely love hip-hop');
}

let guitarAnswer = prompt('Do I love white guitars?');
guitarAnswer = guitarAnswer.toLowerCase();
console.log(guitarAnswer);

if (guitarAnswer === 'yes' || guitarAnswer === 'y'){
  alert('I LOVE  White Guitars!');
  count++
} else if (guitarAnswer === 'no' || guitarAnswer === 'n'){
  alert ('Youre not wrong but youre not right!');
}

let newManAnswer = prompt('Do I love Newman?');
newManAnswer = newManAnswer.toLowerCase();
console.log(newManAnswer);

// tried to word things differently with the 'not equal' to sign
if (newManAnswer === 'yes' || newManAnswer === 'y'){
  alert('You must be Newman');
} else if (newManAnswer ==='no' || newManAnswer ==='n'){
  alert ('youre right, i hate him');
  count++
}

let foodAnswer = prompt('Are you hungry ?');
foodAnswer = foodAnswer.toLowerCase();
console.log(foodAnswer);

// experimenting with a catch all.
if (foodAnswer === 'yes' || foodAnswer === 'y'){
  alert('make sure you eat some food!');
  count++
} else if (foodAnswer === 'no'|| foodAnswer === 'n') {
  alert ('Its okay, just make sure youre drinking water');
}


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
    let userAnswer = prompt('Which of these pedals are always on my pedal board? (chorus, delay, phaser,rainbow machine, fuzz )');
    // for loop itterating right pedal answer same var as 78
    if (userAnswer === rightPedalsAnswer[1]){
      prompt('Nailed it!');
      count++
      break;
    }else if (userAnswer === rightPedalsAnswer[0]) {
      ('I love it but not my only one.');
    } else if (userAnswer === rightPedalsAnswer[2]){
      ('awesome but not essential');
    }

  }
}
guitarPedals();

alert('you guessed ' + count + ' correct!');