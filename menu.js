document.addEventListener("DOMContentLoaded", () => {
  // 1. Injeta o CSS do menu no  da página
  const style = document.createElement("link");
  style.rel = "stylesheet";
  style.href = "/style.css";
  document.head.appendChild(style);

  // 2. Busca o HTML do menu
  fetch("/menu.html")
    .then((response) => {
      if (!response.ok) throw new Error("Falha ao carregar o menu");
      return response.text();
    })
    .then((html) => {
      // 3. Injeta o HTML dentro da div reservada
      document.getElementById("header-placeholder").innerHTML = html;
    })
    .catch((error) => console.error("Erro:", error));
});
