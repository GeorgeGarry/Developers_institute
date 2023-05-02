/**
 * Create an array which value is the planets of the solar system.
For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
Each planet should have a different background color. 
(Hint: you could add a new class to each planet - each class containing a different background-color).
Finally append each div to the <section> in the HTML (presented below).
Bonus: Do the same process to create the moons.
Be careful, each planet has a certain amount of moons. How should you display them?
Should you still use an array for the planets ? Or an array of objects ?
 */

let my_planets = ["Earth", "Mars", "Pluto", "Moon", "Venus", "Moon"]
let colors = ["blue", "red", "orange", "pink", "green", "brown", "white"]

// console.log(my_random);
function create_planets(name){
    is_moon = name;
    my_random = Math.floor(Math.random()* (colors.length))
    name = document.createElement("div");

    if (is_moon === "Moon"){ name.setAttribute("class", "moon") }
    else{
    name.setAttribute("class", "planet")}
    
    name.style.backgroundColor = `${colors[my_random]}`
    document.getElementsByClassName("listPlanets")[0].appendChild(name);
    // return name
}
my_planets.forEach((item)=>{
    create_planets(item)
})
// create_planets("Moon")
