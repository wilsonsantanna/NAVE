document.addEventListener("DOMContentLoaded", () => {
  const livros = [
    {
      titulo: "Amazonia - Do Discurso A Praxis",
      imagem: "./livros/8531400910.webp",
      descricao: " Amazônia – Do Discurso à Práxis é uma obra instigante que propõe uma reflexão crítica sobre a realidade amazônica para além dos discursos idealizados ou utilitaristas que frequentemente cercam a região. O livro reúne análises que articulam teoria e prática, lançando luz sobre os múltiplos conflitos socioambientais, os saberes dos povos tradicionais e os desafios do desenvolvimento sustentável em um dos territórios mais biodiversos — e ao mesmo tempo mais ameaçados — do planeta. Através de uma abordagem interdisciplinar, os autores exploram temas como políticas públicas, justiça ambiental, protagonismo indígena e transformações territoriais, convidando o leitor a repensar os modelos de intervenção e as narrativas construídas sobre a Amazônia. Mais do que descrever a floresta e seus povos, a obra propõe caminhos de ação, resistência e esperança, onde o conhecimento acadêmico dialoga com as vivências concretas de quem habita e defende esse ecossistema vital para o planeta.",
      referencia: "A'SABER, Aziz Nacib. A Amazônia: do discurso à práxis. São Paulo: EDUSP, 1996. 319 p. ISBN 8531400910 CDD 304.29811 Número de chamada: 574.509811 A164a 1996"

    },
    {
      titulo:"Amazônia: por uma economia do conhecimento da natureza",
      imagem:"./livros/9788593115547.webp",
      descricao:"Este livro de Ricardo Abramovay explora as potencialidades da Amazônia para além da exploração tradicional, focando em uma economia baseada no conhecimento da biodiversidade e dos serviços ecossistêmicos da floresta. O autor discute como conciliar desenvolvimento econômico e preservação ambiental na região.",
      referencia: "ABRAMOVAY, Ricardo. Amazônia: por uma economia do conhecimento da natureza. São Paulo: Elefante, Terceira Via, 2019. 103 p. ISBN 9788593115547 CDD 333.751309811 Número de chamada: 363.7 A161a 2019"
    },
    {
      titulo:"Terra Comunal",
      imagem:"./livros/978-85-69298-63-2.webp",
      descricao:"Organizado por Jochen Volz e Júlia Rebouças, este catálogo da exposição 'Terra Comunal' apresenta um panorama da arte contemporânea, explorando as relações entre o ser humano, o espaço e a natureza. A obra reúne diversos artistas e suas perspectivas sobre o território e a coletividade.",
      referencia: "ABRAMOVIC, Marina. Organização de Jochen Volz e Júlia Rebouças. Terra Comunal. Tradução de Tiago Novaes. São Paulo, Edições Sesc São Paulo, 2016. 336 p. ISBN 978-85-69298-63-2 CDD 709.04"
    },
    {
      titulo:"Pós-extrativismo de decrescimento/ saídas do labirinto capitalista",
      imagem:"./livros/9788593115196.webp",
      descricao:"Esta obra reúne reflexões de Alberto Acosta, Ulrich Brand e Tadeu Breda sobre as alternativas ao modelo extrativista e ao sistema capitalista. Os autores exploram conceitos como o pós-extrativismo e o decrescimento, buscando caminhos para sociedades mais sustentáveis e equitativas.",
      referencia: "ACOSTA, Alberto; BRAND, Ulrich; BREDA, Tadeu. Pós-extrativismo de decrescimento/ saídas do labirinto capitalista. São Paulo: Elefante, 2018. 216 p. ISBN 9788593115196. CDD 320 Número de chamada: 304 A466Pp 2019"
    },
    {
      titulo:"O bem viver: uma oportunidade para imaginar outros mundos",
      imagem:"./livros/978-85-69536-02-4.webp",
      descricao:"Alberto Acosta apresenta o conceito de 'bem viver' como uma filosofia e prática originária de comunidades indígenas da América Latina, que propõe uma relação mais harmoniosa entre os seres humanos e a natureza, buscando o bem-estar coletivo em detrimento do acúmulo individual.",
      referencia: "ACOSTA, Alberto. O bem viver: uma oportunidade para imaginar outros mundos. Tradução de Tadeu Breda. São Paulo: Autonomia Literária, Elefante, 2016. ISBN: 978-85-69536-02-4. CDD 361.61. Número de chamada: 361.61 A185b.Pb 2016. n° exemplares: 02."
    },
    {
      titulo:"Brasil: Amazonas - Xingu",
      imagem:"",
      descricao:"Neste relato de viagem do Príncipe Adalberto da Prússia, o leitor é conduzido pela Amazônia e pela região do Xingu no século XIX. A obra oferece um olhar estrangeiro sobre a natureza exuberante, os povos indígenas e os desafios da exploração da região na época.",
      referencia: "ADALBERTO, Príncipe da Prússia. Brasil: Amazonas - Xingu. Tradução de Eduardo Lima Castro. Apresentação e notas de Mário Guimarães Ferri. Belo Horizonte: Ed. Itatiaia, 1977. CDD 918.1."
    },
    {
      titulo:"Brasil: Amazonas-Xingu (pelo) Príncipe Adalberto da Prússia",
      imagem:"",
      descricao:"[Descrição similar ao item anterior, focando na viagem do Príncipe Adalberto pela Amazônia e Xingu, com a perspectiva do século XIX e as notas de Mário Guimarães Ferri.]",
      referencia: "ADALBERTO, Príncipe da Prússia. Brasil: Amazonas-Xingu (pelo) Príncipe Adalberto da Prússia. Tradução de Eduardo Lima Castro; apresentação e notas de Mário Guimarães Ferri. Belo Horizonte, Ed. Itatiaia, 1977. (Reconquista do Brasil, v. 34) CDD: 918.1 CDD: 918.11. n° exemplares: 02."
    },
    {
      titulo:"Dialética do esclarecimento: fragmentos filosóficos",
      imagem:"./livros/8585061162.webp",
      descricao:"Nesta obra fundamental da Escola de Frankfurt, Theodor W. Adorno e Max Horkheimer analisam criticamente a razão iluminista e seu potencial para a dominação e a barbárie, explorando as tensões entre esclarecimento, mito e progresso na sociedade moderna.",
      referencia: "ADORNO, Theodor W.; HORKHEIMER, Max. Dialética do esclarecimento: fragmentos filosóficos. Tradução: Guido Antonio de Almeida. ISBN 8585061162 CDD 193 CDU 1(430) Número de chamada: 193 A241d.Pa 1985."
    },
    {
      titulo:"O aberto: o homem e o animal",
      imagem:"",
      descricao:"Giorgio Agamben reflete sobre a fronteira entre o humano e o animal, explorando como a metafísica ocidental construiu uma separação radical que define o humano por sua capacidade de linguagem e sua abertura ao mundo, em contraste com a suposta falta de mundo do animal.",
      referencia: "AGAMBEN, Giorgio. O aberto: o homem e o animal. Tradução de Pedro Mendes. 3. ed. Edição Revista. Rio de Janeiro: Civilização Brasileira, 2021, 162 p. ISBN 978-85-200-1327-4 CDD: 195 CDU: 1(45) Número de chamada: 195 A258a.Pm 2021"
    },
    {
      titulo:"O reino e o jardim",
      imagem:"",
      descricao:"Neste ensaio, Giorgio Agamben investiga as noções de 'reino' e 'jardim' como metáforas do poder e do cuidado. O autor explora as origens dessas ideias e suas implicações para a compreensão da política, da natureza e da relação entre o ser humano e o mundo.",
      referencia: "AGAMBEN, Giorgio. O reino e o jardim. Tradução de Vinícius Nicastro Honesko. São Paulo: n-1 edições, 2019. ISBN: 978-65-86948-65-86941-72-2. CC 700. CDU: 7. Número de chamada: 128 A259r.Ph 2022"
    },
    {
      titulo:"Viagem ao Brasil",
      imagem:"",
      descricao:"Relato da expedição científica de Luiz e Elizabeth Cary Agassiz ao Brasil entre 1865 e 1866. A obra oferece descrições detalhadas da fauna, flora e geologia do país, além de observações sobre a sociedade e a cultura da época, com a perspectiva de renomados naturalistas.",
      referencia: "AGASSIZ, Luiz; AGASSIZ, Elizabeth Cary. Viagem ao Brasil 1865-1866. Tradução de João Etienne Filho; apresentação Mário Guimarães Ferri. Belo Horizonte: Ed. Itatiaia; São Paulo: Ed. da Universidade de São Paulo, 1975. CDD: 918.1 CDD: 558.11 CDD: 597.00981 CDD: 597.092081"
    },
    {
      titulo:"O espírito da floresta",
      imagem:"",
      descricao:"Neste livro, o antropólogo Bruce Albert e o líder indígena yanomami Davi Kopenawa apresentam um diálogo profundo sobre a cosmologia, os conhecimentos tradicionais e a luta pela defesa da floresta amazônica e dos direitos dos povos indígenas, confrontando a visão ocidental com a sabedoria ancestral.",
      referencia: "ALBERT, Bruce; KOPENAWA, Davi. O espírito da floresta. São Paulo: Companhia das Letras, 2023. 230 p. ISBN 9786559214983 CDD 980.41 Número de chamada: 980.41 A333y.Pa 2023"
    },
    {
      titulo:"Araquém Alcântara",
      imagem:"",
      descricao:"Este volume da Coleção IPISIS de fotografia apresenta o trabalho de Araquém Alcântara, um dos mais importantes fotógrafos brasileiros de natureza. Suas imagens capturam a beleza e a diversidade da paisagem e da vida selvagem do Brasil, com um olhar sensível e engajado.",
      referencia: "ALCÂNTARA, Araquém. Araquém Alcântara. 1. ed. São Paulo: Editora IPISIS, 2012. (Coleção IPISIS de fotografia). ISBN 978-85-98741-37-6 CDD: 779.2089698"
    },
    {
      titulo:"Vozes de Tchernóbil: crônica do futuro",
      imagem:"",
      descricao:"A jornalista Svetlana Aleksiévich, vencedora do Prêmio Nobel de Literatura, apresenta relatos pungentes e emocionantes de pessoas que viveram e sofreram as consequências do desastre nuclear de Tchernóbil. Através de suas vozes, a autora constrói uma crônica impactante sobre a tragédia e seus legados.",
      referencia: "ALEKSIEVICH, Svetlana. Vozes de Tchernóbil: crônica do futuro. São Paulo: Companhia das Letras, 2016. 383 p. ISBN 9788535927085. CDD 363.1179909477622. Número de chamada: 363.1799 A366v.Pb 2016."
    },
    {
      titulo:"Não é um rio",
      imagem:"",
      descricao:"Neste romance da escritora argentina Selva Almada, acompanhamos a história de três homens ligados por um trágico acidente de pesca em um rio. A narrativa explora temas como a masculinidade, a violência rural e a força da natureza na vida das personagens.",
      referencia: "ALMADA, Selva. Não é um rio. Tradução de Samuel Titan Jr. 1 ed.- São Paulo: Todavia, 2021.ISBN 978-65-5692-176-1 CDD A860.3 Número de chamada: Ar863.44 A444n.Pt 2021"
    },
    {
      titulo:"A visão das plantas",
      imagem:"",
      descricao:"A escritora Djaimilia Pereira de Almeida nos presenteia com uma obra que entrelaça reflexões sobre botânica, história, cultura e identidade. Através de uma linguagem poética e ensaística, a autora explora a presença e o significado das plantas em diferentes contextos.",
      referencia: "ALMEIDA, Djaimilia. A visão das plantas. 1 ed. - São Paulo: Todavia, 2021. ISBN 978-65-5692-104-4 CDD: 869.3. Número de chamada: 896.32 A447v 2021."
    },
    {
      titulo:"Mira!: artes visuais contemporâneas dos povos indígenas",
      imagem:"",
      descricao:"Organizado por Maria Inês de Almeida e Beatriz Matos, este catálogo apresenta um panorama da produção artística visual contemporânea de diversos povos indígenas do Brasil. A obra revela a diversidade de linguagens, temas e perspectivas presentes na arte indígena atual.",
      referencia: "ALMEIDA, Maria Inês de; MATOS, Beatriz (Org.). Mira!: artes visuais contemporâneas dos povos indígenas. Tradução de Edgar Eduardo Bolivar Urueta e Eduardo Assis Martins. 1. ed. Belo Horizonte: Centro Cultural da UFMG, 2013. 280 p. ISBN 978-85-66186-02-4. CDD: 704.0398. CDD: 980.4. nº exemplares: 03."
    },
    {
      titulo:"Desocidentada: Experiência literária em terra indígena",
      imagem:"",
      descricao:"Maria Inês de Almeida compartilha sua experiência de imersão na literatura produzida em terras indígenas do Brasil. A autora explora as particularidades dessas narrativas, seus temas, formas e a importância para a compreensão das culturas e histórias dos povos originários.",
      referencia: "ALMEIDA, Maria Inês de. Desocidentada: Experiência literária em terra indígena. Belo Horizonte: Editora UFMG, 2009. 147 p. ISBN 978-85-7041-756-5. CDD: 800. CDU: 82."
    },
    {
      titulo:"Abecedário de personagens do folclore brasileiro e suas histórias maravilhosas",
      imagem:"",
      descricao:"Januária Cristina Alves apresenta um divertido e informativo abecedário com personagens marcantes do folclore brasileiro, acompanhados de suas histórias e curiosidades. Uma obra que encanta crianças e adultos, resgatando a riqueza da cultura popular.",
      referencia: "ALVES, Januária Cristina. Abecedário de personagens do folclore brasileiro e suas histórias maravilhosas. Ilustrações Berje. 1. ed. São Paulo: FTD: Ed. SESC SP, 2017. ISBN 9788594930507 CDD 398.220981 Número de chamada: 398.0981 A474a 2017"
    },
    {
      titulo:"Aspectos do folclore brasileiro",
      imagem:"",
      descricao:"Mário de Andrade, um dos grandes nomes do modernismo brasileiro, oferece neste livro um olhar perspicaz sobre diversas manifestações do folclore do Brasil. A obra aborda desde as narrativas orais até as festas populares, revelando a complexidade e a beleza da cultura tradicional.",
      referencia: "ANDRADE, Mário de. Aspectos do folclore brasileiro. São Paulo: Global, 2019. ISBN 9788526024427 CDD 398.0981 CDU 398(81) Número de chamada: 398.0981 A553a 2019."
    },
    {
      titulo:"Macunaíma: o herói sem nenhum caráter",
      imagem:"",
      descricao:"Considerada uma das obras-primas do modernismo brasileiro, 'Macunaíma' de Mário de Andrade narra as aventuras do anti-herói preguiçoso e astuto pela diversidade cultural e natural do Brasil. Uma crítica bem-humorada e inovadora da identidade nacional.",
      referencia: "ANDRADE, Mário de. Macunaíma: o herói sem nenhum caráter. Ilustrações: Camile Sproesser; apresentação: Antonio Fagundes; textos complementares de: Tom Zé [et al.]. ISBN 9786586490473 CDD 869.3 CDU 821.134.3 (81) Número de chamada: B869.33 A553m 2022"
    },
    {
      titulo:"O melhor de Mário de Andrade",
      imagem:"",
      descricao:"Esta coletânea reúne o melhor da produção literária de Mário de Andrade, apresentando contos, poemas e trechos de romances que evidenciam a originalidade, o humor e a profunda reflexão sobre a cultura e a identidade brasileira presentes na obra do autor modernista.",
      referencia: "ANDRADE, Mário de. O melhor de Mário de Andrade. 1. ed. Rio de Janeiro: Nova Fronteira, 2015. ISBN 978-85-209-2381-8 CDD 869.93 CDU 821.134.3(81)-3 Número de chamada: B869.33 A553m 2015"
    },
    {
      titulo:"Cidade do índio: transformações e cotidiano em Iauarete",
      imagem:"",
      descricao:"Geraldo Andrello oferece um estudo antropológico sobre a comunidade indígena de Iauarete, localizada no noroeste amazônico. A obra explora as dinâmicas sociais, as transformações culturais e o cotidiano dessa população em um contexto de contato interétnico.",
      referencia: "ANDRELLO, Geraldo. Cidade do índio: transformações e cotidiano em Iauarete. São Paulo: UNESP: ISA; Rio de Janeiro: NUTI, 2006. 447p. ISBN 8571396590 CDD 980.41 CDU 940(=87)(81) Número de chamada: 980.41 A559c 2006"
    },
    {
      titulo:"Cultura e opulência do Brasil",
      imagem:"",
      descricao:"Obra escrita por André João Antonil no início do século XVIII, que descreve a economia e a sociedade do Brasil colonial, abordando a produção de açúcar, a mineração e outros aspectos da vida na colônia.",
      referencia: "ANTONIL, André João. Cultura e opulência do Brasil. Belo Horizonte: Ed. Itatiaia; São Paulo: Ed. da Universidade de São Paulo, 1982. (Reconquista do Brasil; nova sér.; v. 70) ISBN 85-319-0034-4 CDD: 330.981021 CDD: 309.181021 CDD: 553.410981 CDD: 633.610981 CDD: 633.710981"
    },
    {
      titulo:"Mineração, genealogia do desastre: O extrativismo na América como origem da modernidade",
      imagem:"",
      descricao:"Análise de Horacio Machado Aráoz sobre o extrativismo na América Latina e sua relação com a formação da modernidade, explorando as consequências socioambientais dessa atividade.",
      referencia: "ARÁOZ, Horacio Machado. Mineração, genealogia do desastre: O extrativismo na América como origem da modernidade. Tradução de João Peres. - São Paulo: Elefante, 2000. ISBN 978-85-93115-46-2 CDD 333.85 Número de chamada: 333.85 M149p.Pp 2020"
    },
    {
      titulo:"Revista Triple. Santiago",
      imagem:"",
      descricao:"Primeira edição da Revista Triple, publicada em Santiago, Chile, em maio de 2017.",
      referencia: "BÁEZ, Paulo[et. al]. Revista Triple. Santiago, Chile, edicción n° 1, may. 2017."
    },
    {
      titulo:"Revista Triple. Santiago",
      imagem:"",
      descricao:"Segunda edição da Revista Triple, publicada em Santiago, Chile, em novembro de 2017.",
      referencia: "BÁEZ, Paulo [et. al]. Revista Triple. Santiago, Chile, edicción n° 2, nov. 2017."
    },
    {
      titulo:"Popol Vuh - O esplendor da palavra antiga dos Maias-Quiché de Quauhtlemallan: aurora sangrenta, história e mito",
      imagem:"",
      descricao:"Tradução comentada do livro sagrado dos Maias-Quiché, que narra a criação do mundo, a história de seus heróis e os mitos de sua cultura.",
      referencia: "BAPTISTA, Josely Vianna. Popol Vuh – O esplendor da palavra antiga dos Maias-Quiché de Quauhtlemallan: aurora sangrenta, história e mito. Tradução crítica e notas de Josely Vianna Baptista. Introdução e notas de Adrián Recinos Ávila. Texto de Ddaniel Grecco Pacheco. Ilustrações de Francisco França. São Paulo: Ubu Editora, 2019. ISBN 978-85-92886-98-1. CDD: 299.7. CDU 299.77. Número de chamada: 299.7 P829 2019"
    },
    {
      titulo:"Os discursos do descobrimento: 500 e mais anos de discursos",
      imagem:"",
      descricao:"Coletânea de ensaios que analisam os discursos construídos em torno do 'descobrimento' da América, abordando as diferentes perspectivas e interpretações ao longo da história.",
      referencia: "BARROS, Diana Luz Pessoa de (org.). Os discursos do descobrimento: 500 e mais anos de discursos. São Paulo: Editora da Universidade de São Paulo: FAPESP, 2000. ISBN 85-314-0589-0 CDD 981.014 Número de chamada: 418 D611 2000"
    },
    {
      titulo:"Sertão, Sertões: Repensando contradições, reconstruindo veredas",
      imagem:"",
      descricao:"Organização de Joana Barros, Gustavo Prieto e Caio Marinho que reúne reflexões sobre o conceito de sertão na literatura e na cultura brasileira contemporânea.",
      referencia: "BARROS, Joana; PRIETO, Gustavo; MARINHO, Caio (Org.). Sertão, Sertões: Repensando contradições, reconstruindo veredas. São Paulo: Elefante, 2019, 264 p. ISBN 978-85-93115-33-2 CDD: 981.05 Número de chamada: 981.05 S489 2019"
    },
    {
    titulo: "Cantigas por um passarinho à toa",
    imagem: "./livros/978-85-7406-787-2.webp",
    descricao: "Cantigas por um passarinho à toa, de Manoel de Barros, é uma celebração do olhar encantado sobre o mundo miúdo, das coisas desimportantes que ganham voz e sentido na poesia. Com sua linguagem única e profundamente brasileira, o autor convida o leitor a escutar o canto dos passarinhos distraídos, das palavras reinventadas e dos silêncios cheios de imaginação. Neste livro, Manoel reafirma seu ofício de “desinventar” o mundo, exaltando o que é singelo, a infância, a natureza e o absurdo com uma leveza que beira o sagrado. Suas cantigas são como pequenos vôos — às vezes curtos, às vezes delirantes — de um passarinho que não tem pressa, nem destino certo, mas sabe pousar direto no coração do leitor. Obra essencial para quem deseja mergulhar na poesia que se faz com chão, céu, mato e alma, Cantigas por um passarinho à toa é mais uma prova da genialidade de um dos maiores poetas da literatura brasileira.",
    referencia: "BARROS, Manuel de. Cantigas por um passarinho à toa. Ilustração Kammal João. 1ºed. São Paulo: Companhia das Letrinhas, 2018. ISBN 978-85-7406-787-2 CDD -028.5 Número de chamada: 808.068 B277c 2018"
    },
    {
      titulo:"O fazedor de amanhecer",
      imagem:"",
      descricao:"Livro de poemas de Manoel de Barros, com ilustrações de Kammal João e Fernando Massotti, que explora a poesia do cotidiano e a beleza da natureza através de uma linguagem singular.",
      referencia: "BARROS, Manuel de. O fazedor de amanhecer. Ilustrações Kammal João e Fernando Massotti. 1ºed. São Paulo: Companhia das Letrinhas, 2023. CDD -028.5 ISBN 9786581776336 Número de chamada: 808.068 B277f 2023."
    },
    {
      titulo:"O vale do Amazonas: A livre navegação do Amazonas, estatística, produção, comércio, questões fiscais do Vale do Amazonas",
      imagem:"",
      descricao:"Estudo de Aureliano Cândido Tavares Bastos, publicado originalmente no século XIX, sobre a importância da livre navegação do Rio Amazonas para o desenvolvimento econômico da região, com dados estatísticos e análises da produção e comércio.",
      referencia: "BASTOS, Aureliano Cândido Tavares. O vale do Amazonas: A livre navegação do Amazonas, estatística, produção, comércio, questões fiscais do Vale do Amazonas; Prefácio de Oscar Tenório. Belo Horizonte: Ed. Itatiaia, 2000. (Reconquista do Brasil, v.216). CDD: 918.11. CDD: 380.1098. CDD: 380.130981. CDD: 386.3098. CDU: 918(282.281.3). ISBN 85-319-0243-6. {3 exemplares disponíveis}."
    },
    {
      titulo:"Amazônia: natureza e sociedade em transformação",
      imagem:"",
      descricao:"Obra organizada por Mateus Batistella, Emilio F. Moran e Diógenes Salas Alves que reúne estudos sobre as complexas interações entre a natureza e a sociedade na Amazônia, abordando temas como desmatamento, biodiversidade e desenvolvimento.",
      referencia: "BATISTELLA, Mateus; MORAN, Emilio F.; ALVES, Diógenes Salas. Amazônia: natureza e sociedade em transformação. São Paulo: EDUSP, 2008. 303 p. (Ciências ambientais; v.2). ISBN 9788531411267 CDD 333. 72 Número de chamada: 333.72 A489 2008"
    },
    {
      titulo:"Relatos astecas da conquista",
      imagem:"",
      descricao:"Seleção e apresentação de textos de Tzvetan Todorov com relatos indígenas astecas sobre a conquista do México pelos espanhóis, traduzidos do nauatle e do espanhol.",
      referencia: "BAUDOT, Georges; Tzvetan Todorov [seleção e apresentação dos textos]. Relatos astecas da conquista. Traduzidos do nauatle por Georges Baudot e do espanhol por Pierre Cordoba; tradução Luiz Antonio Oliveira de Araújo. São Paulo: Ed. UNESP, 2019. ISBN 9788539307838 CDD 972 CDU 972 Número de chamada: 972.02 C753Pa 2019"
    },
    {
      titulo:"A metamorfose do mundo: novos conceitos para uma nova realidade",
      imagem:"",
      descricao:"Análise do sociólogo Ulrich Beck sobre as transformações da sociedade contemporânea e a necessidade de novos conceitos para compreender a complexidade do mundo globalizado.",
      referencia: "BECK, Ulrich. A metamorfose do mundo: novos conceitos para uma nova realidade. Rio de Janeiro: Zahar, 2018. 279 p. ISBN 9788537817346 CDD 303.44. CDU 316.421. Número de chamada: 303.4 B393m.Pb 2018."
    },
    {
      titulo:"Sociedade de risco: rumo a uma modernidade. Tradução de Sebastião Nascimento",
      imagem:"",
      descricao:"Obra de Ulrich Beck que examina a sociedade moderna como uma 'sociedade de risco', caracterizada pela produção e distribuição de riscos em escala global.",
      referencia: "BECK, Ulrick. Sociedade de risco: rumo a uma modernidade. Tradução de Sebastião Nascimento. − São Paulo: Editora 34, 2011 (2ª edição). ISBN: 978-85-7326-450-0. CDD 301. Número de chamada: 303.4 B393r.Pn 2011"
    },
    {
      titulo:"O anjo da história. Organização e tradução de João Barrento",
      imagem:"",
      descricao:"Coletânea de ensaios de Walter Benjamin, organizada e traduzida por João Barrento, abordando temas como filosofia da história, teoria da linguagem e crítica cultural.",
      referencia: "BENJAMIN, Walter. O anjo da história. Organização e tradução de João Barrento. Belo Horizonte: Autêntica, 2013. ISBN 9788582170410 CDD-901 Número de chamada: 834.8 B468.Pb 2013."
    },
    {
      titulo:"Por que olhar para os animais?",
      imagem:"",
      descricao:"Ensaio de John Berger que explora a relação histórica entre humanos e animais e o significado cultural dessa relação em diferentes contextos.",
      referencia: "BERGER, John. Por que olhar para os animais? Tradução de Pedro Paulo Pimenta. - São Paulo: Fósforo, 2021. ISBN 978-65-89733-36-2 CDD 302 Número de chamada: 824.912 B496w.Pp 2021"
    },
    {
      titulo:"Tudo que é sólido desmancha no ar",
      imagem:"",
      descricao:"Análise de Marshall Berman sobre a experiência da modernidade e as transformações sociais e urbanas que a caracterizam.",
      referencia: "BERMAN, Marshall. Tudo que é sólido desmancha no ar. Tradução de Carlos Felipe Moisés, Ana Maria L. Ioriatti. 1 ed. São Paulo: Companhia das Letras, 2007. ISBN 978-85-359-1030-8 CDD 909.82 Número de chamada: 801.95 B516a.Pm 2007"
    },
    {
      titulo:"O tapete de Penélope: o relacionamento entre as espécies e a evolução orgânica",
      imagem:"",
      descricao:"Reflexão de Walter Antonio Pereira Boeger sobre as interações entre as espécies e o processo da evolução orgânica.",
      referencia: "BOEGER, Walter Antonio Pereira. O tapete de Penélope: o relacionamento entre as espécies e a evolução orgânica. São Paulo: Ed. Unesp, 2009. 108 p. (Coleção paradidáticos. Série evolução.). ISBN 9788571398917 CDD 576.8 CDU 575.8 Número de chamada: 575 B669t 2009"
    },
    {
      titulo:"Os caduveos",
      imagem:"",
      descricao:"Estudo etnográfico de Guido Boggiani sobre a cultura e a história do povo indígena Caduveo, com informações adicionais de G. A. Colini.",
      referencia: "BOGGIANI, Guido. Os caduveos. Tradução de Amadeu Amaral Júnior; apresentação de Mário Guimarães Ferri, prefácio e um estudo histórico etnográfico: G. A. Colini. Belo Horizonte: Ed. Itatiaia; São Paulo: Ed. da Universidade de São Paulo, 1975. (Reconquista do Brasil, v.22) CDD: 980.3 CDD: 918.1. n° exemplares: 02."
    },
    {
      titulo:"Secas na Amazônia: causas e consequências",
      imagem:"",
      descricao:"Obra organizada por Laura de Simone Borma e Carlos Nobre que investiga as causas e os impactos das secas na região amazônica.",
      referencia: "BORMA, Laura de Simone (org.); NOBRE, Carlos (org.). Secas na Amazônia: causas e consequências. São Paulo: Oficina de Textos, 2013. ISBN 978-85-7975-078-6 CDD 551.6 Número de chamada: 551.6 S444 2013"
    },
    {
      titulo:"Entre sertões: comunismo e campesinado na obra de Bernardo Élis",
      imagem:"",
      descricao:"Análise de Pauliane de Carvalho Braga sobre a representação do campesinato e as discussões sobre o comunismo na obra do escritor Bernardo Élis.",
      referencia: "BRAGA, Pauliane de Carvalho. Entre sertões: comunismo e campesinado na obra de Bernardo Élis. Belo Horizonte: Editora UFMG, 2019. ISBN 978-85-423-0263-9 CDD: B869.31 CDU: 869.0(81)-3. nº exemplares: 2."
    },
    {
      titulo:"Modo de vida imperial: sobre a exploração de seres humanos e da natureza no capitalismo global",
      imagem:"",
      descricao:"Análise de Ulrich Brand, Markus Wissen e Marcela Couto sobre o conceito de 'modo de vida imperial' e sua relação com a exploração de recursos e trabalho no capitalismo global.",
      referencia: "BRAND, Ulrich; WISSEN, Markus; COUTO, Marcela. Modo de vida imperial: sobre a exploração de seres humanos e da natureza no capitalismo global. São Paulo: Elefante, 2021. 331 p. ISBN 9786587235325 CDD 330.122 Número de chamada: 330.122 B817i.Pc 2021"
    },
    {
      titulo:"Desta terra nada vai sobrar, a não ser o vento que sopra sobre ela: romance",
      imagem:"",
      descricao:"Romance de Ignácio de Loyola Brandão que explora temas como a memória, o tempo e a desilusão em um contexto brasileiro.",
      referencia: "BRANDÃO, Ignácio de Loyola. Desta terra nada vai sobrar, a não ser o vento que sopra sobre ela: romance. São Paulo: Global, 2018. ISBN 9788526024366 CDD 869.3 CDU 82-31(81) Número de chamada: B869.341 B817d 2018"
    },
    {
      titulo:"Não verás país nenhum",
      imagem:"",
      descricao:"Romance distópico de Ignácio de Loyola Brandão que apresenta um futuro sombrio para o Brasil, marcado pela crise ambiental e pela repressão política.",
      referencia: "BRANDÃO, Ignácio de Loyola. Não verás país nenhum. [28. ed.]. São Paulo: Global, 2019. ISBN 9788526024915 CDD 869.3 CDU 82-31(81) Número de chamada: B869.341 B817n 2019"
    },
    {
      titulo:"Zero",
      imagem:"",
      descricao:"Romance experimental de Ignácio de Loyola Brandão que utiliza uma linguagem fragmentada e não linear para narrar a história de um jovem durante o período da ditadura militar no Brasil.",
      referencia: "BRANDÃO, Ignácio de Loyola. Zero. São Paulo: Global, 2019. ISBN 9788526024908 CDD: 868.3 CDU: 82-31(81). Número de chamada: B869.341 B817z 2019"
    },
    {
      titulo:"A nova idade das trevas: a tecnologia e o fim do futuro",
      imagem:"",
      descricao:"Ensaio de James Bridle que examina criticamente o impacto da tecnologia na sociedade contemporânea, explorando questões de vigilância, desinformação e a erosão do futuro.",
      referencia: "BRIDLE, James. A nova idade das trevas: a tecnologia e o fim do futuro. Tradução Érico Assis. São Paulo: Todavia, 2019. ISBN 978-65-80309-52-8 CDD: 303.483 Número de chamada: 303.483 B852n.Pa 2019"
    },
    {
      titulo:"Charles Darwin: viajando",
      imagem:"",
      descricao:"Biografia de Charles Darwin escrita por E. J. Browne, focando em suas viagens e nas descobertas que levaram à teoria da evolução por seleção natural.",
      referencia: "BROWNE, E. J. Charles Darwin: viajando. São Paulo: Aracati: Editora UNESP, 2011. 775 p. ISBN 9788562432026 CDD 925.75 CDU 929:575.8 Número de chamada: 301.0424 B882c.Py 2011"
    },
    {
      titulo:"Ecopoetry: a critical introduction",
      imagem:"",
      descricao:"Antologia organizada por J. Scott Bryson que oferece uma introdução crítica ao gênero da ecopoesia, explorando a relação entre poesia e meio ambiente.",
      referencia: "BRYSON, J. Scott (org.). Ecopoetry: a critical introduction. Salt Lake City: University of Utah Press, c2002. ISBN 0874807018 Número de chamada: 811.09 E19 2002"
    },
    {
      titulo:"História natural: Buffon",
      imagem:"",
      descricao:"Seleção de textos da vasta obra de história natural de Buffon, organizada e traduzida por Isabel Coelho Fragelli, Pedro Paulo Pimenta e Ana Carolina Soliva Soria, apresentando suas ideias sobre a natureza e a ciência.",
      referencia: "BUFFON. História natural: Buffon. Organizado e traduzido por Isabel Coelho Fragelli, Pedro Paulo Pimenta, Ana Carolina Soliva Soria. São Paulo: Editora UNESP, 2020. ISBN 978-85-393-0812-5 CDD 578 CDU 577 Número de chamada: 508 B929h.Pf 2020."
    },
    {
      titulo:"Viagem ao Brasil: através das províncias do Rio de Janeiro e Minas Gerais",
      imagem:"",
      descricao:"Relato de viagem de Hermann Burmeister pelo Brasil, com foco nas províncias do Rio de Janeiro e Minas Gerais, oferecendo observações sobre a geografia, a natureza e a sociedade da época.",
      referencia: "BURMEISTER, Hermann. Viagem ao Brasil: através das províncias do Rio de Janeiro e Minas Gerais. Tradução de Manoel Salvaterra e Hubert Schoenfeldt; nota bibliografica Augusto Meyer. Belo Horizonte: Ed. Itatiaia; São Paulo: Ed. da Universidade de São Paulo, 1980. (Reconquista do Brasil; nova série; v. 23) CDD: 918.153 CDD: 500.98151 CDD: 918.151"
    },
    {
      titulo:"Filhos da Cobra de Pedra: organização social e trajetórias Tuyuka no rio Tiquié (noroeste amazônico)",
      imagem:"",
      descricao:"Estudo antropológico de Aloisio Cabalzar sobre a organização social e as trajetórias do povo Tuyuka, habitante da região do rio Tiquié, no noroeste amazônico.",
      referencia: "CABALZAR, Aloisio. Filhos da Cobra de Pedra: organização social e trajetórias Tuyuka no rio Tiquié (noroeste amazônico). São Paulo: Ed. UNESP: ISA, 2009. 361p. ISBN 9788571398238 CDD 980.41CDU 94(=87)(81) Número de chamada: 980.41 C112f 2009"
    },
    {
      titulo:"Trilhas literárias indígenas: para a sala de aula",
      imagem:"",
      descricao:"Obra de Sueli de Souza Cagneti e Alcione Pauli que oferece caminhos para trabalhar a literatura indígena em sala de aula, com propostas pedagógicas e reflexões sobre a temática.",
      referencia: "CAGNETI, Sueli de Souza; PAULI, Alcione. Trilhas literárias indígenas: para a sala de aula. 1 ed. Belo Horizonte: Autêntica, 2015. (Conversas com o professor). ISBN 9788582174180 CDD -371.30281 Número de chamada: 372.4 C131t2015"
    },
    {
      titulo:"As cosmicômicas",
      imagem:"",
      descricao:"Coletânea de contos de Italo Calvino que exploram conceitos científicos e astronômicos de forma lúdica e imaginativa, com narrativas que se passam em diferentes momentos do universo.",
      referencia: "CALVINO, Italo. As cosmicômicas. Tradução: Ivo Barroso. São Paulo: Companhia das Letras, 2005. ISBN 9788571642423 (broch.) | ISBN 8571642427 CDD 853.91 Número de chamada: 853.912 C168c Pb 2005."
    },
    {
      titulo:"O guia das criaturas mágicas: desbravando terras brasileiras",
      imagem:"",
      descricao:"Livro de T. Câmara que apresenta um bestiário de criaturas mágicas do folclore brasileiro, com descrições e informações sobre suas origens e lendas.",
      referencia: "Câmara, T. O guia das criaturas mágicas: desbravando terras brasileiras. São Paulo: Letramento, 2019. ISBN 9788595303386 CDD 390.0981 CDU 398.21 (81) Número de chamada: 398.0981 C172g 2019."
    },
    {
      titulo:"Huni kuin hiwepaunibuki. A história dos Caxinauás por eles mesmos",
      imagem:"./livros/978-85-7995-071-1.webp",
      descricao:"Obra organizada por Eliane Camargo, Diego Villar e Txerinõ (Texerino) Capitan que reúne narrativas, cantos e mitos do povo Huni Kuin (Kaxinawá) em sua própria língua e em português, valorizando sua história e cultura.",
      referencia: "CAMARGO, Eliane; VILLAR, Diego; CAPITAN, Texerino (Org.). Huni kuin hiwepaunibuki. A história dos Caxinauás por eles mesmos. São Paulo: Edições Sesc São Paulo, 2013. 304 p. ISBN 978-85-7995-071-1 CDD: 572"
    },
    {
      titulo:"Mata Atlântica: patrimônio nacional dos brasileiros",
      imagem:"",
      descricao:"Livro organizado por Maura Campanili e Wigold Bertoldo Shaffer que aborda a importância da Mata Atlântica como patrimônio natural do Brasil, com informações sobre sua biodiversidade e a necessidade de conservação.",
      referencia: "CAMPANILI, Maura; SHAFFER, Wigold Bertoldo (org.). Mata Atlântica: patrimônio nacional dos brasileiros. Ministério do Meio Ambiente. Secretaria de Biodiversidade e Florestas. Núcleo Mata Atlântica e Pampa. Brasília: MMA, 2010. ISBN 978-85-7738-133-3 CDU (2.ed.) 502.4(815.6) (doação Ítalo Vinícius Gonçalves)"
    },
    {
      titulo:"A questão ambiental na América Latina: teoria social e interdisciplinaridade",
      imagem:"",
      descricao:"Leila da Costa Ferreira Campinas explora a questão ambiental na América Latina a partir de uma perspectiva teórica social e interdisciplinar, analisando as complexas relações entre sociedade e natureza na região.",
      referencia: "CAMPINAS, Leila da Costa Ferreira. A questão ambiental na América Latina: teoria social e interdisciplinaridade. SP: Ed. UNICAMP, 2011. ISBN 9788526809284 CDD 333.7098 Número de chamada: 304.2098 Q5 2011"
    },
    {
      titulo:"O comérico Português no Rio da Prata (1580-1640)",
      imagem:"",
      descricao:"Estudo de A. P. Canabrava sobre o comércio português na região do Rio da Prata durante o período da União Ibérica (1580-1640), analisando as dinâmicas econômicas e as relações comerciais da época.",
      referencia: "CANABRAVA, A. P. O comérico Português no Rio da Prata (1580-1640). Belo Horizonte: Ed. Itatiaia; São Paulo: Ed. da Universidade de São Paulo, 1984. CDD: 382.0946908 CDD: 382.0980469 CDD: 382.098081 CDD: 382.098108"
    },
    {
      titulo:"Primavera silenciosa",
      imagem:"",
      descricao:"Obra seminal de Rachel Carson que alertou para os perigos do uso indiscriminado de pesticidas e seus impactos na natureza e na saúde humana, impulsionando o movimento ambientalista.",
      referencia: "CARSON, Rachel. Primavera silenciosa. Tradução: Claudia Sant'Anna Martins; introdução: Linda Lear; posfácio: Edward O. Wilson. São Paulo: Gaia, 2010. ISBN 9788575552353 CDD 363.7384 Número de chamada: 363.7384 C321s.Pm 2010"
    },
    {
      titulo:"Nove noites: romance",
      imagem:"",
      descricao:"Romance de Bernardo Carvalho que narra a história de um antropólogo americano que se suicida no Brasil e a busca de um jornalista para desvendar os mistérios por trás dessa morte.",
      referencia: "CARVALHO, Bernardo de. Nove noites: romance. São Paulo: Companhia de Bolso, 2006. 150 p. ISBN 9788535908619. CDD 869.93. Número de chamada: B869.342 C331n 2006. n° de exemplares: 02."
    },
    {
      titulo:"Corografia Brasílica ou Relação histórico-geográfica do Reino do Brasil [pelo] Pe. Manuel Aires de Casal",
      imagem:"",
      descricao:"Descrição histórico-geográfica do Brasil escrita pelo Padre Manuel Aires de Casal no início do século XIX, abrangendo aspectos da geografia, história, flora, fauna e costumes da colônia.",
      referencia: "CASAL, Manuel Aires de. Corografia Brasílica ou relação histórico-georgráfica do Reino do Brasil [pelo]; prefácio de Mario G. Ferri. Belo Horizonte: Ed. Itatiaia; São Paulo: Ed. da Universidade de São Paulo, 1976. (Coleção Reconquista do Brasil; v.27). CDD: 918.1. CDD: 390.0981. CDD: 581.981. CDD: 591.891. CDD: 981.012. n° exemplares: 03."
    },
    {
      titulo:"Antologia do folclore brasileiro",
      imagem:"",
      descricao:"Primeiro volume da antologia organizada por Luís da Câmara Cascudo, que reúne diversas manifestações do folclore brasileiro.",
      referencia: "CASCUDO, Luis da Câmara (org.). Antologia do folclore brasileiro. São Paulo: Global, 2003, vol. 1, 6º ed. ISBN 978-85-260-0689-8 (v. 1) CDD 398.091 Número de chamada: 398.0981 A634 2003."
    },
    {
      titulo:"Antologia do folclore brasileiro",
      imagem:"",
      descricao:"Segundo volume da antologia organizada por Luís da Câmara Cascudo, que continua a apresentar a riqueza e a diversidade do folclore do Brasil.",
      referencia: "CASCUDO, Luis da Câmara (org.). Antologia do folclore brasileiro. São Paulo: Global, 2003, vol.2 9° ed. ISBN 8526007602 (v. 2) CDD 398.0981 Número de chamada: 398.0981 A634 2003."
    },
    {
      titulo:"Geografia dos mitos brasileiros",
      imagem:"",
      descricao:"Luís da Câmara Cascudo explora a distribuição geográfica e as variações dos mitos presentes no folclore brasileiro.",
      referencia: "CASCUDO, Luís da Câmara. Geografia dos mitos brasileiros. 6. ed. São Paulo: Global, 2022. ISBN 9786556121727 CDD 398.40981 Número de chamada: 398.0981 C336g 2022."
    },
    {
      titulo:"Literatura oral no Brasil",
      imagem:"",
      descricao:"Estudo de Luís da Câmara Cascudo sobre as diversas formas de literatura oral existentes no Brasil, como contos, lendas, canções e provérbios.",
      referencia: "CASCUDO, Luis da Câmara. Literatura oral no Brasil. São Paulo: Global, 2006, 2. ed. ISBN 8526010611 CDD 398.20981 Número de chamada: 398.20981 C336l 2006."
    },
    {
      titulo:"Contra fogo",
      imagem:"",
      descricao:"Romance de Pablo L. C. Casella.",
      referencia: "CASELLA, Pablo L. C. Contra fogo. São Paulo: Todavia, 2024. ISBN 9786556925738 CDD B869.3. Número de chamada: B869.341 C337c."
    },
    {
      titulo:"Expedição às regiões centrais da América do Sul",
      imagem:"",
      descricao:"Relato da expedição de Francis de Castelnau pelas regiões centrais da América do Sul.",
      referencia: "CASTELNAU, Francis. Expedição às regiões centrais da América do Sul. Tradução de Olivério M. de Oliveira Pinto. Belo Horizonte; Rio de Janeiro: Ed. Itatiaia, 2000. (Coleção Reconquista do Brasil, v.217). ISBN 85-319-0312-2. n° exemplares: 02."
    },
    {
      titulo:"Araweté: um povo tupi da Amazônia",
      imagem:"",
      descricao:"Estudo antropológico de Eduardo Viveiros de Castro, Camila de Caux e Guilherme Orlandini Heurich sobre o povo Araweté, de língua tupi, habitante da Amazônia.",
      referencia: "CASTRO, Eduardo Viveiro de; CAUX, Camila de; HEURICH, Guilherme Orlandini. Araweté: um povo tupi da Amazônia. 3. ed. revista e ampliada. São Paulo: Edições Sesc São Paulo, 2016. 228 p. ISBN 978-85-9493--003-3. CDD: 725.8."
    },
    {
      titulo:"Araweté: um povo tupi da Amazônia",
      imagem:"",
      descricao:"Estudo antropológico de Eduardo Viveiros de Castro, Camila de Caux e Guilherme Orlandini Heurich sobre o povo Araweté, de língua tupi, habitante da Amazônia.",
      referencia: "CASTRO, Eduardo Viveiro de; CAUX, Camila de; HEURICH, Guilherme Orlandini. Araweté: um povo tupi da Amazônia. 3. ed. São Paulo: Edições Sesc São Paulo, 2017. ISBN 978-85-9493-003-3 CDD: 275.8"
    },
    {
      titulo:"Os mil nomes de Gaia: do Antropoceno à Idade da Terra",
      imagem:"",
      descricao:"Obra organizada por Eduardo Viveiros de Castro, Déborah Danowski e Rafael Saldanha que discute conceitos relacionados ao Antropoceno e à ideia de Gaia.",
      referencia: "CASTRO, Eduardo Viveiros de; DANOWSKI, Déborah; SALDANHA, Rafael (org.). Os mil nomes de Gaia: do Antropoceno à Idade da Terra. 1. ed. Rio de Janeiro: Machado, vol. 2, 2023. ISBN 9786599634529 CDD 363.73874 Número de chamada: 304.2 M637 2023."
    },
    {
      titulo:"A inconstância da alma selvagem e outros ensaios de antropologia",
      imagem:"",
      descricao:"Coletânea de ensaios de Eduardo Viveiros de Castro que aborda temas centrais da antropologia, como parentesco, cosmologia e perspectivismo ameríndio.",
      referencia: "CASTRO, Eduardo Viveiros de. A inconstância da alma selvagem e outros ensaios de antropologia. São Paulo: Ubu, 2017. 477 p. (Coleção argonautas). ISBN 9788592886271. CDD 306.08981. Número de chamada: 306 C355i 2017"
    },
    {
      titulo:"Terra: antologia afro-indígena",
      imagem:"",
      descricao:"Antologia que reúne textos de autores afrodescendentes e indígenas, explorando suas perspectivas e experiências em relação à terra e à identidade.",
      referencia: "CAVERVALLI, Felipe; REGALDO, Fernanda; LOBATO, Paula; MARQUEZ, Renata; CANÇADO, Wellington. Terra: antologia afro-indígena. Ensaio visual / capa de Jaime Lauriano. Ensaio visual / bandeira de Matheus Ribs. São Paulo: Belo Horizonte: Ubu Editora / PISEAGRAMA, 2023. 368 p. ISBN 978 85 7126 137 2 CDD 80 Número de chamada: 980.41 T323 2023"
    },
    {
      titulo:"Novelas exemplares",
      imagem:"",
      descricao:"Coletânea de doze novelas curtas escritas por Miguel de Cervantes, que exploram temas como amor, honra, aventura e moralidade.",
      referencia: "CERVANTES, Miguel de. Novelas exemplares. Tradução Yara Camillo. São Paulo: Martin Claret, 2020. ISBN 9786586014617 CDD 863 Número de chamada: 863.62 C419n.Pc 2020."
    },
    {
      titulo:"Políticas culturais e povos indígenas",
      imagem:"",
      descricao:"Obra organizada por Pedro de Niemeyer Cesarino e Manuela Carneiro da Cunha que discute as políticas culturais voltadas para os povos indígenas no Brasil.",
      referencia: "CESARINO, Pedro de Niemeyer; Cunha, Manuela Carneiro da. (orgs.) Políticas culturais e povos indígenas. São Paulo: UNESP, 2016. ISBN 9788539306176 CDD 305.898 CDU 316.347(8) Número de chamada: 980.41 P769 2016"
    },
    {
      titulo:"Dicionário Kaiowá-Português",
      imagem:"",
      descricao:"Dicionário bilíngue Kaiowá-Português com colaborações e ilustrações, visando a preservação e o estudo da língua Kaiowá.",
      referencia: "CHAMORRO, Graciela. Dicionário Kaiowá-Português. Colaboração de Ana Suelly Arruda Câmara Cabral, Andérbio Márcio Silva Martins, Jorge Domingues Lopes; ilustrações por Misael Concianza Jorge. 2 ed. Belo Horizonte: Javali, 2023. ISBN 978-65-87635-31-6 CDD 498 CDU (038) Número de chamada: 498.369 C448 2023 R"
    },
    {
      titulo:"Country matters: a countryside companion: 74 tips, tales and talking points",
      imagem:"./livros/9781788168694.webp",
      descricao:"Guia que oferece dicas, histórias e pontos de discussão sobre a vida no campo.",
      referencia: "CLOTHIER, Meg. Country matters: a countryside companion: 74 tips, tales and talking points. London: Profile Books, 2023. ISBN 9781788168694 Número de chamada: 820.8 C646c 2023"
    },
    {
      titulo:"Memórias da Cidade do Rio de Janeiro",
      imagem:"",
      descricao:"Registro de memórias sobre a cidade do Rio de Janeiro por Vivaldo Coaracy.",
      referencia: "COARACY, Vivaldo. Memórias da Cidade do Rio de Janeiro. Belo Horizonte: Itatiaia; São Paulo: Editora da Universidade de São Paulo, 1988. (Coleção reconquista do Brasil. 2. série; V. 132) CDD: 981. 531 CDD: 390.098153 CDD: 869.935 CDD: 018.1531"
    },
    {
      titulo:"Metamorfoses",
      imagem:"",
      descricao:"Reflexão filosófica de Emanuele Coccia sobre o conceito de metamorfose, acompanhada por desenhos de Luiz Zerbini.",
      referencia: "COCCIA, Emanuele. Metamorfoses. Desenhos de Luiz Zerbini. Tradução de Madeleine Deschamps e Victoria Mouawad. Rio de Janeiro: Dantes, 2020. ISBN 9786588069004. CDD 121.35. Número de chamada: 129 C659m.Pd 2020"
    },
    {
      titulo:"Rio Doce: a espantosa evolução de um Vale",
      imagem:"",
      descricao:"Análise de Marco Antônio Tavares Coelho sobre a formação geológica e a evolução histórica e social do Vale do Rio Doce.",
      referencia: "COELHO, Marco Antônio Tavares. Rio Doce: a espantosa evolução de um Vale. Belo Horizonte: Autêntica, c2011. 207 p. ISBN 9788575265710 CDD 981.51 Número de chamada: 981.51 C672r 2011"
    },
    {
      titulo:"Poética e filosofia da paisagem",
      imagem:"",
      descricao:"Michel Collot explora a relação entre a poética e a filosofia na compreensão da paisagem.",
      referencia: "COLLOT, Michel. Poética e filosofia da paisagem. Tradutores: Alberto da Silva et al. Rio de Janeiro: Oficina Raquel, 2013. ISBN 9788565505376 CDD 840.9 Número de chamada: 809.9332 C714.Ps 2013."
    },
    {
      titulo:"A inteligência dos animais",
      imagem:"",
      descricao:"Obra de Etienne Bonnot de Condillac que discute a inteligência e as capacidades cognitivas dos animais.",
      referencia: "CONDILLAC, Etienne Bonnot de. A inteligência dos animais. São Paulo: Ed. UNESP, 2022. 295 p (Coleção clássicos). ISBN 9786557110942 CDD 100 CDU 1 Número de chamada: 591.51 C745t.Pf 2022"
    },
    {
      titulo:"Todos os contos",
      imagem:"",
      descricao:"Reunião completa dos contos do escritor argentino Julio Cortázar, dividida em dois volumes.",
      referencia: "CORTÁZAR, Julio. Todos os contos. v. 1, tradução Heloisa Jahn; v. 2 tradução Josely Vianna Baptista. São Paulo: Companhia das Letras, 2021. CDD-Ar863 ISBN 9786559210701 Número de chamada: Ar863.42 C827c.Pj 2021."
    },
    {
      titulo:"Uma história das florestas brasileiras",
      imagem:"",
      descricao:"Zé Pedro de Oliveira Costa apresenta uma visão histórica da evolução das florestas no Brasil.",
      referencia: "COSTA, Zé Pedro de Oliveira. Uma história das florestas brasileiras. Belo Horizonte: Autêntica, 2022. ISBN: 978-65-5928-139-8. CDD-634.90981. Número de chamada: 634.90981 C837h 2022"
    },
    {
      titulo:"Viagem à Itaboca e ao Itacaiúnas",
      imagem:"",
      descricao:"Relato da viagem de Henri Coudreau às regiões de Itaboca e Itacaiúnas, na Amazônia brasileira.",
      referencia: "COUDREAU, Henri. Viagem à Itaboca e ao Itacaiúnas. Tradução de Eugênio Amado. Belo Horizonte: Ed. Itatiaia; São Paulo: Ed. da Universidade de São Paulo, 1980. (Reconquista do Brasil; v 60) CDD: 918.115"
    },
    {
      titulo:"Viagem à Itaboca e ao Itacaiúnas",
      imagem:"",
      descricao:"Relato da viagem de Henri Coudreau às regiões de Itaboca e Itacaiúnas, na Amazônia brasileira, com prefácio de Mário G. Ferri.",
      referencia: "COUDREAU, Henri. Viagem à Itaboca e ao Itacaiúnas. Tradução de Eugênio Amado. Prefácio de Mário G. Ferri. Belo Horizonte: Ed. Itatiaia. São Paulo: Ed. da Universidade de São Paulo,1980. CDD 918.115."
    },
    {
      titulo:"The green studies reader: from romantism to ecocriticism",
      imagem:"",
      descricao:"Antologia organizada por Laurence Coupe que reúne textos importantes do campo dos estudos verdes, desde o romantismo até a ecocrítica.",
      referencia: "COUPE, Laurence (org.). The green studies reader: from romantism to ecocriticism. London; New York: Routledge, 2000. ISBN 0415204070 Número de chamada: 820.9 G798 2000"
    },
    {
      titulo:"Linguística Ecossistema: 10 Anos de Ecolinguística no Brasil",
      imagem:"",
      descricao:"Coletânea organizada por Elza Kioto Nakayama Nenoki do Couto, Zilda Dourado, Anderson Nowogrodzki da Silva e João Nunes Avelar Filho, que celebra os dez anos de pesquisa em ecolinguística no Brasil.",
      referencia: "COUTO, Elza Kioto Nakayama Nenoki do; DOURADO, Zilda; SILVA, Anderson Nowogrodzki da; FILHO, João Nunes Avelar (Org.). Linguística Ecossistema: 10 Anos de Ecolinguística no Brasil. Campinas, SP: Pontes Editores, 2017. ISBN 978-85-7113-875-9."
    },
    {
      titulo:"Contos do nascer da terra",
      imagem:"",
      descricao:"Livro de contos do escritor moçambicano Mia Couto, que exploram as relações entre pessoas, natureza e espiritualidade em Moçambique.",
      referencia: "COUTO, Mia. Contos do nascer da terra. São Paulo: Companhia das Letras, 2014. 267 p. ISBN 9788535924343. CDD m869.3. Número de chamada: 896.31 C871c 2014."
    },
    {
      titulo:"Um rio chamado tempo, uma casa chamada terra",
      imagem:"",
      descricao:"Romance do escritor moçambicano Mia Couto que narra a história de um homem à beira da morte e suas memórias em um contexto de Moçambique pós-independência.",
      referencia: "COUTO, Mia. Um rio chamado tempo, uma casa chamada terra. São Paulo: Companhia das Letras, 2003. 263 p. ISBN 853590343. CDD 869.3. Número de chamada: 896.31 C871r 2003."
    },
    {
      titulo:"Terra arrasada: além da era digital, rumo a um mundo pós-capitalista",
      imagem:"",
      descricao:"Ensaio de Jonathan Crary que, com Humberto do Amaral na edição brasileira, critica a era digital e propõe reflexões sobre um futuro pós-capitalista.",
      referencia: "CRARY, Jonathan.; AMARAL, Humberto do. Terra arrasada: além da era digital, rumo a um mundo pós-capitalista. São Paulo: Ubu Editora, 2023. 187 p. (Coleção Exit). ISBN 9788571260986 CDD 300 CDU 3 Número de chamada: 303.4833 C893s.Pa 2023."
    },
    {
      titulo:"Iléia Amazônica: Aspectos da flora, fauna, arqueologia e etnografia indígenas",
      imagem:"",
      descricao:"Obra de Gastão Cruls que aborda diversos aspectos da região amazônica, incluindo sua flora, fauna, arqueologia e a etnografia dos povos indígenas.",
      referencia: "CRULS, Gastão. Iléia Amazônica: Aspectos da flora, fauna, arqueologia e etnografia indígenas. Belo Horizonte: Ed. Itatiaia, 2003. (Coleção Reconquista do Brasil - 2ª Série). ISBN 85-319-0437-4."
    },
    {
      titulo:"A persistência dos deuses: religião, cultura e natureza",
      imagem:"",
      descricao:"Eduardo R. da Cruz explora as relações entre religião, cultura e natureza no contexto brasileiro.",
      referencia: "CRUZ, Eduardo R. da. A persistência dos deuses: religião, cultura e natureza. São Paulo: Ed. Unesp, 2004. 91 p. (Paradidáticos. Cultura). ISBN 8571395578 CDD 200981 CDU 2(81) Número de chamada: 306.6 C957p 2004"
    },
    {
      titulo:"No longe dos Gerais: a história da condução de uma boiada no interior de Minas",
      imagem:"",
      descricao:"Narrativa de Nelson Cruz sobre a história da condução de uma boiada no interior de Minas Gerais.",
      referencia: "CRUZ, Nelson. No longe dos Gerais: a história da condução de uma boiada no interior de Minas. 1. ed. São Paulo: Cosac & Naify, 2004. ISBN 85-7503-280-1. CDD: 028-5."
    },
    {
      titulo:"À margem da história",
      imagem:"",
      descricao:"Coletânea de ensaios de Euclides da Cunha sobre diversos temas históricos e sociais do Brasil.",
      referencia: "CUNHA, Euclides da. À margem da história. São Paulo: Editora Unesp, 2019. ISBN 978-85-393-0766-1 CDD: 981.05 CDU: 94(81)”1889/1930” Número de chamada: 981 C972m 2019"
    },
    {
      titulo:"O passado ainda está por vir",
      imagem:"",
      descricao:"Diálogo entre Déborah Danowski e Eduardo Viveiros de Castro sobre temas relacionados ao tempo, à história e ao futuro.",
      referencia: "DANOWSKI, Déborah; CASTRO, Eduardo Viveiros de. O passado ainda está por vir. 1ª ed. São Paulo: n-1 Edições, 2023. ISBN 9786581097929 CDD 100 CDU 2023-3409 Número de chamada: 100 D188p 2023."
    },
    {
      titulo:"Raiz Weiwei",
      imagem:"",
      descricao:"Obra organizada por Marcelo Dantas sobre o artista chinês Ai Weiwei.",
      referencia: "DANTAS, Marcelo (org.). Raiz Weiwei. São Paulo: Ubu Editora, 2018. 192 p.ISBN 978 85 71260 09 2.CDD 700 CDU 7. Número de chamada: 709.51 A288a 2018."
    },
    {
      titulo:"Darwin por Darwin: um panorama de sua vida e obra através de seus escritos",
      imagem:"",
      descricao:"Seleção de escritos de Charles Darwin organizada por E. J. Browne, oferecendo uma visão geral de sua vida e obra.",
      referencia: "DARWIN, Charles; BROWNE, E. J. Darwin por Darwin: um panorama de sua vida e obra através de seus escritos. Rio de Janeiro: Zahar, 2019. 327 p. ISBN 9788537818459 CDD 925 CDU 929.5 Número de chamada: 301.0424 D228.Pb 2019"
    },
    {
      titulo:"A origem das espécies",
      imagem:"",
      descricao:"Obra fundamental de Charles Darwin que apresenta a teoria da evolução por seleção natural, com organização, apresentação e tradução de Pedro Paulo Pimenta.",
      referencia: "DARWIN, Charles. A origem das espécies. Organização, apresentação e tradução de Pedro Paulo Pimenta. São Paulo: Ubu Editora, 2018. ISBN 978-85-92886-86-8 CDU 575.8 Número de chamada: 575.0162 D228.Pp 2018"
    },
    {
      titulo:"A origem das espécies",
      imagem:"",
      descricao:"Obra fundamental de Charles Darwin que apresenta a teoria da evolução por seleção natural, com tradução de Lara Pimentel Anastacio.",
      referencia: "DARWIN, Charles. A origem das espécies.Tradução de Lara Pimentel Anastacio. São Paulo: Editora Unesp, 2022. ISBN 978-65-5711-091-1 CDD 575 CDU 575.8 Número de chamada: 575.0162 D228f.Pa 2022"
    },
    {
      titulo:"Robson Crusoe",
      imagem:"",
      descricao:"Clássico romance de Daniel Defoe sobre um náufrago que sobrevive sozinho em uma ilha deserta, com tradução de Leonardo Fróes e desenhos de Nicolás Robbio.",
      referencia: "DEFOE, Daniel. Robson Crusoe. Traduzido por Leonardo Fróes. Desenhos de Nicolás Robbio. São Paulo: Ubu Editora, 2021.432 p. ISBN 978 65 86497 60 1 CDD 823 CDU 821.111-31 Número de chamada: 823.4 D314r. Pf 2021"
    },
    {
      titulo:"Cadeia de reciclagem: um olhar para os catadores",
      imagem:"",
      descricao:"Estudo de Jacques Demajorovic e Márcia Lima sobre a cadeia de reciclagem no Brasil, com foco no trabalho e nas condições dos catadores.",
      referencia: "DEMAJOROVIC, Jacques; LIMA, Márcia. Cadeia de reciclagem: um olhar para os catadores. São Paulo: Editora Senac São Paulo; São Paulo: Edições Sesc SP, 2013. ISBN 978-85-396-0441-8 ISBN 978-85-7995-085-8 CDD: 363.7282"
    },
    {
      titulo:"Brasil",
      imagem:"",
      descricao:"Visão geral sobre o Brasil escrita por Ferdinand Denis, com prefácio de Mário Guimarães Ferri e tradução de João Etienne Filho e Malta Lima, abordando aspectos históricos, geográficos e culturais.",
      referencia: "DENIS, Ferdinand. Brasil. Prefácio Mário Guimarães Ferri; Tradução de João Etienne Filho e Malta Lima. Belo Horizonte: Ed. Itatiaia; São Paulo: Ed. da Universidade de São Paulo, 1980. (Coleção Reconquista do Brasil; v.46). CDD: 981. CDD: 390.0981. CDD: 918.1. CDD: 980.41."
    },
    {
      titulo:"Outras naturezas, outras culturas",
      imagem:"",
      descricao:"Obra de Philippe Descola que explora diferentes ontologias e as relações entre humanos e não humanos em diversas culturas.",
      referencia: "DESCOLA, Philippe. Outras naturezas, outras culturas. Tradução de Cecília Ciscato. São Paulo: Editora 34, 2016. ISBN 978-85-7326-643-6. CDD-306. Número de chamada: 306 D448d.Pc 2016"
    },
    {
      titulo:"As baleias e nós",
      imagem:"",
      descricao:"Livro infantil de India Desjardins com ilustrações de Nathalie Dion.",
      referencia: "DESJARDINS, India. As baleias e nós. Ilustração Nathalie Dion. ISBN 9786588410332. Número de chamada: 808.068 D459b.Ps 2022."
    },
    {
      titulo:"Kew: the history of the Royal Botanic Gardens",
      imagem:"",
      descricao:"História do Real Jardim Botânico de Kew, em Londres, escrita por Ray Desmond.",
      referencia: "DESMOND, Ray. Kew: the history of the Royal Botanic Gardens. London: Harvill Press with the Royal Botanic Gardens, Kew, 1995. ISBN 1860460763 Número de chamada: 580 D464k 1995"
    },
    {
      titulo:"O que diriam os animais?",
      imagem:"",
      descricao:"Vinciane Despret explora as diferentes formas de conhecimento e comunicação dos animais, questionando as abordagens tradicionais da etologia.",
      referencia: "DESPRET, Vinciane. O que diriam os animais? Traduzido por Letícia Mei. - São Paulo: Ubu Editora, 2021. ISBN 978-65-86497-61-8 CDD: 100 CDU: 1 Número de chamada: 591.5 D473q.Pm 2021"
    },
    {
      titulo:"Plantas medicinais na Amazônia e na Mata Atlântica",
      imagem:"",
      descricao:"Guia de Luiz Claudio Di Stasi e Clélia Akiko Hiruma-Lima sobre as plantas medicinais encontradas na Amazônia e na Mata Atlântica brasileiras.",
      referencia: "DI STASI, Luiz Claudio; HIRUMA-LIMA, Clélia Akiko. Plantas medicinais na Amazônia e na Mata Atlântica. 2. ed. rev. e ampl. São Paulo: UNESP. 2002. 604 p. ISBN 8571394113 CDD 581.6340981 Número de chamada: 615 D614p 2002."
    },
    {
      titulo:"Sobrevivência dos vaga-lumes",
      imagem:"",
      descricao:"Ensaio de Georges Didi-Huberman que reflete sobre a resistência e a esperança em tempos sombrios, utilizando a metáfora dos vaga-lumes.",
      referencia: "DIDI-HUBERMAN, Georges. Sobrevivência dos vaga-lumes. Tradução de Vera Casa Nova e Márcia Arbex. Belo Horizonte: Editora UFMG, 2011. ISBN 978-85-7041-889-0 CDD: 844.914 CDU: 840-4. nº exemplares: 2."
    },
    {
      titulo:"Símbolos naturais: explorações em cosmologia",
      imagem:"",
      descricao:"Mary Douglas explora como os símbolos naturais são utilizados em diferentes cosmologias para expressar e organizar as categorias do pensamento social.",
      referencia: "DOUGLAS, Mary. Símbolos naturais: explorações em cosmologia. Tradução de Priscila Santos da Costa. São Paulo: Editora Unesp, 2021. ISBN 978-65-5711-081-2 CDD 301 CDU 572 Número de chamada: 306 D735n.Pc 2021"
    },
    {
      titulo:"A biologia militante: o Museu Nacional, especialização científica, divulgação do conhecimento e práticas políticas no Brasil - 1926-1945",
      imagem:"",
      descricao:"Estudo de Regina Horta Duarte sobre o papel do Museu Nacional no desenvolvimento da biologia no Brasil entre 1926 e 1945, analisando sua atuação científica, divulgadora e política.",
      referencia: "DUARTE, Regina Horta. A biologia militante: o Museu Nacional, especialização científica, divulgação do conhecimento e práticas políticas no Brasil - 1926-1945. Belo Horizonte: Ed. UFMG, 2010. 219 p. ISBN 978-85-7041-860-9. CDD: 574.0981. CDU: 573(091)(81)."
    },
    {
      titulo:"E assim começou a história que já havia começado",
      imagem:"",
      descricao:"Publicação da Associação Projeto Educação do Assalariado Rural Temporário.",
      referencia: "E assim começou a história que já havia começado. Associação Projeto Educação do Assalariado Rural Temporário. - Londrina: APARTE; PERI; [Brasília]: MEC, 1999. 63p. CDU: 37(=081:81)."
    },
    {
      titulo:"O sentido da vida: uma brevíssima introdução",
      imagem:"",
      descricao:"Breve introdução de Terry Eagleton à questão do sentido da vida.",
      referencia: "EAGLETON, Terry. O sentido da vida: uma brevíssima introdução.Tradução de Pedro Paulo Pimenta. São Paulo: Editora Unesp, 2021.ISBN: 978-65-5711-015-7 CDD 100 CDU 1 Número de chamada:128 E11m.Pp 2021"
    },
    {
      titulo:"The ethnobotanical: a world tour of Indigenous plant knowledge",
      imagem:"",
      descricao:"Sarah E. Edwards oferece uma viagem pelo mundo do conhecimento indígena sobre as plantas.",
      referencia: "EDWARDS, Sarah E. The ethnobotanical: a world tour of Indigenous plant knowledge. London: Greenfinch, 2023. ISBN 9781529427400 Número de chamada: 580 E26e 2023"
    },
    {
      titulo:"Entre botânicas decoloniais: as frutas silvestres de Henry David Thoreau e frutas brasileiras",
      imagem:"",
      descricao:"Klaus Eggensperger explora as relações entre as botânicas decoloniais, as frutas silvestres de Henry David Thoreau e as frutas brasileiras.",
      referencia: "EGGENSPERGER, Klaus. Entre botânicas decoloniais: as frutas silvestres de Henry David Thoreau e frutas brasileiras. Curitiba: Appris, 2021. ISBN 9786525020877 CDD 781.582 Número de chamada: 814.2 T488.Y-e 2023"
    },
    {
      titulo:"Viagem ao País de Tropicana - A quinta viagem de Gulliver",
      imagem:"",
      descricao:"Aventura de Luís Carlos Eiras inspirada nas viagens de Gulliver, ambientada no fictício País de Tropicana.",
      referencia: "EIRAS, Luís Carlos. Viagem ao País de Tropicana – A quinta viagem de Gulliver. Belo Horizonte: Ed. Itatiaia, 1982. (Coleção Buriti, v. 15). nº exemplares: 02."
    },
    {
      titulo:"A linguagem sentimental das flores e o namoro às escondidas no Rio de Janeiro do XIX",
      imagem:"",
      descricao:"Alessandra El Far investiga o uso da linguagem das flores como forma de comunicação e o contexto dos namoros discretos no Rio de Janeiro do século XIX.",
      referencia: "EL FAR, Alessandra. A linguagem sentimental das flores e o namoro às escondidas no Rio de Janeiro do XIX. São Paulo: Editora Unesp, 2022. ISBN 978-65-5711-114-7 CDD 306 CDU 316 Número de chamada: 809.9336 E371 2022"
    },
    {
      titulo:"Epopeia da criação: Enuma elis",
      imagem:"",
      descricao:"Tradução para o português da antiga epopeia babilônica da criação, Enuma Elis, com introdução e notas de Jacyntho José Lins Brandão.",
      referencia: "ENUMA ELIS. Português.; BRANDÃO, Jacyntho José Lins. Epopeia da criação: Enuma elis. Belo Horizonte: Autêntica, 2022. 427 p. (Coleção clássica). ISBN 9786559282012 CDD 213. Número de chamada: 299.21 E61.Pb 2022"
    },
    {
      titulo:"Fala de Bicho, Fala de Gente: Cantigas de Ninar Juruna",
      imagem:"",
      descricao:"Coletânea de cantigas de ninar do povo indígena Juruna, organizada por Marlui Miranda.",
      referencia: "Fala de Bicho, Fala de Gente: Cantigas de Ninar Juruna. [Marlui Miranda]. São Paulo, SESC, 2014."
    },
    {
    titulo:"Árvore nômade",
    imagem:"",
    descricao:"",
    referencia: "FARES, Rafael. Árvore nômade. Ilustrações Jaider Esbell, Leonora Weissman, Nila Kaiowá, Humberto Mundim. Belo Horizonte: Impressões de Minas, 2021.. ISBN: 978-65-86729-24-5 CDD B869.1 CDU 869 (81)-1.",
    },
    {
    titulo:"ala de bicho, fala de gente: cantigas de ninar do Povo Juruna",
    imagem:"",
    descricao:"",
    referencia: "FARGETTI, Cristina Martins. Participação de Marlui Miranda. Fala de bicho, fala de gente: cantigas de ninar do Povo Juruna. São Paulo: Edições Sesc São Paulo, 2017. ISBN 978-85-9493-031-6 CDD 784.624",
    },
    {
    titulo:"Amazônia ocupada",
    imagem:"",
    descricao:"",
    referencia: "FARKAS, João. Amazônia ocupada. Tradução de Julia May e Juliana Mills. São Paulo: Edições Sesc São Paulo, 2015. ISBN 978-85-69298-44-1 CDD 770",
    },
    {
    titulo:"Ardis da arte: imagem, agência e ritual na Amazônia",
    imagem:"",
    descricao:"",
    referencia: "FAUSTO, Carlos. Ardis da arte: imagem, agência e ritual na Amazônia. São Paulo: Edusp, 2023. CDD-704.03 ISBN 9786557851234 Número de chamada: 980.41 F268a 2023",
    },
    {
    titulo:"A cosmopolítica dos animais",
    imagem:"",
    descricao:"",
    referencia: "FAUSTO, Juliana. A cosmopolítica dos animais. São Paulo, SP: N-1 edições & Hedra, 2020. ISBN 978-65-86941-15-9 CDD 320 CDU 32. Número de chamada: 320 F268c 2020 (Doação da Profa. Valéria Sabrina Pereira)",
    },
    {
    titulo:"O ponto zero da revolução: trabalho doméstico, reprodução e luta feminista",
    imagem:"",
    descricao:"",
    referencia: "FEDERICI, Silvia. O ponto zero da revolução: trabalho doméstico, reprodução e luta feminista. Tradução Coletivo Sycorax. São Paulo: Elefante, 2019. ISBN 9788593115264 CDD 305.42 Número de chamada: 305.42 F293r.Pc 2019",
    },
    {
    titulo:"Reencantando o mundo: feminismo e a política dos comuns",
    imagem:"",
    descricao:"",
    referencia: "FEDERICI, Silvia. Reencantando o mundo: feminismo e a política dos comuns. Tradução de Coletivo Sycorax – São Paulo: Elefante, 2022. 320 p. ISBN 978-65-87235-71-4 CDD 305.42 Número de chamada: 305.42 F293r.Pc 2022",
    },
    {
    titulo:"Uma ecologia decolonial: pensar a partir do mundo caribenho",
    imagem:"",
    descricao:"",
    referencia: "FERDINAND, Malcom; MEI, Leticia. Uma ecologia decolonial: pensar a partir do mundo caribenho. São Paulo: Ubu Editora, 2022. 317 p. ISBN 9786586497960. CDD 577 CDU 574. Número de chamada: 304.2 F347e.Pm 2022. nº de exemplares: 02.",
    },
    {
    titulo:"A função social da guerra na sociedade Tupinambá",
    imagem:"",
    descricao:"",
    referencia: "FERNANDES, Florestan. A função social da guerra na sociedade Tupinambá. São Paulo: Editora Globo, 2006. ISBN 8525042418 CDD-980.3 Número de chamada: 980.41 F363f 2006.",
    },
    {
    titulo:"Entre histórias e tererés: o ouvir da literatura pantaneira",
    imagem:"",
    descricao:"",
    referencia: "FERNANDES, Frederico Augusto Garcia. Entre histórias e tererés: o ouvir da literatura pantaneira. São Paulo: Editora UNESP, 2002. ISBN 85-7139-385-0. CDD: 869.9309.",
    },
    {
    titulo:"Baré: povo do rio",
    imagem:"",
    descricao:"",
    referencia: "FERNANDES, Marina Herrero; FERNANDES, Ulysses (Org.). Baré: povo do rio. Prefácio de Eduardo Viveiro de Castro. São Paulo: Edições Sesc São Paulo, 2015. ISBN 978-85-7995-174-9. CDD: 301.",
    },
    {
    titulo:"Ilhas: de Atlântida a Zanzibar",
    imagem:"",
    descricao:"",
    referencia: "FISHER, Steven Roger. Ilhas: de Atlântida a Zanzibar. Tradução de Claudia Freire. 1 ed. São Paulo: Editora UNESP, 2014. ISBN 978-85-393-0550-6 CDD 910.9142 CDU 913 Número de chamada: 913 F529i.Pf 2014",
    },
    {
    titulo:"Biotecnologias: Novos desafios e nova responsabilidade à luz da ética de Hans Jonas",
    imagem:"",
    descricao:"",
    referencia: "FONSECA, Lilian Simone Godoy. Biotecnologias: Novos desafios e nova responsabilidade à luz da ética de Hans Jonas. Belo Horizonte: Editora UFMG, 2015. ISBN 978-85-423-0141-0 CDD: 170 CDU: 17. nº exemplares: 2.",
    },
    {
    titulo:"O melhor de Rubem Fonseca",
    imagem:"",
    descricao:"",
    referencia: "FONSECA, Rubem. O melhor de Rubem Fonseca. 1. ed. Rio de Janeiro: Nova Fronteira, 2015. ISBN 9788520940907 CDD 869.93 CDU 821.134.3(81)-3 Número de chamada: B869.341 F676m 2015",
    },
    {
    titulo:"Casa-grande & senzala: formação da família brasileira sob o regime da economia patriarcal",
    imagem:"",
    descricao:"",
    referencia: "FREYRE, Gilberto. Casa-grande & senzala: formação da família brasileira sob o regime da economia patriarcal. Apresentação de Fernando Henrique Cardoso; posfácio de Mary Del Priore; biobibliografia de Edson Nery da Fonseca. 53. ed. São Paulo: Global, 2023. ISBN 9786556125350 Número de chamada: 981 F894c 2023.",
    },
    {
    titulo:"Os nascimentos / As caras e as máscaras / O século do vento",
    imagem:"",
    descricao:"",
    referencia: "GALEANO, Eduardo H. Memória do fogo. Porto Alegre: L&PM Pocket, 2010. v.1. ; v.2. As caras e as máscaras; v.3. O século do vento. ISBN 9788525420787 CDD 980 CDU 94(8) (v.1) 9788525420862 (v.2) 9788525420923 (v.3). Número de chamada: U863.42 G151m.Pn 2010",
    },
    {
    titulo:"Lavradores, águas e lavouras: estudos sobre gestão camponesa de recursos hídricos no Alto Jequitinhonha",
    imagem:"",
    descricao:"",
    referencia: "GALIZONI, Flávia Maria (Org.). Lavradores, águas e lavouras: estudos sobre gestão camponesa de recursos hídricos no Alto Jequitinhonha. Belo Horizontes: Editora UFMG, 2013. 254 p. ISBN: 978-85-423-0001-7 CDD: 363.61 CDU: 644.6",
    },
    {
    titulo:"A luta indígena no coração do Brasil: política indigenista, a Marcha para o Oeste e os índios xavante (1937-1988)",
    imagem:"",
    descricao:"",
    referencia: "GARFIELD, Seth. A luta indígena no coração do Brasil: política indigenista, a Marcha para o Oeste e os índios xavante (1937-1988). São Paulo: Editora UNESP, 2011. 392 p. ISBN 9788539300846 CDD 980.41 CDU 94(=87)(81) Número de chamada: 980.41 G231i.Pm 2011",
    },
    {
    titulo:"A grande ruptura: como a crise climática vai acabar o consumo e criar um novo mundo",
    imagem:"",
    descricao:"",
    referencia: "GILDING, Paul. A grande ruptura: como a crise climática vai acabar o consumo e criar um novo mundo. Tradução de Renato Aguiar. 1. ed. Rio de Janeiro: Apicuri, 2014. 300 p. ISBN 978-85-8317-018-1. CDD: 363.738746. CDU: 504.06.",
    },
    {
    titulo:"Formas comuns: animalidade, literatura e biopolítica",
    imagem:"",
    descricao:"",
    referencia: "GIORGI, Gabriel. Formas comuns: animalidade, literatura e biopolítica. Tradução de Carlos Nougué. 1 ed. - Rio de Janeiro: Rocco, 2016. ISBN 978-85-325-3014-1 CDD: 868.99209 CDU: 821.134.2(7/8).09 Número de chamada: A860.9 G498f.Pn 2016",
    },
    {
    titulo:"Sumário de plantas oficiosas: um ensaio sobre a memória da flora",
    imagem:"",
    descricao:"",
    referencia: "GIRALDO, Efrén. Sumário de plantas oficiosas: um ensaio sobre a memória da flora. Tradução do espanhol por: Silvia Massimini Felix. São Paulo: Fósforo, 2023. ISBN 9786584568563 CDD 581.4 Número de chamada: Co864.44 G516s.Pf 2023.",
    },
    {
    titulo:"A metamorfose das plantas",
    imagem:"",
    descricao:"",
    referencia: "GOETHE, Johann Wolfgang von. A metamorfose das plantas. Tradução, apresentação e notas de Fábio Mascarenhas Nolasco. - São Paulo: Edipro, 2019. ISBN 978-85-521-0071-3 CDD: 528 Número de chamada: 581 G599v.Pn 2019",
    },
    {
    titulo:"O despertar de tudo: Uma nova história da humanidade",
    imagem:"",
    descricao:"",
    referencia: "GRAEBER, David; WENGROW, David. O despertar de tudo: Uma nova história da humanidade. 1 ed. - São Paulo: Companhia das Letras, 2022. ISBN 978-65-5921-172-2 CDD: 901. Número de chamada: 901 G734d.Pb 2022 nº exemplares: 02.",
    },
    {
    titulo:"O rato e a montanha",
    imagem:"",
    descricao:"",
    referencia: "GRAMSCI, Antonio. O rato e a montanha. Ilustração de Laia Domènech. Tradução de Luiz Sérgio Henrique, Thaísa Burani. − 1ª ed. − São Paulo: Boitatá, 2019. CDD: 808.899282. CDU: 82-93(45). Número de chamada: 808.068 G747r.Ph 2019",
    },
    {
    titulo:"Povos indígenas e tolerância: construindo práticas de respeito e solidariedade",
    imagem:"",
    descricao:"",
    referencia: "GRUPIONI, Luis Donisete Benzi.; VIDAL, Lux Boelitz; FISCHMANN, Roseli. Povos indígenas e tolerância: construindo práticas de respeito e solidariedade. São Paulo: EDUSP, 2001. 290 p (Seminários, 6). ISBN 8531406617 (broch.). CDD 306.08 Número de chamada: 980.41 P879 2001",
    },
    {
    titulo:"Guaicurus",
    imagem:"",
    descricao:"",
    referencia: "Guaicurus. -n. 1, [1990]-.-Belo Horizonte: Universidade Federal de Minas Gerais, Diretoria de Ação Cultural, Centro Cultural [1990]- ISSN 9786588671-00-9. CDD: 301.209.81. CDD: 316.72(81).",
    },
    {
    titulo:"Ética biocêntrica e políticas ambientes",
    imagem:"",
    descricao:"",
    referencia: "GUDYNAS, Eduardo. Direitos da natureza: Ética biocêntrica e políticas ambientes. Tradução de Igor Ojeda. São Paulo: Elefante, 2019. ISBN 978-85-93115-47-9. CDD 363.7. Número de chamada: 363.7 G923.Po 2019. n° exemplares: 02.",
    },
    {
    titulo:"Jardins do Sagrado: cultivando insabas que curam",
    imagem:"",
    descricao:"",
    referencia: "GUIMARÃES, César Geraldo; SANTOS, Henrique de Oliveira; FENATI, Maria Carolina (org.). Jardins do Sagrado: cultivando insabas que curam. Belo Horizonte, MG: Editora UFMG, 2023. CDD 981.51 ISBN 978-65-5858-127-7 (Doação)",
    },
    {
    titulo:"A vida secreta das árvores: uma pequena conferência",
    imagem:"",
    descricao:"",
    referencia: "HALLÉ, Francis. A vida secreta das árvores: uma pequena conferência. São Paulo: Olhares, 2022. ISBN 978-65-8828058-4. CDD 582.16.",
    },
    {
    titulo:"A reinvenção da natureza: símios, ciborgues e mulheres",
    imagem:"",
    descricao:"",
    referencia: "HARAWAY, Donna. J. A reinvenção da natureza: símios, ciborgues e mulheres. Tradução Rodrigo Tadeu Gonçalves. São Paulo: WMF Martins Fontes, 2023. ISBN 9788546904860 CDD 304.5 Número de chamada: 304.5 H254s.Pg 2023",
    },
    {
    titulo:"O manifesto das espécies companheiras - Cachorros, pessoas e alteridade significativa",
    imagem:"",
    descricao:"",
    referencia: "HARAWAY, Donna. O manifesto das espécies companheiras – Cachorros, pessoas e alteridade significativa. Tradução de Pê Moreira. Rio de Janeiro: Bazar do Tempo, 2021. ISBN 978-65-86719-64-2 CDD: 179.3 CDU: 179.3 Número de chamada: 179.3 H254c.Pm 2021",
    },
    {
    titulo:"Quando as espécies se encontram",
    imagem:"",
    descricao:"",
    referencia: "HARAWAY, Donna. Quando as espécies se encontram. Tradução de Juliana Fausto. São Paulo: Ubu Editora, 2022. 416p. ISBN 978 65 86497 71 7 CDD 100 CDU 1 Número de chamada: 304.5 H254W.Pf 2022",
    },
    {
    titulo:"A vingança da Hileia: Euclides da Cunha, a Amazônia e a literatura moderna",
    imagem:"",
    descricao:"",
    referencia: "HARDMAN, Francisco Foot. A vingança da Hileia: Euclides da Cunha, a Amazônia e a literatura moderna. São Paulo: Ed. UNESP, 2009. 375 p. ISBN 9788571399709 CDD 809 CDU 82.09 Número de chamada: B869.33 C972.Yh-v 2009",
    },
{
  titulo:"Trem-fantasma: A ferrovia Madeira-Mamoré e a modernidade na selva",
  imagem:"",
  descricao:"",
  referencia: "HARDMANN, Francisco Foot. Trem-fantasma: A ferrovia Madeira-Mamoré e a modernidade na selva. 2. ed. São Paulo: Companhia das Letras, 2005. ISBN 85-359-0599-5 CDD: 385.09811 Número de chamada: 325.38113 H264t 2005",
  },
{
  titulo:"O destino da floresta: desenvolvedores, destruidores e defensores da Amazônia",
  imagem:"",
  descricao:"",
  referencia: "HECHT, Susanna; COCKBURN, Alexander. O destino da floresta: desenvolvedores, destruidores e defensores da Amazônia. Traduzido por Rachel Meneguello. - São Paulo: Editora Unesp, 2022. ISBN 978-65-5711-138-3 CDD 304.2 CDU 304:577.4 Número de chamada:304.2 H447f.Pm 2022.",
  },
{
  titulo:"Saberes ambientais: Desafios para o conhecimento disciplinar",
  imagem:"",
  descricao:"",
  referencia: "HISSA, Cássio Eduardo Viana (Org.). Saberes ambientais: Desafios para o conhecimento disciplinar. 2.ed. Belo Horizonte: Editora UFMG, 2018. ISBN 978-85-423-0259-2 CDD: 574.5 CDU: 574. nº exemplares: 2.",
  },
{
  titulo:"Visão do Paraíso: os motivos edênicos no descobrimento e colonização do Brasil",
  imagem:"",
  descricao:"",
  referencia: "HOLANDA, Sérgio Buarque de. Visão do Paraíso: os motivos edênicos no descobrimento e colonização do Brasil. - São Paulo: Companhia das Letras, 2010. ISBN 978-85-359-1667-6 CDD: 981 Número de chamada: 981 H722v 2010",
  },
{
  titulo:"Irmãs do inhame: mulheres negras e autorrecuperação",
  imagem:"",
  descricao:"",
  referencia: "HOOKS. Bell. Irmãs do inhame: mulheres negras e autorrecuperação. Tradução: floresta. São Paulo: Martins Fontes, 2023. CDD 155.8496073 ISBN 9788546904587 Número de chamada: 155.8496073 H784s.Pf 2023",
  },
{
  titulo:"A nuvem negra",
  imagem:"",
  descricao:"",
  referencia: "HOYLE, Fred. A nuvem negra. Tradução de Érico Assis. 1 ed. São Paulo: Todavia, 2022. ISBN 978-65-5692-240-9 CDD: 823 Número de chamada: 823.912 H868b.Pa 2022",
  },
{
  titulo:"Admirável mundo novo",
  imagem:"",
  descricao:"",
  referencia: "HUXLEY, Aldous. Admirável mundo novo. Tradução: Fábio Fernandes; textos: Úrsula K. Le Guin, Samir Machado de Machado. 23. ed. Rio de Janeiro: Biblioteca Azul, 2022. ISBN 9786558301660 CDD 823 CDU 82-3(410.1) Número de chamada: 823.8 H986b.Po 2022",
  },
{
  titulo:"A cerâmica do Brasil: sistematização bibliográfica",
  imagem:"",
  descricao:"",
  referencia: "IORIO, Mary Di. A cerâmica do Brasil: sistematização bibliográfica. Belo Horizonte: Editora UFMG, 2014. 4v: il. ISBN 978-85-423-0129-8 CDD: 738.0981 CDU 738(81)",
  },
{
  titulo:"Devaneios do caminhante solitário",
  imagem:"",
  descricao:"",
  referencia: "JEAN-JACQUES, Rousseau. Devaneios do caminhante solitário. Tradução: Jacira de Freitas, Claudio A. Reis. São Paulo: Editora UNESP, 2022. ISBN 9786557110638 CDD 100 CDU 1 Número de chamada: 194 R864r.Pf 2022.",
  },
{
  titulo:"A capitania das Minas Gerais",
  imagem:"",
  descricao:"",
  referencia: "JÚNIOR, Augusto de Lima. A capitania das Minas Gerais. Belo Horizonte: Ed. Itatiaia; São Paulo: Ed. da Universidade de São Paulo, 1978. (Reconquista do Brasil; v. 51) CDD: 981.51 CDD: 309.18151 CDD: 333.8098151 CDD: 390.098151",
  },
{
  titulo:"Torto Arado",
  imagem:"",
  descricao:"",
  referencia: "JUNIOR, Itamar Vieira. Torto Arado. − 1ª ed. − São Paulo: Todavia, 2019. ISBN: 978-65-80309-31-3. CDD: B869.3. Número de chamada: B869.342 V658t 2019",
  },
{
  titulo:"A vegetariana",
  imagem:"",
  descricao:"",
  referencia: "KANK, Han. A vegetariana. A tradução de Jae Hyung Woo. 1 ed. - São Paulo: Todavia, 2018. ISBN 978-85-88808-28-7 CDD 895-7 Número de chamada: 895.734 H233.Pw 2018",
  },
{
  titulo:"Nixi Pae: o espírito da floresta",
  imagem:"",
  descricao:"",
  referencia: "KAXINAWA, Isaías Sales Ibã Huni KuĨ. Nixi Pae: o espírito da floresta. Organização Enrique Flores Esquivel, Maria Inês de Almeida. Ilustração Acelino Sales Kaxinawá (MAKU). Tradução Maria Inês de Almeida e Marcelo Piedrafita Iglesias. Rio Branco, AC: Ed. Milacres, 2024. (Doação da Profa. Maria Inês de Almeida).",
  },
{
  titulo:"O livro dos bichos: a ariranha repatriada, o macaco candidato, o camundongo que foi para o espaço e outras reportagens",
  imagem:"",
  descricao:"",
  referencia: "KAZ, Roberto. O livro dos bichos: a ariranha repatriada, o macaco candidato, o camundongo que foi para o espaço e outras reportagens. Ilustrações de Audrey Furlaneto. 1ª ed. São Paulo: Companhia das Letras, 2016. ISBN 978-85-359-2686-6. CDD 070.4. Número de chamada: B869.342 K231 2016.",
  },
{
  titulo:"Do Roraima ao Orinoco: resultados de uma viagem no Norte do Brasil e na Venezuela nos anos de 1911 a 1913",
  imagem:"",
  descricao:"",
  referencia: "KOCH-GRUNBERG, Theodor; FRANCO, Cristina Camargo Alberts. Do Roraima ao Orinoco: resultados de uma viagem no Norte do Brasil e na Venezuela nos anos de 1911 a 1913. 2. ed. São Paulo: UNESP, 2022. v. 1. ISBN: 9786557111192. CDD 910.4 CDU 913 Número de chamada: 918.1 K76v.Pf 2022",
  },
{
  titulo:"Do Roraima ao Orinoco: resultados de uma viagem no Norte do Brasil e na Venezuela nos anos de 1911 a 1913",
  imagem:"",
  descricao:"",
  referencia: "KOCH-GRUNBERG, Theodor; FRANCO, Cristina Camargo Alberts. Do Roraima ao Orinoco: resultados de uma viagem no Norte do Brasil e na Venezuela nos anos de 1911 a 1913. 2. ed. São Paulo: UNESP, 2022. v. 2. ISBN: 9786557111208. CDD 910.4 CDU 913 Número de chamada: 918.1 K76v.Pf 2022",
  },
{
  titulo:"Do Roraima ao Orinoco: resultados de uma viagem no Norte do Brasil e na Venezuela nos anos de 1911 a 1913",
  imagem:"",
  descricao:"",
  referencia: "KOCH-GRUNBERG, Theodor; FRANCO, Cristina Camargo Alberts. Do Roraima ao Orinoco: resultados de uma viagem no Norte do Brasil e na Venezuela nos anos de 1911 a 1913. 2. ed. São Paulo: UNESP, 2022. v. 3. ISBN: 9786580033812 CDD 910.4 CDU 913 Número de chamada: 918.1 K76v.Pf 2022.",
  },
{
  titulo:"A queda do céu: Palavras de um xamã yanomami",
  imagem:"",
  descricao:"",
  referencia: "KOPENAWA, Davi; ALBERT, Bruce. A queda do céu: Palavras de um xamã yanomami. Tradução de Beatriz Perrone-Moisés. ISBN 978-85-359-2620-0 CDD: 980.41 Número de chamada: 880.41 K83c.Pp 2015",
  },
{
  titulo:"Imagens do Brasil",
  imagem:"",
  descricao:"",
  referencia: "KOSERITZ, Carl von. Imagens do Brasil. Tradução, prefácio e notas Afonso Arinos de Melo Franco. Belo Horizonte, Ed. Itatiaia; São Paulo: Ed. da Universidade de São Paulo, 1980. (Reconquista do Brasil; nova série; v. 22) CDD: 918.1 CDD: 390.00981 CDD: 918.1541 CDD: 918.1551",
  },
{
  titulo:"Pluriverso: dicionário do pós-desenvolvimento",
  imagem:"",
  descricao:"",
  referencia: "KOTHARI, Ashish [et al.]. Pluriverso: dicionário do pós-desenvolvimento. Tradução de Isabella Victoria Eleonora. São Paulo: Elefante, 2021. 576p. ISBN 978-65-87235-43-1 CDD 300. Número de chamada: 338.9 P737Pe 2021. n° exemplares: 02.",
  },
{
  titulo:"Zoológicos humanos: gente em exibição na era do imperialismo",
  imagem:"",
  descricao:"",
  referencia: "KOUTSOUKOS, Sandra Sofia Machado. Zoológicos humanos: gente em exibição na era do imperialismo. Campinas, SP: Editora da UNICAMP, 2020. 411 p. ISBN 9786586253320 CDD 573.2 Número de chamada: 573.2 K88z 2020.",
  },
{
  titulo:"Os futuros de Darcy Ribeiro",
  imagem:"",
  descricao:"",
  referencia: "KOZEL, Andrés; SILVA, Fabricio Pereira da. Os futuros de Darcy Ribeiro. São Paulo: Elefante, 2022. 294 p. ISBN 9786587235813 CDD 301 Número de chamada: 301 F996 2022.",
  },
{
  titulo:"A vida não é útil",
  imagem:"",
  descricao:"",
  referencia: "KRENAK, Ailton. A vida não é útil. Org. Rita Carelli. 1ªed. - São Paulo: Companhia das Letras, 2020. ISBN 978-85–359-3369-7. CDD-301. Número de chamada: 128 K92v 2020",
  },
{
  titulo:"Futuro ancestral",
  imagem:"",
  descricao:"",
  referencia: "KRENAK, Ailton. Futuro ancestral. São Paulo: Companhia das Letras, 2022. 122 p. ISBN 9786559211548 CDD -B869.8 Número de chamada: 304.2 K92f 2002",
  },
{
  titulo:"Ideias para adiar o fim do mundo",
  imagem:"",
  descricao:"",
  referencia: "KRENAK, Ailton. Ideias para adiar o fim do mundo. 2. ed. São Paulo: Companhia das Letras, 2020. ISBN 978-85-359-3358-1 CDD: 304.2 Número de chamada: 304.2 K92i 2020",
  },
{
  titulo:"Quando deixamos de entender o mundo",
  imagem:"",
  descricao:"",
  referencia: "LABATUT, Benjamin. Quando deixamos de entender o mundo. Tradução de Paloma Vidal. 1 ed. - São Paulo: Todavia, 2022. ISBN 978-65-5692-249-2 CDD CH863 Número de chamada: Ch863.44 L114v.Pv 2022",
  },
{
  titulo:"Filosofia Zoológica",
  imagem:"",
  descricao:"",
  referencia: "LAMARCK, Jean Baptiste Pierre Antoine. Filosofia Zoológica. Tradução e apresentação por Celi Hirata, Janaina Namba, Ana Carolina Soliva. São Paulo: Editora Unesp. 2021. ISBN 978-65-5711-042-3 CDD 591 DU 59 Número de chamada: 591 L215p.Ph 2021",
  },
{
  titulo:"Diante de Gaia: oito conferências sobre a natureza no Antropoceno",
  imagem:"",
  descricao:"",
  referencia: "LATOUR, Bruno. Diante de Gaia: oito conferências sobre a natureza no Antropoceno. Tradução de Marylua Meyer. - São Paulo / Rio de Janeiro: Ubu Editora / Ateliê de Humanidade Editorial, 2020. ISBN 978-65-86497-06-9 CDD: 577 CDU: 574 Número de chamada: 304.2 L359f.Pm 2022",
  },
{
  titulo:"Políticas da natureza: como associar as ciências à democracia",
  imagem:"",
  descricao:"",
  referencia: "LATOUR, Bruno. Políticas da natureza: como associar as ciências à democracia. Tradução de Carlos Aurélio Mota de Souza. - São Paulo: Editora Unesp, 2019. ISBN 978-85-393-0772-2 CDD 304.2 CDU 504:32 Número de chamada: 320.5 L359p.Ps 2019",
  },
{
  titulo:"Witch's garden: plants in folklore, magic and traditional medicine",
  imagem:"",
  descricao:"",
  referencia: "LAWRENCE, Sandra. Witch's garden: plants in folklore, magic and traditional medicine. London: Welbeck, 2020. ISBN 9781787394360 Número de chamada: 133.43 L423w 2020.",
  },
{
  titulo:"Floresta é nome do mundo",
  imagem:"",
  descricao:"",
  referencia: "LE GUIN, Ursula K. Floresta é nome do mundo. Tradução: Heci Regina Candiani. São Paulo: Morro Branco, 2020. ISBN 9786586015096 CDD 813 Número da chamada: 813.52 L521w.Pc 2020",
  },
{
  titulo:"Águas Encantadas de Chacororé: Natureza, cultura, paisagens e mitos do Pantanal",
  imagem:"",
  descricao:"",
  referencia: "LEITE, Mário Cezar Silva. Águas Encantadas de Chacororé: Natureza, cultura, paisagens e mitos do Pantanal. 1. ed. Cuiabá: Cathedral UNICEN, 2003. (Coleção Tibarané de estudos mato-grossenses: v. 4) ISBN 85-88504-07-3 CDD: 918.172",
  },
{
  titulo:"A conquista da América Latina vista pelos índigenas: relatos astecas, maias e incas",
  imagem:"",
  descricao:"",
  referencia: "LEÓN-PORTILLA, Miguel. A conquista da América Latina vista pelos índigenas: relatos astecas, maias e incas. Tradução de Augusto Ângelo Zanatta. 5. ed. Petrópolis, RJ: Vozes, 2023. ISBN 9788532605597 CDD 980 Número de chamada: 980.1 L579r.Pz 2023",
  },
{
  titulo:"A conquista da América Latina vista pelos índios: relatos astecas, maias e incas",
  imagem:"",
  descricao:"",
  referencia: "LEÓN-PORTILLA, Miguel. A conquista da América Latina vista pelos índios: relatos astecas, maias e incas. Tradução de Augusto Ângelo Zanatta. 5. ed. Petrópolis, RJ: Vozes, 2023. ISBN 9788532605597 CDD 980 Número de chamada: 980.1 L579r.Pz 2023",
  },
{
  titulo:"Saudades do Brasil",
  imagem:"",
  descricao:"",
  referencia: "LÉVI-STRAUSS, Claude; NEVES, Paulo. Saudades do Brasil. São Paulo: Companhia das Letras, 1994. 227 p. ISBN 9788571644212 CDD 981.1 Número de chamada: 981 L664s.Pn 1994",
  },
{
  titulo:"O cru e o cozido: mitológicas I",
  imagem:"",
  descricao:"",
  referencia: "LÉVI-STRAUSS, Claude. O cru e o cozido: mitológicas I. Tradução de Beatriz Perrone-Moisés.1 ed.- Rio de Janeiro: Zahar, 2021. ISBN 978-85-378-1902-9 CDD -398.20981 Número de chamda: 980.41L66m.Pp 2021",
  },
{
  titulo:"Tristes trópicos",
  imagem:"",
  descricao:"",
  referencia: "LÉVI-STRAUSS, Claude. Tristes trópicos. Tradução de Rosa Freire d’Aguiar. − 1ª ed. − São Paulo: Companhia das Letras, 1996. ISBN: 978-85-7164-570-7. CDD-918.1. Número de chamada: 980.41 L664t.Pd 1996",
  },
{
  titulo:"Ngiã nüna tadaugü i torü naãne [Vamos cuidar da nossa terra]",
  imagem:"",
  descricao:"",
  referencia: "LIMA, Deborah (Org.). Ngiã nüna tadaugü i torü naãne [Vamos cuidar da nossa terra]. Belo Horizonte: Ed. UFMG, 2006. 216 p. ISBN 85-7041-554-0 / 978-85-7041-554-7. CDD: 379.81. CDU: 37.",
  },
{
  titulo:"De natura florum",
  imagem:"",
  descricao:"",
  referencia: "LISPECTOR, Clarice. De natura florum. Ilustrações Elena Odriozola; edição Alejandro G. Schnetzer. São Paulo: Global, 2021. ISBN 9786556121055 CDD 028.5 Número de chamada: B869.33 L771d 2021.",
  },
{
  titulo:"Todos os contos",
  imagem:"",
  descricao:"",
  referencia: "LISPECTOR, Lispector. Todos os contos. Organização de Benjamin Moser. 1ª ed. Rio de Janeiro: Rocco, 2016. ISBN 978-85-325-3024-0. CDD 869.93 CDU 821.134.3(81)-3. Número de chamada: B869.33 L771t 2016. Número de chamada: 305.8000981 S568h 2018.",
  },
{
  titulo:"Ecologia dos oceanos tropicais",
  imagem:"",
  descricao:"",
  referencia: "LONGHURST, Alan R. Ecologia dos oceanos tropicais. Vários tradutores. São Paulo: Editora da Universidade de São Paulo, 2007. (Coleção base; 5) ISBN 978-85-314-0346-0 CDD -574.52636 Número de chamada: 574.52636 L854e.Ps 2007",
  },
{
  titulo:"O estilingue (Histórias de um menino)",
  imagem:"",
  descricao:"",
  referencia: "LOPES, Carlos Herculano. O estilingue (Histórias de um menino). Belo Horizonte: Editora UFMG 2012. ISBN 978-85-7041-988-0 CDD: B869.35 CDU: 821.134.3(81)-3. nº exemplares: 2.",
  },
{
  titulo:"Tempos de Bonança",
  imagem:"",
  descricao:"",
  referencia: "LOPES, Renata de Melo Ferreira. Tempos de Bonança. − Montes Claros: Editora Unimontes, 2019. ISBN: 978-85-94368-14-0. CDU: 82.09.",
  },
{
  titulo:"Os fundamentos da etologia",
  imagem:"",
  descricao:"",
  referencia: "LORENZ, Konrad. Os fundamentos da etologia. São Paulo: Editora UNESP, 1995. 466 p. (Biblioteca básica). ISBN 8571390967 Número de chamada: 591.5 L869f.Pc 1995",
  },
{
  titulo:"Mulheres de terra e água",
  imagem:"",
  descricao:"",
  referencia: "LOSITO, Lucila (org). Mulheres de terra e água. São Paulo: Elefante, 2022. ISBN: 9788593115806 CDD 305.420922 Número de chamada: 305.42 M956 2022.",
  },
{
  titulo:"Jardim de todos os sentidos",
  imagem:"",
  descricao:"",
  referencia: "LOUREIRO, Maria; CARMO, Sabrina; ALMEIDA, Sílvia (organização e edição). Jardim de todos os sentidos. Brumadinho: Instituto Inhotim, 2023. 96p. ISBN 978-85-61614-32-4. CDU 574 CDD 577.",
  },
{
  titulo:"Qual o valor da natureza? Uma introdução à ética ambiental",
  imagem:"",
  descricao:"",
  referencia: "LOURENÇO, Daniel Braga. Qual o valor da natureza? Uma introdução à ética ambiental. - São Paulo: Elefante, 2019. ISBN 978-85-93115-32-5 CDD 179.1 Número de chamada: 179.1 L892q 2019",
  },
{
  titulo:"O que é o ecossocialismo?",
  imagem:"",
  descricao:"",
  referencia: "LÖWY, Michael. O que é o ecossocialismo? 2 ed. - São Paulo: Cortez, 2014. ISBN 978-85-249-2209-1 CDD: 304.2 Número de chamada: 304.2 L922o 2014",
  },
{
  titulo:"Sobre a natureza das coisas = De rum natura",
  imagem:"",
  descricao:"",
  referencia: "LUCRÉCIO. Sobre a natureza das coisas = De rum natura. Tradução, notas e paratextos de Rodrigo Tadeu Gonçalves. 1 ed. Belo Horizonte: Autentica, 2022. ISBN 978-65-5928-079-7 CDD 1-180 Número de chamada: 871.1 L942.Pg 2021",
  },
{
  titulo:"Animalidades: zooliteratura e os limites do humano",
  imagem:"",
  descricao:"",
  referencia: "MACIEL, Maria Esther. Animalidades: zooliteratura e os limites do humano. 1. ed. São Paulo: Instante, 2023. ISBN 9786587342429 CDD B869.9 CDU 82-09 Número da chamada: 809.9336 M152a 2023",
  },
{
  titulo:"Literatura e animalidade",
  imagem:"",
  descricao:"",
  referencia: "MACIEL, Maria Esther. Literatura e animalidade. Rio de Janeiro: Civilização Brasileira, 2016. ISBN 978-85-20-01298-7 CDD: 809 CDU: 82.09 Número de chamada: 809.9336 M1521 2016",
  },
{
  titulo:"Pequena enciclopédia de seres comuns",
  imagem:"",
  descricao:"",
  referencia: "MACIEL, Maria Esther. Pequena enciclopédia de seres comuns. Ilustrações de Julia Panadés. 1 ed. São Paulo: Todavia, 2021. ISBN 978-65-5692-133-4 CDD B869.3. ex. 1. ex. 2 Número de chamada: B869.342 M152p 2021 (Doação da Profa. Valéria Sabrina Pereira).",
  },
{
  titulo:"Livro vermelho da fauna brasileira ameaçada de extinção",
  imagem:"",
  descricao:"",
  referencia: "MAIA, Otávio. Livro vermelho da fauna brasileira ameaçada de extinção. Número de chamada: 808.068 M2171 2021",
  },
{
  titulo:"A incrível viagem das plantas",
  imagem:"",
  descricao:"",
  referencia: "MANCUSO, Stefano. A incrível viagem das plantas. Tradução de Regina Silva. São Paulo: Ubu Editora, 2021. 160 p. ISBN 978 65 86497 76 2 CDD 570 CDU 57 Número de chamada: 581 M269i.Ps 2021",
  },
{
  titulo:"A planta do mundo",
  imagem:"",
  descricao:"",
  referencia: "MANCUSO, Stefano. A planta do mundo. Tradução de Regina Silva. São Paulo: Ubu Editora, 2021. 192 p. ISBN 978 65 86497 29 8 CDD 577 CDU 574 Número de chamada: 580 M269p.Ps 2021",
  },
{
  titulo:"Revolução das plantas",
  imagem:"",
  descricao:"",
  referencia: "MANCUSO, Stefano. Revolução das plantas. Tradução de Regina Silva. - São Paulo: Ubu Editora, 2019. ISBN 978-85-7126-034-4 CDD: 577 CDU: 574 Número de chamada: 580 M269p.Ps 2019",
  },
{
  titulo:"De uma a outra ilha",
  imagem:"",
  descricao:"",
  referencia: "MARQUES, Ana Martins. De uma a outra ilha. São Paulo: Luna Parque: Fósforo, 2023. ISBN 9786584574540 CDD B869.1 Número de chamada: B869.142 M357d 2023",
  },
{
  titulo:"Capitalismo e Colapso Ambiental",
  imagem:"",
  descricao:"",
  referencia: "MARQUES, Luiz. Capitalismo e Colapso Ambiental. 3. ed. revista e ampliada. Campinas, SP: Editora da UniCamp, 2018. ISBN 978-85-268-1468-4 CDD: 330.122 CDD: 301.31 CDD: 333.37513 CDD: 628.1 CDD: 363.7 Número de chamada: 363.7 M357c 2018",
  },
{
  titulo:"O decênio decisivo: propostas para uma política de sobrevivência",
  imagem:"",
  descricao:"",
  referencia: "MARQUES, Luiz. O decênio decisivo: propostas para uma política de sobrevivência. São Paulo: Elefante, 2023. 617 p. ISBN 9788593115844 CDD 577.5 Número de chamada: 363.7 M357d 2023.",
  },
{
  titulo:"Biodiversidade tropical",
  imagem:"",
  descricao:"",
  referencia: "MARTINS, Marcio Roberto Costa. Biodiversidade tropical. São Paulo: Editora UNESP, 2009. 128p. ISBN 978-85-7139-717-0 CDD 363.70913 CDU 504(213.54)",
  },
{
  titulo:"A dupla noite das tílias: História e natureza no Fausto de Goethe",
  imagem:"",
  descricao:"",
  referencia: "MAZZARI, Marcus Vinicius. A dupla noite das tílias: História e natureza no Fausto de Goethe. - São Paulo: Editora 34, 2019. ISBN 978-85-7326-745-7 CDD: 809 Número de chamada: 832.5 G599f.Ym-d 2019",
  },
{
  titulo:"Nosso lixo de cada dia: desafios & oportunidades",
  imagem:"",
  descricao:"",
  referencia: "MAZZINI, Ana Luiza Dolabela de Amorim. Nosso lixo de cada dia: desafios & oportunidades. Belo Horizonte: Ed. do autor, 2008. 68 p. ISBN 978-85-903655-3-2. CDU: 628.4:504.",
  },
{
  titulo:"Ser-tão natureza: A natureza em Guimarães Rosa",
  imagem:"",
  descricao:"",
  referencia: "MEYER, Mônica. Ser-tão natureza: A natureza em Guimarães Rosa. Belo Horizonte: Editora UFMG, 2008. ISBN 978-85-7041-706-0 CDD: B869 CDU: 869. nº exemplares: 2.",
  },
{
  titulo:"Ecofeminismo",
  imagem:"",
  descricao:"",
  referencia: "MIES, Maria; SHIVA, Vandana. Ecofeminismo. Tradução de Carolina Caires Coelho. - Belo Horizonte: Editora Luas, 2021. ISBN 978-65-990446-7-0 CDD 304.2 Número de chamada: 305.42 M632e.Pc 2021",
  },
{
  titulo:"Gemas da Terra: Imaginação estética e hospitalidade",
  imagem:"",
  descricao:"",
  referencia: "MILAN, Denise; MATOS, Olgária (Org.). Gemas da Terra: Imaginação estética e hospitalidade. São Paulo: Edições Sesc SP, 2010. ISBN 978-85-9811-95-4. CDD: 551.",
  },
  {
  titulo:"Memórias sertanistas: cem anos de indigenismo no Brasil",
  imagem:"",
  descricao:"",
  referencia: "MILANEZ, Felipe (Org.). Memórias sertanistas: cem anos de indigenismo no Brasil. São Paulo: Edições Sesc São Paulo, 2015. 424p. ISBN 978-85-7995-177-0 CDD: 572.981",
  },
  {
  titulo:"Os ensaios: uma seleção. Tradução de Rosa Freire d’Aguiar",
  imagem:"",
  descricao:"",
  referencia: "MONTAIGNE, Michel. Os ensaios: uma seleção. Tradução de Rosa Freire d’Aguiar. - São Paulo: Companhia das Letras, 2010. ISBN 978-85-63560-06-3 CDD: 194 Número de chamada: 844.3 M761e.Pa 2010",
  },
  {
  titulo:"Cronistas em viagem e educação indígena",
  imagem:"",
  descricao:"",
  referencia: "MONTE, Nietta L. (Nietta Lindemberg). Cronistas em viagem e educação indígena. Belo Horizonte: Autêntica, 2008. 235 p. ISBN 9788575263051 CDD -371.8299811 Número de chamada: 980.41 M772c 2008",
  },
  {
  titulo:"Antropoceno ou Capitoloceno? Natureza, história e a crise do capitalismo",
  imagem:"",
  descricao:"",
  referencia: "MOORE, Jason W. (Org). Antropoceno ou Capitoloceno? Natureza, história e a crise do capitalismo. Tradução de Antônio Xerxenesky, Fernando Silva e Silva. São Paulo: Elefante, 2022, 344 p. ISBN 978-65-87235-79-0 CDD: 300. Número de chamada: 304.2 A636a.Px 2022. n° exemplares: 02.",
  },
  {
  titulo:"Plantas que curam",
  imagem:"",
  descricao:"",
  referencia: "MOREIRA, Frederico. Plantas que curam. Belo Horizonte: Garnier, 2001. ISBN 85-7175-071-8",
  },
  {
  titulo:"By any other name: a cultural history of the rose",
  imagem:"",
  descricao:"",
  referencia: "MORLEY, Simon. By any other name: a cultural history of the rose. London: Oneworld, 2021. ISBN 9780861540525 Número de chamada: 583.37 M864b 2021",
  },
  {
    titulo: "Notícias de lugar nenhum ou uma época de tranquilidade: um romance utópico",
    imagem: "",
    descricao: "",
    referencia: "MORRIS, Willian. Notícias de lugar nenhum ou uma época de tranquilidade: um romance utópico. 1. ed. São Paulo: Expressão Popular, 2019, 295 p. ISBN 978-85-7743-363-6 CDU: 820-31 Número de chamada: 823.7 M877n.Pc 2019"
  },
  {
    titulo: "Estou Aqui. Sempre Estive. Sempre Estarei, Índigenas do Brasil. Suas Imagens (1505-1955)",
    imagem: "",
    descricao: "",
    referencia: "MOURA, Carlos Eugênio Marcondes de. Estou Aqui. Sempre Estive. Sempre Estarei, Índigenas do Brasil. Suas Imagens (1505-1955). São Paulo: Editora da Universidade de São Paulo, 2012. ISBN 978-85-314-1265-3 CDD-779.9981. Número de chamada: 980.41 M929e 2012"
  },
  {
    titulo: "Sabença",
    imagem: "",
    descricao: "",
    referencia: "MOURA, Maria Aparecida; NOGUEIRA, Maria das Dores Pimentel; FURIATI, Terezinha Maria (org.). Sabença. Belo Horizonte: PROEX-UFMG, 2018. CDD 398.042 CDU 398.1 ISBN 978-85-88221-61-1. (Doação)"
  },
  {
    titulo: "Natureza e cultura no Brasil",
    imagem: "",
    descricao: "",
    referencia: "MURARI, Luciana. Natureza e cultura no Brasil. São Paulo: Alameda, 2019. ISBN: 978-85-7939-001-2. CDD 700. CDU: 7. Número de chamada: B869.09 M972n 2009"
  },
  {
    titulo: "Cantos do mundo: contos",
    imagem: "",
    descricao: "",
    referencia: "NASCIMENTO, Evando. Cantos do mundo: contos. Rio de Janeiro: Record, 2011. ISBN 9788501092021 CDD 869.93 CDU 821.134.3(81-3) Número da chamada: B869.342 N244c 2011"
  },
  {
    titulo: "O pensamento vegetal: a literatura e as plantas",
    imagem: "",
    descricao: "",
    referencia: "NASCIMENTO, Evandro. O pensamento vegetal: a literatura e as plantas. 1 ed. - Rio de Janeiro: Civilização Brasileira, 2021. ISBN 9786-5580-2047-9 CDD: 869.4 CDU: 82-4(81) Número de chamada: 809.9336 N244p 2021"
  },
  {
    titulo: "Euclides da Cunha e a estética do cientificismo",
    imagem: "",
    descricao: "",
    referencia: "NASCIMENTO, José Leonardo do. Euclides da Cunha e a estética do cientificismo. São Paulo: Editora UNESP, 2011. 156 p. ISBN 9788539300884 CDD 869.93 CDU 821.134.3(81)-3 Número de chamada: B869.33 C972.Yn-e 2011"
  },
  {
    titulo: "Nós: uma antologia de literatura indígena",
    imagem: "",
    descricao: "",
    referencia: "NEGRO, Mauricio. Nós: uma antologia de literatura indígena. 1 ed. São Paulo: Companhia das Letrinhas, 2019. ISBN 978-85-7406-864-0 CDD -028.5 Número de chamada: 808.068 N897 2019, ex. 1. ex.2 (Doação da Profa. Valéria Sabrina Pereira)"
  },
  {
    titulo: "Bichos que existem & que não existem",
    imagem: "",
    descricao: "",
    referencia: "NESTROVSKI, Arthur. Bichos que existem & que não existem. Ilustrações Maria Eugênia. São Paulo: Cosac Naify, 2002. ISBN 9788574068374"
  },
  {
    titulo: "Lendas do sul",
    imagem: "",
    descricao: "",
    referencia: "NETO, João Simões Lopes. Lendas do sul. Belo Horizonte: Itatiaia, 2007. ISBN 978-85-7344-787-3 CDU: 821.161.1"
  },
  {
    titulo: "Sob os tempos do equinócio: oito mil anos de história na amazônia central",
    imagem: "",
    descricao: "",
    referencia: "NEVES, Eduardo Goés. Sob os tempos do equinócio: oito mil anos de história na amazônia central. - São Paulo: Ubu Editora / Editora Universidade de São Paulo, 2022. ISBN UBU 978-85-7126-070-2 ISBN EDUSP 978-65-5785-090-9 CDD: 301 CDU: 572 Número de chamada: 981.1 N518s 2022"
  },
  {
    titulo: "Memorável Viagem Marítima e Terrestre ao Brasil",
    imagem: "",
    descricao: "",
    referencia: "NIEUHOF, Joan. Memorável Viagem Marítima e Terrestre ao Brasil. Tradução de Moacir N. Vasconcelos. Belo Horizonte: Ed. Itatiaia; São Paulo: Ed. da Universidade de São Paulo, 1981. (Reconquista do Brasil; nova série.; v 35) CDD: 918.1 CDD: 981.03121"
  },
  {
    titulo: "Vale do Jequitinhonha: Cultura e Desenvolvimento",
    imagem: "",
    descricao: "",
    referencia: "NOGUEIRA, Maria das Dores Pimentel (Org.). Vale do Jequitinhonha: Cultura e Desenvolvimento. Belo Horizonte: UFMG/ PROEX, 2012. 190 p. ISBN 978-85-88221-34-5 CDD: 306.098151"
  },
  {
    titulo: "Vale do Jequitinhonha: Juventudes, participação política e cidadania",
    imagem: "",
    descricao: "",
    referencia: "NOGUEIRA, Maria das Dores Pimentel (Org.). Vale do Jequitinhonha: Juventudes, participação política e cidadania. Belo Horizonte: UFMG/ PROEX, 2014. 140 p. ISBN 978-85-88221-48-2 CDD: 305.230981"
  },
  {
    titulo: "Vale do Jequitinhonha: ocupação e trabalho",
    imagem: "",
    descricao: "",
    referencia: "NOGUEIRA, Maria das Dores Pimentel (Org.). Vale do Jequitinhonha: ocupação e trabalho. Belo Horizonte: UFMG/ PROEX, 2013. 144 P. ISBN 978-85-88221-44-4 CDD: 306.098151"
  },
  {
    titulo: "O futuro não é mais o que era",
    imagem: "",
    descricao: "",
    referencia: "NOVAES, Adauto (org.). O futuro não é mais o que era. São Paulo: Edições Sesc São Paulo, 2013. 544 p. ISBN 978-85-7995-0064-3 CDD: 121"
  },
  {
    titulo: "O novo espírito utópico",
    imagem: "",
    descricao: "",
    referencia: "NOVAES, Adauto (org.). O novo espírito utópico. Tradução de Paulo Neves. São Paulo: Edições Sesc São Paulo, 2016. 408 p. ISBN 978-8569298-83-0 CDD: 121"
  },
  {
    titulo: "1984",
    imagem: "",
    descricao: "",
    referencia: "ORWELL, George. 1984. Tradução: Alexandre Hubner, Heloisa Jahn; posfácios: Erich Fromm, Ben Pimlott, Thomas Pynchon. [1. ed.] São Paulo: Companhia das Letras, 2009. ISBN 9788535914849 CDD 823 Número de chamada: 823.912 O79n.Ph 2009"
  },
  {
    titulo: "Metamorfoses",
    imagem: "",
    descricao: "",
    referencia: "OVÍDIO. Metamorfoses. Tradução, introdução e notas de Domingos Lucas Dias; apresentação de João Angelo Oliva Neto. São Paulo: Editora 34, 2017. CDD- 873 ISBN 9788573266672 Número de chamada: 871.2 O96m.Pd 2017."
  },
  {
    titulo: "O Mundo Indígena na América Latina: olhares e perspectivas",
    imagem: "",
    descricao: "",
    referencia: "PAREDES, Beatriz (coordenação); DAMIANI, Gerson; PEREIRA, Wagner Pinheiro; NOCETTI, María Antonieta Gallarti (org.). O Mundo Indígena na América Latina: olhares e perspectivas. 1 ed. São Paulo: Editora da Universidade de São Paulo, 2022. 544 p. ISBN 978-85-314-1695-8 CDD 306 Número de chamada: 980 M965 2018"
  },
  {
    titulo: "O olhar ecológico: a construção de uma história da arte ecocrítica",
    imagem: "",
    descricao: "",
    referencia: "PATRIZIO, Andrew. O olhar ecológico: a construção de uma história da arte ecocrítica. Tradução Bhuvi Libanio. Campinas, SP: UNICAMP, 2023. ISBN 9788526816145 CDD 709 Número de chamada: 709 P314e.Pl 2023"
  },
  {
    titulo: "O aquecimento global: causas e efeitos de um mundo mais quente",
    imagem: "",
    descricao: "",
    referencia: "PEARCE, Fred. O aquecimento global: causas e efeitos de um mundo mais quente. Tradução de Ederli Fortunato. São Paulo: Publifolha, 2002. ISBN 85-7402-380-9. CDD: 551.5253."
  },
  {
    titulo: "Utopia brasileira",
    imagem: "",
    descricao: "",
    referencia: "PENNA, José Osvaldo de Meira Penna. Utopia brasileira. Belo Horizonte: Ed. Itatiaia, 1988. ISBN 85-319-0754-3"
  },
  {
    titulo: "Alternativas sistêmicas: Bem Viver, decrescimento, comuns, ecofeminismo, direitos da Mãe Terra e desglobalização",
    imagem: "",
    descricao: "",
    referencia: "PERES, João. Alternativas sistêmicas: Bem Viver, decrescimento, comuns, ecofeminismo, direitos da Mãe Terra e desglobalização. São Paulo: Elefante, 2019. 217 p. ISBN 9788593115240 CDD 304 Número de chamada: 304 A466Pp 2019"
  },
  {
    titulo: "As origens do homem: explicadas crianças",
    imagem: "",
    descricao: "",
    referencia: "PICQ, Pascal G. As origens do homem: explicadas crianças. Tradução de Sabrina M. Aragão. São Paulo: Editora Unesp, 2012.162 p. ISBN 978-85-393-0267-3 CDD 599.938 CDU 599.89 Número de chamada: 599.9 P599o.Pa 2012"
  },
  {
    titulo: "As Matrizes do Fabulário Ibero-americano",
    imagem: "",
    descricao: "",
    referencia: "PIÑON, Nélida (coordenação); DAMIANI, Gerson, MARRECO, Maria Inês (org.). As Matrizes do Fabulário Ibero-americano. São Paulo, Editora da Universidade de São Paulo, 2016. 332 p. ISBN 978-85-314-11590-6. CDD 860. Número de chamada: A860.9 M433 2016."
  },
  {
    titulo: "Com os mais velhos",
    imagem: "",
    descricao: "",
    referencia: "Povo Xacriabá. Com os mais velhos. Belo Horizonte: FALE/UFMG: CGEEI/SECAD/MEC, 2005. 156p. ISBN: 85-87470-76-0. CDD 898."
  },
  {
    titulo: "Iaiá Cabloca",
    imagem: "",
    descricao: "",
    referencia: "Povo Xacriabá. Iaiá Cabloca. Belo Horizonte: FALE/UFMG: CGEEI/SECAD/MEC, 2005. 19p. ISBN 85-87470-77-9. CDD 898."
  },
  {
    titulo: "Prêmio Nacional de Fotografia Pierre Verger, 2021-2022",
    imagem: "",
    descricao: "",
    referencia: "Prêmio Nacional de Fotografia Pierre Verger, 2021-2022. Coordenado por Marcelo Reis, Eder Chiodetto Curador. - 8. ed. - Salvador: SeCult/FUNCEB, 2021. ISBN 2.978-65-996357-00. CDD 770."
  },
  {
    titulo: "Feijão-Preto e diamantes: o Brasil na obra de Elizabeth Bishop",
    imagem: "",
    descricao: "",
    referencia: "PRZYBYCIEN, Regina. Feijão-Preto e diamantes: o Brasil na obra de Elizabeth Bishop. Belo Horizonte: Editora UFMG, 2015. ISBN 978-85-423-0108-3 CDD: 811.52 CDU: 820(73)-1. nº exemplares: 2."
  },
  {
    titulo: "Lévi-Strauss: leituras brasileiras",
    imagem: "",
    descricao: "",
    referencia: "QUEIROZ, Ruben Caixeta de; NOBRE, Renarde Freire (Org.). Lévi-Strauss: leituras brasileiras. 2. ed. Belo Horizonte: Editora UFMG, 2013. ISBN 978-85-70-41-997-2 CDD: 149.96 CDU: 165.75. nº exemplares: 2."
  },
  {
    titulo: "Ishmael",
    imagem: "",
    descricao: "",
    referencia: "QUINN, Daniel. Ishmael. Tradução de Thelma Médice Nóbrega; ilustração da capa e desenho das letras de Taisa Borges. São Paulo: Editora Peirópolis, 2022. ISBN 9786559311897 CDD 813.5 CDU 821.111 (73)-31 Número de chamada: 813.52 Q7i.Pm 2022."
  },
  {
    titulo: "Contos da selva",
    imagem: "",
    descricao: "",
    referencia: "QUIROGA, Horacio. Contos da selva. Tradução de Wilson Alves-Bezerra. 1 ed. São Paulo: Iluminuras, 2012. ISBN 978-85-7321-269-3 CDD -028.5 Número de chamada: U863.2 Q8c.Pa 2007"
  },
  {
    titulo: "Do sentimento da natureza nas sociedades modernas e outros escritos",
    imagem: "",
    descricao: "",
    referencia: "RECLUS, Élisée. Do sentimento da natureza nas sociedades modernas e outros escritos. Organização e tradução Plínio Augusto Côelho. São Paulo (SP): Intermezzo; Edusp, 2015. ISBN 978-85-68115-19-0 (intermezzo Editorial) ISBN 978-85314-1575-3 CDD-910.01 Número de chamada: 304.2 R299d.Pc 2015"
  },
  {
    titulo: "Amazônia urgente: cinco séculos de história e ecologia",
    imagem: "",
    descricao: "",
    referencia: "RIBEIRO, Berta G. Amazônia urgente: cinco séculos de história e ecologia/ projeto conceitual, textos e seleção de iconografia, Berta G. Ribeiro. 2. ed. Belo Horizonte, MG: Itatiaia, 1990. CDD 981.1 CDU 981.1"
  },
  {
    titulo: "Arte Indígena, Linguagem Visual",
    imagem: "",
    descricao: "",
    referencia: "RIBEIRO, Berta G. Arte Indígena, Linguagem Visual. Tradução de Regina Regis Junqueira; desenhos de Hamilton Botelho Malhano; fotos de Frederico F. Ribeiro. Belo Horizonte: Itatiaia; São Paulo: Editora da Universidade de São Paulo, 1989. (Coleção Reconquista do Brasil. 3. Série especial v. 9.) CDD 7040398 CDU 7.031.3 (81)"
  },
  {
    titulo: "Diários índios: os Urubus-Kaapor",
    imagem: "",
    descricao: "",
    referencia: "RIBEIRO, Darcy. Diários índios: os Urubus-Kaapor. 2. ed. São Paulo: Global, 2020. ISBN 9788526025165 CDD 980.41. Número de chamada: 980.41 R484i 2020"
  },
  {
    titulo: "Maíra",
    imagem: "",
    descricao: "",
    referencia: "RIBEIRO, Darcy. Maíra. 19. ed. São Paulo: Global, 2014. ISBN 9788526019355 CDD 869.93 CDU 821.134.3(81)-3 Número de chamada: B869.341 R484m 2014"
  },
  {
    titulo: "Estradas da vida: Terra e trabalho nas fronteiras agrícolas no Jequitinhonha e Mucuri, Minas Gerais",
    imagem: "",
    descricao: "",
    referencia: "RIBEIRO, Eduardo Magalhães. Estradas da vida: Terra e trabalho nas fronteiras agrícolas no Jequitinhonha e Mucuri, Minas Gerais. Belo Horizonte: Editora UFMG, 2013. ISBN 978-85-7041-986-6 CDD: 981.51 CDU: 94(815.1). nº exemplares: 2."
  },
  {
    titulo: "Sertão, lugar desertado: o Cerrado na cultura de Minas Gerais",
    imagem: "",
    descricao: "",
    referencia: "RIBEIRO, Ricardo Ferreira. Sertão, lugar desertado: o Cerrado na cultura de Minas Gerais. Belo Horizonte: Autêntica, 2006. 376p. ISBN 85-7526-236-X CDU 63(213.54)(815.1) Número de chamada: 581.98151 R484s 2006"
  },
  {
    titulo: "Os urubus sem penas",
    imagem: "",
    descricao: "",
    referencia: "RIBEYRO, Julio Ramón. Os urubus sem penas.Tradução: Silvia Massimini Felix. Belo Horizonte: Moinhos, 2021. CDD 869.89928 CDU 821.134.3(81)-94 Número de chamada: Pe863.42 R485g.Pf 2021"
  },
  {
    titulo: "Exploração da Guina brasileira",
    imagem: "",
    descricao: "",
    referencia: "RICE, Hamilton. Exploração da Guina brasileira. Tradução e notas Lacyr Shettino. Prefácio de Mário G. Ferri. Belo Horizonte: Ed. Itatiaia. São Paulo: Ed. da Universidade de São Paulo, 1978. CDD: 918.114."
  },
  {
    titulo: "Grande sertão: veredas",
    imagem: "",
    descricao: "",
    referencia: "ROSA, João Guimarães. Grande sertão: veredas. 22ª. ed. São Paulo: Companhia das Letras, 2019. 559 p. ISBN 9788535931983 CDD B869. Número de chamada: B869.33 R788g 2019."
  },
  {
    titulo: "O melhor de João Guimarães Rosa: contos",
    imagem: "",
    descricao: "",
    referencia: "ROSA, João Guimarães. O melhor de João Guimarães Rosa: contos. Rio de Janeiro: Nova Fronteira, 2016. 237 p. ISBN 9788520926840 CDD 869.3 CDU 821.134.3(81)-3. Número de chamada: B869.33 R788m 2016."
  },
  {
    titulo: "Emílio, ou, Da educação",
    imagem: "",
    descricao: "",
    referencia: "ROUSSEAU, Jean-Jacques. Emílio, ou, Da educação. Tradução e apresentação Thomaz Kawauche; revisão técnica e posfácio: Thiago Vargas. São Paulo: Ed. UNESP, 2022. ISBN 9786557110881 CDD 100 CDU 1. Número de chamada: 194 R864e.Pk 2022"
  },
  {
    titulo: "Viagem pitoresca através do Brasil",
    imagem: "",
    descricao: "",
    referencia: "RUGENDAS, Moritz Johann. Viagem pitoresca através do Brasil. Tradução de Sérgio Milliet; ilustrações de Rugendas. Belo Horizonte: Itatiaia; São Paulo: Editora da Universidade de São Paulo, 1989. - (Coleção Reconquista do Brasil, 3. série; v.8) CDD 918.1 CDD 390.0981 CDD 572.981"
  },
  {
    titulo: "El gallo de oro y otros relatos",
    imagem: "",
    descricao: "",
    referencia: "RULFO, Juan. El gallo de oro y otros relatos. Edición de Jorge Zepeda. Madri: Catedra, 2022. ISBN 9788437644721. Número de chamada: Me863.42 R935g 2022"
  },
  {
    titulo: "O mundo desdobrável: ensaios para depois do fim",
    imagem: "",
    descricao: "",
    referencia: "SAAVEDRA, Carola. O mundo desdobrável: ensaios para depois do fim. Belo Horizonte, Relicário,2021. 216 p ISBN 978-65-86279-29-0 CDD 808.84 CDU 82-4 Número de chamada. B869.442 S112m 2021"
  },
  {
    titulo: "Bilhões e bilhões: reflexões sobre vida e morte na virada do milênio",
    imagem: "",
    descricao: "",
    referencia: "SAGAN, Carl. Bilhões e bilhões: reflexões sobre vida e morte na virada do milênio. Tradução Rosaura Eichemberg. São Paulo: Companhia de Bolso, 2008. ISBN 9788535911947 CDD 500 Número da chamada: 509 S129b.Pe 2008"
  },
  {
    titulo: "O mundo assombrado pelos demônios: a ciência vista como uma vela no escuro",
    imagem: "",
    descricao: "",
    referencia: "SAGAN, Carl. O mundo assombrado pelos demônios: a ciência vista como uma vela no escuro. Tradução de Rosaura Eichemberg. São Paulo: Companhia de Bolso, 2006. ISBN 9788535908343 CDD 306.45 Número da chamada: 509 S129d.Pe 2006"
  },
  {
    titulo: "Como pensam os 'nativos': sobre o Capitão Cook, por exemplo",
    imagem: "",
    descricao: "",
    referencia: "SAHLINS, Marshall David. Como pensam os 'nativos': sobre o Capitão Cook, por exemplo. São Paulo: EDUSP, 2001. 347 p. (Clássicos, 20). ISBN 8531405211 CDD 996.972 Número de chamada: 996.902 S131h.Pv 2001"
  },
  {
    titulo: "Viagem Pelo Distrito Dos Diamantes E Litoral Do Brasil",
    imagem: "",
    descricao: "",
    referencia: "SAINT-HILAIRE, Auguste De. Viagem Pelo Distrito Dos Diamantes E Litoral Do Brasil: com um 'resumo histórico das revoluções do Brasil, da chegada de D. João VI à América de D. Pedro'. Tradução de Leonam de Azevedo Penna. Belo Horizonte, Itatiaia, 2004. (Reconquista do Brasil, v. 236) CDD: 918.151 CDD: 390.098151 CDD: 918-10946 CDD: 981"
  },
  {
    titulo: "Segunda Viagem do Rio de Janeiro a Minas Gerais e São Paulo, 1822",
    imagem: "",
    descricao: "",
    referencia: "SAINT-HILAIRE, Auguste de. Segunda Viagem do Rio de Janeiro a Minas Gerais e São Paulo, 1822; Tradução revista e prefácio de Vivaldi Moreira. Belo Horizonte: Ed. Itaitiaia, 2011. (Coleção Reconquista do Brasil, v.11). CDD: 918.153. CDD: 918.151. CDD: 918.155. ISBN 978-85-319-0811-8."
  },
  {
    titulo: "Viagem à província de São Paulo",
    imagem: "",
    descricao: "",
    referencia: "SAINT-HILAIRE, Auguste de. Viagem à província de São Paulo; Tradução de Regina Regis Junqueira. Apresentação de Mário Guimarães Ferri. Belo Horizonte: Ed. Itatiaia; São Paulo: Ed. da Universidade de São Paulo, 1976. (Coleção Reconquista do Brasil; v.18). CDD: 918.155. CDD: 390.098155. CDD: 981.55."
  },
  {
    titulo: "O ecossocialismo de Karl Marx: capitalismo, natureza e a crítica inacabada à economia política",
    imagem: "",
    descricao: "",
    referencia: "SAITO, Kohei. O ecossocialismo de Karl Marx: capitalismo, natureza e a crítica inacabada à economia política. Tradução de Pedro Davoglio. − 1ª ed. − São Paulo: Boitempo, 2021. ISBN: 978-65-5717-059-5. CDD: 335.412. CDU: 330.85:574. Número de chamada: 335.4 S158k.Pd 2021"
  },
  {
    titulo: "África",
    imagem: "",
    descricao: "",
    referencia: "SALIBA, Aziz; LOPES, Dawisson Belém; ALEXANDRE, Marcos Antônio (Org.). África. Belo Horizonte: Editora UFMG, 2021. (Desafios Globais; 1) ISBN 978-65-5858-020-1 ISBN Digital 978-65-5858-007-2 CDD: 960 CDU: 96. n° exemplares: 02."
  },
  {
    titulo: "América do Norte",
    imagem: "",
    descricao: "",
    referencia: "SALIBA, Aziz; LOPES, Dawisson Belém; ALEXANDRE, Marcos Antônio (Org.). América do Norte. Belo Horizonte: Editora UFMG, 2021. (Desafios Globais; 2) ISBN 978-65-5858-020-8 ISBN Digital 978-65-5858-009-6 CDD: 970 CDU: 97. n° exemplares: 02."
  },
  {
    titulo: "América Latina",
    imagem: "",
    descricao: "",
    referencia: "SALIBA, Aziz; LOPES, Dawisson Belém; ALEXANDRE, Marcos Antônio (Org.). América Latina. Belo Horizonte: Editora UFMG, 2021. (Desafios Globais; 3) ISBN 978-65-5858-022-5 ISBN Digital 978-65-5858-016-4 CDD: 980 CDU: 980. n° exemplares: 02."
  },
  {
    titulo: "Ásia-Pacífico",
    imagem: "",
    descricao: "",
    referencia: "SALIBA, Aziz; LOPES, Dawisson Belém; ALEXANDRE, Marcos Antônio (Org.). Ásia-Pacífico. Belo Horizonte: Editora UFMG, 2021. (Desafios Globais; 4) ISBN 978-65-5858-023-2 ISBN Digital 978-65-5858-017-1 CDD: 950 CDU: 95. n° exemplares: 02."
  },
  {
    titulo: "Europa",
    imagem: "",
    descricao: "",
    referencia: "SALIBA, Aziz; LOPES, Dawisson Belém; ALEXANDRE, Marcos Antônio (Org.). Europa. Belo Horizonte: Editora UFMG, 2021. (Desafios Globais; 5) ISBN 978-65-5858-024-9 ISBN Digital 978-65-5858-018-8 CDD: 940 CDU: 940. n° exemplares: 02."
  },
  {
    titulo: "Índico",
    imagem: "",
    descricao: "",
    referencia: "SALIBA, Aziz; LOPES, Dawisson Belém; ALEXANDRE, Marcos Antônio (Org.). Índico. Belo Horizonte: Editora UFMG, 2021. (Desafios Globais; 6) ISBN 978-65-5858-025-6 ISBN Digital 978-65-5858-019-5 CDD: 969 CDU: 94(699).n° exemplares: 02."
  },
  {
    titulo: "O país das amazonas",
    imagem: "",
    descricao: "",
    referencia: "SANTA-ANNA NERY, Barão de. O país das amazonas. Tradução Ana Mazur Spira. São Paulo: Ed. da Universidade de São Paulo, 1979. (Reconquista do Brasil, v. 43) CDD: 918.11 CDD: 390.09811 CDD: 981.1"
  },
  {
    titulo: "A terra dá, a terra quer",
    imagem: "",
    descricao: "",
    referencia: "SANTOS, Antônio Bispo dos. A terra dá, a terra quer. São Paulo: Ubu Editora/ Piseagrama, 2023. ISBN 978 85 7126 1051. CDD 305.896. CDU 316.347."
  },
  {
    titulo: "Miscelânea Zoológica. (Vida e costume dos peixes no Brasil)",
    imagem: "",
    descricao: "",
    referencia: "SANTOS, Eurico. Miscelânea Zoológica. (Vida e costume dos peixes no Brasil). Belo Horizonte: Ed. Itatiaia, 1987. (Coleção Zoologia Basílica, v.11)."
  },
  {
    titulo: "Moluscos do Brasil. (Vida e costumes)",
    imagem: "",
    descricao: "",
    referencia: "SANTOS, Eurico. Moluscos do Brasil. (Vida e costumes). Belo Horizonte: Ed. Itatiaia, 1982. (Coleção Zoologia Basílica, v. 7). n° exemplares: 02."
  },
  {
    titulo: "Nossas madeiras",
    imagem: "",
    descricao: "",
    referencia: "SANTOS, Eurico. Nossas madeiras. Belo Horizonte: Ed. Itatiaia, 1987. (Coleção Vis Mea in Labore, v.7)."
  },
  {
    titulo: "Nossos Peixes Marinhos. (Vida e costume dos peixes no Brasil)",
    imagem: "",
    descricao: "",
    referencia: "SANTOS, Eurico. Nossos Peixes Marinhos. (Vida e costume dos peixes no Brasil). Belo Horizonte; Rio de Janeiro: Vila Rica, 1992. (Coleção Zoologia Basílica, v.1). n° exemplares: 02."
  },
  {
    titulo: "Os Insetos",
    imagem: "",
    descricao: "",
    referencia: "SANTOS, Eurico. Os Insetos. 2. ed. Belo Horizonte: Ed. Itatiaia, 1985. (Coleção Zoologia Basílica, v.10)."
  },
  {
    titulo: "Chão de minha utopia",
    imagem: "",
    descricao: "",
    referencia: "SANTOS, Manoel da Conceição. Chão de minha utopia. Belo Horizonte: Editora UFMG, 2010. ISBN 978-85-7041-804-3 CDD: 305.5698121 CDU: 323.3:63-051(812.1). nº exemplares: 2."
  },
  {
    titulo: "A viagem do elefante: conto",
    imagem: "",
    descricao: "",
    referencia: "SARAMAGO, José. A viagem do elefante: conto. 3 ed. São Paulo: Companhia das Letras, 2017. ISBN 978-85-359-3037-5 CDD -869.3 Número de chamada: 869.341 S243v 2017"
  },
  {
    titulo: "Facundo: civilización y barbarie en Las Pampas Argentinas",
    imagem: "",
    descricao: "",
    referencia: "SARMIENTO, Domingo Faustino. Facundo: civilización y barbarie en Las Pampas Argentinas. Prólogo: Juan Carlos Casas. 1. ed. Buenos Aires: Stock Cero, 2003. ISBN 9789871136001 CDD Número de chamada: Ar863.1 S246f 2003."
  },
  {
    titulo: "Anticapitalismo romântico e natureza: o jardim encantado",
    imagem: "",
    descricao: "",
    referencia: "SAYRE, Robert; LÖWY, Michael. Anticapitalismo romântico e natureza: o jardim encantado. Tradução de Rogério Bettoni. - São Paulo: Editora Unesp, 2021. ISBN 978-65-5711-025-6 CDD 320.01 CDU 321.01 Número de chamada: 304.2 S275r.Pb 2021"
  },
  {
    titulo: "Pássaros na boca; e Sete casas vazias: contos reunidos",
    imagem: "",
    descricao: "",
    referencia: "SCHWEBLIN, Samanta. Pássaros na boca; e Sete casas vazias: contos reunidos. Tradução Joca Reiners Terron. São Paulo: Fósforo, 2022. ISBN 9786589733560 CDD Ar863 Número de chamada: Ar863.44 S412p.Pt 2022"
  },
  {
    titulo: "Entre a água e a selva: narrativas e reflexões de um médico nas selvas da África equatorial",
    imagem: "",
    descricao: "",
    referencia: "SCHWEITZER, Albert. Entre a água e a selva: narrativas e reflexões de um médico nas selvas da África equatorial. São Paulo: Editora UNESP, 2010. 179 p. ISBN 8532520235 CDD 926.1 CDU 929:61 Número de chamada: 926.1 S413z.Pv 2010"
  },
  {
    titulo: "A trama da vida: como os fungo constroem o mundo",
    imagem: "",
    descricao: "",
    referencia: "SHELDRAKE, Merlin. A trama da vida: como os fungo constroem o mundo. Tradução de Gilberto Stam. São Paulo: Fósforo / Ubu Editora, 2021. ISBN 978-65-89733-40-9 [Editora Fósforo] ISBN 978-65-86497-63-2 [Ubu Editora] CDD 579.5 Número de chamada: 570 S544e.Ps 2021"
  },
  {
    titulo: "Triste",
    imagem: "",
    descricao: "",
    referencia: "SICA, Rafael. Triste. São Paulo: Lote 42, 2019. 64 p. ISBN 978-85-66740-44-8. CDD: 741.5 CDU: 741.5."
  },
  {
    titulo: "Histórias e culturas indígenas na Educação Básica",
    imagem: "",
    descricao: "",
    referencia: "SILVA, Giovani José da. Histórias e culturas indígenas na Educação Básica. 1 ed; 1reimp. Belo Horizonte: Autêntica Editora, 2023. (Coleção Práticas Docentes). ISBN 979-85-513-0324-5. CDD 370.71."
  },
  {
    titulo: "Enciclopédia da pesca",
    imagem: "",
    descricao: "",
    referencia: "SILVA, Oswaldo Wenceslau. Enciclopédia da pesca. Rio de Janeiro; Belo Horizonte: Editora Briguiet, 1991."
  },
  {
    titulo: "O Rio antes do Rio: a Guanabara Tupinambá e suas aldeias ancestrais...",
    imagem: "",
    descricao: "",
    referencia: "SILVA, Rafael Freitas da. O Rio antes do Rio: a Guanabara Tupinambá e suas aldeias ancestrais, a história do primeiro carioca e dos exploradores, conquistadores e moradores pioneiros, a disputa entre portugueses e franceses, a guerra contra os nativos e as batalhas que marcaram a fundação do Rio de Janeiro. Posfácio: Glicéria Tupinambá. 6. ed. Belo Horizonte: Relicário Edições, 2024. ISBN 9786589889861 CDD 98153 CDU 981.53 Número de chamada: 981.53 S586r 2024"
  },
  {
    titulo: "Sobre a literatura Xacriabá",
    imagem: "",
    descricao: "",
    referencia: "SILVEIRA, Elza Gonçalves da. Sobre a literatura Xacriabá. Belo Horizonte: FALE/UFMG: CGEEI/SECAD/MEC, 2005. 60p. ISBN 85-87470-79-5. CDD 89809."
  },
  {
    titulo: "Guerra no coração do cerrado",
    imagem: "",
    descricao: "",
    referencia: "SILVEIRA, Maria José. Guerra no coração do cerrado. Rio de Janeiro: Record, 2006. ISBN 850107585X / ISBN 9788501075857 CDD 869.93 CDU 821 134.3(81)-3 Número de chamada: B869.342 S587g 2006"
  },
  {
    titulo: "A árvore-mãe: Em busca da sabedoria da floresta",
    imagem: "",
    descricao: "",
    referencia: "SIMARD, Simone. A árvore-mãe: Em busca da sabedoria da floresta. Tradução de Laura Teixeira Motta. 1ª ed. Rio de Janeiro: Zahar, 2022. ISBN 978-65-5979-070-8. CDD 333.75. Número de chamada: 333.75 S588f.Pm 2022."
  },
  {
    titulo: "O perfume das flores à noite",
    imagem: "",
    descricao: "",
    referencia: "SLIMANI, Leïla. O perfume das flores à noite. Tradução: Francesca Angiolillo. Rio de Janeiro: Harper Collins, 2024. ISBN 9786560051386 CDD 928.41 Número de chamada: 843.914 S633p.Pa 2024"
  },
  {
    titulo: "Sertão Mundo. Catálogo da exposição",
    imagem: "",
    descricao: "",
    referencia: "SOARES, Claudia Campos; LIMA, Dânia Santos; FARIA, Diomira Ma. C. P.; FERRARI, Junia; GINA, Maurício Silva (Org.). Sertão Mundo. Catálogo da exposição. Belo Horizonte: Espaço do Conhecimento da UFMG, 2021. ISBN 978-65-992762-4-8 CDD: 709.98151."
  },
  {
    titulo: "Vale do Jequitinhonha: desenvolvimento e sustentabilidade",
    imagem: "",
    descricao: "",
    referencia: "SOUZA, João Valdir Alves de; NOGUEIRA, Maria das Dores Pimentel (Org.). Vale do Jequitinhonha: desenvolvimento e sustentabilidade. Belo Horizonte: UFMG/ PROEX, 2011. ISBN 978-85-88221-32-1"
  },
  {
    titulo: "O Jardim das Hespérides: Minas e as visões do mundo natural no século XVIII",
    imagem: "",
    descricao: "",
    referencia: "SOUZA, Laura de Mello e. O Jardim das Hespérides: Minas e as visões do mundo natural no século XVIII. São Paulo: Companhia das Letras, 2022. 172 p. ISBN 9786559213672 CDD 981.51 Número de chamada: 981.51 S729j 2022."
  },
  {
    titulo: "Amazônia Indígena",
    imagem: "",
    descricao: "",
    referencia: "SOUZA, Márcio. Amazônia Indígena. 2 ed. Rio de Janeiro: Record, 2021. ISBN 978-85-01-10316-1 CDD: 980.41 CDU: 94(=87)(81) Número de chamada: 980.41 S729a 2021"
  },
  {
    titulo: "Mad Maria",
    imagem: "",
    descricao: "",
    referencia: "SOUZA, Márcio. Mad Maria. 6 ed. - Rio de Janeiro: Record, 2023. ISBN 978-65-5587-555-3 CDD 869.3 CDU 82-93(81) Número de chamada: B869.342 S729m 2023"
  },
  {
    titulo: "Natureza em Megacidades: Serviços Ambientais da Floresta Urbana",
    imagem: "",
    descricao: "",
    referencia: "SPANGENBERG, Jörg. Natureza em Megacidades: Serviços Ambientais da Floresta Urbana. Tradução de Antonio de Pádua Danesi. São Paulo: Editora da Universidade de São Paulo, 2019. 200 p. ISBN 978-85-314-1711-5 CDD: 578.756"
  },
  {
    titulo: "Cidade Universitária da UFMG: história e natureza",
    imagem: "",
    descricao: "",
    referencia: "STARLING, Heloisa Maria Murgel; DUARTE, Regina Horta (Org.). Cidade Universitária da UFMG: história e natureza. Belo Horizonte: Ed. UFMG, 2009. 221 p. ISBN 978-85-7041-780-0. CDD: 378.8151. CDU:378.4(815.1)."
  },
  {
    titulo: "Cidade universitária da UFMG: História e natureza",
    imagem: "",
    descricao: "",
    referencia: "STARLING, Heloisa Maria Murgel; DUARTE, Regina Horta (Org.). Cidade universitária da UFMG: História e natureza. Belo Horizonte: Editora UFMG, 2009. 221 p. ISBN 978-85-7041-780-0. CDD: 378.8151. CDU: 378.4(815.1)"
  },
  {
    titulo: "Utopias Agrárias",
    imagem: "",
    descricao: "",
    referencia: "STARLING, Heloisa Maria Murgel; RODRIGUES, Henrique Estrada; TELLES, Marcel (Org.). Utopias Agrárias. Belo Horizonte: Ed. UFMG, 2007. 376 p. ISBN 978-85-7041-611-7. CDD: 981. CDU: 981."
  },
  {
    titulo: "Guia Ilustrado do Arboreto do Cerrado da Companhia Brasileira de Metalurgia e Miração-CBMM",
    imagem: "",
    descricao: "",
    referencia: "STEHMANN, João Renato. Guia Ilustrado do Arboreto do Cerrado da Companhia Brasileira de Metalurgia e Miração-CBMM. Tradução de Rosymary dos Santos Isaias. Coordenação de ilustrações por Belkiss Radicchi Alméri. Belo Horizonte: Editora UFMG, 2012. 243p. ISBN 978-85-704-1-917-0. CDD 581.98151. CDU 581(815.1) (213.54)."
  },
  {
    titulo: "No tempo das catástrofes: resistir à barbárie que se aproxima",
    imagem: "",
    descricao: "",
    referencia: "STENGERS, Isabelle. No tempo das catástrofes: resistir à barbárie que se aproxima. Tradução de Eloisa Araújo Ribeiro. São Paulo: Cosac Naify, 2015. ISBN 978-85-405-0975-7 CDD 333.72 Número de chamada: 363.7 S825a.Pr 2015"
  },
  {
    titulo: "Uma outra ciência é possível: manifesto por uma desaceleração das ciências",
    imagem: "",
    descricao: "",
    referencia: "STENGERS, Isabelle. Uma outra ciência é possível: manifesto por uma desaceleração das ciências. Tradução Fernando Silva e Silva. Rio de Janeiro: Bazar do Tempo, 2023. ISBN 9786584515512 CDD: 501 CDU 5:1 Número da chamada: 112.1 S825a.Ps 2023"
  },
  {
    titulo: "Estudos Amazônicos: Dinâmica Natural e Impactos Socioambientais",
    imagem: "",
    descricao: "",
    referencia: "STERNBERG, Hilgard O’Reilly. Estudos Amazônicos: Dinâmica Natural e Impactos Socioambientais. Organização de Helena Ribeiro. Tradução de Fábio Duarte Joly. São Paulo: Editora da Universidade de São Paulo, 2012. 248 p. ISBN 978-85-314-1257-8 CDD -333.7 Número de chamada: 333.720981 S839.Pj 2012"
  },
  {
    titulo: "Saudades do mundo: notícias da antropofagia",
    imagem: "",
    descricao: "",
    referencia: "STERZI, Eduardo. Saudades do mundo: notícias da antropofagia. 1.ed. São Paulo: Todavia, 2022. ISBN 9786556923697 CDD B869.4 Número de chamada: B869.33 A553.Ys-s 2022"
  },
  {
    titulo: "As fronteiras do neoextrativismo na América Latina: conflitos socioambientais, giro ecoterritorial e novas dependências",
    imagem: "",
    descricao: "",
    referencia: "SVAMPA, Maristella.; AZEVEDO, Lígia. As fronteiras do neoextrativismo na América Latina: conflitos socioambientais, giro ecoterritorial e novas dependências. São Paulo: Elefante, 2019. 187 p. ISBN 9788593115455 CDD 330.98 Número de chamada: 330.98 S968f.Pa 2019"
  },
  {
    titulo: "O diabo e o fetichismo da mercadoria na América do Sul",
    imagem: "",
    descricao: "",
    referencia: "TAUSSIG, Michael T. O diabo e o fetichismo da mercadoria na América do Sul. Tradução Priscila Santos da Costa. São Paulo: Ed. UNESP, 2010. ISBN 9788539300709 CDD: 338.98 CDU: 338.1(8) Número da chamada: 330.98 T228d.Pc 2010"
  },
  {
    titulo: "Memórias de um urso-polar",
    imagem: "",
    descricao: "",
    referencia: "TAWADA, Yoko. Memórias de um urso-polar. Tradução Lúcia Collischonn de Abreu, Gerson Roberto Neumann. São Paulo: Todavia, 2019. ISBN 9788588808980 CDD 833.92 Número de chamada: 833.914 T234e.Pa 2019"
  },
  {
    titulo: "Tembeta: conversas com pensadores indígenas",
    imagem: "",
    descricao: "",
    referencia: "Tembeta: conversas com pensadores indígenas. Organização Idjahure Kadiwéu, Sergio Cohn; Ailton Krenak [et al]. Rio de Janeiro: Azougue Editorial, 2019. ISBN 9788579202285 CDD 926.58 Número de chamada: 980.41 T155 2019"
  },
  {
    titulo: "A morte e o meteoro",
    imagem: "",
    descricao: "",
    referencia: "TERRON, Joca Reiners. A morte e o meteoro. 1. ed. São Paulo: Todavia, 2019, 120 p. ISBN 978-65-80309-50-4 CDD: B869.93 Número de chamada: B869.342 T328m 2019"
  },
  {
    titulo: "O homem e o mundo natural: mudanças de atitude em relação as plantas e aos animais (1500-1800)",
    imagem: "",
    descricao: "",
    referencia: "THOMAS, Keith. O homem e o mundo natural: mudanças de atitude em relação as plantas e aos animais (1500-1800). Tradução: João Roberto Martins Filho; consultor desta edição: Renato Janine Ribeiro; consultor dos termos zoologicos: Marcio Martins. São Paulo: Companhia de Bolso, 2010. ISBN 9788535915976 (broch.) CDD 304.209 Número de chamada: 304.2 T458m.Pm 2010."
  },
  {
    titulo: "O cogumelo no fim do mundo: sobre a possibilidade de vida nas ruínas do capitalismo",
    imagem: "",
    descricao: "",
    referencia: "TSING, Anna Lowenhaupt. O cogumelo no fim do mundo: sobre a possibilidade de vida nas ruínas do capitalismo. Tradução de Jorgge Menna Barreto e Yudi Rafael. 1 ed. - São Paulo: N-1 edições, 2022. ISBN 978-65-86941-96-8 CDD: 577 CDU: 574 Número de chamada: 330.1 T882m.Pm 2022"
  },
  {
    titulo: "Flora e fauna: um dossiê ambiental",
    imagem: "",
    descricao: "",
    referencia: "UIEDA, Wilson.; PALEARI, Lucia Maria. Flora e fauna: um dossiê ambiental. São Paulo: Ed. Unesp, 2004. 238 p. ISBN 8571395438 CDD 333.950981.62 CDU 502.5(81562) Número de chamada: 574 F632 2004"
  },
  {
    titulo: "Três momentos de um rio: duo paisagens móveis",
    imagem: "",
    descricao: "",
    referencia: "VAS, Maria; LISSA, Bárbara. Três momentos de um rio: duo paisagens móveis. 1. ed. Belo Horizonte, MG: Ed. do autor, 2021. 68 p. ISBN 978-65-00-14383-6. CDD: 981. n° exemplares: 02."
  },
  {
    titulo: "O som do rugido da onça",
    imagem: "",
    descricao: "",
    referencia: "VERUNSCHK, Micheliny. O som do rugido da onça. São Paulo: Companhia das Letras, 2021. 160 p. ISBN 9786559210213. CDD B869.3. Número de chamada: B869.342 V569s 2021."
  },
  {
    titulo: "Culturas indígenas no Brasil e a Coleção Harald Schultz",
    imagem: "",
    descricao: "",
    referencia: "VIEIRA, Ana C. D.; Cury Marília (orgs.).Culturas indígenas no Brasil e a Coleção Harald Schultz. São Paulo: Edições SESC SP, 2021. CDD 301.3 ISBN 9786586111187 Número de chamada: 980.41 V657c 2021"
  },
  {
    titulo: "Culturas Indígenas e a coleção Harold Schultz",
    imagem: "",
    descricao: "",
    referencia: "VIEIRA, Ana Carolina Delgado; CURY, Marília Xavier (Org.). Culturas Indígenas e a coleção Harold Schultz. São Paulo: Ed. Sesc São Paulo, 2021. 328 p. ISBN 978-65-86-111-18-7. CDD: 301.3."
  },
  {
    titulo: "Ficções amazônicas",
    imagem: "",
    descricao: "",
    referencia: "VILAÇA, Aparecida.; GASPAR, Francisco Vilaça; RONAI, Paloma. Ficções amazônicas. São Paulo: Todavia, 2022. 211 p. ISBN 9786556923062 CDD B869.3 Número de chamada: B869.342 V695f 2022."
  },
  {
    titulo: "Pensamentos vegetarianos",
    imagem: "",
    descricao: "",
    referencia: "VOLTAIRE. Pensamentos vegetarianos. Tradução de Constancia Egrejas. São Paulo: Editora Unesp,2021. ISBN 978-65-5711-027-0 CDD 170 CDU 17 Número de chamada: 194 V935p.Pe 2021"
  },
  {
    titulo: "Somos inteligentes o bastante para saber quão inteligentes são os animais?",
    imagem: "",
    descricao: "",
    referencia: "WAAL, Frans de. Somos inteligentes o bastante para saber quão inteligentes são os animais? Tradução de Paulo Geiger. 1 ed. Rio de Janeiro: Zahar, 2021. ISBN 978-65-5979-037-1 CDD 591.5 Número de Chamada: 591.5 W111a.Pg 2021"
  },
  {
    titulo: "Comunidade Amazônica: Estudo do homem nos Trópicos",
    imagem: "",
    descricao: "",
    referencia: "WAGLEY, Charles. Comunidade Amazônica: Estudo do homem nos Trópicos; Tradução de Clotilde da Silva Costa. 3. ed. Belo Horizonte: Ed. Itatiaia; São Paulo: Ed. da Universidade de São Paulo, 1988. (Coleção Reconquista do Brasil - 2ª Série, v.136). CDD: 981.1. CDD:390.09811. CDD: 918.11."
  },
  {
    titulo: "Uma comunidade amazônica: estudo do homem nos trópicos",
    imagem: "",
    descricao: "",
    referencia: "WAGLEY, Charles. Uma comunidade amazônica: estudo do homem nos trópicos. Tradução de Clotilde da Silva Costa. 3. ed. Belo Horizonte: Itatiaia; São Paulo: Ed. da Universidade de São Paulo, 1988. (Coleção Reconquista do Brasil, 2 série; v.136) CDD: 981.1 CDD:390.09811 CDD: 918.11. n° exemplares: 02."
  },
  {
    titulo: "Uma comunidade amazônica",
    imagem: "",
    descricao: "",
    referencia: "WAGLEY, Charles. Uma comunidade amazônica. Tradução de Clotilde da Silva Costa. − 3ª ed. − Belo Horizonte: Itatiaia; São Paulo: Editora da Universidade de São Paulo, 1988. CDD 981.1."
  },
  {
    titulo: "A terra inabitável: uma história do futuro",
    imagem: "",
    descricao: "",
    referencia: "WALLACE-WELLS, David. A terra inabitável: uma história do futuro. Tradução de Cássio de Arantes Leite. 1 ed. - São Paulo: Companhia das Letras, 2019. ISBN 978-85-359-3239-3 CDD 304.2 Número de chamada: 363.7 W188u.Pl 2019"
  },
  {
    titulo: "A guerra dos mundos",
    imagem: "",
    descricao: "",
    referencia: "WELLS, H. G. A guerra dos mundos. Tradução Thelma Médici Nóbrega. 1ªed. Rio de Janeiro: Suma de Letras, 2016. ISBN 978-85-5651-009-9. CDD 823.914. Número de chamada: 823.8 W454w.Pn 2016."
  },
  {
    titulo: "A máquina do tempo",
    imagem: "",
    descricao: "",
    referencia: "WELLS, H. G. A máquina do tempo. Tradução, prefácio e notas Braulio Tavares. 2ªed. Rio de Janeiro: Suma, 2018. ISBN 978-85-7651-068-6. CDD 823.914. Número de chamada: 823.8 W454t.Pt 2018."
  },
  {
    titulo: "A Shakespearean botanical",
    imagem: "",
    descricao: "",
    referencia: "WILLIS, Margaret. A Shakespearean botanical. Oxford: Bodleian Library, 2016.ISBN 9781851244379 Número de chamada: 822.33 W713s 2016"
  },
  {
    titulo: "O sentido da existência humana",
    imagem: "",
    descricao: "",
    referencia: "WILSON, Edward O. O sentido da existência humana. Tradução Érico Assis. 1ª ed. São Paulo: Companhia das Letras, 2018. ISBN 978-85-359-3153-2. CDD-128. Número de chamada: 128 W747m.Pa 2018."
  },
  {
    titulo: "Dentro do nevoeiro: arquitetura, arte e tecnologia contemporâneas",
    imagem: "",
    descricao: "",
    referencia: "WISNIK, Guilherme. Dentro do nevoeiro: arquitetura, arte e tecnologia contemporâneas. São Paulo: Ubu Editora, 2018. ISBN: 978-85-92886-96-7. CDD: 720. Número de chamada: 720.1 W815d 2018"
  },
  {
    titulo: "Maquinação do mundo: Drummond e a mineração",
    imagem: "",
    descricao: "",
    referencia: "WISNIK, José Miguel. Maquinação do mundo: Drummond e a mineração. 1 ed. - São Paulo: Companhia das Letras, 2018. ISBN 978-85-359-3131-0 CDD:869.1 Número de chamada: B869.33 A553.Yw-m 2018"
  },
  {
    titulo: "A arte da brevidade: contos",
    imagem: "",
    descricao: "",
    referencia: "WOOLF, Virginia; TADEU, Tomaz. A arte da brevidade: contos. Belo Horizonte: Autêntica, 2017. 129 p (Mimo). ISBN 9788551301562 CDD 823.91 Número de chamada: 823.8 W913.Pt 2017"
  },
  {
    titulo: "As ondas",
    imagem: "",
    descricao: "",
    referencia: "WOOLF, Virginia. As ondas. Tradução de Tomaz Tadeu. 1 ed. São Paulo: Autêntica, 2023. ISBN 9786559280216 CDD -823 Número de chamada 823.8 W913w.Pt 2021"
  },
  {
    titulo: "A invenção da natureza: as aventuras de Alexander Von Humbolldt",
    imagem: "",
    descricao: "",
    referencia: "WULF, Andrea. A invenção da natureza: as aventuras de Alexander Von Humbolldt. Tradução Renato Marques. 2. ed. São Paulo: Crítica, 2019. ISBN 9788542216561 CDD 923.9 Número de chamada: 925 H919w 2019"
  },
  {
    titulo: "Narrativas populares: Estórias de Nosso Senhor Jesus Cristo e mais São Pedro andando pelo mundo",
    imagem: "",
    descricao: "",
    referencia: "XIDIEH, Oswaldo Elias. Narrativas populares: Estórias de Nosso Senhor Jesus Cristo e mais São Pedro andando pelo mundo. Introdução Alfredo Bosi. São Paulo: Ed. Universidade de São Paulo; Belo Horizonte: Itatiaia, 1993. (Coleção Reconquista do Brasil, v.173). ISBN 85-314-035-6."
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
