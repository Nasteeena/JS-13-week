function showMessage() {
    const userName = prompt('Как тебя зовут?',);
    const userAge = prompt('Сколько тебе лет?');
    let userCity = prompt('Где ты живешь?');
    alert(`Привет, ${userName}! Тебе ${userAge} лет и ты живешь в городе ${userCity}.`);
}


let showMessage = function () {
    const userName = prompt('Как тебя зовут?',);
    const userAge = prompt('Сколько тебе лет?');
    let userCity = prompt('Где ты живешь?');
    alert(`Привет, ${userName}! Тебе ${userAge} лет и ты живешь в городе ${userCity}.`);
};

let showMessage = () => {
    const userName = prompt('Как тебя зовут?',);
    const userAge = prompt('Сколько тебе лет?');
    let userCity = prompt('Где ты живешь?');
    alert(`Привет, ${userName}! Тебе ${userAge} лет и ты живешь в городе ${userCity}.`);
};





