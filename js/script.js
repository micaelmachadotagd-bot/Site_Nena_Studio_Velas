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

  // ---- Carrinho simples (apenas visual, sem persistência) ----
  let cartCount = 0;
  const cartBadge = document.querySelector(".cart-count");
  const toast = document.querySelector(".toast");
  let toastTimer;

  document.querySelectorAll(".btn-add").forEach((btn) => {
    btn.addEventListener("click", () => {
      cartCount += 1;
      const nome = btn.dataset.name || "Produto";

      if (cartBadge) {
        cartBadge.textContent = String(cartCount);
        cartBadge.classList.add("show");
      }

      if (toast) {
        toast.textContent = `${nome} adicionado ao carrinho`;
        toast.classList.add("show");
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
      }
    });
  });

  // ---- Fallback para imagens em falta ----
  document.querySelectorAll(".card-media img, .sobre-intro img").forEach((img) => {
    img.addEventListener("error", () => {
      img.style.display = "none";
    });
  });
});
