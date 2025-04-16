document.addEventListener("DOMContentLoaded", () => {
  const livros = [
    {
      titulo: "Amazonia - Do Discurso A Praxis",
      imagem: "./01.jpg",
      descricao: "Amazônia – Do Discurso à Práxis é uma obra instigante que propõe uma reflexão crítica sobre a realidade amazônica para além dos discursos idealizados ou utilitaristas que frequentemente cercam a região. 
        O livro reúne análises que articulam teoria e prática, lançando luz sobre os múltiplos conflitos socioambientais, os saberes dos povos tradicionais e os desafios do desenvolvimento sustentável em um dos territórios mais biodiversos — e ao mesmo tempo mais ameaçados — do planeta.
Através de uma abordagem interdisciplinar, os autores exploram temas como políticas públicas, justiça ambiental, protagonismo indígena e transformações territoriais, 
  convidando o leitor a repensar os modelos de intervenção e as narrativas construídas sobre a Amazônia. Mais do que descrever a floresta e seus povos, a obra propõe caminhos de ação, resistência e esperança, 
  onde o conhecimento acadêmico dialoga com as vivências concretas de quem habita e defende esse ecossistema vital para o planeta"
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
