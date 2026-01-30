async function tellJoke() {
    const display = document.getElementById('joke-display');
    
    // Add a little tactical "loading" flicker
    display.innerText = "QUERYING INTERNAL ARCHIVES...";

    try {
        const response = await fetch('internal_wisdom.json');
        const facts = await response.json();
        
        // Pick a random fact
        const randomIndex = Math.floor(Math.random() * facts.length);
        
        // Display with a slight delay for "processing" feel
        setTimeout(() => {
            display.innerText = `"${facts[randomIndex]}"`;
            if(typeof updateThreat === 'function') updateThreat(2); 
        }, 300);

    } catch (error) {
        display.innerText = "ARCHIVE ENCRYPTED. CHUCK DOES NOT APPROVE.";
        console.error("Error loading local facts:", error);
    }
}
