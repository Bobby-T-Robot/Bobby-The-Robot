const slideIn = document.querySelector('.slide-in-welcome');
const fadeIn = document.querySelector('.fade-in');
const fadeIn2 = document.querySelector('.fade-in2');
const abil = document.querySelector('.abil');
const abil2 = document.querySelector('.abil2');
const useranim = document.getElementById('username');
const userField = document.getElementById('username');
const nameanim = document.getElementById('nameHere');
const nameHere = document.getElementById('nameHere');
const thanks = document.getElementById('thanks');
const yourName = document.getElementById('yourName');
const drawings = document.getElementById('drawings');

document.addEventListener("DOMContentLoaded", function() {
  fakeBut2.disabled = true;
});

setTimeout(() =>{
  nameanim.classList.add('animate');
}, 1800);

setTimeout(() =>{
abil.classList.add('animate');
}, 3000);

setTimeout(() =>{
  useranim.classList.add('animate');
  }, 1900);

setTimeout(() =>{
    abil2.classList.add('animate');
}, 3500);

slideIn.classList.add('animate');

setTimeout(() =>{
fadeIn.classList.add('animate');
}, 2000);

setTimeout(() =>{
    fadeIn2.classList.add('animate');
}, 1000);

const sub = document.getElementById('sub');

    sub.addEventListener('mouseover', () => {
      sub.setAttribute('data-tooltip', 'Youtube');
    });

const follow = document.getElementById('follow');

    follow.addEventListener('mouseover', () => {
      follow.setAttribute('data-tooltip2', 'Twitter');
    });

const join = document.getElementById('join');

    join.addEventListener('mouseover', () => {
      join.setAttribute('data-tooltip3', 'Discord');
    });

const fakeBut2 = document.getElementById('fakeBut2');
const menuRight = document.getElementById('menuRight');
const but3 = document.getElementById('but3');

fakeBut2.addEventListener('click', function tabOpen() {
  menuRight.classList.remove('moved'); // remove the class before toggling
  menuRight.classList.add('movable');
  console.log('Button Clicked');
});

but3.addEventListener('click', function tabClose() {
  menuRight.classList.remove('movable'); // remove the class before toggling
  menuRight.classList.add('moved');
  console.log('Exited');// oooo kmssss
});

userField.addEventListener('input', () => {
  if (userField.value !== '') {
    fakeBut2.disabled = false;
  } else {
    fakeBut2.disabled = true;
  }
});

userField.addEventListener("keydown", function(typed){
  if(typed.keyCode === 13 && userField.value === "") {
    typed.preventDefault();
  } else if (typed.keyCode === 13) {
    console.log('Entered ${username}');
  userField.classList.add("fade-out");
  nameHere.classList.add("fade-out");
  thanks.classList.add("notfade-in3");

  setTimeout(function() {
    userField.remove();
    userField.disabled = true;
  nameHere.remove();
    nameHere.disabled = true;
  }, 1000);
  }
});

document.body.appendChild(yourName);

userField.addEventListener('input', () => {
  const userName = userField.value;
  yourName.textContent = `Hello, ${userName}!`;
});

menuRight.appendChild(yourName);

yourName.style.fontFamily = 'Digital, sans-serif';
yourName.style.fontSize = '1em';
yourName.style.color = 'rgba(133, 255, 253, 0.9)'
yourName.style.letterSpacing = '0.3em';
yourName.style.textShadow = '0 0 20px';
yourName.style.position = 'absolute';
yourName.style.bottom = '87.8%';
yourName.style.left = '5%';

const arts = document.getElementById('arts');
const Xclose = document.getElementById('X');

arts.addEventListener('click', function(draws){
  drawings.classList.remove('showDown');
  drawings.classList.add('showUp');
});

Xclose.addEventListener('click', function(draws){
  drawings.classList.remove('showUp');
  drawings.classList.add('showDown');
});