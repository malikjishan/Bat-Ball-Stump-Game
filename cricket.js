let scoreStr = localStorage.getItem('score');
let score;
resetScore(scoreStr);
function resetScore(scoreStr) {
   score = scoreStr ? JSON.parse(scoreStr) :{

      Win: 0,
      Lost: 0,
      Tie: 0,
   };
   score.displayScore = function () {
      return  `Score: won:${score.Win} Lost:${score.Lost} Tie:${score.Tie}`;
   }
   showResult();
}

let computerChoice;
function getComputerChoice() {
   let randomNumber = Math.random() * 3;

   if (randomNumber > 0 && randomNumber <= 1) {
      computerChoice = 'Bat';
   } else if (randomNumber > 1 && randomNumber <= 2) {
      computerChoice = 'Ball';
   } else if (randomNumber > 2 && randomNumber <= 3) {
      computerChoice = 'Stump';
   }
}
function getResult(userMove, computerMove) {
   if (userMove === 'Bat') {
      if (computerMove === 'Ball') {
         score.Win++;
         return 'You has  won';
      } else if (computerMove === 'Bat') {
         score.Tie++;
         return `It's tie`;
      } else if (computerMove === 'Stump') {
         score.Lost++;
         return 'Computer has won';
      }
   } else if (userMove === 'Ball') {
      if (computerMove === 'Ball') {
         score.Tie++;
         return `It's a tie`;
      } else if (computerChoice === 'Bat') {
         score.Lost++;
         return `Computer has won`;
      } else if (computerChoice === 'Stump') {
         score.Win++;
         return 'You  has won';
      }
   } else {
      if (computerMove === 'Ball') {
         score.Lost++;
         return `Computer has won`;
      } else if (computerMove === 'Bat') {
         score.Win++;
         return `You has won`;
      } else if (computerMove === 'Stump') {
         score.Tie++;
         return `It's a tie`;
      }
   }
}
function showResult(userMove, computerMove, result) {
   localStorage.setItem('score', JSON.stringify(score));
   document.querySelector('#user-move').innerText=
      userMove!==undefined ? `You have chose a ${userMove}` : '';
   document.querySelector('#computer-move').innerText=
      computerMove!==undefined ? `Computer chose a ${computerMove}` : '';
   document.querySelector('#result').innerText=
      result!==undefined ? result : '';
   document.querySelector('#score').innerText=score.displayScore();
}