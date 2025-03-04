const navline = document.querySelector('.navline');
const navbar = document.querySelector('.navigator');
const navitems = document.querySelector('.navlist');
const container1 = document.querySelector('.container1');
//idk how to use forEach so I'll just do the eye burning way.
const item1 = document.querySelector('.item1');
const item2 = document.querySelector('.item2');
const item3 = document.querySelector('.item3');

item1.addEventListener('click', ()=>{
    navline.style.left =  "24%";
    container1.style.left = "50%";
});

item2.addEventListener('click', ()=>{
    navline.style.left =  "44%";
    container1.style.left = "-50%";
});

item3.addEventListener('click', ()=>{
     navline.style.left =  "64%";
     container1.style.left = "-150%";
});

const youtube = document.querySelector('.youtube');
const discord = document.querySelector('.discord');
const twitter = document.querySelector('.twitter');

youtube.addEventListener('click', ()=>{
    window.location.href = "https://www.youtube.com/@the.robotbobby/featured"
});

discord.addEventListener('click', ()=>{
    window.location.href = "https://discord.gg/DBrTbRPPjF"
});

twitter.addEventListener('click', ()=>{
    window.location.href = "https://twitter.com/TheRobot_Bobby"
});