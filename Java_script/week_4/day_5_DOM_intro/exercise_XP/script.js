// Exercise 1 : Users
    // Using Javascript:
    // Retrieve the div and console.log it
    console.log(document.getElementById("container"));
    // Change the name “Pete” to “Richard”.
    let ul = document.getElementsByClassName("list")
    ul[0].children[1].innerText = "Richard"
    // Delete the <li> that contains the text node “Sarah”. (It’s the second <li> of the second <ul>)
    ul[1].removeChild(ul[1].children[1])
    // Change each first name of the two <ul>'s to your name. (Hint : use a loop)
    for (i of ul){
        i.firstElementChild.innerText = "Yegor"
        }
// Exercise 1 : Users               END

// Exercise 2 : Users And Style
    // Using Javascript:
    // Add a “light blue” background color and some padding to the <div>.
    let users = document.getElementById("users");
    users.style.backgroundColor = "lightBlue";
    users.style.padding = "20px";
    // Do not display the <li> that contains the text node “John”. (the first <li> of the <ul>)
    users.nextElementSibling.firstElementChild.style.display = "none";
    // Add a border to the <li> that contains the text node “Pete”. (the second <li> of the <ul>)
    users.nextElementSibling.lastElementChild.style.border = "red solid"
    // Change the font size of the whole body.
    document.body.style.fontSize = "20px"
// Exercise 2 : Users And Style             END

// Exercise 3 : Change The Navbar
    // Using Javascript, in the <div>, change the value of the id attribute from navBar
    // to socialNetworkNavigation, using the setAttribute method.
    let change_id = document.getElementById("navBar");
    change_id.setAttribute("id", "socialNetworkNavigation");
    // We are going to add a new <li> to the <ul>.
    // First, create a new <li> tag (use the createElement method).
    let new_li = document.createElement("li");
    // Create a new text node with “Logout” as its specified text.
    let logout_text_node = document.createTextNode("Logout");
    // Append the text node to the newly created list node (<li>).
    new_li.append(logout_text_node);
    // Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.
    change_id.firstElementChild.appendChild(new_li);

        // Use the firstElementChild and the lastElementChild properties to retrieve the 
        // first and last <li> elements from their parent element (<ul>).
        let first_child = change_id.firstElementChild.firstElementChild;
        let last_child = change_id.firstElementChild.lastElementChild;
        // Display the text of each link. (Hint: use the textContent property).
        console.log(first_child.textContent);
        console.log(last_child.textContent);
// Exercise 3 : Change The Navbar               END

// Exercise 4 : My Book List   
const allBooks = [
    {
    title: "my ABC",
    author: "unknown",
    image : "books-icon.png",
    alreadyRead : true
        },
    {
    title: "my ABC 2",
    author: "unknown 2",
    image : "books-icon.png",
    alreadyRead : false
        }
];
let books_div = document.getElementsByClassName("listBooks");
let my_books_table = document.createElement("table");

// let book_img_1 = document.createElement("img").setAttribute("src", allBooks[0]["image"])
// let book_img_2 = document.createElement("img").setAttribute("src", allBooks[1]["image"])


let row_1 = document.createElement("tr");
let column_1_1 = document.createElement("th");
let column_2_1 = document.createElement("th");
row_1.setAttribute("class", "rows");


let row_2 = document.createElement("tr");
row_2.setAttribute("class", "rows");
let column_1_2 = document.createElement("td");
let column_2_2 = document.createElement("td");


books_div[0].appendChild(my_books_table);
my_books_table.appendChild(row_1);
my_books_table.appendChild(row_2);

row_1.appendChild(column_1_1);
row_1.appendChild(column_2_1);

row_2.appendChild(column_1_2);
row_2.appendChild(column_2_2);

column_1_1.innerHTML = `<img src="${allBooks[0]["image"]}" style: width="100px">`;
column_2_1.innerHTML = `<img src="${allBooks[1]["image"]}" style: width="100px">`;
column_1_2.innerHTML = `${allBooks[0]["title"]}, written by ${allBooks[0]["author"]}`;
column_2_2.innerHTML = `${allBooks[1]["title"]}, written by ${allBooks[1]["author"]}`;

for (i in document.getElementsByTagName("td")){
    if (allBooks[i]["alreadyRead"] == true){
        document.getElementsByTagName("td")[i].style.color = "red"
    }
}
// document.getElementsByTagName("td")[0].style.color = "red"

