/* ===========================================
   HeartStoryCM
   app.js
   Version 1.0
=========================================== */

"use strict";

/* ---------------- Loader ---------------- */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

    }, 1500);

});


/* ---------------- Mouse Glow ---------------- */

const mouseGlow = document.getElementById("mouseGlow");

document.addEventListener("mousemove", (e) => {

    mouseGlow.style.left = e.clientX + "px";

    mouseGlow.style.top = e.clientY + "px";

});


/* ---------------- Floating Hearts ---------------- */

const heartContainer = document.getElementById("hearts");

const heartIcons = [

"❤️",
"💕",
"💖",
"💗",
"💘",
"💝"

];

function createHeart(){

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = heartIcons[Math.floor(Math.random()*heartIcons.length)];

    heart.style.left = Math.random()*100 + "vw";

    heart.style.fontSize = (18 + Math.random()*22) + "px";

    heart.style.animationDuration = (8 + Math.random()*6) + "s";

    heart.style.opacity = Math.random();

    heartContainer.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },14000);

}

setInterval(createHeart,250);


/* ---------------- Stars ---------------- */

const stars = document.getElementById("stars");

for(let i=0;i<120;i++){

    const star=document.createElement("span");

    star.style.position="absolute";

    star.style.width="2px";

    star.style.height="2px";

    star.style.borderRadius="50%";

    star.style.background="#ffffff";

    star.style.left=Math.random()*100+"%";

    star.style.top=Math.random()*100+"%";

    star.style.opacity=Math.random();

    stars.appendChild(star);

}
