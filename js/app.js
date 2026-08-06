// =====================================
// HeartStoryCM
// app.js Part 1
// =====================================

// Loader

window.addEventListener("load",()=>{

const loader=document.getElementById("loader");

setTimeout(()=>{

loader.style.opacity="0";

loader.style.visibility="hidden";

},1200);

});


// Mouse Glow

const glow=document.querySelector(".mouse-glow");

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

});


// Floating Hearts

const hearts=document.createElement("div");

hearts.id="hearts";

document.body.appendChild(hearts);


const emojis=[

"❤️",

"💖",

"💕",

"💗",

"💘",

"💝"

];


function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML=

emojis[Math.floor(Math.random()*emojis.length)];

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(18+Math.random()*35)+"px";

heart.style.animationDuration=(8+Math.random()*6)+"s";

heart.style.opacity=Math.random();

document.getElementById("hearts").appendChild(heart);

setTimeout(()=>{

heart.remove();

},14000);

}


setInterval(createHeart,250);
