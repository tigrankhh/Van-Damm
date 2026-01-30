let strength = 10;

function updateStrength(amount) {
    strength = Math.min(strength + amount, 100);
    document.getElementById('strength-bar').style.width = strength + "%";
}

function doSplits() {
    const pet = document.getElementById('pet');
    const display = document.getElementById('joke-display');
    
    pet.classList.add('doing-splits');
    display.innerText = "HNNNNGGGH... FEEL THE TENSION!";
    
    updateStrength(5); // Each split adds 5 strength

    setTimeout(() => {
        pet.classList.remove('doing-splits');
        display.innerText = "I am centered. My hamstrings are like steel cables.";
    }, 3000);
}