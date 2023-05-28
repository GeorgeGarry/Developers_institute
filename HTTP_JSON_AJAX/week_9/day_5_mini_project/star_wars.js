function display_heroes(){
    document.getElementById("result").innerHTML = "";
    document.getElementById("result").innerHTML = `<p style="font-size: 80px;">Loading
                                                        <i class="fa-solid fa-spinner fa-spin-pulse" ">
                                                    </p>`
   async function get_homeworld(planet_link){
        let req = await fetch(planet_link);
        let data = await req.json();
        return data.result.properties.name

   };
    async function process_request(){
        let ran = Math.floor(Math.random()*83) +1;
        try{
            let req = await fetch(`https://www.swapi.tech/api/people/${ran}`);
            let data = await req.json();
            // let height = data.result.properties.height;
            // let gender = data.result.properties.gender;
            // let birth_year = data.result.properties.birth_year;
            // let homeworld = await get_homeworld(data.result.properties.homeworld);
            let name_header = document.createElement("h1");
            name_header.innerText = data.result.properties.name;

            let height_line = document.createElement("h2");
            height_line.innerText = `Height: ${data.result.properties.height}`;

            let gender_line = document.createElement("h2");
            gender_line.innerText = `Gender: ${data.result.properties.gender}`;

            let birth_year_line = document.createElement("h2");
            birth_year_line.innerText = `Birth Year: ${data.result.properties.birth_year}`;

            let homeworld_line = document.createElement("h2");
            homeworld_line.innerText = `Home World: ${await get_homeworld(data.result.properties.homeworld)}`;

            let root = document.getElementById("result");
            root.innerHTML = "";
            root.appendChild(name_header);
            root.appendChild(height_line);
            root.appendChild(gender_line);
            root.appendChild(birth_year_line);
            root.appendChild(homeworld_line);
        }
        catch(error){
            document.getElementById("result").innerHTML ="<h1>`Oh No! That person isnt available`</h1>";
        };
    };
    process_request()
};
