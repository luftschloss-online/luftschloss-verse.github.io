const header = document.querySelector(".site-header");
const burger = document.querySelector(".burger");
const mobileMenu = document.querySelector("#mobileMenu");

const shrinkAt = 40;
let lastState = false;

function openMenu() {
  mobileMenu.hidden = false;
  burger.setAttribute("aria-expanded", "true");
  document.body.classList.add("menu-open");
}

function closeMenu() {
  mobileMenu.hidden = true;
  burger.setAttribute("aria-expanded", "false");
  document.body.classList.remove("menu-open");
}

// shrink header on scroll
window.addEventListener("scroll", () => {
  const shouldShrink = window.scrollY > shrinkAt;
  if (shouldShrink !== lastState) {
    header.classList.toggle("is-small", shouldShrink);
    lastState = shouldShrink;
  }
});

// burger toggle
burger?.addEventListener("click", () => {
  const isOpen = burger.getAttribute("aria-expanded") === "true";
  isOpen ? closeMenu() : openMenu();
});

// close on link click
mobileMenu?.addEventListener("click", (e) => {
  if (e.target.matches("a")) closeMenu();
});

// close on Escape
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMenu();
});

// close if resizing to desktop
window.addEventListener("resize", () => {
  if (window.innerWidth > 900) closeMenu();
});