async function getDammeWisdom() {
    const display = document.getElementById('joke-display');
    display.innerText = "Reaching into the source of power...";

    try {
        const response = await fetch('https://api.chucknorris.io/jokes/random');
        const data = await response.json();
        // Replace Chuck with the Legend
        let wisdom = data.value.replace(/Chuck Norris/g, "Jean-Claw Van Damme");
        display.innerText = `"${wisdom}"`;
        updateBar(2);
    } catch (e) {
        display.innerText = "The connection is weak, but my spirit is strong. Try again.";
    }
}
