// Mobile navigation menu
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {
const isOpen = navLinks.classList.toggle("open");

menuToggle.setAttribute("aria-expanded", isOpen);
menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation menu" : "Open navigation menu"
);

menuToggle.textContent = isOpen ? "✕" : "☰";

});

// Close menu after clicking a navigation link
navLinks.querySelectorAll("a").forEach(function (link) {
link.addEventListener("click", function () {
navLinks.classList.remove("open");
menuToggle.setAttribute("aria-expanded", "false");
menuToggle.setAttribute("aria-label", "Open navigation menu");
menuToggle.textContent = "☰";
});
});

// Automatically update the footer year
document.getElementById("year").textContent =
new Date().getFullYear();