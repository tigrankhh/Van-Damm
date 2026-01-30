let currentStrength = 10;

function updateBar(val) {
    currentStrength = Math.min(currentStrength + val, 100);
    document.getElementById('strength-bar').style.width = currentStrength + "%";
}

function doSplits() {
    const pet = document.querySelector('.game-container');
    const display = document.getElementById('joke-display');
    
    pet.classList.add('doing-splits');
    display.innerText = "HNNNNGGGH... This is the art of the split.";
    updateBar(10);

    setTimeout(() => {
        pet.classList.remove('doing-splits');
        display.innerText = "Centered. Focused. Stronger.";
    }, 3000);
}
