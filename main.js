let answers = {};

function showHiddenText(hiddenTextId, outputId) {
  let hiddenText = document.getElementById(hiddenTextId);
  let textToDisplay = hiddenText.innerText;
  hiddenText.style.display = "block"; // Показываем скрытый элемент
  document.getElementById(outputId).innerHTML = "<p>" + textToDisplay + "</p>"; // Выводим текст на страницу
}

function answerQuestion(questionNumber, score) {
  answers["question" + questionNumber] = score;
  document.getElementById("question" + questionNumber).style.display = "none";
  if (questionNumber < 9) {
    document.getElementById("question" + (questionNumber + 1)).style.display =
      "block";
  } else {
    showResults();
  }
}

function showResults() {
  let totalScore = 0;
  for (const key in answers) {
    totalScore += answers[key];
  }

  let result;
  if (totalScore >= 8 && totalScore <= 19) {
    result = showHiddenText("hiddenText3");
  } else if (totalScore >= 20 && totalScore <= 29) {
    result = showHiddenText("hiddenText2");
  } else if (totalScore >= 30 && totalScore <= 36) {
    result = showHiddenText("hiddenText1");
  } else {
    result = "Извините, что-то пошло не так";
  }

  document.getElementById("results").innerText = result;
  // document.getElementById("results").style.display = "block";
}
