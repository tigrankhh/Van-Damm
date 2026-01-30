async function getChuckFact() {
    const display = document.getElementById('joke-display');
    display.innerText = "ACCESSING CLASSIFIED SATELLITE...";

    try {
        const response = await fetch('https://api.chucknorris.io/jokes/random');
        const data = await response.json();
        
        display.innerText = `"${data.value}"`;
        updateThreat(5); // Mental threat increases

    } catch (e) {
        display.innerText = "ERROR: Chuck Norris blocked the internet's access to him.";
    }
}
