document.addEventListener("DOMContentLoaded", () => {
  const flipbook = document.getElementById('flipbook');

  // Fetch portfolio.json
  fetch('portfolio.json')
    .then(response => response.json())
    .then(data => {
      const images = data.images;
      if (flipbook && typeof $ !== "undefined" && $(flipbook).turn) {
        // Add each image as a page
        images.forEach(img => {
          const page = document.createElement('div');
          const image = document.createElement('img');
          image.src = img;
          image.alt = "Portfolio page";
          page.appendChild(image);
          flipbook.appendChild(page);
        });

        // Initialize Turn.js
        $(flipbook).turn({
          width: 800,
          height: 400,
          autoCenter: true
        });
      }
    })
    .catch(err => console.error("Error loading portfolio.json:", err));
});
