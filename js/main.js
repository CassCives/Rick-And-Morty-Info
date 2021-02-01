document.querySelector("button").addEventListener("click", searchInfoByName)


const nameDisplay = document.querySelector("#name")
const characterImage = document.querySelector("#characterImage")
const statusDisplay = document.querySelector("#status")
const specieDisplay = document.querySelector("#specie")
const genderDisplay = document.querySelector("#gender")
const originDisplay = document.querySelector("#origin")
const locationDisplay = document.querySelector("#location")


function searchInfoByName(){
    let name = document.querySelector("input").value
    let url = "https://rickandmortyapi.com/api/character/"+`?name=${name.toString()}`
    fetch(url)
    .then(res => res.json())
    .then(data => {
        nameDisplay.innerText = "Name: " + data.results[0].name
        characterImage.src = data.results[0].image
        statusDisplay.innerText = "Status: " + data.results[0].status
        specieDisplay.innerText = "Specie: " + data.results[0].species
        genderDisplay.innerText = "Gender: " + data.results[0].gender
        originDisplay.innerText = "Origin: " + data.results[0].origin.name
        locationDisplay.innerText = "Location: " + data.results[0].location.name
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
}
