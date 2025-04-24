document.addEventListener("DOMContentLoaded", () => {
    const livros = [
    {
      "titulo": "Mesa-redonda: Voz e Tecnologias",
      "data": "25 de abril de 2025",
      "descricao": "Discussão sobre o uso da tecnologia na pesquisa da voz com participação de convidados da UFMG e de outras universidades.",
      "link": "#"
    },
    {
      "titulo": "Lançamento do livro 'Vozes da Experiência'",
      "data": "02 de maio de 2025",
      "descricao": "Evento de lançamento da nova publicação do projeto com apresentação dos autores e sessão de autógrafos.",
      "link": "#"
    }
  ]


  
  const lista = document.getElementById("acervo-lista");
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

  const livrosOrdenados = [...livros];
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