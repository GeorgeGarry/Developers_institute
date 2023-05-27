// Exercise 1 : Giphy API
    // Create a program to retrieve the data from the API URL provided above. 
    // Use XMLHttpRequest object to make an AJAX request to the Giphy API and console.log the Javascript Object.

const xhr = new XMLHttpRequest()

xhr.open("GET", "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My");
xhr.onload = () =>{
    // console.log(JSON.parse(xhr.response));
}
xhr.send()
// Exercise 1 : Giphy API               END


// Exercise 2 : Giphy API
    // Using this part of the documention, retrieve 10 gifs about the “sun”. The starting position of the results should be 2.
    // Console.log the Javascript Object

const xhr_2 = new XMLHttpRequest()
                                                    //   ⬇️⬇️⬇️   here's how I search for the "sun" gifs
xhr_2.open("GET", "https://api.giphy.com/v1/gifs/search?q=sun&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&limit=10&offset=2");
xhr_2.onload = () =>{
    // let gif_arr = JSON.parse(xhr_2.response).data;
    console.log(JSON.parse(xhr_2.response));
}
xhr_2.send()
// Exercise 2 : Giphy API               END

