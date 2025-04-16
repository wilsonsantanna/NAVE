document.addEventListener("DOMContentLoaded", () => {
  const livros = [
    {
      titulo: "Vozes da Experiência: Relatos de Pesquisa em Voz e Performance",
      imagem: "./01.jpg",
      descricao: "Coletânea de textos sobre práticas vocais e experimentações na voz artística e acadêmica."
    },
    {
      titulo: "A Voz e o Corpo na Cena",
      imagem: "./02.jpg",
      descricao: "Explora o papel da voz na atuação teatral e a sua relação com o corpo cênico."
    },
    {
      titulo: "Caminhos da Voz",
      imagem: "./03.webp",
      descricao: "Investigações sobre o uso da voz em diferentes práticas performativas e pedagógicas."
    }
  
  
  ];

  const lista = document.getElementById("acervo-lista");
  const busca = document.getElementById("busca");
  const modal = document.getElementById("detalhes-livro");
  const fecharModal = document.getElementById("fechar-modal");
  const tituloDetalhe = document.getElementById("titulo-detalhe");
  const imagemDetalhe = document.getElementById("imagem-detalhe");
  const descricaoDetalhe = document.getElementById("descricao-detalhe");

  function exibirLivros(filtrados) {
    lista.innerHTML = "";
    filtrados.forEach(livro => {
      const card = document.createElement("div");
      card.className = "livro-card";

      card.innerHTML = `
        <img src="${livro.imagem}" alt="${livro.titulo}">
        <h3>${livro.titulo}</h3>
      `;

      card.addEventListener("click", () => {
        tituloDetalhe.textContent = livro.titulo;
        imagemDetalhe.src = livro.imagem;
        imagemDetalhe.alt = livro.titulo;
        descricaoDetalhe.textContent = livro.descricao;
        modal.classList.remove("hidden");
      });

      lista.appendChild(card);
    });
  }

  const livrosOrdenados = [...livros].sort((a, b) => a.titulo.localeCompare(b.titulo));
  exibirLivros(livrosOrdenados);

  busca.addEventListener("input", () => {
    const termo = busca.value.toLowerCase();
    const filtrados = livrosOrdenados.filter(livro =>
      livro.titulo.toLowerCase().includes(termo) ||
      livro.descricao.toLowerCase().includes(termo)
    );
    exibirLivros(filtrados);
  });

  fecharModal.addEventListener("click", () => {
    modal.classList.add("hidden");
  });
});
