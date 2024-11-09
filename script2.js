const charList = document.querySelector(".chars");
const desc = document.querySelector(".description");
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
        desc.textContent = 'Bobby is very hot ok?';
    } else if(currentOffset === -42.25){
        desc.textContent = 'is bobby hot?';
    } else if(currentOffset === -84.50){
        desc.textContent = 'nin niiinn';
    }
});

