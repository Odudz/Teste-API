const pageInput = document.getElementById("pageInput")
const searchBtn = document.getElementById("searchBtn")
const resultsdiv = document.getElementById("results")

async function fetchCharacters(page){
    resultsdiv.innerHTML = "<p>Carregando....<p>"

    try{
        const response = await fetch("https://gravity-falls-api.vercel.app/api/characters")
        const data = await response.json()
        console.log(data)
    } catch(error){

    }
}