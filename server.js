const express = require('express');
const axios = require('axios');
const cors = require('cors');
const path = require('path');
const internalWisdom = require('./internal_wisdom.json');

const app = express();
const PORT = 5000;

app.use(cors());

// --- 1. SERVE STATIC FILES ---
// This tells Express to look for index.html, style.css, etc. in your main folder
app.use(express.static(path.join(__dirname, './')));

// --- 2. THE JOKE ENDPOINT ---
app.get('/api/joke/random', async (req, res) => {
    try {
        const response = await axios.get('https://api.chucknorris.io/jokes/random');
        res.json({ value: response.data.value });
    } catch (err) {
        console.log("API failed, using internal wisdom...");
        const randomJoke = internalWisdom[Math.floor(Math.random() * internalWisdom.length)];
        res.json({ value: randomJoke });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Network Headquarters live at: http://localhost:${PORT}`);
});
