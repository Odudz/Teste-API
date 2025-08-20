const pageInput = document.getElementById("pageInput")
const searchBtn = document.getElementById("searchBtn")
const resultsdiv = document.getElementById("results")

async function fetchCharacters(page){
    resultsdiv.innerHTML = "<p>Carregando....<p>"

    try{
    
        const response = await fetch(`https://rickandmortyapi.com/api/character`)
        const data = await response.json()
        console.log(data)

        if(data.error){
            resultsdiv.innerHTML = "<p>Página inválida!Tente novamente.</p>"
            return
        }

        resultsdiv.innerHTML = ""
        data.results.forEach(character => {
            const card = document.createElement("div")
            card.className = "card"
            card.innerHTML = `
                <img src="${character.image}" alt="${character.name}">
                <h3>${character.name}</h3>
                <p><strong>Status:</strong>${character.status}</p>
                <p><strong>Espécie:</strong>${character.species}</p>
            `
            resultsdiv.appendChild(card)
        })
    
    } catch(error){

        console.log(error)
    
    }
}

fetchCharacters(1)