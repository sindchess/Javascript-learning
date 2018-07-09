let menuItems = document.getElementsByClassName('menu-item');
let menu = document.querySelector('.menu');
let newLi = document.createElement('li');
menu.insertBefore(menuItems[2], menuItems[1]);
newLi.classList.add('menu-item');
newLi.innerHTML = 'Пятый пункт';
menu.appendChild(newLi);

let body = document.getElementsByTagName('body');
body[0].style.background = 'red';
console.log(body[0]);

let text = 'Мы продаем только подлинную технику Apple';
let siteText = document.querySelector('#title');
siteText.innerHTML = text;
let adv = document.querySelector('.adv');
adv.remove();

let answer = prompt('Как вы относитесь к apple?');
let promptNew = document.getElementById('prompt');
promptNew.innerHTML = answer;

