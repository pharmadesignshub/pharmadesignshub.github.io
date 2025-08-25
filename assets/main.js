(function(){
  const navToggle = document.getElementById('navToggle');
  const siteNav = document.getElementById('siteNav');
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  if (navToggle && siteNav){
    navToggle.addEventListener('click', () => {
      const isOpen = siteNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  // Close nav on link click (mobile)
  if (siteNav){
    siteNav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        siteNav.classList.remove('open');
        navToggle?.setAttribute('aria-expanded','false');
      });
    });
  }
})();
