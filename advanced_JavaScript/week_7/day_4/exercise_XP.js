// Exercise 1 : Location
    // Analyze the code below. What will be the output?
const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
};

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);
    // ▶️▶️▶️  I am John Doe, from Vancouver, Canada. Latitute 49.2827, Longtitude -123.1207
// Exercise 1 : Location                    END


// Exercise 2: Display Student Info
function displayStudentInfo(objUser){
    let {first, last} = objUser;
    console.log(`Your full name is ${first} ${last}`);
};
displayStudentInfo({first: 'Elie', last:'Schoppik'});
// Exercise 2: Display Student Info             END

//  Exercise 3: User & Id
const users = { user1: 18273, user2: 92833, user3: 90315 }
    // Using methods taught in class, turn the users object into an array: 
    // Excepted output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
    // FYI : The number is their ID number.
let entries = Object.entries(users);
console.log(entries);
    // Modify the outcome of part 1, by multipling the user’s ID by 2.
    // Excepted output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]
let id_x_2 = entries.map(item => [item[0], item[1]*2])
console.log(id_x_2);
//  Exercise 3: User & Id                   END

// Exercise 4 : Person Class
    // Analyze the code below. What will be the output?
class Person {
    constructor(name) {
        this.name = name;
    }
};

    const member = new Person('John');
    console.log(typeof member);
    // ▶️▶️▶️ this is object
// Exercise 4 : Person Class                END

// Exercise 5 : Dog Class
// Using the Dog class below:
class Dog {
    constructor(name) {
        this.name = name;
    }
};
// Analyze the options below. Which constructor will successfully extend the Dog class?
// 1
class Labrador_1 extends Dog {
    constructor(name, size) {
        this.size = size;
    }
};


// 2                                      ▶️▶️▶️ this one is correct  
class Labrador_2 extends Dog {
    constructor(name, size) {
        super(name);
        this.size = size;
    }
};


// 3
class Labrador_3 extends Dog {
    constructor(size) {
        super(name);
        this.size = size;
    }
};


// 4
class Labrador_4 extends Dog {
    constructor(name, size) {
        this.name = name;
        this.size = size;
    }
};
// Exercise 5 : Dog Class               END


// Exercise 6 : Challenges
    // Evaluate these (ie True or False)
// [2] === [2]    
// {} === {}
    //▶️▶️▶️ both false, because all have different references 


    // What is, for each object below, the value of the property number and why?
const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5};

object1.number = 4;
console.log(object2.number) //▶️▶️▶️ 4
console.log(object3.number) //▶️▶️▶️ 4
console.log(object4.number) //▶️▶️▶️ 5

    // Create a class Animal with the attributes name, type and color. 
    // The type is the animal type, for example: dog, cat, dolphin ect …
class Animal {
    constructor(name, type, color){
        this.type = type;
        this.name = name;
        this.color = color;

    }
}
    // Create a class Mamal that extends from the Animal class. 
    // Inside the class, add a method called sound(). 
    // This method takes a parameter: the sound the animal makes, and returns the details of the 
    // animal (name, type and color) as well as the sound it makes. 
class Mamal extends Animal{
    constructor(name, type, color){
        super(name, type, color);
    }
    sound(){
        console.log(`Moooo I'm a ${this.type}, named ${this.name} and I'm ${this.color}`);
    }
}

    // Create a farmerCow object that is an instance of the class Mamal. 
    // The object accepts a name, a type and a color and calls the sound method that “moos” her information.
    // For example: Moooo I'm a cow, named Lily and I'm brown and white

let farmer_cow = new Mamal("Lily", "cow", "brown and white");
farmer_cow.sound()
// Exercise 6 : Challenges                  END
