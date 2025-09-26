// Dynamically include nav and footer
document.addEventListener("DOMContentLoaded", function () {
  const includes = document.querySelectorAll("[data-include]");
  includes.forEach(async (el) => {
    const file = el.getAttribute("data-include");
    const res = await fetch(file);
    if (res.ok) {
      el.innerHTML = await res.text();
      // lucide.createIcons?.(); // Render Lucide icons
      highlightActivePage(); // Call the function after nav is loaded
    }
  });
  
  // Toggle hamburger menu
  const menuToggle = document.querySelector('.menu-toggle');
  if (menuToggle) {
    menuToggle.addEventListener('click', toggleMenu);
  }
});

// Toggle hamburger menu
function toggleMenu() {
  const navLinks = document.getElementById("nav-links");
  if (navLinks) {
    navLinks.classList.toggle("show");
  }
}

// Function to highlight the active menu item
function highlightActivePage() {
  const currentPage = window.location.pathname.split("/").pop(); // Get the current page name
  const navLinks = document.querySelectorAll("nav ul li a");

  navLinks.forEach(link => {
    const href = link.getAttribute("href");

    // If the link's href matches the current page, add the "active" class
    if (currentPage.replace(".html","") === href.replace(".html","")) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");  // Remove the active class from non-matching links
    }
  });
}

// Simplified scroll effect for heartfulness tiles [in case we don't want sticky effect]
(function() {
  const section = document.querySelector('.heartfulness-section');
  if (!section) return;
  const tiles = section.querySelectorAll('.heartfulness-tile');

  function handleScroll() {
    tiles.forEach((tile, i) => {
      const rect = tile.getBoundingClientRect();
      const scrollMag = (rect.top - window.innerHeight / 2) / window.innerHeight;
      // Simple translateY effect
      tile.style.transform = `translateY(${scrollMag * 30}px)`;
      const img = tile.querySelector('.tile-img');
      if (img) {
        img.style.transform = `translateY(${scrollMag * 15}px)`;
      }
      const content = tile.querySelector('.tile-content');
      if (content) {
        content.style.transform = `translateY(${scrollMag * -10}px)`;
      }
    });
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
})();

// Each tile animates in sequence, but no overlap (no sticky)
(function() {
  const section = document.querySelector('.heartfulness-section');
  if (!section) return;
  const tiles = Array.from(section.querySelectorAll('.heartfulness-tile'));
  if (tiles.length === 0) return;

  // Remove sticky and z-index from tiles if previously set
  tiles.forEach(tile => {
    tile.style.position = '';
    tile.style.top = '';
    tile.style.zIndex = '';
    tile.style.marginBottom = '';
    tile.style.transition = 'transform 0.5s';
    tile.style.opacity = '1';
  });

  function handleScroll() {
    const winH = window.innerHeight;
    tiles.forEach((tile, i) => {
      const rect = tile.getBoundingClientRect();
      const scrollMag = (rect.top - winH / 2) / winH;
      // Only scale the tile in view, no overlap
      if (rect.top < winH && rect.bottom > 0) {
        tile.style.transform = 'scale(1)';
      } else {
        tile.style.transform = 'scale(0.97)';
      }
    });
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  window.addEventListener('resize', handleScroll);
  handleScroll();
})();
