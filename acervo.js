document.addEventListener("DOMContentLoaded", () => {
  const livros = [
    {
      titulo: "Amazonia - Do Discurso A Praxis",
      imagem: "./livros/01.jpg",
      descricao: " Amazônia – Do Discurso à Práxis é uma obra instigante que propõe uma reflexão crítica sobre a realidade amazônica para além dos discursos idealizados ou utilitaristas que frequentemente cercam a região. O livro reúne análises que articulam teoria e prática, lançando luz sobre os múltiplos conflitos socioambientais, os saberes dos povos tradicionais e os desafios do desenvolvimento sustentável em um dos territórios mais biodiversos — e ao mesmo tempo mais ameaçados — do planeta. Através de uma abordagem interdisciplinar, os autores exploram temas como políticas públicas, justiça ambiental, protagonismo indígena e transformações territoriais, convidando o leitor a repensar os modelos de intervenção e as narrativas construídas sobre a Amazônia. Mais do que descrever a floresta e seus povos, a obra propõe caminhos de ação, resistência e esperança, onde o conhecimento acadêmico dialoga com as vivências concretas de quem habita e defende esse ecossistema vital para o planeta.",
      referencia: "A'SABER, Aziz Nacib. A Amazônia: do discurso à práxis. São Paulo: EDUSP, 1996. 319 p. ISBN 8531400910 CDD 304.29811 Número de chamada: 574.509811 A164a 1996"

    },
    {
      titulo: "Cantigas por um passarinho à toa",
      imagem: "./livros/02.jpg",
      descricao: "Cantigas por um passarinho à toa, de Manoel de Barros, é uma celebração do olhar encantado sobre o mundo miúdo, das coisas desimportantes que ganham voz e sentido na poesia. Com sua linguagem única e profundamente brasileira, o autor convida o leitor a escutar o canto dos passarinhos distraídos, das palavras reinventadas e dos silêncios cheios de imaginação. Neste livro, Manoel reafirma seu ofício de “desinventar” o mundo, exaltando o que é singelo, a infância, a natureza e o absurdo com uma leveza que beira o sagrado. Suas cantigas são como pequenos vôos — às vezes curtos, às vezes delirantes — de um passarinho que não tem pressa, nem destino certo, mas sabe pousar direto no coração do leitor. Obra essencial para quem deseja mergulhar na poesia que se faz com chão, céu, mato e alma, Cantigas por um passarinho à toa é mais uma prova da genialidade de um dos maiores poetas da literatura brasileira.",
      referencia: "BARROS, Manuel de. Cantigas por um passarinho à toa. Ilustração Kammal João. 1ºed. São Paulo: Companhia das Letrinhas, 2018. ISBN 978-85-7406-787-2 CDD -028.5 Número de chamada: 808.068 B277c 2018"
    },
    {
      titulo: "Caminhos da Voz",
      imagem: "./livros/03.webp",
      descricao: "Huni Kuin Hiwepaunibuki é uma obra que nasce do encontro entre saberes indígenas e não indígenas, entre a oralidade ancestral do povo Huni Kuin (Kaxinawá) e os registros acadêmicos contemporâneos. Organizado por Eliane Camargo, Diego Villar e Txerinõ (Texerino) Capitan, o livro constitui um importante documento linguístico e cultural, reunindo narrativas, cantos, mitos e reflexões dos Huni Kuin em sua própria língua e com tradução para o português. Mais do que um registro, trata-se de uma partilha: os Huni Kuin se apresentam como narradores, cantadores e mestres de conhecimento, conduzindo o leitor por caminhos de sabedoria, espiritualidade e resistência. A publicação valoriza a diversidade linguística, fortalece a preservação da cultura indígena e reconhece o protagonismo dos povos originários na produção de conhecimento. Com sensibilidade e respeito, Huni Kuin Hiwepaunibuki contribui para o diálogo intercultural e a valorização da riqueza simbólica da floresta, tornando-se uma leitura indispensável para pesquisadores, educadores, indigenistas e todos aqueles que desejam se aproximar da cosmovisão Huni Kuin.",
      referencia: "CAMARGO, Eliane; VILLAR, Diego; CAPITAN, Texerino (Org.). Huni kuin hiwepaunibuki. A história dos Caxinauás por eles mesmos. São Paulo: Edições Sesc São Paulo, 2013. 304 p. ISBN 978-85-7995-071-1 CDD: 572"
    }
  
  
  ];

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
