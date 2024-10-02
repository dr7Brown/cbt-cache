document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const responseDiv = document.getElementById("response");
    responseDiv.textContent = `Thank you, ${name}! We have received your message.`;
  });

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response; // If in cache, return the cached version
      }
      return fetch(event.request).then((response) => {
        // Cache the fetched response for future use
        cache.put(event.request, response.clone());
        return response;
      });
    })
  );
});
