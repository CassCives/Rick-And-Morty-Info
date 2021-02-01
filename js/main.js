//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector("button").addEventListener("click", searchInfoByName)
function searchInfoByName(){
    let nameDisplay = document.querySelector("#name")
    let characterImage = document.querySelector("#characterImage")
    let statusDisplay = document.querySelector("#status")
    let specieDisplay = document.querySelector("#specie")
    let genderDisplay = document.querySelector("#gender")
    let originDisplay = document.querySelector("#origin")
    let locationDisplay = document.querySelector("#location")
    let name = document.querySelector("input").value
    let url = "https://rickandmortyapi.com/api/character/"+`?name=${name.toString()}`
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
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
