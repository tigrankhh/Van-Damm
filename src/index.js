// src/index.js
import internalWisdom from '../internal_wisdom.json';

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/joke") {
      try {
        // High-speed fetch from the source
        const res = await fetch("https://api.chucknorris.io/jokes/random");
        if (!res.ok) throw new Error("Chuck is busy");
        
        const data = await res.json();
        return new Response(JSON.stringify({ value: data.value }), {
          headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
        });
      } catch (err) {
        // Globaaal fallback from your internal_wisdom.json
        const randomJoke = internalWisdom[Math.floor(Math.random() * internalWisdom.length)];
        return new Response(JSON.stringify({ value: randomJoke }), {
          headers: { "Content-Type": "application/json" }
        });
      }
    }

    // This handles serving your index.html and CSS from the 'public' folder
    return env.ASSETS.fetch(request);
  }
};
