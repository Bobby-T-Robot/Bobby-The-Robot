const slideIn = document.querySelector('.slide-in-welcome');
const fadeIn = document.querySelector('.fade-in');
const fadeIn2 = document.querySelector('.fade-in2');
const abil = document.querySelector('.abil');
const abil2 = document.querySelector('.abil2');

setTimeout(() =>{
abil.classList.add('animate');
}, 3000);

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