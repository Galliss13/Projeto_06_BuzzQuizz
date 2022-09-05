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
        abrirTelaFinalQuizz(Math.round((correctAnswers/totalQuestionQuantity)*100))
      }
    }
  }

  function abrirTelaFinalQuizz(resultado) {
    const main_2 = document.querySelector('.main_2');
    const promise = axios.get(`${urlAPI}/quizzes/${lista_id_ext[lista_id_ext.length - 1]}`);
    let levelalcançado;
    promise.then (renderizarTelaFinal);

    function renderizarTelaFinal(resposta) {
      for (let i = 0; i < resposta.data.levels.length; i++) {
        console.log(resultado);
        console.log(resposta.data.levels[i].minValue);
        if (resultado < resposta.data.levels[i].minValue) {
          levelalcançado = i-1;
          break;
        }
      }
      main_2.innerHTML +=`
      <div data-identifier="quizz-result" class="ResultadoQuizzBox">
        <div class="separador">
            <div class="ResultadoQuizz">
                <p class="ResultadoQuizzTexto">${resultado}% de acerto: ${resposta.data.levels[0].title}</p>
            </div>
            <div class="imagemTextoResultado">
                <img classe="imagem_resultado" src="${resposta.data.levels[0].image}" alt="imagem do resultado">
                <div class="descriçãoBox">
                    <p class="descrição">${resposta.data.levels[0].text}</p>
                </div>
            </div>
        </div>
      </div>
      ` 
    }
  }