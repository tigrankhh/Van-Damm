let threatLevel = 20;

async function getChuckFact() {
    const display = document.getElementById('joke-display');
    const bar = document.getElementById('power-bar');
    
    display.style.color = "#444";
    display.innerText = "BYPASSING SECURITY...";

    try {
        const response = await fetch('https://api.chucknorris.io/jokes/random');
        const data = await response.json();
        
        display.style.color = "#eee";
        display.innerText = `"${data.value}"`;

        // Update meter
        threatLevel = Math.min(threatLevel + 8, 100);
        bar.style.width = threatLevel + "%";
        
        if (threatLevel > 80) bar.style.background = "#ff0000";

    } catch (error) {
        display.innerText = "CHUCK NORRIS REFUSED THE CONNECTION.";
    }
}
