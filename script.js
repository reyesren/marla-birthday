// Page flip functionality
const nextBtn = document.getElementById('nextBtn');
const nextBtn2 = document.getElementById('nextBtn2');
const nextBtn3 = document.getElementById('nextBtn3');
const nextBtn4 = document.getElementById('nextBtn4');
const nextBtn5 = document.getElementById('nextBtn5');
const nextBtn6 = document.getElementById('nextBtn6');
const nextBtn7 = document.getElementById('nextBtn7');
const nextBtn8 = document.getElementById('nextBtn8');
const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const page3 = document.getElementById('page3');
const page4 = document.getElementById('page4');
const page5 = document.getElementById('page5');
const page6 = document.getElementById('page6');
const page7 = document.getElementById('page7');
const page8 = document.getElementById('page8');
const page9 = document.getElementById('page9');
const confettiContainer = document.getElementById('confettiContainer');
const birthdayAudio = document.getElementById('birthdayAudio');
const birthdayAudio2 = document.getElementById('birthdayAudio2');

function createConfetti() {
    const colors = ['#ff6b9d', '#feca57', '#ff4757', '#ff6348', '#48dbfb', '#1dd1a1'];
    const confettiCount = 100;
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        
        // Start from center of screen (where card is)
        confetti.style.left = '50%';
        confetti.style.top = '50%';
        
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 0.1 + 's';
        confetti.style.animationDuration = (Math.random() * 1 + 1.5) + 's';
        
        // Random direction for explosion effect
        const angle = Math.random() * 360;
        const velocity = Math.random() * 300 + 200;
        confetti.style.setProperty('--angle', angle + 'deg');
        confetti.style.setProperty('--velocity', velocity + 'px');
        
        confettiContainer.appendChild(confetti);
    }
    
    // Remove confetti after animation
    setTimeout(() => {
        confettiContainer.innerHTML = '';
    }, 3000);
}

nextBtn.addEventListener('click', () => {
    // Start the flip animation
    page1.classList.add('flipping');
    
    // Play birthday audio immediately
    birthdayAudio.play().catch(err => {
        console.log('Audio playback failed:', err);
    });
    
    // After the flip animation completes, show the second page
    setTimeout(() => {
        page1.style.display = 'none';
        page2.classList.add('show');
        createConfetti();
    }, 500); // Match the animation duration
});

nextBtn2.addEventListener('click', () => {
    // Start the flip animation
    page2.classList.add('flipping');
    
    // Stop the birthday audio
    birthdayAudio.pause();
    
    // After the flip animation completes, show the third page
    setTimeout(() => {
        page2.style.display = 'none';
        page3.classList.add('show');
    }, 500); // Match the animation duration
});

nextBtn3.addEventListener('click', () => {
    // Start the flip animation
    page3.classList.add('flipping');
    
    // After the flip animation completes, show the fourth page
    setTimeout(() => {
        page3.style.display = 'none';
        page4.classList.add('show');
    }, 500); // Match the animation duration
});

nextBtn4.addEventListener('click', () => {
    // Start the flip animation
    page4.classList.add('flipping');
    
    // After the flip animation completes, show the fifth page
    setTimeout(() => {
        page4.style.display = 'none';
        page5.classList.add('show');
    }, 500); // Match the animation duration
});

nextBtn5.addEventListener('click', () => {
    // Start the flip animation
    page5.classList.add('flipping');
    
    // After the flip animation completes, show the sixth page
    setTimeout(() => {
        page5.style.display = 'none';
        page6.classList.add('show');
    }, 500); // Match the animation duration
});

if (nextBtn6) {
    nextBtn6.addEventListener('click', () => {
        // Start the flip animation
        page6.classList.add('flipping');
        
        // After the flip animation completes, show the seventh page
        setTimeout(() => {
            page6.style.display = 'none';
            page7.classList.add('show');
        }, 500); // Match the animation duration
    });
}

if (nextBtn7) {
    nextBtn7.addEventListener('click', () => {
        // Start the flip animation
        page7.classList.add('flipping');
        
        // After the flip animation completes, show the eighth page
        setTimeout(() => {
            page7.style.display = 'none';
            page8.classList.add('show');
        }, 500); // Match the animation duration
    });
}

if (nextBtn8) {
    nextBtn8.addEventListener('click', () => {
        // Start the flip animation
        page8.classList.add('flipping');
        
        // Play birthday audio 2
        birthdayAudio2.play().catch(err => {
            console.log('Audio playback failed:', err);
        });
        
        // After the flip animation completes, show the ninth page
        setTimeout(() => {
            page8.style.display = 'none';
            page9.classList.add('show');
            createConfetti();
        }, 500); // Match the animation duration
    });
}
