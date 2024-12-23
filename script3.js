const buttons = document.querySelectorAll('.buttons');
const output = document.querySelector('.output');
const acts = document.querySelectorAll('.acts');
const clear = document.querySelector('.clear');
const add = document.querySelector('.add');
const substract = document.querySelector('.sub');
const divide = document.querySelector('.divi');
const multiply = document.querySelector('.mult');
const equals = document.querySelector('.eq');

buttons.forEach(button =>{
    button.addEventListener('click', () =>{
    output.value += button.textContent;
    });
});

buttons.forEach(button =>{
    document.addEventListener('keydown', function(press){
        if(press.key === button.textContent){
    output.value += button.textContent;
        }
    });
});

clear.addEventListener('click', () =>{
    output.value = "";
});

add.addEventListener('click', () =>{
    output.value += '+';
});

substract.addEventListener('click', () =>{
    output.value += '-';
});

divide.addEventListener('click', () =>{
    output.value += '/';
});

multiply.addEventListener('click', () =>{
    output.value += '*';
});

equals.addEventListener('click', () => {
    try {
        const total = eval(output.value);
        output.value = `${total}`;
    } catch (error) {
        output.value = 'Error: Invalid expression';
    }
});