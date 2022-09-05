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

//GERAÇÃO DAS PERGUNTAS E NÍVEIS

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
                        <input class="input_pergunta" type="text" placeholder="Texto da pergunta">
                        <input class="input_cor" type="text" title="Insira uma cor hexadecimal." placeholder="Cor de fundo da pergunta">

                        <span>Resposta correta</span>
                        <input class="input_alternativa" type="text" placeholder="Resposta correta">
                        <input class="input_urlimage" type="text" placeholder="URL da imagem">

                        <span>Respostas incorreta</span>
                        <input class="input_alternativa" type="text" placeholder="Resposta incorreta 1">
                        <input class="input_urlimage" type="text" placeholder="URL da imagem 1">
                        <input class="input_alternativa" type="text" placeholder="Resposta incorreta 2">
                        <input class="input_urlimage" type="text" placeholder="URL da imagem 2">
                        <input class="input_alternativa" type="text" placeholder="Resposta incorreta 3">
                        <input class="input_urlimage" type="text" placeholder="URL da imagem 3">
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
                    <input class="input_pergunta" type="text" size="20" required placeholder="Texto da pergunta">
                    <input class="input_cor" type="text" pattern="^#[0-9a-fA-F]{6}" title="Insira uma cor hexadecimal." placeholder="Cor de fundo da pergunta">

                    <span>Resposta correta</span>
                    <input class="input_alternativa" type="text" required placeholder="Resposta correta">
                    <input class="input_urlimage" type="url" placeholder="URL da imagem">

                    <span>Respostas incorreta</span>
                    <input class="input_alternativa" type="text" requirted placeholder="Resposta incorreta 1">
                    <input class="input_urlimage" type="url" placeholder="URL da imagem 1">
                    <input class="input_alternativa" type="text" placeholder="Resposta incorreta 2">
                    <input class="input_urlimage" type="url" placeholder="URL da imagem 2">
                    <input class="input_alternativa" type="text" placeholder="Resposta incorreta 3">
                    <input class="input_urlimage" type="url" placeholder="URL da imagem 3">
                </div>
            </div>
        `;
        }
    }
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
                        <input type="text" class="titulo_nivel" placeholder="Título do nível">
                        <input type="number" class="acerto" placeholder="% de acerto mínima">
                        <input type="url" class="url_nivel_image" placeholder="URL da imagem do nível">
                        <input type="text" class="description_nivel" placeholder="Descrição do nível">
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
                    <img src="img/edit.svg" alt="Editar" onclick="openNivel(this)" data-identifier="expand">
                </div>
                <div class="m3-level-options hidden">
                    <input type="text" class="titulo_nivel" placeholder="Título do nível">
                    <input type="number" class="acerto" placeholder="% de acerto mínima">
                    <input type="url" class="url_nivel_image" placeholder="URL da imagem do nível">
                    <input type="text" class="description_nivel" placeholder="Descrição do nível">
                </div>
            </div>
        `;
        }
    }
}

//EFEITO DE ABRIR QUESTÃO OU NÍVEL

function openQuestion(elemento) {
    const question = elemento.parentNode.parentNode.children[1];
    elemento.classList.add('hidden')
    question.classList.remove('hidden')
}

function openNivel(elemento) {
    const nivel = elemento.parentNode.parentNode.children[1];
    elemento.classList.add('hidden');
    nivel.classList.remove('hidden');
}

//VALIDAÇÕES

function validaM31() {
    const arrayValidaM31 = m3Theme.children;
    const num_caracteres_titulo = arrayValidaM31[0].value.length
    const url_imagem_quiz = arrayValidaM31[1].value;
    const qtde_perguntas = arrayValidaM31[2].value;
    const qtde_niveis = arrayValidaM31[3].value;
    console.log(qtde_perguntas);
    if ((20 <= num_caracteres_titulo && num_caracteres_titulo <= 65) && (checkUrl(url_imagem_quiz))
    && (qtde_perguntas >= 3) && (qtde_niveis >= 2)) {
        goToM32();
    } else {
        alert ('insira os dados corretamente')
    }
}

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

function validaM32() {

    if (checkPerguntasM32() && checkCoresM32() && checkAlternativasM32() && checkURLimagensM32()) {
        goToM33();
    } else {
        alert('Insira informações corretas')
    }

    function checkPerguntasM32() {
        const perguntas = document.querySelectorAll('.input_pergunta');
        for (let i = 0; i < perguntas.length; i++) {
            if (perguntas[i].value.length < 20) {
                return false;
            } 
        }
        return true;
    }

    function checkCoresM32() {
        const cores = document.querySelectorAll('.input_cor');
        const arrayLetrasHexa = ['A', 'B', 'C', 'D', 'E', 'F'];
        for (let i = 0; i < cores.length; i++) {
            if ((cores[i].value.length !== 7) || (checkLetrasHexa(cores[i].value) === false) ||  cores[i].value[0] !== '#') {
                return false;
            } 
        }
        return true

        function checkLetrasHexa(cor) {
            for (let j = 1; j <= 6; j++) {
                if (arrayLetrasHexa.includes(cor[j]) === false) {
                    return false
                }
            }
            return true
        }
    }

    function checkAlternativasM32() {
        const alternativas = document.querySelectorAll('.input_alternativa');
        for (let i = 0; i < alternativas.length; i++) {
            console.log(alternativas[i].value.length);
            if (alternativas[i].value.length === 0) {
                return false;
            } 
        }
        return true;
    }

    function checkURLimagensM32() {
        const URLimagens = document.querySelectorAll('.input_urlimage');
        for (let i = 0; i < URLimagens.length; i++) {
            if (checkUrl(URLimagens[i].value) === false) {
                return false;
            }
        }
        return true;
    }
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

function validaM33() {

    console.log(checkTitulo33());
    console.log(checkAcerto33());
    console.log(checkURLNivel33());
    console.log(checkDescription33());


    if (checkTitulo33() && checkAcerto33() && checkURLNivel33() && checkDescription33()) {
        goToM34()
    } else {
        alert ('Insira as informações corretas')
    }

    function checkTitulo33() {
        const titulos = document.querySelectorAll('.titulo_nivel');
        for (let i = 0; i < titulos.length; i++) {
            if (titulos[i].value.length < 10) {
                return false;
            }
        }
        return true;
    }

    function checkAcerto33() {
        const acertos = document.querySelectorAll('.acerto');
        for (let i = 0; i < acertos.length; i++) {
            if ((acertos[i].value < 0) || (acertos[i].value > 100) || acertos[i].value === '') {
                return false;
            }
        }
        return true;
    }

    function checkURLNivel33() {
        const urlNiveis = document.querySelectorAll('.url_nivel_image');
        for (let i = 0; i < urlNiveis.length; i++) {
            if (checkUrl(urlNiveis[i].value) === false) {
                return false;
            }
        }
        return true;
    } 

    function checkDescription33() {
        const descriptions = document.querySelectorAll('.description_nivel');
        for (let i = 0; i < descriptions.length; i++) {
            if (descriptions[i].value.length < 10) {
                return false;
            }
        }
        return true;
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

function checkUrl(string) {
    try {
     let url = new URL(string)
     return true;
   } catch(err) {
       return false;
   }
 }
