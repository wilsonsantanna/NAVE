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
      // Pega o caminho da URL atual (ex: /sobre.html)
      const currentPath = window.location.pathname;
      links.forEach((link) => {
        // Pegamos apenas o caminho (pathname) do link para ignorar o domínio (https://...)
        const linkPath = new URL(link.href).pathname;
        // Verificamos se o caminho atual é igual ao do link.
        // Também cobrimos o caso da página inicial, que pode ser "/" ou "/index.html"
        if (
          currentPath === linkPath ||
          (currentPath === "/" && linkPath === "./index.html")
        ) {
          link.classList.add("current");
        }
      });
    })
    .catch((error) => console.error("Erro:", error));
});
