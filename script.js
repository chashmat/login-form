const bgs = ['./google/google1.jpg', './google/google2.jpg', './google/google3.jpg', './google/google4.jpg', './google/google5.jpg', './google/google6.jpg', './google/google7.jpg', './google/google8.jpg', './google/google9.jpg', './google/google10.jpg', './google/google11.jpg', './google/google12.jpg', './google/google13.jpg', './google/google14.jpg', './google/google15.jpg', './google/google16.jpg', './google/google17.jpg', './google/google18.jpg', './google/google19.jpg', './google/google20.jpg', './google/google21.jpg', './google/google22.jpg', './google/google23.jpg', './google/google24.jpg'];

let selectbg = bgs[Math.floor(Math.random() * bgs.length)];
document.body.style.background = `url('${selectbg}')`;
document.body.style.backgroundSize = 'cover';

const username = document.querySelectorAll('input')[0];
const label1 = document.querySelectorAll('.form div label')[0];

function checkLabel1() {
    if (username.value == '') {
        label1.style.fontSize = '17px';
        label1.style.transform = 'translate(-380px, 6px)';
    } else if (username.value != '') {
        label1.style.fontSize = '11px';
        label1.style.transform = 'translate(-380px, -6px)';
    };
}

const password = document.querySelectorAll('input')[1];
const label2 = document.querySelectorAll('.form div label')[1];

function checkLabel2() {
    if (password.value.length < 8) {
        document.querySelector('.error').style.display = 'block';
        document.querySelector('h1').style.margin = '25px 0';
    } else if (password.value.length > 8) {
        document.querySelector('.error').style.display = 'none';
        document.querySelector('h1').style.margin = '45px 0';
    };
    if (password.value == '') {
        label2.style.fontSize = '17px';
        label2.style.transform = 'translate(-380px, 6px)';
    } else if (password.value != '') {
        label2.style.fontSize = '11px';
        label2.style.transform = 'translate(-380px, -6px)';
    };
}