function checkIfAnswerSelected(optionsList) {
    let shouldSelectFlag = true;
    optionsList.forEach((option) => {
      if (option.classList.contains("chosen-answer")) {
        shouldSelectFlag = false;
      }
    });
  
    return shouldSelectFlag;
  }
  
  function verificarResposta(resposta, questionNumber, totalQuestionQuantity) {
    const optionsGroup = document.querySelectorAll(`.question${questionNumber}`);
  
    optionsGroup.forEach((option) => {
      if (option.classList.contains("true")) {
        option.classList.add("right-answer");
      } else {
        option.classList.add("wrong-answer");
      }
      option.classList.add("non-chosen-answer");
    });
  
    const shouldSelectAnswer = checkIfAnswerSelected(optionsGroup);
  
    if (shouldSelectAnswer) {
      if (resposta.classList.contains("true")) {
        correctAnswers++;
      }
      answeredQuestions++;
      resposta.classList.add("chosen-answer");
      if (answeredQuestions === totalQuestionQuantity) {
        console.log(
          `respondeu tudo. O seu acerto foi de ${Math.round(
            (correctAnswers / totalQuestionQuantity) * 100
          )}%`
        );
      }
    }
  }