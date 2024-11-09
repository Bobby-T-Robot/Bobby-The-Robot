const charList = document.querySelector(".chars");
const desc = document.querySelector(".description");
const black = document.getElementById("black");
const choosed = document.getElementById('choosed');
let currentOffset = 0;

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

const here = document.getElementById('here');
const startbg = document.getElementById('startbg');
const cltext = document.getElementById('CLICK');
const menuMusic = document.getElementById('menuMusic');

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