let throws = 0;
let correntGoal = 1;
//message
let message = document.querySelector("#message");

// Dice Object
throwDice = function () {
  return Math.ceil(Math.random() * 6);
};

let play = document.getElementById("play");

play.addEventListener("click", () => {
  // call function throwDice() and  save dice results
  console.log("Your corrent goal to achieve is--> " + correntGoal);
  // clean the h2
  message.innerHTML = "Corrent goal to achieve";

  // set the corrent goal to achieve
  document.querySelector("#goal").classList.add("dice", `dice-${correntGoal}`);
  let result = throwDice();

  // show in UI
  document.querySelector("#dice").classList = "";
  document.querySelector("#dice").classList.add("dice", `dice-${result}`);

  // increase thorws by 1
  throws++;
  document.querySelector("button").innerHTML = `Thorws n ${throws}`;

  if (result == correntGoal && correntGoal < 6) {
    //you meet the goal

    document.querySelector(`.dice-${result}`).classList.remove("faded");
    document
      .querySelector("#goal")
      .classList.remove(`'dice`, `dice-${correntGoal}`);

    //increase goal
    correntGoal++;

    // Add the corrent goal to the UI
    document
      .querySelector("#goal")
      .classList.add("dice", `dice-${correntGoal}`);
  } else if (result == correntGoal && correntGoal == 6) {
    // you win
    console.log("You win the game in " + throws + "thorws");

    document.querySelector(`.dice-${result}`).classList.remove("faded");
    // Message to the winner
    message.innerHTML = `You win in n ${throws} throws!`;

    //remove corrent goal
    document
      .querySelector("#goal")
      .classList.remove("dice", `dice-${correntGoal}`);

    // reset counter
    correntGoal = 1;
    throws = 0;
  }
});
