// JavaScript Interactive Functionalities

// 1. Floating Canvas Effect (Pastel Petals & Star Dust)
const canvas = document.getElementById('canvas-bg');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const particles = [];
const colors = ['#FFB7B2', '#FFDAC1', '#B5EAD7', '#E2F0D9'];

for (let i = 0; i < 25; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 5 + 3,
        color: colors[Math.floor(Math.random() * colors.length)],
        speedY: Math.random() * 1 + 0.3,
        speedX: Math.sin(Math.random() * Math.PI) * 0.5
    });
}

function animateCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = 0.6;
        ctx.fill();

        p.y += p.speedY;
        p.x += p.speedX;

        if (p.y > canvas.height) {
            p.y = -10;
            p.x = Math.random() * canvas.width;
        }
    });
    requestAnimationFrame(animateCanvas);
}
animateCanvas();

// 2. Audio Toggle Functionality
const musicBtn = document.getElementById('music-toggle');
const musicText = document.getElementById('music-text');
const bgMusic = document.getElementById('bg-music');
let isPlaying = false;

musicBtn.addEventListener('click', () => {
    if (!isPlaying) {
        bgMusic.play().then(() => {
            isPlaying = true;
            musicText.textContent = "Tắt Nhạc Piano";
            musicBtn.classList.replace('bg-[#FFB7B2]', 'bg-[#E5989B]');
        }).catch(err => {
            console.log("Audio playback error:", err);
        });
    } else {
        bgMusic.pause();
        isPlaying = false;
        musicText.textContent = "Bật Nhạc Piano";
        musicBtn.classList.replace('bg-[#E5989B]', 'bg-[#FFB7B2]');
    }
});

// 3. 3D Card Flip Functionality
function flipCard(container) {
    container.classList.toggle('flipped');
}

// 4. Interactive Flower Info
function showFlowerInfo(text) {
    const infoBox = document.getElementById('flower-info');
    infoBox.innerHTML = `✨ <b>${text}</b>`;
}

// 5. Interactive Wish Tree (Cây Tri Ân)
function addWish() {
    const input = document.getElementById('wish-input');
    const text = input.value.trim();
    if (text !== '') {
        const tree = document.getElementById('tree-container');
        const leaf = document.createElement('span');
        
        const colors = [
            'bg-[#B5EAD7] text-[#2D6A4F]', 
            'bg-[#FFDAC1] text-[#7D5A50]', 
            'bg-[#FFB7B2] text-white',
            'bg-[#E2F0D9] text-[#557B46]'
        ];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        
        leaf.className = `${randomColor} px-3 py-1.5 rounded-full text-xs font-['Patrick_Hand'] text-base shadow-sm transform hover:scale-110 transition-transform cursor-pointer animate-bounce`;
        leaf.textContent = `🍃 ${text}`;
        
        tree.appendChild(leaf);
        input.value = '';
    }
}
