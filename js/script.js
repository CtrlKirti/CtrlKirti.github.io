// Early check for eco mode to prevent visual flash.
if (localStorage.getItem("eco-mode") === "true") {
  document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("eco-mode");
  });
}

// Dynamically include nav and footer.
document.addEventListener("DOMContentLoaded", async function () {
  const includes = document.querySelectorAll("[data-include]");

  await Promise.all(
    Array.from(includes).map(async (el) => {
      const file = el.getAttribute("data-include");
      if (!file) return;

      const res = await fetch(file);
      if (res.ok) {
        el.innerHTML = await res.text();
      }
    })
  );

  initEcoMode();
  highlightActivePage();
  if (window.lucide?.createIcons) {
    window.lucide.createIcons();
  }
});

function initEcoMode() {
  const ecoToggleBtn = document.getElementById("eco-toggle");
  if (!ecoToggleBtn || ecoToggleBtn.dataset.initialized) return;

  ecoToggleBtn.dataset.initialized = "true";
  const iconEl = ecoToggleBtn.querySelector(".eco-icon");
  const stateEl = ecoToggleBtn.querySelector(".eco-state");

  const isEcoMode = localStorage.getItem("eco-mode") === "true";
  if (isEcoMode) {
    document.body.classList.add("eco-mode");
  }
  setEcoToggleState(ecoToggleBtn, iconEl, stateEl, isEcoMode);

  ecoToggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("eco-mode");
    const isActive = document.body.classList.contains("eco-mode");
    localStorage.setItem("eco-mode", isActive);
    setEcoToggleState(ecoToggleBtn, iconEl, stateEl, isActive);
  });
}

function setEcoToggleState(buttonEl, iconEl, stateEl, isEnabled) {
  if (iconEl) {
    iconEl.textContent = isEnabled ? "☀️" : "🌱";
  }
  if (stateEl) {
    stateEl.textContent = isEnabled ? "On" : "Off";
  }
  if (buttonEl) {
    buttonEl.setAttribute("aria-pressed", isEnabled ? "true" : "false");
  }
}

function toggleMenu() {
  const navLinks = document.getElementById("nav-links");
  if (navLinks) {
    navLinks.classList.toggle("show");
  }
}

// Function to highlight the active menu item
function highlightActivePage() {
  const currentPage = window.location.pathname.split("/").pop();
  const normalizedCurrent = (!currentPage || currentPage === "index.html")
    ? "index"
    : currentPage.replace(".html", "");
  const navLinks = document.querySelectorAll("nav ul li a");

  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (!href) return;
    const normalizedHref = href.replace(".html", "");

    if (normalizedCurrent === normalizedHref || (normalizedCurrent === "home" && normalizedHref === "index")) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
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
