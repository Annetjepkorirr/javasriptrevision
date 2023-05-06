// Given an array of strings, use a function to reverse all the 
// elements in the string in ascending order and the specific elements
//  in descending order
function reverseString(arr){
    let wordReverse = arr.map(stmt => stmt.split('').reverse().join(''));
    return wordReverse

}
let arr = ["Mary","Jane","Winnie"]
console.log(reverseString(arr));


// Given an array of objects, each object representing a person with a name 
// and age property, write a function that returns the sum of all people who 
// are less than 18 years.
function peopleIdentity(people){
    let sum = 0
    for (let i = 0; i < people.length; i++) {
        if (people[i].age < 18) {
            sum+=people[i].age
        }
    }
    return sum 
};
const people = [
    { name: 'Alice', age: 17 },
    { name: 'Eunice', age: 22 },
    { name: 'Charlie', age: 14 },
    { name: 'Max', age: 19 },
  ];
let sumOfAllPeople = peopleIdentity(people)
console.log(sumOfAllPeople);

// Using JS functions and an array of numbers, return positive if an element within 
// the array is positive, negative if an element is negative, else zero
function findPositiveOrNegative(nums){
    for (const num of nums) {
        if (num >0) {
            return "positive"
        }
        else if (num < 0) {
            return "negative"
        }
        else{
            return "zero"
        }
        
    }
}
let nums = [1,7,19,23,56]
console.log(findPositiveOrNegative(nums));

// Given an array of objects, where each object represents an employee with an id, name, and salary 
// property, write a function that returns a new array of employee objects sorted by their salary
//  in ascending order.
function identityEmployee(person){
    let sortSalary =person.slice().sort((j,l) => j.salary - l.salary);
    return sortSalary
}
const person=[
    {id: "3748787698", names: "James", salary: "90,0000"},
    {id: "3478594578", names: "Jane", salary: "20,0000"},
    {id: "5875964901", names: "Mary", salary: "100,0000"},
    {id: "5875964901", names: "Jamina", salary: "80,0000"}

]
let sortSalary = identityEmployee(person);
console.log(sortSalary);
