// Create an HTML file.
// Add a form where you will allow the user to submit a shopping item and an amount.
// Create a js file, where you will have your express server.
// When the form is submitted (ie. the user clicks on the “Submit” button), send the data to the server and save it in a variable (ie. save the item to your shopping list).
// After submitting the data, direct the user to a page displaying your shopping list items (including the newly added items).

let shoppig_list = {};
const express = require(`express`);
const app = express();
const { json } = require('body-parser');
app.use(express.urlencoded({extended:true}))
app.use(express.json());


app.listen(3000, ()=>{
    console.log("runs on 3000");
});

app.get(`/shoppinglist`, (req,res)=>{
    let item_name = req.query.item.toLowerCase();
    let item_qtty = req.query.qtty;
    // console.log(shoppig_list);
    // console.log(typeof parseInt(item_qtty));
    if (!Object.keys(shoppig_list).includes(item_name)){
        shoppig_list[`${item_name}`] =  parseInt(item_qtty);
    }
    else {
        shoppig_list[`${item_name}`] +=  parseInt(item_qtty)
    }
    let inner_html = ``;
    for (i of Object.keys(shoppig_list)){
        console.log(i);
        inner_html+=`<p>${i} : ${shoppig_list[`${i}`]}</p>`;
    }

    res.end(inner_html);

});
