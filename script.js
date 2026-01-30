let threatLevel = 25;

function updateThreat(val) {
    threatLevel = Math.min(threatLevel + val, 100);
    const bar = document.getElementById('threat-bar');
    bar.style.width = threatLevel + "%";
    
    if (threatLevel > 80) {
        bar.style.background = "red";
        bar.style.boxShadow = "0 0 15px red";
    }
}

function doRoundhouse() {
    const avatar = document.getElementById('chuck-avatar');
    const display = document.getElementById('joke-display');
    
    avatar.classList.add('kicking');
    display.innerText = "ROUNDHOUSE KICK INITIATED...";
    
    updateThreat(10);

    setTimeout(() => {
        avatar.classList.remove('kicking');
        display.innerText = "Justice has been served. The laws of physics have apologized.";
    }, 6000);
}
