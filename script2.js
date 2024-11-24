const charList = document.querySelector(".chars");
const desc = document.querySelector(".description");
const black = document.getElementById("black");
const choosed = document.getElementById('choosed');
const moveUp = document.querySelector('.moveUp');
const moveDown = document.querySelector('.moveDown');
let currentOffset = 0;
var mobil = window.matchMedia("(max-width: 800px)");

//pc scrolling
document.addEventListener('keydown', function(event){
    event.preventDefault();
    if(currentOffset <= 0 && currentOffset >= -75 && event.key === "ArrowDown"){
        currentOffset -= 42.25;
        charList.style.transform = `translateY(${currentOffset}em)`;
    } else if(currentOffset <= -1 && event.key === "ArrowUp"){
        currentOffset += 42.25;
        charList.style.transform = `translateY(${currentOffset}em)`;
    }

    if(currentOffset === 0){
        desc.textContent = 'Bobby is a robot made out of flexible metal. The Prototype of Bobby was Called "T-101". Bobby is powered by the "THE FOUR ELEMENTS". The Scientist who made Bobby is still Unknown. Bobby was not made in Starlight Universe. He was brought there. His arms are Cone Shaped, his body is a cylinder, his head is a sphere, his eyes are oval screens and the "2 rings 1 sphere" below him is called "TWISTIES".';
    } else if(currentOffset === -42.25){
        desc.textContent = 'is bobby hot?';
    } else if(currentOffset === -84.50){
        desc.textContent = 'nin niiinn';
    }
});

//mobile scrolling
moveDown.addEventListener('click', () =>{
    if(currentOffset <= 0 && currentOffset >= -67){
        currentOffset -= 34.25;
        charList.style.transform = `translate(-8%, ${currentOffset}em)`;
    }
});

moveUp.addEventListener('click', () =>{
     if(currentOffset <= -1){
        currentOffset += 34.25;
        charList.style.transform = `translate(-8%, ${currentOffset}em)`;
    }
});

//pc character select
document.addEventListener('keydown', function(Bobby){
    if(Bobby.key === "Enter" && currentOffset === 0){
        choosed.play();
        black.style.opacity= 1;
        setTimeout(() =>{
            window.location.href = "Bobby.html";
          }, 2000);
    } else if(Bobby.key === "Enter" && currentOffset === -42.25){
        choosed.play();
        black.style.opacity= 1;
        setTimeout(() =>{
            window.location.href = "index.html";
          }, 2000);
    }
});

//mobile character select
const mobileBox = document.querySelector('.mobileBox');
const mobilSel = document.querySelector('.mobilSel');
const mobileDesc = document.querySelector('.mobileDesc');
const closeX = document.querySelector('.close');

charList.addEventListener('click', () =>{
    if (mobil.matches) {
        mobileBox.classList.add('boxappear');

        switch (currentOffset) {
            case 0:
                mobileDesc.textContent = 'Bobby is a robot made out of flexible metal. The Prototype of Bobby was Called "T-101". Bobby is powered by the "THE FOUR ELEMENTS". The Scientist who made Bobby is still Unknown. Bobby was not made in Starlight Universe. He was brought there. His arms are Cone Shaped, his body is a cylinder, his head is a sphere, his eyes are oval screens and the "2 rings 1 sphere" below him is called "TWISTIES".';
                        break;
                    case -34.25:
                        mobileDesc.textContent = 'mobile test';
                        break;
                    case -68.50:
                        mobileDesc.textContent = 'this text will appear on mobile';
        }
    }

    if(mobileBox.style.opacity === 1){
        moveDown.style.pointerEvents = 'none';
        moveUp.style.pointerEvents = 'none';
    } else{
        moveDown.style.pointerEvents = 'auto';
        moveUp.style.pointerEvents = 'auto';
    }
});

closeX.addEventListener('click', () =>{
    mobileBox.classList.remove('boxappear');
});

mobilSel.addEventListener('click', () =>{
    if(currentOffset === 0 && mobil.matches){
        choosed.play();
        black.style.opacity= 1;
        setTimeout(() =>{
            window.location.href = "Bobby.html";
          }, 2000);
    } else if(currentOffset === -42.25 && mobil.matches){
        choosed.play();
        black.style.opacity= 1;
        setTimeout(() =>{
            window.location.href = "index.html";
          }, 2000);
    }
});

const here = document.getElementById('here');
const startbg = document.getElementById('startbg');
const cltext = document.getElementById('CLICK');
const menuMusic = document.getElementById('menuMusic');
const musicToggle = document.querySelector('.musicToggle');
const musicToggleP = document.querySelector('.musicToggleP');

here.addEventListener('click', () =>{
    menuMusic.play();
    startbg.style.opacity = 0;
    startbg.style.pointerEvents = 'none';
    cltext.style.pointerEvents = 'none';
    here.style.pointerEvents = 'none';
    
    setTimeout(() =>{
        startbg.remove();
        cltext.remove();
        here.remove();
    }, 1000);
});

musicToggle.addEventListener('click', function(){
    if (menuMusic.paused) {
      menuMusic.play();
      musicToggle.style.backgroundImage = "url(Pause.webp)";
    } else {
      menuMusic.pause();
      musicToggle.style.backgroundImage = "url(Play.webp)";
    }
});

//adding an unnecessary copy cuz it ain't working without it
musicToggleP.addEventListener('click', function(){
    if (menuMusic.paused) {
      menuMusic.play();
      musicToggleP.style.backgroundImage = "url(Pause.webp)";
    } else {
      menuMusic.pause();
      musicToggleP.style.backgroundImage = "url(Play.webp)";
    }
});