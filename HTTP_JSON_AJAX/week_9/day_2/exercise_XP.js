// Exercise 1 : Comparison
    // Create a function called compareToTen(num) that takes a number as an argument.
    // The function should return a Promise:
    // the promise resolves if the argument is less than 10
    // the promise rejects if argument is greater than 10.

function compareToTen(num){
    return new Promise((res,rej) =>{
                if (num < 10){
                    res(`${num} is less than 10, success!!!`)
                }
                else { 
                    rej(`${num} is greater or equal to 10, error!!!`)
                }
            })
}
compareToTen(15)
  .then(result => console.log(result))
  .catch(error => console.log(error));
compareToTen(8)
  .then(result => console.log(result))
  .catch(error => console.log(error))
// Exercise 1 : Comparison                              END

// Exercise 2 : Promises
    // Create a promise that resolves itself in 4 seconds and returns a “success” string.
    // How can you make your promise from part 1 shorter using Promise.resolve() and console.log “success”?
    // Add code to catch errors and console.log ‘Ooops something went wrong’.
// const my_promise = 
new Promise((res) =>{
    setTimeout(() =>{
        p=res("success")
    }, 4000)
})
.then(res => console.log(res))
.catch(err => console.log(`Ooops something went wrong: ${err}`));

function resolve_func() { 
    return Promise.resolve("Success")
    .then(res => console.log(res))
 }
resolve_func()
// Exercise 2 : Promises                            END

// Exercise 3 : Resolve & Reject
    // Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
Promise.resolve(3).then(res=>console.log(res))
    // Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”
Promise.reject("Boo").catch(res=>console.log(res))

