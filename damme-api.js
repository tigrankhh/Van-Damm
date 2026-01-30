async function getDammeWisdom() {
    const display = document.getElementById('joke-display');
    display.innerText = "Connecting to the source of pure power...";

    try {
        const response = await fetch('https://api.chucknorris.io/jokes/random');
        const data = await response.json();
        // The magic replacement
        let wisdom = data.value.replace(/Chuck Norris/g, "Jean-Claw Van Damme");
        display.innerText = `"${wisdom}"`;
        
        if(typeof updateBar === 'function') updateBar(3); // Mental strength gains
    } catch (e) {
        display.innerText = "The signal is weak, but my roundhouse kick is strong. Try again.";
    }
}