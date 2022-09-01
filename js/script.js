const urlAPI = 'https://mock-api.driven.com.br/api/v4/buzzquizz'

function getQuizzes() {
    const promise = axios.get (`${urlAPI}/quizzes`)
    promise.then(renderizarQuizzes);
}

function renderizarQuizzes(resposta) {
    console.log(resposta.data);
    const quizzes = document.querySelector('.quizzes');
    for (let i = 0; i < 51; i++) {
        quizzes.innerHTML = quizzes.innerHTML + `
        <div data-identifier="quizz-card" class= "quizz ${resposta.data[i].id}">
            <img src=${resposta.data[i].image}>
            <p>${resposta.data[i].title}</p>
        </div>
        `
    }
}

getQuizzes()