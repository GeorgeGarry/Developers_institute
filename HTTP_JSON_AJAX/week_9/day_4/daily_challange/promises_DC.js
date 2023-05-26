// 1st Challenge
    // Use Promise.all
    // This function should accept an array of promises and return an array of resolved values. 
    // If any of the promises are rejected, the function should catch them.

    // Explain in a comment how Promise.all work and why you receive this output.
            //Promise.all takes an array of promises and resolves them one by one and the outputs all the results 
            // after EACH promise is resolved, if at least one is rejected - there's no resolution 

// const promise1 = Promise.reject("rejected");         //for test
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'foo');
});
// expected output: Array [3, 42, "foo"]

async function resolve_all(){
    try{
        const resolved_promise = Promise.all([promise1,promise2,promise3]);
        const resolved_arr = await resolved_promise;
        console.log(resolved_arr);
    }
    catch(err){
        console.log(err);
    }
   
    
}
resolve_all()
// 1st Challenge                                END

// 2nd Challenge            

                            //Daniel, please theck this:            
                                    // 💡for some reason given API service doesn't work propperly:
                                    // 💡it returns the result whatever you put in the request
                                    // 💡try to use the commented links, see the result

    // You will find the hour of sunrise of two cities, using the API https://sunrise-sunset.org/api.

    // In the HTML file, create a form with 4 inputs:
    // the latitude and longitude of the first city
    // the latitude and longitude of the second city
    // Retrieve the input’s value and display the hour of the sunrise for both city ONLY when both promises are resolved
    
async function fetch_sunrise() {
    let lat_1 = document.getElementsByClassName("lat")[0].value;
    let lat_2 = document.getElementsByClassName("lat")[1].value;
    let lon_1 = document.getElementsByClassName("lon")[0].value;
    let lon_2 = document.getElementsByClassName("lon")[1].value;
    for (elem of [lat_1,lat_2,lon_1,lon_2])  {
        if (isNaN(elem) || elem == ""){
            alert(`you have to input numbers only`);
            return
        }
    };


    // const city_1 = await fetch( `https://api.sunrise-sunset.org/json?lat=banan&lng=nothing`);
    const city_1 = await fetch( `https://api.sunrise-sunset.org/json?lat=${lat_1}&lng=${lon_1}`);
    const data_1 = await city_1.json()

    // const city_2 = await fetch(`https://api.sunrise-sunset.org/json?lat=blablabla&lng=234523452345234524`);
    const city_2 = await fetch(`https://api.sunrise-sunset.org/json?lat=${lat_2}&lng=${lon_2}`);
    const data_2 = await city_2.json();
    
    let res_div_1 = document.createElement("div");
    let res_div_2 = document.createElement("div");
    res_div_1.style.margin = "30px";
    res_div_2.style.margin = "30px";

    res_div_1.innerHTML = `<h3>Paris sunrise</h3><br><h4>${data_1.results.sunrise}</h4>`;
    res_div_2.innerHTML = `<h3>New-York sunrise</h3><br><h4>${data_2.results.sunrise}</h4>`;
    document.getElementById("cities_sunrise").appendChild(res_div_1);
    document.getElementById("cities_sunrise").appendChild(res_div_2);
};
    
// 2nd Challenge                        END