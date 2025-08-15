document.addEventListener("DOMContentLoaded", () => {
    const flipbook = document.getElementById('flipbook');

    // Number of images in your portfolio folder
    const totalPages = 5;  // Change this to match your images

    for (let i = 1; i <= totalPages; i++) {
        const page = document.createElement('div');
        const img = document.createElement('img');
        img.src = `assets/portfolio/page${i}.jpg`; // Make sure images are named page1.jpg, page2.jpg, etc.
        img.alt = `Portfolio Page ${i}`;
        page.appendChild(img);
        flipbook.appendChild(page);
    }

    // Initialize flipbook
    $('#flipbook').turn({
        width: 800,
        height: 400,
        autoCenter: true
    });
});
