//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector("button").addEventListener("click", searchInfoByName)
function searchInfoByName(){
    let name = document.querySelector("input").value
    let url = "https://rickandmortyapi.com/api/character/"+`?name=${name.toString()}`
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector("#name").innerText = "Name: " + data.results[0].name
        document.querySelector("#characterImage").src = data.results[0].image
        document.querySelector("#status").innerText = "Status: " + data.results[0].status
        document.querySelector("#specie").innerText = "Specie: " + data.results[0].species
        document.querySelector("#gender").innerText = "Gender: " + data.results[0].gender
        document.querySelector("#origin").innerText = "Origin: " + data.results[0].origin.name
        document.querySelector("#location").innerText = "Location: " + data.results[0].location.name
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
}
