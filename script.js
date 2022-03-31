let order = [];
let clickedOrder = [];
let score = 0;

// 0 -verde 
// 1 - vermelho 
// 2 - amarelo
// 3 - azul

const blue = document.querySelector('.blue');
const yellow = document.querySelector('.yellow');
const red = document.querySelector('.red');
const green = document.querySelector('.green');

const shufleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order){
        let elementColor = createElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

const createElement = (orderI) => {

}

const lightColor = (element, number) => {
    number = time * 500;
    setTimeout(() => {
        element.classList.add('.selected');
    
    }, number - 250);
    setTimeout(() => {
        element.classList.remmove('.selected');
    });
}