let error = document.getElementById('error');
let registrationButton = document.getElementById('btn');

const firstName = document.getElementById('firstname');
const lastName = document.getElementById('lastname');
const eMail = document.getElementById('email');
const passWord = document.getElementById('pass');
const passCheck = document.getElementById('passcheck');


const inputErrors = {
    name: {
        notValue: 'Enter your first name<br>',
        invalidValue: 'Incorrect first name',
    },

    surname: {
        notValue: 'Enter your last name<br>',
        invalidValue: 'Incorrect last name',
    },

    email: {
        notValue: 'Enter your last email<br>',
        invalidValue: 'Incorrect email',
    },

    password: {
        notValue: 'Enter your last pasword<br>',
        invalidValue: 'Incorrect password',
    }
}

function checkValue(value, matchTemplate, errors) {
        if (value === '') {
            error.innerHTML += errors.notValue;
            registrationButton.disabled = true;
        } else if (value.match(matchTemplate)) {
            error.innerHTML += '';
            registrationButton.disabled = false;
        } else {
            error.innerHTML += errors.invalidValue;
            registrationButton = true;
        }
    }

function checkFirstName() {
    let nameSymbols = /^[A-Za-z]+$/;
    checkValue(firstName.value, nameSymbols, inputErrors.firstName);
}

function checkLastName() {
    let sureNameSymbols = /^[A-Za-z]+$/;
    checkValue(lastName.value, sureNameSymbols, inputErrors.surname);
}

function checkEmail() {
    let emailSymbols = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    checkValue(eMail.value, emailSymbols, inputErrors.email);
}

function checkPassWord() {
    let passWordSymbols = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    checkValue(passWord.value, passWordSymbols, inputErrors.password);
}

function checkPassCheck() {
    if (passCheck.value === passWord.value) {
        error.innerHTML += 'Your passwords do not match<br>';
        registrationButton.disabled = true;
    } else {
        registrationButton.disabled = false;
    }
}

function welcome() {
    if (firstName.value && lastName.value && eMail.value && passWord.value === passCheck.value) {
        alert(`Добро пожаловать, ${firstName.value} ${lastName.value}!`);
    }
}


registrationButton.addEventListener('click', function () {

    error.innerHTML = '';

    checkFirstName();
    checkLastName();
    checkEmail();
    checkPassWord();
    checkPassCheck();
    welcome();
});

firstName.addEventListener('input', () => {
    error.innerHTML = '';
    checkFirstName();
});

lastName.addEventListener('input', () => {
    error.innerHTML = '';
    checkLastName();
})

eMail.addEventListener('input', () => {
    error.innerHTML = '';
    checkEmail();
})

passWord.addEventListener('input', () => {
    error.innerHTML = '';
    checkPassWord();
})

passCheck.addEventListener('input', () => {
    error.innerHTML = '';
    checkPassCheck();
})


/*function check() {

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
} */