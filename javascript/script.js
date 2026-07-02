// script.js - Versão otimizada (mouse follow)
const elemento = document.querySelector('.container');
let targetX = 0, targetY = 0;
let currentX = 0, currentY = 0;
let ticking = false;

function updatePosition() {
    currentX += (targetX - currentX) * 0.065;
    currentY += (targetY - currentY) * 0.065;

    elemento.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
    
    ticking = false;
}

window.addEventListener('mousemove', (e) => {
    const centroX = window.innerWidth / 2;
    const centroY = window.innerHeight / 2;

    targetX = (e.clientX - centroX) / 180;
    targetY = (e.clientY - centroY) / 180;

    if (!ticking) {
        requestAnimationFrame(updatePosition);
        ticking = true;
    }
});

let lastTouch = 0;
window.addEventListener('touchmove', (e) => {
    if (Date.now() - lastTouch > 16) {
        const touch = e.touches[0];
        const centroX = window.innerWidth / 2;
        const centroY = window.innerHeight / 2;

        targetX = (touch.clientX - centroX) / 420;
        targetY = (touch.clientY - centroY) / 420;
        lastTouch = Date.now();
    }
}, { passive: true });

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const linksItem = document.querySelectorAll('.nav-links a');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('aberto');
    navLinks.classList.toggle('ativo');
});

linksItem.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('aberto');
        navLinks.classList.remove('ativo');
    });
});