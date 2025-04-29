// Create a function constructor called Employee that accepts a name, position, and salary. Create an array of 5 employees. Write a program that increases the salary by 10% for employees who have the position "developer" and print the updated employee list. (5 pts)

function Employee(name, position, salary) {
    this.name = name;
    this.position = position;
    this.salary = salary;
}

let employees = [
    new Employee("Alice", "developer", 50000),
    new Employee("Bob", "designer", 45000),
    new Employee("Charlie", "developer", 60000),
    new Employee("David", "manager", 70000),
    new Employee("Eve", "developer", 55000)
];

employees.forEach(employee => {
    if (employee.position.toLowerCase() === "developer") {
        employee.salary *= 1.1;
    }
});

console.log(employees);


// Given an array of product objects (each with name, price, and inStock properties), write a function that returns a new array containing only the products that are inStock: true, and sort the available products by price in ascending order. (5 pts)
function filterAndSortProducts(products) {
    return products.filter(product => product.inStock)
                   .sort((a, b) => a.price - b.price);
}

let products = [
    { name: "Laptop", price: 1200, inStock: true },
    { name: "Phone", price: 800, inStock: false },
    { name: "Tablet", price: 600, inStock: true },
    { name: "Monitor", price: 300, inStock: true }
];

console.log(filterAndSortProducts(products));



// Create an object called grades where the keys are student names and the values are arrays of their scores. Write a function that calculates and prints each student's average score, and if the average is above 70, print "Pass"; otherwise, print "Fail" next to their name. (5 pts)

let grades = {
    Alice: [80, 75, 90],
    Bob: [60, 65, 55],
    Charlie: [95, 88, 82],
    David: [70, 72, 68]
};

function evaluateGrades(grades) {
    for (let students = 0; students < grades.length;students ++){
        let average = grades[students].reduce((sum, score) => sum + score, 0) / grades[students].length;
        console.log(`${students}: ${average.toFixed(2)} - ${average > 70 ? "Pass" : "Fail"}`);
    }
   
}

evaluateGrades(grades);



// Write a function constructor called User that takes username, email, and isActive (boolean). Create an array of users. Write a program that loops through the array and deactivates users who have not logged in recently (simulate this with a random isActive: false assignment) and print out the usernames of active users. (5 pts)
function User(username, email, isActive) {
    this.username = username;
    this.email = email;
    this.isActive = isActive;
}
let users = [
    new User("Alice45", "alice@gmail.com", true),
    new User("Bobrisky", "bob@gmail.com", false),
    new User("CharlieChap", "charlie@gmail.com", true),
    new User("DavidRud1", "david@gmail.com", true),
    new User("EveAtome", "eve@gmail.com", false)
];

users.forEach(user => {
    user.isActive = Math.random() < 0.5; 
});
console.log("Active users:");
users.forEach(user => {
    if (user.isActive) {
        console.log(user.username);
    }
});



// You have an array of destination objects, each with name, distance (in km), and budgetRequired (in dollars). Write a function that accepts a maximum distance and a budget and returns all destinations the user can afford and reach within that distance. If none are found, return "No destinations available under your budget and distance". (5 pts)

function findDestinations(destinations, maxDistance, maxBudget) {
    let affordableDestinations = destinations.filter(destination => 
        destination.distance <= maxDistance && destination.budgetRequired <= maxBudget
    );

    return affordableDestinations.length > 0 ? affordableDestinations : "No destinations available under your budget and distance";
}

let destinations = [
    { name: "Diani", distance: 1200, budgetRequired: 305 },
    { name: "Maasai Mara", distance: 290, budgetRequired: 170 },
    { name: "Naivasha", distance: 640, budgetRequired: 240 }
];

console.log(findDestinations(destinations, 250, 16000));

