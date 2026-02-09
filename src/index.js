import internalWisdom from '../internal_wisdom.json';

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // If the request is for /api/joke, handle it here
    if (url.pathname === "/api/joke") {
      try {
        const response = await fetch("https://api.chucknorris.io/jokes/random");
        const data = await response.json();
        return new Response(JSON.stringify({ value: data.value }), {
          headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
        });
      } catch (err) {
        // FALLBACK: The Legend's internal wisdom
        const randomJoke = internalWisdom[Math.floor(Math.random() * internalWisdom.length)];
        return new Response(JSON.stringify({ value: randomJoke }), {
          headers: { "Content-Type": "application/json" }
        });
      }
    }

    // Otherwise, Cloudflare automatically serves your static files from /public
    return env.ASSETS.fetch(request);
  }
};
