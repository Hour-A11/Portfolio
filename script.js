/* =========================
   mobile menu
   clicking ☰ shows/hides the nav links
   ========================= */

const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

/* =========================
   when any link is clicked on mobile
   close the menu so it doesn't stay open
   ========================= */

navMenu.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => {
    navMenu.classList.remove("show");
  });
});