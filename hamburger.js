// hamburger open on click logic added
document
  .getElementById("hamburger-icon")
  .addEventListener("click", function () {
    const nav = document.querySelector("nav");
    nav.classList.toggle("active");
  });

const navItems = document.querySelectorAll("nav ul li a");

navItems.forEach((item) => {
  item.addEventListener("click", function () {
    const nav = document.querySelector("nav");
    nav.classList.remove("active");
  });
});
