document.addEventListener("DOMContentLoaded", () => {
  // ---- Menu mobile ----
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector("nav");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // ---- Fallback para imagens em falta ----
  document.querySelectorAll(".card-media img, .sobre-intro img").forEach((img) => {
    img.addEventListener("error", () => {
      img.style.display = "none";
    });
  });
});
