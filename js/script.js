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
    if (currentPage === href) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");  // Remove the active class from non-matching links
    }
  });
}
