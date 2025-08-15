$(document).ready(function() {
    const totalPages = 5; // Update this if you add/remove images
    const flipbook = $('#flipbook');

    for (let i = 1; i <= totalPages; i++) {
        const page = $('<div class="page"></div>');
        const img = $('<img>').attr('src', `assets/portfolio/page${i}.jpg`).attr('alt', `Page ${i}`);
        page.append(img);
        flipbook.append(page);
    }

    flipbook.turn({
        width: 800,
        height: 400,
        autoCenter: true,
        gradients: true,
        acceleration: true
    });
});
