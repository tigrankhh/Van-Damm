const jokeElement = document.getElementById('joke-display');
const jokeBtn = document.getElementById('joke-btn');

async function getChuckFact() {
    jokeElement.innerText = "Loading... Chuck is deciding your fate.";
    
    try {
        // 1. Try your backend/API first
        // Use a relative path so it works everywhere in the globaaal network!
        const response = await fetch('/api/joke/random');
        
        if (!response.ok) throw new Error("Connection refused by the legend.");
        
        const data = await response.json();
        // The official API uses .value, so we stick with that for the primary source
        jokeElement.innerText = data.value;
        
    } catch (error) {
        console.warn("Global Network Alert: Switching to Internal Wisdom.", error.message);
        
        // 2. FALLBACK: Load from your actual internal_wisdom.json
        try {
            const localRes = await fetch('./internal_wisdom.json');
            const wisdomArray = await localRes.json(); // This is now a direct array
            
            // Pick a random index from the array
            const randomIdx = Math.floor(Math.random() * wisdomArray.length);
            
            // Display the string directly from your list
            jokeElement.innerText = wisdomArray[randomIdx];
            
            console.log("Internal Wisdom deployed successfully.");
        } catch (localErr) {
            jokeElement.innerText = "Error: Even the backup couldn't survive Chuck.";
            console.error("Critical failure:", localErr);
        }
    }
}

jokeBtn.addEventListener('click', getChuckFact);
