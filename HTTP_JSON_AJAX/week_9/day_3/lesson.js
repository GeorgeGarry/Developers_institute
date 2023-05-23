// Promise.all
// Promise.allSettled
// Promise.race
// Promise.any
// Promise.resolve
// Promise.reject

// const promise_1 = new Promise((res,rej) =>{
//     setTimeout(()=>{
//         res("Resolve promise 1")
//     },1000)
    
// })
// const promise_2 = new Promise((res,rej) =>{
//     rej("rejected promise 2")
// })
// const promise_3 = new Promise((res,rej) =>{
//     res("Resolve promise 3")
// })

// let arr_promises = [promise_1, promise_2, promise_3];
                                    // Promise.all

// Promise.all(arr_promises)
// .then((result) =>{
//     console.log(`result`, result);
// })
// .catch( e => {
//     console.log(`reject`, e);
// })
                                    // Promise.allSettled - all resolved promisses

// Promise.allSettled(arr_promises)
// .then((result) =>{
//     console.log(`result`, result);
// })
// .catch( e => {
//     console.log(`reject`, e);
// })
                                    // Promise.race - first promise to give a response

// Promise.race(arr_promises)
// .then((result) =>{
//     console.log(`result`, result);
// })
// .catch( e => {
//     console.log(`reject`, e);
// })


                                    // Promise.any  - first promise that's resolved
// Promise.any(arr_promises)
// .then((result) =>{
// console.log(`result`, result);
// })
// .catch( e => {
// console.log(`reject`, e);
// })

const urls = [
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/albums"
  ];
  
    
                        // option 1 (Me)
// let arr_url = urls.map(url =>{
//     return fetch(url)
// })

// Promise.all(arr_url)
// .then(res =>{
//     return res.map(item => {
//         return item.json()
//     })
// })
// .then(arr =>{
//     responses(arr);
// })
// .catch(err =>{
//     console.log(err);
// });

// function responses(arr) {
//     for (i of arr){
//         i.then(res =>{console.log(res);});
//     };
// };


                // option 2 (Ziv)
// let arr_url = urls.map(url =>{
//     return fetch(url).then(res => res.json())
// })

// Promise.all(arr_url)
// .then(res =>{
//     console.log(res);
// })
// .catch(err =>{
//     console.log(err);
// });

                                    // async / await
// es8
    // asyncronised functions  ⬇️⬇️⬇️   return Promise
async function name_1() {
    return "John"
};

const name_2 = async function(){

};
const name_3 = async() =>{

};
// asyncronised functions ⬆️⬆️⬆️  return Promise


let x = name_1()
// console.log(x);
// x.then(res => {console.log(res);})

                            // await:
async function get_first_name() {
        return "John"
    
};
async function get_last_name() {
        return "Due"
};
const get_user_full_name = async() =>{
    const first_name =  await get_first_name();
    const last_name = await  get_last_name()
    console.log(`${first_name}  ${last_name}`); 
};
get_user_full_name();

// function get_user() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then(res => res.json())
//     .then(data =>{
//         console.log(data);
//     })
//     .catch(e => {console.log(e)})
// }
// get_user();

async function get_user() {
    try{
        let res = await fetch("https://jsonplaceholder.typicode.com/users");
        let data = await res.json();
        // console.log(data);
        return data
    }
    catch(err){
        console.log(err);
    }
    
    
}
// let users = get_user();
// users.then(arr => {console.log(arr)}) 
// console.log(users);

async function render_users(){
    let users = await get_user();
    console.log(users);
}

// render_users()


                            // async in loops

const time_out = async(ms, id) => {
    await new Promise((resolve) =>{
        setTimeout(()=>{
            console.log(id, "Done!");
            resolve()
        }, ms)
    })
}
// time_out(3000,4);

//                              DON'T use .forEach with async!!!!
async function  test_async_loop() {
    console.log("before");
    let arr = [`first`, `second`, `third`];
    for (const i of arr){
        await time_out(2000,i)
    }
    console.log("after");
                                            // arr.forEach(async (item) =>{
                                            //     await time_out(2000,item)
                                            // })
    
    
};
test_async_loop();






