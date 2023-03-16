const answer = Math.floor(Math.random() * 100) + 1;
let guesses = 5;

const feedback = document.getElementById("feedback");
const guessButton = document.getElementById("guessButton");

guessButton.addEventListener("click", function () {
  const userAnswer = Number(document.getElementById("userAnswer").value);

  if (guesses === 1) {
    feedback.innerHTML = `Vous avez perdu. Le nombre était ${answer}.`;
    guessButton.disabled = true;
  } else if (userAnswer === answer) {
    feedback.innerHTML = "Bravo, vous avez deviné le nombre !";
    guessButton.disabled = true;
  } else if (userAnswer > answer) {
    feedback.innerHTML = "Le nombre est plus petit.";
    guesses--;
  } else {
    feedback.innerHTML = "Le nombre est plus grand.";
    guesses--;
  }

  document.getElementById("userAnswer").value = "";
  document.getElementById("userAnswer").focus();
});
