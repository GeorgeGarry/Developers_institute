// write a function testNum that takes a number
// as an input and
// returns a Promise that tests if the value
// is less than 10
// value < 10 - resolve with value
// 'number is less than 10, success!!!'
// reject with value
// 'number is greater or equal to 10, error!!!'
// call the function and get results



function test_num(num) {
    return new Promise((res,rej)=> {
        if (num < 10){
            res(num + ' is less than 10, success!!!')
        }
        else {
            rej(num + ' is greater or equal to 10, error!!!')
        }
    })
};
// console.log(test_num(4));

// test_num(12).then((res) => {console.log(res);}).catch((err) => {console.log(err);})


// const testNum = (num) => {
//     return new Promise((res,rej) =>{
//         if (num < 10){
//             res('number is less than 10, success!!!')
//         }
//         else { 
//             rej('number is greater or equal to 10, error!!!')
//         }
//     })
// }

const get_X = ()=> {
        return new Promise((res,rej) => {
            setTimeout(()=>{
                res(2);
            },1000)
        })

   
};
const get_Y = () => {
    return new Promise((res,rej) => {
        setTimeout(()=>{
            res(3);
        },3000)
    })
};

const get_X_Y = () => {
    let y = get_Y();
    let x = get_X();

    x.then((X)=>{
        let Y = get_Y();
        y.then((res_2) => {
            console.log(res_2 + X);
        })})
        
};
// get_X_Y();



function fetch_yoga() {
    let my_res = fetch("https://zivuch.github.io/yogaapi.json")
    my_res.then(res => {
        return res.json();
       })
       .then(data =>{
        create_divs(data);
       })
       .catch(err =>{
           console.log(err);
       })

}

function create_divs(data) {
    for (i of data){
        let sanskrit_name = document.createElement("p");
            sanskrit_name.innerText = i.sanskrit_name;
        let english_name = document.createElement("p");
            english_name.innerText = i.english_name;
        let asana_img = document.createElement("img");
            asana_img.src = i.img_url;
            asana_img.style.width = "70px"
        let asana_card = document.createElement("div");
        asana_card.classList.add("asana_card");

        asana_card.appendChild(asana_img);
        asana_card.appendChild(sanskrit_name);
        asana_card.appendChild(english_name);
        // asana_card.style.display = "flex"
        document.getElementById("container").appendChild(asana_card);

    }
}