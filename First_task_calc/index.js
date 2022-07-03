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


function sum() {
    let number1;
    let number2;

    number1 = document.getElementById('num1').value;
    number2 = document.getElementById('num2').value;

    let result = +number1 + +number2;
    document.getElementById('out').innerHTML = result;
}

function min() {
    let number1;
    let number2;

    number1 = document.getElementById('num1').value;
    number2 = document.getElementById('num2').value;

    let result = +number1 - +number2;
    document.getElementById('out').innerHTML = result;
}


function mult() {
    let number1;
    let number2;

    number1 = document.getElementById('num1').value;
    number2 = document.getElementById('num2').value;

    let result = +number1 * +number2;
    document.getElementById('out').innerHTML = result;
}


function div() {
    let number1;
    let number2;

    number1 = document.getElementById('num1').value;
    number2 = document.getElementById('num2').value;


    let result = +number1 / +number2;

    if (number2 == 0) {
        alert('На ноль делить нельзя');
    }

    document.getElementById('out').innerHTML = result;
}