document.addEventListener("DOMContentLoaded", () => {
  const flipbook = document.getElementById('flipbook');
  if (flipbook && typeof $ !== "undefined" && $(flipbook).turn) {
    $(flipbook).turn({
      width: 800,
      height: 400,
      autoCenter: true
    });
  }
  console.log('PHARMADESIGNSHUB site loaded');
});
