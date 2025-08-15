document.addEventListener("DOMContentLoaded", () => {
    const flipbook = document.getElementById('flipbook');
    const totalPages = 5; // Number of images in assets/portfolio

    flipbook.innerHTML = ""; // Clear any existing content

    // Add images as pages
    for (let i = 1; i <= totalPages; i++) {
        const page = document.createElement('div');
        const img = document.createElement('img');
        img.src = `assets/portfolio/page${i}.jpg`; // Ensure images are named page1.jpg, page2.jpg...
        img.alt = `Portfolio Page ${i}`;
        img.style.width = "100%";
        img.style.height = "100%";
        page.appendChild(img);
        flipbook.appendChild(page);
    }

    // Initialize turn.js
    $('#flipbook').turn({
        width: 800,
        height: 400,
        autoCenter: true,
        gradients: true,
        acceleration: true
    });
});
