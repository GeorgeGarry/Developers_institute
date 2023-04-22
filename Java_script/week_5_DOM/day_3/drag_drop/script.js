let orange_container = document.getElementById("drop-container");
let pink_container = document.getElementsByClassName("draggable-container")[0];
let pink_square = document.getElementById("draggable-element");

pink_square.addEventListener("dragstart", function(event){
    event.dataTransfer.setData("pinkSquare", event.target.id);
    event.dataTransfer.effectAllowed = "move";
    event.target.style.cursor = "move"
});

pink_square.addEventListener("drag", function(event){
    event.preventDefault();
    // console.log(event.target);
    event.target.classList.add("hide");
});

orange_container.addEventListener("dragover", function(event){
    event.preventDefault();
});

orange_container.addEventListener("drop", function(event){
    event.preventDefault();
    let id = event.dataTransfer.getData("pinkSquare");
    console.log(id);
    let pink = document.getElementById(id);
    event.target.appendChild(pink);
});

pink_container.addEventListener("dragover", function(event){
    event.preventDefault();
});

pink_container.addEventListener("drop", function(event){
    event.preventDefault();
    let id = event.dataTransfer.getData("pinkSquare");
    console.log(id);
    let pink = document.getElementById(id);
    event.target.appendChild(pink);
});

