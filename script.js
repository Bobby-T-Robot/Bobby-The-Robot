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

//tabs
const arts = document.getElementById('arts');
const Xclose = document.getElementById('X');
const animos = document.getElementById('animos');
const anims = document.getElementById('anims');
const closeX = document.getElementById('Xx');
const closeXx = document.getElementById('Xxx');
const pixels = document.getElementById('pixels');
const pixelo = document.getElementById('pixelo');
const musico = document.getElementById('musico');
const musics = document.getElementById('musics');
const closeXxv = document.getElementById('Xxxv');

arts.addEventListener('click', function(draws){
  drawings.classList.remove('showDown');
  drawings.classList.add('showUp');
});

Xclose.addEventListener('click', function(undraws){
  drawings.classList.remove('showUp');
  drawings.classList.add('showDown');
});

animos.addEventListener('click', function(asses){
  anims.classList.remove('showDown');
  anims.classList.add('showUp');
});

closeX.addEventListener('click', function(unasses){
  anims.classList.remove('showUp');
  anims.classList.add('showDown');
});

pixelo.addEventListener('click', function(pisses){
  pixels.classList.remove('showDown');
  pixels.classList.add('showUp');
});

closeXx.addEventListener('click', function(unpisses){
  pixels.classList.remove('showUp');
  pixels.classList.add('showDown');
});

musico.addEventListener('click', function(shots){
  musics.classList.remove('showDown');
  musics.classList.add('showUp');
});

closeXxv.addEventListener('click', function(unshots){
  musics.classList.remove('showUp');
  musics.classList.add('showDown');
});

//passwords
const body = document.querySelector('body');
const pfp = document.getElementById('pfp');
const desc = document.getElementById('desc');
const names = document.getElementById('name');
const welcome = document.getElementById('welcome');
const nameRight = document.getElementById('nameRight');
const statuss = document.getElementById('status');

userField.addEventListener('input', function(passName){
  if(userField.value == "skid"){
    body.classList.add('skid');
    yourName.textContent = `Hello, Skiddy!`;
    pfp.remove();
    const skud = document.createElement('img');
    skud.src = "skidu.webp";
    skud.id = "pfp";
    document.body.appendChild(skud);
   } else if(userField.value == "nin"){
      pfp.remove();
    yourName.textContent = 'nin';
      desc.textContent = 'nin';
      body.classList.add('error');
  const bobbu = document.createElement("img");
  bobbu.src = "Bobbu.png";
  bobbu.id = "pfp";
  bobbu.style.position = 'relative';
  names.textContent = 'nin the Hedgehog!'
  names.style.paddingTop = '8em';
  document.body.appendChild(bobbu);
  welcome.remove();
  abil.textContent = 'nin';
  abil2. textContent = 'nin';
  statuss.textContent = 'nin';
  nameRight.textContent = 'nin';
    }
});

const audioPlayer = document.getElementById('audio-player');
const playPauseBtn = document.querySelector('.play-pause-btn');
const stopBtn = document.querySelector('.stop-btn');
const muteBtn = document.querySelector('.mute-button');
const volumeSlider = document.querySelector('#volume-slider');
const seekBar = document.querySelector('.seek-bar');
const playbtn = document.getElementById('play-btn');
const pausebtn = document.getElementById('pause-btn');
const unmute = document.getElementById('volumed');
const mutes = document.getElementById('muted');
const audioBar = document.querySelector('.audio-bar');
const audioBobby = document.getElementById('audioBobby');
const gradient = document.getElementById('gradient');

function ResetButton() {
  playbtn.classList.remove('fadeOuts');
  playbtn.classList.remove('fadeIns');
  pausebtn.classList.remove('fadeOuts');
  pausebtn.classList.remove('fadeIns');
}

function ResetStats() {
  audioBobby.style.opacity = 0;
  audioBobby.style.left = '50%';
  audioBar.style.width = '20em';
  audioBar.style.left = '20%';
  audioBar.style.backgroundColor = '#453d69';
  seekBar.style.width = '90%';
  gradient.classList.remove('dance');
}

//play/pause
playPauseBtn.addEventListener('click', () => {
  if (audioPlayer.paused) {
    audioPlayer.play();
  } else {
    audioPlayer.pause();
  }
  //style
  if (audioBobby.style.opacity = 1) {
    audioBobby.style.opacity = 1;
    audioBobby.style.left = 0;
    audioBar.style.width = '25em';
    audioBar.style.left = '13%';
    audioBar.style.backgroundColor = 'transparent';
    seekBar.style.width = '40%';
  }
  playbtn.classList.toggle('fadeOuts');
  pausebtn.classList.toggle('fadeIns');
  gradient.classList.toggle('dance');

  if (audioPlayer.paused){
    ResetStats();
  }
});

//stop
stopBtn.addEventListener('click', () => {
  audioPlayer.pause();
  audioPlayer.currentTime = 0;
  ResetButton();
});

//mute
muteBtn.addEventListener('click', () => {
  audioPlayer.muted = !audioPlayer.muted;
  unmute.classList.toggle('fadeOuts');
  mutes.classList.toggle('fadeIns');
});

//seek bar
audioPlayer.addEventListener('timeupdate', () => {
  const currentTime = audioPlayer.currentTime;
  const duration = audioPlayer.duration; 
  seekBar.value = (currentTime / duration) * 100;
});

seekBar.addEventListener('click', (e) => {
  const clickPosition = e.offsetX;
  const currentTime = (seekBar.value / 100) * audioPlayer.duration;
  audioPlayer.currentTime = currentTime;
});

audioPlayer.addEventListener('ended', () => {
  ResetButton();
  ResetStats();
});