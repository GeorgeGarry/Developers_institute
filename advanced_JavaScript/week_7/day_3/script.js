// Object keys and values
const population = {
    tokyo: 23442343234,
    delhi: 213415,
    shanghai: {chinese : 11100045, germans : 234}
};
let keys = Object.keys(population);
console.log(keys);
let values = Object.values(population);
console.log(values);
let arr = Object.entries(population);
arr.forEach(([a,b]) => {
    console.log(a,b);
});

const population_2 = [
    ["tokyo", 23442344],
    ["dehli", 12342345],
    ["shanghai", 09878]
]
const population_3 = Object.fromEntries(population_2);
console.log(population_3);
//                                          Deep cloning:
const population_clone_str = JSON.stringify(population);
const population_clone = JSON.parse(population_clone_str);


const population_4 = {
    tokyo: 23442343234,
    delhi: 213415,
    shanghai: 23432434
};
const population_5 = {
    tokyo: 23,
    msc: 213415,
    kiev: 23432434,
    date_time:{
        date: "05122023",
        time: 1900
    }
};

let merge = {...population_5, ...population_4};
console.log({...population_4, ...population_5});
console.log({...population_4, tokyo:0});


// object destructuring

const {tokyo, msc, kiev, date_time:{date, time}} = population_5;
console.log(tokyo, msc, kiev);
console.log(date, time);


function x({tokyo,kiev})
// function x(obj)
{
    // const {tokyo,kiev} = obj
    console.log(tokyo,kiev);
}
x(population_5)


// Class vs Objects
console.log("**************Class vs Objects************");
class Person {
    constructor(name){
        this.name = name;
    }

    getName(){
        return this.name
    } // getting the name

    setName(name){
        this.name = name
    }
    greet(){
        console.log(`Hello, my name is ${this.name}`);
    }
}
let person_a = new Person("Marry");
let person_b = new Person("John");
console.log(person_a, person_b);
person_a.greet();
person_b.greet();

class animal{
    constructor(animal_name){
        this.name = animal_name
    }
    speak(){
        console.log(`${this.name} has made a sound`);
    }
}
let dog = new animal("dog");
let cat = new animal("cat");
cat.speak();
dog.speak();
class Dog extends animal {
    constructor(name){
        super(name)
    }
    speak(){
        console.log(`${this.name} barks`);
    }

};
const dog_1 = new Dog("Buddy");
dog_1.speak();