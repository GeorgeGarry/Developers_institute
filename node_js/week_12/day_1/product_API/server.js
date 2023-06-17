// const {db} = require(`./config/db_SQL.js`);

// db(`products`)
// .select("name")
// .then(data => {
//     console.log(data);
// })
// .catch(err => {
//     console.log(err);
// })

const product_router = require(`./routs/products.js`)
const express = require(`express`);
const dotenv = require(`dotenv`).config();
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(`/`, express.static(__dirname+`/public`));

app.get(`/main`, (req,res) =>{
    res.sendFile(__dirname+`/public/index.html`)
});
// EJS
app.set(`view engine`, `ejs`);
app.get(`/shop`, (req,res)=>{
    let login = true;
    let users =[
        {name:`aaa`, username: `aaa!!!`},
        {name:`bbb`, username: `bbb!!!`},
        {name:`ccc`, username: `ccc!!!`}
    ]
    res.render(`shop`,{

        login:login,
        first_name:`John`,
        last_name: `Snow`,
        users:users

    })
})

app.get(`/contact`, (req,res)=>{
    
    res.render(`contact`,{

    })
})





// EJS


app.listen(process.env.PORT, ()=>{
    console.log(`runs on ${process.env.PORT}`);
});

app.use(product_router.router);
