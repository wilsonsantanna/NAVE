document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const lista = document.querySelector(".menu ul");

  if (toggle && lista) {
    toggle.addEventListener("click", () => {
      const aberto = lista.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(aberto));
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document.querySelectorAll(".modal:not(.hidden)").forEach((modal) => {
        modal.classList.add("hidden");
      });
    }
  });
});
