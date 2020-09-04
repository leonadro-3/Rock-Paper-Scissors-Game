let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToword(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissors";
}

function win(userChoice, computerChoice){
  userScore++;
  const smallUserWord = "user".fontsize(3)
  const smallCompWord = "comp".fontsize(3)
  const userChoice_div = document.getElementById(userChoice);
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = convertToword(userChoice) + smallUserWord + " beats " + convertToword(computerChoice) + smallCompWord + ' You win!';
  userChoice_div.classList.add('green-glow');
  setTimeout(function() { userChoice_div.classList.remove('green-glow')}, 300);
}


function loss(userChoice, computerChoice){
  computerScore++;
  const smallUserWord = "user".fontsize(3)
  const smallCompWord = "comp".fontsize(3)
  const userChoice_div = document.getElementById(userChoice);
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = convertToword(userChoice) + smallUserWord + " lose to " + convertToword(computerChoice) + smallCompWord + ' You loss..';
  userChoice_div.classList.add('red-glow');
  setTimeout(function() { userChoice_div.classList.remove('red-glow')}, 300);

}
function draw(userChoice, computerChoice){
  const smallUserWord = "user".fontsize(3)
  const smallCompWord = "comp".fontsize(3)
  const userChoice_div = document.getElementById(userChoice);
  result_p.innerHTML = convertToword(userChoice) + smallUserWord + " equals " + convertToword(computerChoice) + smallCompWord + ' draw ';
  userChoice_div.classList.add('gray-glow');
  setTimeout(function() { userChoice_div.classList.remove('gray-glow')}, 300);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
      case "rp":
      case "ps":
      case "sr":
       loss(userChoice, computerChoice);
       break;
      case "rr":
      case "pp":
      case "ss":
        draw(userChoice, computerChoice);
        break;
  }
}
function main() {

rock_div.addEventListener('click', function() {
  game("r");
})

paper_div.addEventListener('click', function() {
  game("p")
})

scissors_div.addEventListener('click', function() {
  game("s")
})


}

main();
