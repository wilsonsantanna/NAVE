document.addEventListener("DOMContentLoaded", () => {
  fetch('livros.json')
  .then(response => response.json())
  .then(livros => {
    const lista = document.getElementById('acervo-lista');
    livros.forEach(livro => {
      const item = document.createElement('li');
      item.textContent = `${livro.titulo} — ${livro.autor}`;
      lista.appendChild(item);
    });
  })
  .catch(erro => {
    console.error('Erro ao carregar os livros:', erro);
  });
  
  


  const lista = document.getElementById("acervo-lista");
  const busca = document.getElementById("busca");
  const modal = document.getElementById("detalhes-livro");
  const fecharModal = document.getElementById("fechar-modal");
  const tituloDetalhe = document.getElementById("titulo-detalhe");
  const imagemDetalhe = document.getElementById("imagem-detalhe");
  const descricaoDetalhe = document.getElementById("descricao-detalhe");
  const referenciaDetalhe = document.getElementById("referencia-detalhe");

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
        referenciaDetalhe.textContent = livro.referencia;
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
      livro.descricao.toLowerCase().includes(termo) ||
      livro.referencia.toLowerCase().includes(termo)
    );
    exibirLivros(filtrados);
  });

  fecharModal.addEventListener("click", () => {
    modal.classList.add("hidden");
  });
});
