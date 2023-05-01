/*Exercise 1: Traversing the DOM
Knowing how to traverse the DOM using JavaScript provides a foundation
to altering an HTML page in real time.
Using the HTML markup in Listing 1, perform these tasks:
1. Use the firstElementChild / firstChild property to access an element.
2. Use the lastElementChild / lastChild  property to access an element.
3. Use the nextElementSibling / nextSibling  property to access an element.
4. Use the previousElementSibling / previousSibling  property to access an elemen
5. Use the parentNode property to access an element.
6. Use the childNodes property to access a group of child elements.
*/
const page = document.getElementById("page");
console.log(page.firstElementChild);
console.log(page.lastElementChild);
console.log(page.firstElementChild.nextElementSibling);
console.log(page.lastElementChild.previousElementSibling);
console.log(page.firstElementChild.parentNode);
console.log(page.lastElementChild.childNodes);

/*
Exercise 2: Targeting nodes 
In exercise 1, you learned how to target nodes in several ways.
Continuing to use the markup in Listing 1, perform the following tasks:
1. Retrieve the value of a node using nodeValue / innerText / innerHTML.
2. Change the value of a node using nodeValue / innerText / innerHTML.
3. Retrieve the value of a node attribute.
4. Change the value of a node attribute.
*/
const content = page.lastElementChild
console.log(content.lastElementChild.innerText);
content.lastElementChild.innerText = "banana";
console.log(content.getAttribute("id"));

content.setAttribute("id", "new_attribute")
console.log(content.getAttribute("id"));




/*
Exercise 3: Manipulating the DOM
Now that you know how to traverse the DOM and alter node values,
the next logical step is to learn how to add, remove, and replace nodes.
Perform the following tasks:
1. Use the appendChild method to add a node.
2. Use the insertBefore method to add a node.
3. Use the removeChild method to remove a node.
4. Use the replaceChild method to replace a node.
*/
const h1_test_append = document.createElement("h1");
const h1_test_add_before = document.createElement("h1");
h1_test_add_before.textContent = "this is a test add before"
h1_test_append.textContent = "this is a test h1 append";
content.appendChild(h1_test_append);
page.insertBefore(h1_test_add_before, content);
// page.removeChild(content);
const my_replace_div = document.createElement("div") ;
my_replace_div.textContent = "this is my replace";
console.log(content.lastChild);
console.log(h1_test_add_before);
const title = document.getElementById("title");
content.replaceChild(my_replace_div, content.firstElementChild);


