const countDownDate = new Date();
countDownDate.setDate(countDownDate.getDate() + 30);

setInterval(() => {
    const timerDisplay = document.getElementById("demo");
    const distance = countDownDate - new Date().getTime();
    
    if (distance < 0) {
        timerDisplay.innerHTML = "OFFER EXPIRED";
        timerDisplay.classList.add('expired');
        timerDisplay.style.color = '#999';
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    timerDisplay.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    timerDisplay.style.color = 'var(--secondary-color)';
    timerDisplay.style.fontWeight = 'bold';
    timerDisplay.style.animation = 'pulse 2s infinite';
}, 1000);