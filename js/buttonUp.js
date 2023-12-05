const btnUp = {
  el: document.querySelector(".btn-up"),
  show() {
    this.el.classList.remove("btn-up_hide");
  },
  hide() {
    this.el.classList.add("btn-up_hide");
  },
  addEventListener() {
    let lastScrollPosition = 0;

    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;

      if (scrollY > lastScrollPosition) {
        this.hide();
      } else {
        scrollY > 400 ? this.show() : this.hide();
      }

      lastScrollPosition = scrollY;
    });

    document.querySelector(".btn-up").onclick = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    };
  },
};
btnUp.addEventListener();
