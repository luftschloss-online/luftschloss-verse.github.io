const targets = document.querySelectorAll(".himmel, .pros_item , .pros_logo , .hero-title , .name-title , .lede, .white-card, .himmel_text, .rough-card, .cta-top , .cta-circle , .cta-title");

const io = new IntersectionObserver((entries) => {
  for (const e of entries) {
    e.target.classList.toggle("is-inview", e.isIntersecting);
  }
}, { threshold: 0.2, rootMargin: "0px 0px -7% 0px" });

targets.forEach(t => io.observe(t));