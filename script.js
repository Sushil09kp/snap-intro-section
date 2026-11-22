document.addEventListener("DOMContentLoaded", () => {

  const openMenu = document.querySelector(".open-menu");
  const closeMenu = document.querySelector(".close-menu");
  const navMenu = document.querySelector(".nav-menu");
  const navOverlay = document.querySelector(".overlay");

  const dropdownButtons = document.querySelectorAll(".nav-dropdown");

  function openMobileMenu() {
    navMenu.classList.add("active");
    navOverlay.classList.add("active");
  }

  function closeMobileMenu() {
    navMenu.classList.remove("active");
    navOverlay.classList.remove("active");
  }

  if (openMenu && navMenu && navOverlay) {
    openMenu.addEventListener("click", openMobileMenu);
  }

  if (closeMenu) {
    closeMenu.addEventListener("click", closeMobileMenu);
  }

  if (navOverlay) {
    navOverlay.addEventListener("click", closeMobileMenu);
  }

  dropdownButtons.forEach((button) => {

    button.addEventListener("click", (event) => {

      event.stopPropagation();

      const currentItem = button.closest(".nav-item");
      const dropdown = currentItem.querySelector(".dropdown-list");

      const isOpen = button.classList.contains("link-open");

      document.querySelectorAll(".dropdown-list").forEach((list) => {
        list.classList.remove("show");
      });

      dropdownButtons.forEach((btn) => {
        btn.classList.remove("link-open");
        btn.setAttribute("aria-expanded", "false");
      });

      if (!isOpen && dropdown) {

        dropdown.classList.add("show");

        button.classList.add("link-open");

        button.setAttribute("aria-expanded", "true");

      }

    });

  });

  document.addEventListener("click", (event) => {

    if (!event.target.closest(".nav-item")) {

      document.querySelectorAll(".dropdown-list").forEach((list) => {
        list.classList.remove("show");
      });

      dropdownButtons.forEach((button) => {
        button.classList.remove("link-open");
        button.setAttribute("aria-expanded", "false");
      });

    }

  });

  document.querySelectorAll(".dropdown-list a, .nav-item > a").forEach((link) => {

    link.addEventListener("click", closeMobileMenu);

  });

  window.addEventListener("resize", () => {

    if (window.innerWidth > 767) {
      closeMobileMenu();
    }

  });

});