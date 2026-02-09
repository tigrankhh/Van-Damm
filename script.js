const jokeElement = document.getElementById('joke-display'); // Adjust ID as needed
const jokeBtn = document.getElementById('joke-btn');

async function getChuckFact() {
    jokeElement.innerText = "Loading... Chuck is deciding your fate.";
    
    try {
        // Try hitting your new backend (or the direct API)
        const response = await fetch('http://localhost:5000/api/joke/random');
        
        if (!response.ok) throw new Error("Chuck blocked the internet.");
        
        const data = await response.json();
        jokeElement.innerText = data.value;
        
    } catch (error) {
        console.log("Global Network Alert: Switching to Internal Wisdom.", error);
        
        // FALLBACK: Load from your internal_wisdom.json
        try {
            const localRes = await fetch('./internal_wisdom.json');
            const localData = await localRes.json();
            const randomIdx = Math.floor(Math.random() * localData.jokes.length);
            
            jokeElement.innerText = localData.jokes[randomIdx] + " (Internal Wisdom)";
        } catch (localErr) {
            jokeElement.innerText = "Error: Even the backup couldn't survive Chuck.";
        }
    }
}

jokeBtn.addEventListener('click', getChuckFact);
