document.addEventListener("DOMContentLoaded", () => {
  const flipbook = document.getElementById('flipbook');

  // List of portfolio images
  const portfolioImages = [
    "assets/portfolio/page1.jpg",
    "assets/portfolio/page2.jpg",
    "assets/portfolio/page3.jpg"
    // Just add new images here, OR see note below for auto-fetch via GitHub Pages
  ];

  if (flipbook && typeof $ !== "undefined" && $(flipbook).turn) {
    // Add images dynamically
    portfolioImages.forEach(img => {
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
});
