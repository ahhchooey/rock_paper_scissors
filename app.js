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

function fixResult() {
  result_p.innerHTML = `Rock, paper,${"".fontsize(3).sub()} or scissors?`
}

fixResult();

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
// The above is to capitalize a string. ie. "cow" becomes "Cow".

var smallUser = "user".fontsize(3).sub();
var smallComp = "comp".fontsize(3).sub();
// The above creates a subscript of small font.

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function win(user, comp) {
  userScore++;
  userScore_span.innerHTML = userScore;
  result_p.innerHTML = `${capitalize(user)}${smallUser} beats ${comp}${smallComp}. You win!` 
  document.getElementById(user).classList.add("green-glow");
  // classList return all classes associated with the "user" element
  // .add adds a new class, not that it is not .green-glow, because it already knows its a class
  setTimeout(function() {document.getElementById(user).classList.remove("green-glow")}, 750);
  // setTimeout sets a timer in ms (in this case its 750ms) and then runs the function
  // this function removes the green-glow class from user element
}

function lose(user, comp) {
  compScore++;
  compScore_span.innerHTML = compScore;
  result_p.innerHTML = `${capitalize(comp)}${smallComp} beats ${user}${smallUser}. You lose.`
  document.getElementById(user).classList.add("red-glow");
  setTimeout(() => document.getElementById(user).classList.remove("red-glow"), 750);
  // This is how to write the anonymous function with an arrow instead of 'function'
}

function draw(user, comp) {
  result_p.innerHTML = `Both played ${comp}${smallUser + "/".fontsize(3).sub() + smallComp}. It's a draw.`
  document.getElementById(user).classList.add("gray-glow");
  setTimeout(function() {document.getElementById(user).classList.remove("gray-glow")}, 750);
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
  });

  paper_div.addEventListener("click", function() {
    game("paper");
  });

  scissors_div.addEventListener("click", () => game("scissors"));
  // Another example of an arrow function, compared to 'function'
}

main();
