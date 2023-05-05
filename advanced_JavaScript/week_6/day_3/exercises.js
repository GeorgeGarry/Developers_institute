let user = {
    name: "Mark",
    address: {
        city: "Tel Aviv",
        country: "Israel",
        zip: {
            start: 233,
            end: 555
        }
    }
}
console.log(user);
let json = JSON.stringify(user);
let user_2 = JSON.parse(json)
console.log(json);
user_2.name = "Tony"
console.log(user_2);
console.log(user);
