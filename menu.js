document.addEventListener("DOMContentLoaded", () => {
  // 1. Injeta o CSS usando caminho relativo
  const style = document.createElement("link");
  style.rel = "stylesheet";
  style.href = "./style.css"; 
  document.head.appendChild(style);

  // 2. Busca o HTML do menu usando caminho relativo
  fetch("./menu.html")
    .then((response) => {
      if (!response.ok) throw new Error("Falha ao carregar o menu");
      return response.text();
    })
    .then(html => {
      // 3. Injeta o HTML na página
      document.getElementById('header-placeholder').innerHTML = html;

      // 4. LÓGICA DO LINK ATIVO CORRIGIDA
      const links = document.querySelectorAll('.menu a');
      const currentPath = window.location.pathname;
      
      // Pega apenas o nome do arquivo atual (ex: 'sobre.html' ou '' se for a raiz)
      let pageName = currentPath.split('/').pop();
      if (pageName === '') pageName = 'index.html';

      links.forEach(link => {
        // Pega apenas o nome do arquivo do link do menu
        let linkName = new URL(link.href).pathname.split('/').pop();
        if (linkName === '') linkName = 'index.html';

        // Compara apenas os nomes dos arquivos, ignorando subpastas do GitHub Pages
        if (pageName === linkName) {
          link.classList.add('current');
        }
      });
    })
    .catch((error) => console.error("Erro no carregamento do menu:", error));
});