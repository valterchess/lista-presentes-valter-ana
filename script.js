let order = [];
let clickedOrder = [];
let score = 0;

// 0 -verde 
// 1 - vermelho 
// 2 - amarelo
// 3 - azul
const green = document.querySelector('.green');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const blue = document.querySelector('.blue');
const play = document.querySelector('.play');
const totalScore = document.querySelector('.score');


//cria ordem aleaoria de cores
let shuffleOrder = () => {
    order[order.length] = Math.floor(Math.random() * 4);
    clickedOrder = [];
    for (let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

// acente a próxima cor
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);

    setTimeout(() => {
        element.classList.remove('selected');
    },number - 50);
}

// checa se os botões criados são os mesmos da ordem gerada no jogo
let checkOrder = () => {
    for (let i in clickedOrder) {
        if (clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }

    if (clickedOrder.length == order.length) {
        nextLevel();
    }
}

// função para o click do usuário
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250);
}

// função que retorna a cor
let createColorElement = (color) => {
    if (color == 0) return green;
    else if (color == 1) return red;
    else if (color == 2) return yellow;
    else if (color == 3) return blue;
}

    //função para próximo nível do jogo
    let nextLevel = () => {
        totalScore.innerHTML = `Score: ${score}`;
        score++;
        // inserir mais um em um elemento 
        shuffleOrder();
    }

    // função para game-over
    let gameOver = () => {
        alert(`Pontuação: ${score}!\nVocê perdeu o jogo!\nClique em ok para iniciar um novo jogo`);
        order = [];
        clickedOrder = [];

        playGame();
    }

    let playGame = () => {

        score = 0;
        nextLevel();
    }

    // eventos de click
    green.onclick = () => click(0);
    red.onclick = () => click(1);
    yellow.onclick = () => click(2);
    blue.onclick = () => click(3);
    
    // inicio do jogo
    play.onclick = () => {playGame()
         score = 0};