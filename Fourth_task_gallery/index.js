function forward() {
    let mainPicture = document.getElementById('main_picture');
    let secondPicture = document.getElementById('second');
    let thirdPicture = document.getElementById('third');
    mainPicture.src = 'https://upload.wikimedia.org/wikipedia/commons/d/df/Open_sea_%28july_2021%29.jpg';
    secondPicture.src = 'https://natworld.info/wp-content/uploads/2020/04/poberezhe-morya.jpg';
    thirdPicture.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/POL_2007_08_04_Jaroslawiec_zachodniopomorskie_02.JPG/1200px-POL_2007_08_04_Jaroslawiec_zachodniopomorskie_02.JPG';
    }

function backward() {
    let mainPicture = document.getElementById('main_picture');
    let secondPicture = document.getElementById('second');
    let thirdPicture = document.getElementById('third');
    mainPicture.src = 'https://natworld.info/wp-content/uploads/2020/04/poberezhe-morya.jpg';
    secondPicture.src = 'https://upload.wikimedia.org/wikipedia/commons/d/df/Open_sea_%28july_2021%29.jpg';
}