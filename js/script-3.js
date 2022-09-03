/*
const m3Theme = document.querySelector("m3-theme");
const m3ThemeTitle = m3Theme.children[0].value;
const m3ThemeImg = m3Theme.children[1].value;
const m3ThemeQuestions = m3Theme.children[2].value;
const m3ThemeLevels = m3Theme.children[3].value;

const m3Question = document.querySelector("m3-theme");
const m3ThemeTitle = m3Theme.children[0].value;



function validateForm1() {

}
*/
let m3ThemeQuestions;
let m3ThemeLevels;
let m3Questions;

const m3CreateHeader = document.querySelector(".m3-create-header");
const m31 = document.querySelector(".m3-1");
const m3Theme = document.querySelector(".m3-theme");
const m32 = document.querySelector(".m3-2");
const m32Button = document.querySelector(".m3-2-button");
const m33 = document.querySelector(".m3-3");
const m33Button = document.querySelector(".m3-3-button");
const m34 = document.querySelector(".m3-4");
const m34Button = document.querySelector(".m3-4-button");

function goToM32() {
    m3ThemeQuestions = m3Theme.children[2].value;
    m3ThemeLevels = m3Theme.children[3].value;

    generateQuestions();

    m31.classList.toggle("hidden");
    m32.classList.toggle("hidden");
    m3CreateHeader.children[0].classList.toggle("hidden");
    m3CreateHeader.children[1].classList.toggle("hidden");
    m32Button.classList.toggle("hidden");

    window.scrollTo(0, 0);
}

function generateQuestions() {

    for (let i = 0; i < m3ThemeQuestions; i++) {
        
        if (i === 0) {
            m32.innerHTML += `
                <!--PERGUNTA ${i + 1}-->
                <div class="m3-question m3-question-${i + 1}" data-identifier="question">
                    <div class="m3-question-header">
                        <span class="m3-question-number" data-identifier="question-form">Pergunta ${i + 1}</span>
                        <img src="img/edit.svg" alt="Editar" class="hidden" onclick="openQuestion(this)" data-identifier="expand">
                    </div>
                    <div class="m3-question-options">
                        <input type="text" size="20" required placeholder="Texto da pergunta">
                        <input type="text" pattern="^#[0-9a-fA-F]{6}" title="Insira uma cor hexadecimal." placeholder="Cor de fundo da pergunta">
                        <span>Resposta correta</span>
                        <input type="text" required placeholder="Resposta correta">
                        <input type="url" placeholder="URL da imagem">
                        <span>Respostas incorreta</span>
                        <input type="text" required placeholder="Resposta incorreta 1">
                        <input type="url" placeholder="URL da imagem 1">
                        <input type="text" placeholder="Resposta incorreta 2">
                        <input type="url" placeholder="URL da imagem 2">
                        <input type="text" placeholder="Resposta incorreta 3">
                        <input type="url" placeholder="URL da imagem 3">
                    </div>
                </div>
            `;
        }
        else {
            m32.innerHTML += `
                <!--PERGUNTA ${i + 1}-->
                <div class="m3-question m3-question-${i + 1}" data-identifier="question">
                    <div class="m3-question-header">
                        <span class="m3-question-number" data-identifier="question-form">Pergunta ${i + 1}</span>
                        <img src="img/edit.svg" alt="Editar" onclick="openQuestion(this)" data-identifier="expand">
                    </div>
                    <div class="m3-question-options hidden">
                        <input type="text" size="20" required placeholder="Texto da pergunta">
                        <input type="text" pattern="^#[0-9a-fA-F]{6}" title="Insira uma cor hexadecimal." placeholder="Cor de fundo da pergunta">
                        <span>Resposta correta</span>
                        <input type="text" required placeholder="Resposta correta">
                        <input type="url" placeholder="URL da imagem">
                        <span>Respostas incorreta</span>
                        <input type="text" required placeholder="Resposta incorreta 1">
                        <input type="url" placeholder="URL da imagem 1">
                        <input type="text" placeholder="Resposta incorreta 2">
                        <input type="url" placeholder="URL da imagem 2">
                        <input type="text" placeholder="Resposta incorreta 3">
                        <input type="url" placeholder="URL da imagem 3">
                    </div>
                </div>
            `;
        }
    }
}

function openQuestion(question) {
    const m3QuestionHeader = document.querySelector(".m3-question-header");
    const m3QuestionOptions = document.querySelector(".m3-question-options");

    if ( question !== null ){
        question.classList.toggle('hidden');
    }
    question.classList.toggle("hidden");
    m3QuestionOptions.classList.toggle("hidden");
}

function goToM33() {
    m32.classList.toggle("hidden");
    m33.classList.toggle("hidden");
    m3CreateHeader.children[1].classList.toggle("hidden");
    m3CreateHeader.children[2].classList.toggle("hidden");
    m32Button.classList.toggle("hidden");
    m33Button.classList.toggle("hidden");

    generateLevels();
    window.scrollTo(0, 0);
}

function generateLevels() {
 
    for (let i = 0; i < m3ThemeLevels; i++) {
        
        if (i === 0) {
            m33.innerHTML += `
                <!--NIVEL ${i + 1}-->
                <div class="m3-level m-3-level-${i + 1}" data-identifier="question">
                    <div class="m3-level-header">
                        <span class="m3-level-number" data-identifier="level">Nível ${i + 1}</span>
                        <img src="img/edit.svg" alt="Editar" class="hidden" data-identifier="expand">
                    </div>
                    <div class="m3-level-options">
                        <input type="text" size="10" placeholder="Título do nível">
                        <input type="number" placeholder="% de acerto mínima">
                        <input type="url" placeholder="URL da imagem do nível">
                        <input type="text" placeholder="Descrição do nível">
                    </div>
                </div>
            `;
        }
        else {
            m33.innerHTML += `
                <!--NIVEL ${i + 1}-->
                <div class="m3-level m-3-level-${i + 1}" data-identifier="question">
                    <div class="m3-level-header">
                        <span class="m3-level-number" data-identifier="level">Nível ${i + 1}</span>
                        <img src="img/edit.svg" alt="Editar" data-identifier="expand">
                    </div>
                    <div class="m3-level-options hidden">
                        <input type="text" size="10" placeholder="Título do nível">
                        <input type="number" placeholder="% de acerto mínima">
                        <input type="url" placeholder="URL da imagem do nível">
                        <input type="text" placeholder="Descrição do nível">
                    </div>
                </div>
            `;
        }
    }
}

function goToM34() {
    m33.classList.toggle("hidden");
    m34.classList.toggle("hidden");
    m3CreateHeader.children[2].classList.toggle("hidden");
    m3CreateHeader.children[3].classList.toggle("hidden");
    m33Button.classList.toggle("hidden");
    m34Button.classList.toggle("hidden");

    window.scrollTo(0, 0);
}