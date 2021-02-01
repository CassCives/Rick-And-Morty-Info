document.querySelector("button").addEventListener("click", searchInfoByName)


let nameDisplay = document.querySelector("#name")
let characterImage = document.querySelector("#characterImage")
let statusDisplay = document.querySelector("#status")
let specieDisplay = document.querySelector("#specie")
let genderDisplay = document.querySelector("#gender")
let originDisplay = document.querySelector("#origin")
let locationDisplay = document.querySelector("#location")


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
