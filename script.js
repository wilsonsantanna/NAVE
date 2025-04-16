document.addEventListener("DOMContentLoaded", () => {
  fetch("eventos.html")
    .then(response => response.json())
    .then(eventos => {
      const container = document.getElementById("eventos-container");

      eventos.forEach(evento => {
        const card = document.createElement("div");
        card.className = "evento-card";

        card.innerHTML = `
          <h3>${evento.titulo}</h3>
          <p><strong>Data:</strong> ${evento.data}</p>
          <p>${evento.descricao}</p>
          <a href="${evento.link}">Saiba mais</a>
        `;

        container.appendChild(card);
      });
    })
    .catch(error => {
      console.error("Erro ao carregar eventos:", error);
    });
});
