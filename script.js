document.addEventListener("DOMContentLoaded", () => {
  const flipbook = document.getElementById('flipbook');

  if (!flipbook || typeof $ === "undefined" || !$(flipbook).turn) return;

  // Replace with your GitHub username and repository
  const repoUser = "pharmadesignshub";
  const repoName = "pharmadesignshub.gethub.io";
  const folderPath = "assets/portfolio";

  const apiURL = `https://api.github.com/repos/${repoUser}/${repoName}/contents/${folderPath}`;

  fetch(apiURL)
    .then(res => res.json())
    .then(files => {
      files.forEach(file => {
        if (file.name.match(/\.(jpg|jpeg|png|gif)$/i)) {
          const page = document.createElement('div');
          const image = document.createElement('img');
          image.src = file.download_url;
          image.alt = "Portfolio page";
          page.appendChild(image);
          flipbook.appendChild(page);
        }
      });

      $(flipbook).turn({
        width: 800,
        height: 400,
        autoCenter: true
      });
    })
    .catch(err => console.error("Error fetching portfolio images:", err));
});
