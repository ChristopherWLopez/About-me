'use strict'

let userAnswer = prompt('Do I Like "horror" films?');
userAnswer = userAnswer.toLowerCase();
console.log(userAnswer);

if (userAnswer === 'yes' || userAnswer === 'y'){
  alert('You Nailed it! I love horror films');
} else if (userAnswer === 'no' || userAnswer ==='n'){
  alert('well i dont like Rom Coms');
}

let musicAnswer = prompt('Do I like any hiphop?');
musicAnswer = musicAnswer.toLowerCase();
console.log(musicAnswer);

if (musicAnswer === 'yes' || musicAnswer === 'y'){
  alert('Well... well... well... You can read! I know how!.. or do I... ?');
// eslint-disable-next-line no-dupe-else-if
} else if (musicAnswer === 'no' || musicAnswer === 'n'){
  alert('I absolutely love hip-hop');
}

let guitarAnswer = prompt('Do I love white guitars?');
guitarAnswer = guitarAnswer.toLowerCase();
console.log(guitarAnswer);

if (guitarAnswer === 'yes' || guitarAnswer === 'y'){
  alert('I LOVE  White Guitars!');
} else if (guitarAnswer === 'no' || guitarAnswer === 'n'){
  alert ('Youre not wrong but youre not right!');
}

let newManAnswer = prompt('Do I love Newman?');
newManAnswer = newManAnswer.toLowerCase();
console.log(newManAnswer);

// tried to word things differently with the 'not equal' to sign
if (newManAnswer === 'yes' || newManAnswer !== 'y'){
  alert('You must be Newman');
} else if (newManAnswer ==='no' || newManAnswer ==='n'){
  alert ('youre right, i hate him');
}

let foodAnswer = prompt('Are you hungry ?');
foodAnswer = foodAnswer.toLowerCase();
console.log(foodAnswer);

// experimenting with a catch all.
if (foodAnswer === 'yes' || foodAnswer === 'y'){
  alert('make sure you eat some food!');
} else if (foodAnswer === 'no'|| foodAnswer === 'n') {
  alert ('Its okay, just make sure youre drinking water');
}
