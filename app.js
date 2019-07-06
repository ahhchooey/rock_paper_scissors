let userScore = 0;
let compScore = 0;

const userScore_span = document.getElementById("user-score"); //getElementById only works on unique ids
const compScore_span = document.getElementById("comp-score"); //DOM variable and span tag
const scoreBoard_span = document.querySelector(".scoreboard"); //querySelector grabs first thing that matches the selector, if nothing is found null is returned

const result_p = document.querySelector(".result > p");

const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

const choices_div = document.querySelector(".choices");

/* The above assignments are called CACHEING the DOM, basically storing things in a variable in
 * the very beginning. This is nice for ease of access to these variables. Also, it is
 * nice for certain tasks, as it stores the result once, instead of running a method every time
 * we need to use it. */

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

var smallUser = "user".fontsize(3).sub();
var smallComp = "comp".fontsize(3).sub();

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function win(user, comp) {
  userScore++;
  userScore_span.innerHTML = userScore;
  result_p.innerHTML = `${capitalize(user)}${smallUser} beats ${comp}${smallComp}. You win!` 
}

function lose(user, comp) {
  compScore++;
  compScore_span.innerHTML = compScore;
  result_p.innerHTML = `${capitalize(comp)}${smallComp} beats ${user}${smallUser}. You lose.`
}

function draw(user, comp) {
  result_p.innerHTML = `Both played ${comp}${smallUser + "/".fontsize(3).sub() + smallComp}. It's a draw.`
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch(userChoice + computerChoice) {
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      draw(userChoice, computerChoice);
      break;
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      win(userChoice, computerChoice);
      break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      lose(userChoice, computerChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener("click", function() {
    game("rock");
  })

  paper_div.addEventListener("click", function() {
    game("paper");
  })

  scissors_div.addEventListener("click", function() {
    game("paper");
  })
}

main();
