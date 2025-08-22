const resultsdiv = document.getElementById("results");

async function fetchCharacters() {
    resultsdiv.innerHTML = "<p>Carregando....</p>";

    try {
        const response = await fetch("https://valorant-api.com/v1/agents");
        const data = await response.json();

        resultsdiv.innerHTML = "";

        data.data
    .filter(agent => agent.isPlayableCharacter)
    .forEach(agent => {
        const role = agent.role ? agent.role.displayName.toLowerCase() : "sem-role";
        const roleClass = role.replace("í", "i").replace("é", "e").replace(" ", "-");

        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <img src="${agent.displayIcon}" alt="${agent.displayName}" class="${roleClass}">
            <h3>${agent.displayName}</h3>
            <p><strong>Função:</strong> ${agent.role ? agent.role.displayName : 'N/A'}</p>
        `;

        resultsdiv.appendChild(card);
    });


    } catch (error) {
        console.error(error);
        resultsdiv.innerHTML = "<p>Erro ao carregar dados da API.</p>";
    }
}

fetchCharacters();
