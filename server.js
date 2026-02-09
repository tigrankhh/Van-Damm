const express = require('express');
const cors = require('cors');
const axios = require('axios');
const internalWisdom = require('./internal_wisdom.json');

const app = express();
app.use(cors());

app.get('/api/joke', async (req, res) => {
    try {
        const response = await axios.get('https://api.chucknorris.io/jokes/random');
        res.json({ joke: response.data.value });
    } catch (err) {
        // If Chuck blocks the internet, use your array!
        const randomJoke = internalWisdom[Math.floor(Math.random() * internalWisdom.length)];
        res.json({ joke: randomJoke });
    }
});

app.listen(5000, () => console.log('Globaaal backend spinning on port 5000'));
