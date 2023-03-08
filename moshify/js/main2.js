const collapsibles = document.querySelectorAll(".nav__list");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
   this.classList.toggle("collapsible--menu");
    // this.classList.toggle("nav__list");
  })
);