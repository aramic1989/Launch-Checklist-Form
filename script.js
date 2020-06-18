// Write your JavaScript code here!

window.addEventListener("load", function() {

   let form = document.querySelector('form')

   let pilot = document.querySelector("input[name=pilotName]")

   let coPilot = document.querySelector("input[name=copilotName]")

   let fuelLevel = document.querySelector("input[name=fuelLevel]")

   let cargoMass = document.querySelector("input[name=cargoMass]")

   let pilotStatus = document.getElementById("pilotStatus")

   let coPilotStatus = document.getElementById("copilotStatus")

   let fuelStatus = document.getElementById("fuelStatus")

   let cargoStatus = document.getElementById("cargoStatus")

   let faulty = document.getElementById("faultyItems")

   let launchStatus = document.getElementById("launchStatus")

   let json = []

   this.fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {

      response.json().then(function(json) {

         const div = document.getElementById("missionTarget")

         let index = Math.floor(Math.random(json.length))

         div.innerHTML =

            `<h2>Mission Destination</h2>

               <ol>

                  <li>Name: ${json[index].name}</li>

                  <li>Diameter: ${json[index].diameter}</li>

                  <li>Star: ${json[index].star}</li>

                  <li>Distance from Earth: ${json[index].distance}</li>

                  <li>Number of Moons: ${json[index].moons}</li>

               </ol>

               <img src="${json[index].image}">`

      })

   })

   form.addEventListener("submit", function(event) {

      if (pilot.value === "" || coPilot.value === "" || fuelLevel.value === "" || cargoMass.value === "") {

         alert("All fields are required!")

      } else if (!isNaN(pilot.value) || !isNaN(coPilot.value) || isNaN(fuelLevel.value) || isNaN(cargoMass.value)) {

         alert("Please enter a valid entry!")

      } else {

         faulty.style.visibility = "visible";

         pilotStatus.innerHTML = `Pilot ${pilot.value}: ready for launch`

         coPilotStatus.innerHTML = `Co-pilot ${coPilot.value}: ready for launch`

         if (fuelLevel < 10000 || cargoMass > 10000) {

            launchStatus.innerHTML = "Shuttle is not ready for launch."

            launchStatus.style.color = "red"

            fuelStatus.innerHTML = "There isn't enough fuel for the journey."

            cargoStatus.innerHTML = "There is too much mass for the shuttle to take off."

         } else if (fuelLevel.value < 10000) {

            launchStatus.innerHTML = "Shuttle is not ready for launch."

            launchStatus.style.color = "red"

            fuelStatus.innerHTML = "There is not enough fuel for the journey."

         } else if (cargoMass.value > 10000) {

            launchStatus.innerHTML = "Shuttle is not ready for launch."

            launchStatus.style.color = "red"

            cargoStatus.innerHTML = "There is too much mass for the shuttle to take off."

         } else {

            launchStatus.innerHTML = "Shuttle ready for launch."

            launchStatus.style.color = "green"

            fuelStatus.innerHTML = "Fuel level high enough for launch."

            cargoStatus.innerHTML = "Cargo mass is low enough for launch."

         }

      }

      event.preventDefault()

   })

})

/* This block of code will show how to format the HTML when you fetch some planetary JSON!

<h2>Mission Destination</h2>

<ol>

   <li>Name: ${json.name}</li>

   <li>Diameter: ${json.diameter}</li>

   <li>Star: ${json.star}</li>

   <li>Distance from Earth: ${json.distance}</li>

   <li>Number of Moons: ${json.moons}</li>

</ol>

<img src="${}">

*/
