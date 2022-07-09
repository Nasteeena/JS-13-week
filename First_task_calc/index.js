/*function sum() {
    let a = prompt('Введите первое число', '');
    let b = prompt('Введите второе число', '');
    alert(+a + +b);
} 
function min() {
    let a = prompt('Введите первое число', '');
    let b = prompt('Введите второе число', '');
    alert(+a - +b);
}
function mult() {
    let a = prompt('Введите первое число', '');
    let b = prompt('Введите второе число', '');
    alert(+a * +b);
}
function div() {
    let a = prompt('Введите первое число', '');
    let b = prompt('Введите второе число', '');
    alert(+a / +b);
}*/

let number1 = document.getElementById('num1');
let number2 = document.getElementById('num2');


function sum() {
    let result = +number1.value + +number2.value;
    document.getElementById('out').innerHTML = result;
}

function min() {
    let result = +number1.value - +number2.value;
    document.getElementById('out').innerHTML = result;
}


function mult() {
    let result = +number1.value * +number2.value;
    document.getElementById('out').innerHTML = result;
}


function div() {
    let result = +number1.value / +number2.value;
    if (number2.value == 0) {
        alert('На ноль делить нельзя');
    }
    document.getElementById('out').innerHTML = result;
}