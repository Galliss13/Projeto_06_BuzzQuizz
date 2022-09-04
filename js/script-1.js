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
}

function renderizarQuizzSelecionado(resposta) {
    console.log(resposta);
    const infoQuizz = resposta.data
    const main_1 = document.querySelector('.main_1');
    const main_2 = document.querySelector('.main_2');

    //ADIÇÕES AO MAIN_2

    //ADIÇÃO DO TÍTULO DO QUIZZ
    main_2.innerHTML = `
    <div class="quizz-top">
        <div class="quizz-banner">
            <img src=${infoQuizz.image}>
        </div>
        <div class="quizz-opaco">
        </div>
        <div class="quizz-banner-title">
            <p>${infoQuizz.title}</p> 
        </div>
    </div>
    `
    //ADIÇÃO DAS QUES PERGUNTAS E RESPOSTAS

    // 1 - DEFINIÇÃO DAS VARIÁVEIS UTILIZADAS
    let arrayQA = [];
    let num_resp;

    // 2 - FORMANDO ARRAY QUE CONTÉM O NÚMERO DE RESPOSTAS DE CADA PERGUNTA
    for (let y = 0; y < infoQuizz.questions.length; y++) {
        arrayQA.push(infoQuizz.questions[y].answers.length);
    }

    // 3 - COM A FUNÇÃO QUE DETERMINA O NÚMERO DE OPÇÕES PARA CADA PERGUNTA, ADICIONA-SE DINAMICAMENTE O CONTEÚDO MAIN_2
    for (let k = 0; k < infoQuizz.questions.length; k++) {
        num_resp = arrayQA[k];
        main_2.innerHTML = main_2.innerHTML + `
        <div class="quizz-box">
            <div class="box-title" style="background-color: ${infoQuizz.questions[k].color}">
                <p>${infoQuizz.questions[k].title}</p>
            </div>
            ${generateBoxOptions(k, num_resp)}
        </div>
        `
    }

    // 4 - POR FIM, ADIÇÃO DOS BOTÕES DE RESET E HOME
    main_2.innerHTML = main_2.innerHTML + `
    <div class="quizz-options">
        <button class="reset-quizz" onclick="resetQuizz()">Reiniciar Quizz</button>
        <div class="quit-quizz" onclick="toggleMain('main_2', 'main_1')">Voltar para home</div>
    </div>
    `

    // FUNÇÃO QUE GERA O BOXOPTION DE CADA PERGUNTA
    function generateBoxOptions (num_questao, num_de_respostas) {
        let box_options = '';
        box_options += `
        <div class="box-options">
        `   
        for (let n = 0; n < num_de_respostas; n++){
            box_options += `
            <div class="answer-box">
                <img src=${infoQuizz.questions[num_questao].answers[n].image}>
                <p>${infoQuizz.questions[num_questao].answers[n].text}</p>
            </div> 
            `
        }
        box_options += `</div>`;
        return box_options;
    }

    //DEPOIS DE MODIFICAR TODO O CONTEÚDO, MUDA TELA
    toggleMain('main_1', 'main_2');
}


function toggleMain(main_x, main_y) {
    const oldMain = document.querySelector('.' + main_x);
    const newMain = document.querySelector('.' + main_y);
    oldMain.classList.add('hidden');
    newMain.classList.remove('hidden');
    window.scrollTo(0,0);
}