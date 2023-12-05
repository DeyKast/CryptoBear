(() => {
  const mobileMenu = document.querySelector(".js-menu-container");
  const openMenuBtn = document.querySelector("#js-open-menu");
  const closeMenuBtn = document.querySelector(".js-close-menu");
  const navListItems = document.querySelectorAll(
    ".mobile-menu__navigation-item"
  );

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute("aria-expanded") === "true" || false;
    openMenuBtn.setAttribute("aria-expanded", !isMenuOpen);
    mobileMenu.classList.toggle("is-open");

    document.body.style.overflow = isMenuOpen ? "auto" : "hidden";
  };

  const preventScroll = (e) => {
    if (mobileMenu.classList.contains("is-open")) {
      e.preventDefault();
    }
  };

  openMenuBtn.addEventListener("click", toggleMenu);
  closeMenuBtn.addEventListener("click", toggleMenu);

  navListItems.forEach((navListItem) => {
    navListItem.addEventListener("click", toggleMenu);
  });

  window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
    if (!e.matches) return;
    mobileMenu.classList.remove("is-open");
    openMenuBtn.setAttribute("aria-expanded", false);
    document.body.style.overflow = "auto";
  });

  document.addEventListener("wheel", preventScroll, { passive: false });
})();
