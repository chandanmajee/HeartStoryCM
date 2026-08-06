// =====================================
// HeartStoryCM
// app.js
// =====================================

// Loader
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.visibility = "hidden";
  }, 1200);
});

// Mouse Glow
const glow = document.querySelector(".mouse-glow");

document.addEventListener("mousemove", (e) => {
  if (!glow) return;

  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});

// Floating Hearts
const hearts = document.getElementById("hearts");

const emojis = [
  "❤️",
  "💖",
  "💕",
  "💗",
  "💘",
  "💝"
];

function createHeart() {
  if (!hearts) return;

  const heart = document.createElement("div");

  heart.className = "heart";
  heart.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (18 + Math.random() * 25) + "px";
  heart.style.animationDuration = (8 + Math.random() * 5) + "s";
  heart.style.opacity = Math.random() * 0.7 + 0.3;

  hearts.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 13000);
}

setInterval(createHeart, 250);

// Start Button
const startBtn = document.getElementById("startBtn");

if (startBtn) {
  startBtn.addEventListener("click", () => {
    alert("Welcome to HeartStoryCM ❤️");
  });
}
