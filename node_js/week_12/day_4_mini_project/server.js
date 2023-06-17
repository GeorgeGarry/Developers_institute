const Parser = require('rss-parser');
const parser = new Parser();
const express = require(`express`);
const cors = require("cors")
const app = express();
app.use(cors());
  
app.set(`view engine`, `ejs`);
app.use(express.json());
app.use('public', express.static('/public'));
app.listen(3000, () => console.log(`runs on port 3000`));

app.get('/', render_feed);
app.get('/search',  search_feed);
app.post('/search/title', search_feed);
app.post('/search/category', search_feed);



let items = [];
populate_items()
async function populate_items(){
    const data = await parser.parseURL('https://thefactfile.org/feed/');
    items = data.items;
  }

function search_feed(req,res){
    const body = req.body;
    const title = body?.title;
    const category = body?.category;
    console.log(title);
    console.log(category);
    if (category ==null && title == null ){
        return res.render(`search.ejs`, {items: items})
    }
    const items_return = title == null ? get_posts_contain_category(category): get_gosts_contain_title(title);
    res.render("search.ejs", {items: items_return})

}
function get_posts_contain_category(category){
    return items.filter((item)=> 
            item.categories.some((cat) => cat.toLowerCase().includes
                                        (category.toLowerCase()))
        );
    }

function get_gosts_contain_title(title){
    return items.filter((item) => item.title.toLowerCase().includes(title.toLowerCase()));
}

function render_feed(req,res){
    console.log(items);
    res.render(`index.ejs`, {items})
}


// async function send_feed(req,res ) {
//       const data = await parser.parseURL('https://thefactfile.org/feed/');
//         const title = data.title;
//         const items = data.items;
//         const description = data.description;
//         res.send({title,items,description});

//   }




// (async () => {

//   let feed = await parser.parseURL('https://thefactfile.org/feed/');
//   console.log(feed);

//   feed.items.forEach(item => {
//     console.log(item.title + ':' + item.link)
//   });

// })();