gsap.registerPlugin(ScrollTrigger);
// =========================
// HeartStoryCM
// app.js
// =========================


// Floating Hearts

const heartsContainer = document.getElementById("hearts");

function createHeart(){

const heart = document.createElement("div");

heart.classList.add("heart");

heart.innerHTML = ["❤️","💖","💕","💗","💘"][Math.floor(Math.random()*5)];

heart.style.left = Math.random()*100+"%";

heart.style.fontSize = (20+Math.random()*35)+"px";

heart.style.animationDuration = (6+Math.random()*6)+"s";

heart.style.opacity = Math.random();

heart.style.filter = "drop-shadow(0 0 8px rgba(255,255,255,.5))";

heartsContainer.appendChild(heart);

setTimeout(()=>{

heart.remove();

},12000);

}

// Every 350ms new heart

setInterval(createHeart,350);


// =========================
// GSAP Animations
// =========================

gsap.from(".logo",{

y:-80,

opacity:0,

duration:1

});

gsap.from("nav a",{

y:-50,

opacity:0,

stagger:.12,

duration:.8,

delay:.2

});

gsap.from(".hero h1",{

y:80,

opacity:0,

duration:1,

delay:.4

});

gsap.from(".hero p",{

y:60,

opacity:0,

duration:1,

delay:.7

});

gsap.from("#createBtn",{

scale:.5,

opacity:0,

duration:.8,

delay:1

});

gsap.from(".card",{

y:60,

opacity:0,

stagger:.2,

duration:1,

scrollTrigger:".features"

});


// =========================
// Hero Button
// =========================

const createBtn=document.getElementById("createBtn");

createBtn.addEventListener("mouseenter",()=>{

gsap.to(createBtn,{

scale:1.08,

duration:.25

});

});

createBtn.addEventListener("mouseleave",()=>{

gsap.to(createBtn,{

scale:1,

duration:.25

});

});


// =========================
// Continue Button
// =========================

document.getElementById("continueBtn").onclick=()=>{

gsap.to("body",{

opacity:0,

duration:.6,

onComplete(){

window.location.href="create.html";

}

});

};


// =========================
// Mouse Glow
// =========================

document.addEventListener("mousemove",(e)=>{

document.documentElement.style.setProperty("--x",e.clientX+"px");

document.documentElement.style.setProperty("--y",e.clientY+"px");

});
