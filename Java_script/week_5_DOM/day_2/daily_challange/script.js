const noun = document.getElementById("noun");
const adjective = document.getElementById("adjective");
const person = document.getElementById("person");
const verb = document.getElementById("verb");
const place = document.getElementById("place");
const submit_btn = document.getElementById("lib-button");
const shuffle_button = document.getElementById("shuffle-button");
const final_story = document.getElementById("story");
let user_input_arr;

function generate_story(story_number, noun, adjective, person, verb, place){
    let story_1 = `In the small town of ${place}, there is a ${adjective} library where a librarian named ${person} works. 
        Every day, she ${verb} to work, eager to help people find the books they need.
        One day, a young girl came into the library looking for a book about ${noun}. 
        ${person} knew just the book to recommend and the girl left the library with a big smile on her face.
        This is just one of the many ways that ${person} ${verb} to make a difference in the lives of the people in her town.`;
    let story_2 = `There is a ${adjective} park in the heart of ${place} where ${person} ${verb} to relax and enjoy the scenery. 
        The park is home to many different types of ${noun}, including squirrels, birds, and rabbits.
        One day, ${person} came to the park to ${verb} and play. 
        They were delighted to see a family of ducks waddling by and stopped to watch them for a while.
        ${person} ${verb} to come to the park every day after that to see the ducks and play in the beautiful surroundings.`;
    let story_3 = `In the bustling city of ${place}, there is a busy restaurant where a chef named ${person} ${verb} to create delicious ${noun} every day.
        She uses only the freshest ingredients and her dishes are known for their ${adjective} flavors.
        One day, a food critic came to the restaurant to try the ${noun}. 
        They were blown away by the amazing flavors and wrote a glowing review in the newspaper.
        Since then, the restaurant has been packed with people ${verb} to taste the delicious food that ${person} creates every day.`;
    switch (story_number){
        case 1: return story_1;
        case 2: return story_2;
        case 3: return story_3;
    }
}

submit_btn.addEventListener("click", function(element){
    element.preventDefault();
    user_input_arr = [noun.value, adjective.value, person.value, verb.value, place.value];
    for (i in user_input_arr){
        if (!/^[a-zA-Z]+$/.test(user_input_arr[i])){
            alert(`Please check your ${user_input_arr[i].id}`);
            return false;
        }
    }
    final_story.innerText = generate_story(1, user_input_arr[0], user_input_arr[1], user_input_arr[2], user_input_arr[3], user_input_arr[4]);
});

shuffle_button.addEventListener("click", function(element){
    element.preventDefault();
    if (!user_input_arr){
        alert("Please Lib it first!")
        return false;
    };
    let random_num = Math.floor(Math.random() * 3) + 1;
    final_story.innerText = generate_story(random_num, user_input_arr[0], user_input_arr[1], user_input_arr[2], user_input_arr[3], user_input_arr[4]);
});











