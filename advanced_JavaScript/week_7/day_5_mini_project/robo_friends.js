const robots = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      image: 'https://robohash.org/1?200x200'
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      image: 'https://robohash.org/2?200x200'
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      image: 'https://robohash.org/3?200x200'
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      image: 'https://robohash.org/4?200x200'
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      image: 'https://robohash.org/5?200x200'
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      image: 'https://robohash.org/6?200x200'
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      image: 'https://robohash.org/7?200x200'
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      image: 'https://robohash.org/8?200x200'
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      image:'https://robohash.org/9?200x200'
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      image:'https://robohash.org/10?200x200'
    }
    ];

let my_divs = [];

for (i of robots){
    let robots_container = document.getElementsByClassName("container")[0]; //container for robots
        //one single tobot div
    let new_robot_div = document.createElement("div");
    new_robot_div.classList.add("robots");
    new_robot_div.setAttribute("name", "");
    new_robot_div.name = i.name ;
    //one single tobot div

        //robot's name
    let robot_name = document.createElement("h3");  
    robot_name.innerText = i.name;
    robot_name.classList.add("inside_text");
    //robot's name

        //robot's email
    let robot_email = document.createElement("p");
    robot_email.innerText = i.email;
    robot_email.classList.add("inside_text");
    //robot's email

        //robot's picture
    let robot_img = document.createElement("img");
    robot_img.src = i.image;
    robot_img.classList.add("images");
    //robot's picture

    //adding inner elements to one robot div
    new_robot_div.appendChild(robot_img);
    new_robot_div.appendChild(robot_name);
    new_robot_div.appendChild(robot_email);
        //adding inner elements to one robot div
    
    robots_container.appendChild(new_robot_div);  //append new robot to the container
    
    my_divs.push(new_robot_div);    //array of robots' divs to use in the search function
    
};

function search(e){
    let my_search = e.target.value.toUpperCase();
    //clearing the page for new search
    let robots_container = document.getElementsByClassName("container")[0];
    document.body.removeChild(robots_container);
        //clearing the page for new search

    //new container to display only searched robots
    let new_div_search = document.createElement("div");
    new_div_search.classList.add("container");
    for (i of my_divs){
        if (i.name.toUpperCase().includes(my_search)){
            new_div_search.appendChild(i)
        }
    }
    document.body.appendChild(new_div_search);
        //new container to display only searched robots
};