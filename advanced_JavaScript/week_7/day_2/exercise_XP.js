// Exercise 1 : Analyzing
    // Analyze these pieces of code before executing them. What will be the outputs ?
    // ------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);
            // ▶️ the log will be: bread, carrot, potato, chicken, apple, orange

// ------2------
const country = "USA";
console.log([...country]);
            // ▶️it will be an array [u,s,a]

// ------Bonus------
let newArray = [...[,,]];
console.log(newArray);
            // ▶️ it'll be undefined, because there are no values there 
// Exercise 1 : Analyzing                           END


// Exercise 2 : Employees
    // Using the map() method, push into a new array the firstname of the user and a welcome message. 
    // You should get an array that looks like this : 
    // const welcomeStudents = ["Hello Bradley", "Hello Chloe", "Hello Jonathan", "Hello Michael", "Hello Robert", "Hello Wes", "Hello Zach"]
const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

const welcomeStudents = users.map(item =>{
    return `Hello ${item.firstName}`
});
console.log(welcomeStudents);

    // Using the filter() method, create a new array, containing only the Full Stack Residents.
    // Bonus : Chain the filter method with a map method, to return an array 
    // containing only the lastName of the Full Stack Residents.
const full_stack_residents = users.filter(x =>{
    return x.role.includes("Full")
}).map(item => item.lastName);  

console.log(full_stack_residents);
// Exercise 2 : Employees                   END

// Exercise 3 : Star Wars
const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
    // Use the reduce() method to combine all of these into a single string.
    let epic_str = epic.reduce((total, item) =>{
        return total+" " +item
    })
console.log(epic_str);
// Exercise 3 : Star Wars                   END

// Exercise 4 : Employees #2
const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
{name: "Liam", course: "Computer Science", isPassed: false}, 
{name: "Jenner", course: "Information Technology", isPassed: true}, 
{name: "Marco", course: "Robotics", isPassed: true}, 
{name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
{name: "Jamie", course: "Big Data", isPassed: false}];
    // Using the filter() method, create a new array, containing the students that passed the course.
let students_passed = students.filter( item  =>{
    return item.isPassed
});
console.log(students_passed);

// ▶️▶️▶️▶️▶️▶️▶️▶️▶️▶️▶️