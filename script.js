function updateCountdown() {
    const startDate = new Date('2024-08-20T00:00:00');
    const now = new Date();
    const diffTime = now - startDate;

    // Calcula os anos, meses, dias, horas, minutos e segundos
    const years = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365.25));
    const months = Math.floor((diffTime % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
    const days = Math.floor((diffTime % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diffTime % (1000 * 60)) / 1000);

    let countdownText;
    if (diffTime > 0) {
        countdownText = `${years} anos ${months} meses ${days} dias ${hours} horas ${minutes} minutos ${seconds} segundos`;
    } else {
        countdownText = 'A data ainda não chegou.';
    }
    
    document.getElementById('countdown').innerText = countdownText;
}

// Atualiza a cada 1 segundo
updateCountdown(); // Executa imediatamente para não esperar 1 segundo
setInterval(updateCountdown, 1000);
