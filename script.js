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

//triggers
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
  songSelect.style.marginLeft = '22%';
}

function discTrigger(){
  disc.style.opacity = 1;
  disc.style.top = '17%';
  disc.classList.add('discSpin');
  disc.style.animationPlayState = 'running';
}

function discStop(){
  disc.style.opacity = 0;
  disc.style.top = '20%';
  disc.style.animationPlayState = 'paused';
}

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

//username
fakeBut2.addEventListener('mouseover', () => {
  if (userField.value === "") {
    userField.classList.toggle("shake");
  }
});

userField.addEventListener("keydown", function(typed){
  if(typed.key === "Enter" && userField.value === "") {
    typed.preventDefault();
  } else if (typed.key === "Enter" && userField.value.trim() !== '') {
    console.log('Entered ${username}');
  userField.classList.remove("shake");
  userField.classList.add("fade-out");
  nameHere.classList.add("fade-out");
  thanks.classList.add("notfade-in3");
  fakeBut2.disabled = false;

  setTimeout(function() {
    userField.remove();
    userField.disabled = true;
  nameHere.remove();
    nameHere.disabled = true;
  }, 1000);
  } else{
    fakeBut2.disabled = true;
  }
});

document.body.appendChild(yourName);

userField.addEventListener('input', () => {
  const userName = userField.value;
  yourName.textContent = `Hello, ${userName}!`;
});

menuRight.appendChild(yourName);

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
const prico = document.getElementById('prico');
const prices = document.getElementById('prices');
const Xbro = document.getElementById('Xbro');

//HAHAHAHAHA I'M NOT FIXING THIS THING ... anytime soon at least.
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
  ResetStats();
  ResetButton();
  discStop();
  audioPlayer.pause();
  audioPlayer.currentTime = 0;
});

prico.addEventListener('click', function(price){
  prices.classList.remove('showDown2');
  prices.classList.add('showUp2');
});

Xbro.addEventListener('click', function(price){
  prices.classList.remove('showUp2');
  prices.classList.add('showDown2');
});

const codeEnter = document.querySelector('.codeEnter');

//passwords
const body = document.querySelector('body');
const pfp = document.getElementById('pfp');
const desc = document.getElementById('desc');
const names = document.getElementById('name');
const welcome = document.getElementById('welcome');
const nameRight = document.getElementById('nameRight');
const statuss = document.getElementById('status');
const snf = document.getElementById('snf');
const snfA = document.querySelector('.snfA');
const game = document.querySelector('.secret');

codeEnter.addEventListener('input', function(passName){
  //skid
  if(codeEnter.value === "skid"){
    body.classList.add('skid');
    yourName.textContent = `Hello, Skiddy!`;
    pfp.remove();
    const skud = document.createElement('img');
    skud.src = "skidu.webp";
    skud.id = "pfp";
    document.body.appendChild(skud);
    //nin
   } else if(codeEnter.value === "nin"){
      pfp.remove();
    yourName.textContent = 'nin';
      desc.textContent = 'nin';
      body.classList.add('error');
  const bobbu = document.createElement("img");
  bobbu.src = "Bobbu.webp";
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
  //snf
    } else if(codeEnter.value === "snf"){
      snf.style.opacity = 1;
      snfA.play();
      setTimeout(() =>{
        window.location.href = "https://gamebanana.com/mods/44194";
      }, 4000);
    //games
    } else if(codeEnter.value === "t101"){
      codeEnter.addEventListener('keydown', function(cods){
        if(cods.key === "Enter"){
        codeEnter.value = "";
        game.style.opacity = 1;
        game.style.pointerEvents = 'all';
        game.disabled = false;
        }
      });
    }
});

//audio player
let isHovering = false;
let isPlaying = false;
const audioPlayer = document.querySelector('.audio-player');
const playPauseBtn = document.querySelector('.play-pause-btn');
const stopBtn = document.querySelector('.stop-btn');
const muteBtn = document.querySelector('.mute-button');
const seekBar = document.querySelector('.seek-bar');
const playbtn = document.querySelector('.play-btn');
const pausebtn = document.querySelector('.pause-btn');
const unmute = document.querySelector('.volumed');
const mutes = document.querySelector('.muted');
const audioBar = document.querySelector('.audio-bar');
const audioBobby = document.querySelector('.audioBobby');
const gradient = document.querySelector('.gradient');
const disc = document.querySelector('.disc');

//play/pause
playPauseBtn.addEventListener('click', () => {
  if (audioPlayer.paused) {
    audioPlayer.play();
    isPlaying = true;
  } else {
    audioPlayer.pause();
    isPlaying = false;
  }
  //style
  if (audioBobby.style.opacity = 1) {
    audioBobby.style.opacity = 1;
    audioBobby.style.left = 0;
    audioBar.style.width = '25em';
    audioBar.style.left = '13%';
    audioBar.style.backgroundColor = 'transparent';
    seekBar.style.width = '40%';
    songSelect.style.marginLeft = '29%';
  }
  playbtn.classList.toggle('fadeOuts');
  pausebtn.classList.toggle('fadeIns');
  gradient.classList.toggle('dance');
  discTrigger();

  if (audioPlayer.paused){
    ResetStats();
    discStop();
  }
});

//stop
stopBtn.addEventListener('click', () => {
  audioPlayer.pause();
  audioPlayer.currentTime = 0;
  ResetButton();
  ResetStats();
  discStop();
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
  discStop();
  isPlaying = false;
});

audioBar.addEventListener('mouseover', () => {
  isHovering = true;
  if (!isPlaying) {
    discTrigger();
  }
});

audioBar.addEventListener('mouseout', () => {
  isHovering = false;
  if (!isPlaying) {
    discStop();
  }
});

const songSelect = document.getElementById('song-select');
const audioSource = document.getElementById('audio-source');
const dance = document.querySelector('.dance');
const animationDurations = {
  'MUSIC/song-1.ogg': '0.75s',
  'MUSIC/song-2.ogg': '0.4286s',
  'MUSIC/song-3.ogg': '0.6s',
  'MUSIC/song-4.ogg': '0.6186s',
  'MUSIC/song-5.ogg': '0.4878s',
  'MUSIC/song-6.ogg': '0.6s',
  'MUSIC/song-7.ogg': '0.6316s',
  'MUSIC/song-8.ogg': '0.5455s',
  'MUSIC/song-9.ogg': '0.6s',
};

songSelect.addEventListener('change', (f) => {
  const selectedValue = f.target.value;
  audioSource.src = selectedValue;
  audioPlayer.load();
  audioPlayer.pause();
  discStop();
  ResetStats();
  ResetButton();
  audioPlayer.currentTime = 0;
  
  const defaultDuration = '1.5s'; // default animation duration
  
  gradient.style.animationDuration = animationDurations[songSelect.value] || defaultDuration;
});

songSelect.addEventListener('mouseover', (pls) => {
  if(!isPlaying) {
    pls.stopPropagation();
  }
});

/* UNUSED

const checker = document.getElementById('checkToggle');
const checkerboard = document.getElementById('checkerboard');
let isVisible = true;

function ButText(button) {
  if (button.innerText === "REMOVE CB") {
      button.innerText = "ADD CB";
  } else {
      button.innerText = "REMOVE CB";
  }
}


checker.addEventListener('click', () => {
  if (isVisible) {
      checkerboard.style.display = 'none';
  } else {
      checkerboard.style.display = 'block';
  }
  isVisible = !isVisible;
});*/

const Page2 = document.getElementById('PageLink');

//mobile stuff
var mobil = window.matchMedia("(max-width: 800px)");

if (mobil.matches){
  Page2.textContent = "CHARACTERS";
} else{
  Page2.textContent = "CHARACTER LORES";
}

const menuDesc = document.querySelector(".menuDesc");
const explain = document.querySelectorAll(".explain");

explain.forEach(button => {
  button.addEventListener('mouseenter', () => {
    menuDesc.textContent = button.getAttribute('data-text');
  });

  button.addEventListener('mouseleave', () => {
    menuDesc.textContent = "AVAILABLE: DRAWINGS ONLY";
  });
});

const gameBut = document.querySelector('.gameButton');

gameBut.addEventListener('click', () =>{
  window.location.href = "Games.html";
});