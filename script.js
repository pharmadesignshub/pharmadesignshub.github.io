document.addEventListener("DOMContentLoaded", () => {
    const flipbook = document.getElementById('flipbook');
    const totalPages = 5; // Change this to match your number of images

    // Clear existing content just in case
    flipbook.innerHTML = "";

    // Add images as pages
    for (let i = 1; i <= totalPages; i++) {
        const page = document.createElement('div');
        const img = document.createElement('img');
        img.src = `assets/portfolio/page${i}.jpg`;
        img.alt = `Portfolio Page ${i}`;
        img.style.width = "100%"; // Make image fit the page
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
