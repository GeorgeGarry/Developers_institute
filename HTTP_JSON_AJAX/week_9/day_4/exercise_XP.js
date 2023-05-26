// Exercise 1: Conversion
    // Convert the below promise into async await:
// fetch("https://www.swapi.tech/api/starships/9/")
// .then(response => response.json())
// .then(objectStarWars => console.log(objectStarWars.result));

async function get_data(){
    let resp = await fetch("https://www.swapi.tech/api/starships/9");
    let data = await resp.json();
    console.log(data.result);
}
get_data()
// Exercise 1: Conversion                       END

// Exercise 2: Analyze
function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();

// It will say "calling" and then in 2+ seconds it will say "resolved"

// Exercise 2: Analyze                      END
