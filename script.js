/* =========================
   قائمة الجوال
   لما نضغط ☰ تظهر/تختفي الروابط
   ========================= */

const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

/* =========================
   لما نضغط أي رابط بالجوال
   نقفل القائمة عشان ما تظل مفتوحة
   ========================= */

navMenu.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => {
    navMenu.classList.remove("show");
  });
});
