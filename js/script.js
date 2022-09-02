const urlAPI = 'https://mock-api.driven.com.br/api/v4/buzzquizz'

let lista_id_ext = []
let lista_id_int = []

// PEGAR OS QUIZZES DO SERVIDOR E OS DISPOR NA TELA 1
function getQuizzes() {
    const promise = axios.get (`${urlAPI}/quizzes`)
    promise.then(renderizarQuizzes);
}

function renderizarQuizzes(resposta) {

    console.log(resposta.data);

    const quizzes = document.querySelector('.quizzes');
    
    for (let i = 0; i < 51; i++) {
        quizzes.innerHTML = quizzes.innerHTML + `
        <div data-identifier="quizz-card" onclick="openQuizz(this)" class= "quizz ${resposta.data[i].id}">
            <img src=${resposta.data[i].image}>
            <p>${resposta.data[i].title}</p>
        </div>
        `
        lista_id_ext.push(resposta.data[i].id);
    }
}

getQuizzes()
console.log(lista_id_ext);

// INTERAÇÃO DE CLICAR EM UM QUIZZ E ABRIR A TELA 2 COM AS PERGUNTAS 
function openQuizz(selecionado) {
    const id_selecionado = selecionado.classList[1];
    const promise = axios.get (`${urlAPI}/quizzes/${id_selecionado}`);
    promise.then(renderizarQuizzSelecionado);
    console.log(selecionado.classList);
}

function renderizarQuizzSelecionado(resposta) {
    const main_1 = document.querySelector('.main_1');
    const main_2 = document.querySelector('.main_2');
    toggleMain(main_1, main_2);
}

function toggleMain(main_x, main_y) {
    main_x.classList.add('hidden');
    main_y.classList.remove('hidden');
}