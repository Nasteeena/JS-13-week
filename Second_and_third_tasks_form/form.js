

const firstName = document.getElementById('firstname');
const lastName = document.getElementById('lastname');
const eMail = document.getElementById('email');
const passWord = document.getElementById('pass');
const passCheck = document.getElementById('passcheck');

function check() {

    const firstNameValue = firstName.value;
    const lastNameValue = lastName.value;
    const eMailValue = eMail.value;
    const passWordValue = passWord.value;
    const passCheckValue = passCheck.value;

    
    if (firstNameValue == '') {
        alert('Введите ваше имя');
    }

    if (lastNameValue == '') {
        alert('Введите вашу фамилию');
    }

    if (eMailValue == '') {
        alert('Введите адрес вашей электронной почты');
    }

    if (passWordValue == '') {
        alert('Введите ваш пароль');
    } 
    if (passWordValue.length <= 4) 
    {
        alert('Пароль не должен быть меньше 5 символов');
    }

    if (passCheckValue == '') {
        alert('Повторите ваш пароль');
    } 
    
    if (passCheckValue != passWordValue) 
    {
        alert('Введенные пароль не совпадают');
    }
    
    if (firstNameValue && lastNameValue && eMailValue && passWordValue === passCheckValue) {
        alert(`Добро пожаловать, ${firstNameValue} ${lastNameValue}!`);
    }

    //  Далее идут красные пометки в этой же функции, что поля не заполнены 

    document.getElementById('error').innerHTML = '';

    if (firstName.value == '') {
        document.getElementById('error').innerHTML += 'Имя не заполнено<br>';
    }
    if (lastName.value == '') {
        document.getElementById('error').innerHTML += 'Фамилия не заполнено<br>';
    }
    if (eMail.value == '') {
        document.getElementById('error').innerHTML += 'Почта не заполнена<br>';
    }
    if (passWord.value == '') {
        document.getElementById('error').innerHTML += 'Пароль не заполнен<br>';
    }
    if (passCheck.value == '') {
        document.getElementById('error').innerHTML += 'Подтвердите пароль не заполнено<br>';
    } 
}


//Функция для смены темы

function changeTheme() {
    if (document.getElementById('theme-colours').value == 'light') {
        document.body.style.background = 'white';
        document.querySelector('.main-form').style.background = 'white';
    } 

    if (document.getElementById('theme-colours').value == 'dark') {
        document.body.style.background = 'grey';
        document.querySelector('.main-form').style.background = 'lightgrey';
    } 
    

    if (document.getElementById('theme-colours').value == 'pink') {
        document.body.style.background = 'pink';
        document.querySelector('.main-form').style.background = '#F091AD';
    } 
}