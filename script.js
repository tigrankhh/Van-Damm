// Function for the split animation
function doSplits() {
    const pet = document.getElementById('pet');
    const display = document.getElementById('joke-display');
    
    pet.classList.add('doing-splits');
    display.innerText = "HNNNNGGGH... Focus. Tension. Result.";
    
    setTimeout(() => {
        pet.classList.remove('doing-splits');
        display.innerText = "I am centered.";
    }, 2000);
}

// Function to pull random jokes from internal_wisdom.json
async function tellJoke() {
    const display = document.getElementById('joke-display');
    
    try {
        const response = await fetch('internal_wisdom.json');
        const jokes = await response.json(); //
        
        // Select a random joke from your local list
        const randomIndex = Math.floor(Math.random() * jokes.length);
        display.innerText = `"${jokes[randomIndex]}"`;
    } catch (error) {
        display.innerText = "The scroll is empty. Try again.";
    }
}
