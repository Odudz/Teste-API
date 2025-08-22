const pageInput = document.getElementById("pageInput")
const searchBtn = document.getElementById("searchBtn")
const resultsdiv = document.getElementById("results")

async function fetchCharacters(page){
    resultsdiv.innerHTML = "<p>Carregando....<p>"

    try{
    
        const response = await fetch(`https://valorant-api.com/v1/agents`)
        const data = await response.json()
        console.log(data)

        if(data.error){
            resultsdiv.innerHTML = "<p>Página inválida!Tente novamente.</p>"
            return
        }

        resultsdiv.innerHTML = ""
        data.results.forEach(agents => {
            const card = document.createElement("div")
            card.className = "card"
            card.innerHTML = `
                <img src="${agents.image}" alt="${agents.name}">
                <h3>${agents.name}</h3>
                <p><strong>Status:</strong>${agents.status}</p>
                <p><strong>Espécie:</strong>${agents.species}</p>
            `
            resultsdiv.appendChild(card)
        })
    
    } catch(error){
        
        //console.log(error)
    
    }
}

fetchCharacters(1)