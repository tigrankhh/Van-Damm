async function getDammeWisdom() {
    const jokeDisplay = document.getElementById('joke-display');
    jokeDisplay.innerText = "Focusing... Analyzing the potential of the air..."; //

    try {
        const response = await fetch('https://api.chucknorris.io/jokes/random'); //
        const data = await response.json();

        // Replace 'Chuck Norris' with your pet's name
        let dammeifiedJoke = data.value.replace(/Chuck Norris/g, "Jean-Claw Van Damme"); //
        jokeDisplay.innerText = `"${dammeifiedJoke}"`; //

    } catch (error) {
        jokeDisplay.innerText = "The connection snapped like a bad stunt."; //
    }
}
