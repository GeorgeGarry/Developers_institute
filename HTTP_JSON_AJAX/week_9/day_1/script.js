const get_X = ()=> {
    setTimeout(()=>{
        return 2;
    }, 1000)
   
};
const get_Y = () => {
    return 3;
};
console.log(get_Y());

const get_X_Y = () => {
    get_X((x) =>{
        let y = get_Y();
        return x + y
    })



    // let x = get_X();
    // let y = get_Y();
    // return x+y
};
console.log(get_X_Y());

// new Promise()    //   <-- async/await function
// 1) pending
// 2) fullfiled - resolved
// 3) fullfiled - reject

        // const p = new Promise((resolved,reject)=> {
        //     // resolved("resolved")
        //     reject("reject")
        // });
const flip = () => {
    const coin = Math.floor(Math.random()*3);
    return (coin < 2) ? 
            (coin == 0) ? "head" : "tail" 
            : "side";
}
// console.log(flip());
const flip_coin = new Promise((res,rej) => {
    const flip_res = flip();
    if (flip_res == "head" || flip_res == "tail"){
        let obj = {
            result : flip_res
        }
        res (obj)
    }
    else {rej(flip_res)};
})
console.log("before");
console.log(flip_coin);
flip_coin
.then((result) => {
    return  result + " a winner"
    // console.log(result);
})
.then((res_2) => {
    console.log(res_2);
})
.catch((error) => {
    console.log(`error - `, error);
})
console.log("after");


// let result = 
fetch("https://jsonplaceholder.typicode.com/users")

// result
.then(res => {
     return res.json();
    })
    .then(data =>{
        console.log(data);
    })
    .catch(err =>{
        console.log(err);
    })
// console.log(result.then(res => {return res}));
