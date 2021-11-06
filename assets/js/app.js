// document.querySelectorAll('.btn').forEach((item) => {
//     item.addEventListener('click', () => {
//         alert('Successfully implemented!')
//     })
// })

// Arrays

// const friends = ['john', 'peter'];
// console.log(friends);

// Function
// function hello(){
//     console.log('Hello, John!');
// }
// hello();

// let friends = ['john', 'peter', 'susy'];

// function friendName(friends) {
//     console.log(friends);
// }

// friendName();

// Addition
// function add(value1, value2) {
//     return value1 + value2;
// }
// const addition = add(2,3);
// console.log(addition);

// // Subtraction
// function sub(value3, value4) {
//     return value3 - value4;
// }
// const subtraction = sub(3,2);
// console.log(subtraction);

// // Multiplication
// function mul(value5, value6) {
//     return value5 * value6;
// }
// const multiplication = mul(3,3);
// console.log(multiplication);

// // Division
// function div(value7, value8) {
//     return value7 / value8;
// }
// const division = div(3,3);
// console.log(division);

// // Division
// function mod(value9, value10) {
//     return value9 % value10;
// }
// const modulus = mod(4,3);
// console.log(modulus);

// Objects & Values
// const person = {
//     firstName: 'john',
//     lastName: 'peter',
//     age: 40,
//     education: false,
//     married: true,
//     siblings: ['anna', 'susan', 'mahi'],
//     greeting() {
//         console.log('Hello, This is JOHN, How are you?');
//     },
// };

// const age = person.age;
// console.log(age);

// console.log(person.firstName);
// console.log(person.siblings[2]);
// person.greeting();

//Conditional Statements
// >, <, >=, <=, ==, ===, !=, !===

// if(2>1){
//     console.log('Wow, It worked!');
// }

// const value1 = 8;
// const value2 = 6;
// if(value1 > value2){
//     console.log('value1 is greater than value2');
// } else if (value2 > value1) {
//     console.log('Value2 is greater than value1');
// }
// else {
//     console.log('Both values are equal');
// }

// Logical Operators
// (|| - OR), (&& - AND)

// const userName = 'peter';
// const userAge = 24;

// if(userName === 'peter' || userAge === 25){
//     console.log('Hello, peter!');
// } else {
//     console.log('Wrong value');
// }

// const userName1 = 'John';
// const userAge1 = 25;

// if(userName1 === 'peter' && userAge1 === 25){
//     console.log('Hello, John!');
// } else {
//     console.log('One value is wrong');
// }

// Switch
// Dice values 1-6

// const dice = 6;

// switch (dice) {
    // case 1:
    //     console.log('You got one');
    //     break;
    // case 2:
    //     console.log('You got two');
    //     break;
    // case 3:
    //     console.log('You got three');
    //     break;
    // case 4:
    //     console.log('You got four');
    //     break;
    // case 5:
    //     console.log('You got five');
    //     break;
//     case 6:
//         console.log('You got six');
//         break;
//     default:
//         console.log('You did not roll the dice');
// }


// else if
// if(dice === 1){
//     console.log('You got one!'); 
// } else if(dice === 2){
//     console.log('You got two!');
// } else {
//     console.log('You did not roll the dice');
// } 

// All if
// if(dice === 1){
//     console.log('You got one!');
// }
// if(dice === 2){
//     console.log('You got two!');
// }
// if(dice < 1 || dice > 6){
//     console.log('You did not roll the dice');
// }


// for loop

// for(i = 0; i < 10; i++) {
//     console.log('The number is ' + i);
// }

// While loop
// let amount = 10;
// while(amount > 0) {
//     console.log('I am having ' + amount + ' dollars and I decided to go on trip.');
//     amount--;
// }

// do while loop
// let amount = 0;
// do {
//     console.log('You have ' + amount + ' dollars.')
//     amount++;
// } while(amount < 10);

// function, return, if, arrays, for loop

// const gas = [20, 40, 100, 30];
// const food = [10, 40, 50];

// function calculateTotal(arr) {
//     let total = 0;
//     for (let i = 0; i < arr.length; i++) {
//         total += arr[i];
//     }
//     return total;
// }

// const gasTotal = calculateTotal(gas);
// const foodTotal = calculateTotal(food);
// const randomTotal = calculateTotal([200, 300, 400]);

// console.log({
//     gas:gasTotal,
//     food:foodTotal,
//     random:randomTotal,
// });


// Primitive and non-primitive data SVGUnitTypes

// const number = 1;
// let number2 = number;
// number2 = 7;
// console.log(`The first value is ${number}`);
// console.log(`The second value is ${number2}`);

// let person = {name: 'Bob'};
// let person2 = {...person};
// person2.name = 'susy';
// console.log(`The name of first person is ${person.name}`);
// console.log(`The name of second person is ${person2.name}`);

// Null & Undefined 
// let number = 20 + null // 20 + 0
// console.log(number);

// let number2 = 20 + undefined // 20 + undefined = NaN
// console.log(number2);

// function morning(name) {
//     return `Good morning ${name.toUpperCase()}`;
// }
// function afterNoon(name) {
//     return `Good afternoon ${name.toUpperCase()}`;
// }

// function greet(name, cb) {
//     const myName = 'John';
//     console.log(`${cb(name)}, my name is ${myName}`);
// }

// greet('bobo', morning);
// greet('peter', afterNoon);


// const numbers = [0, 1, 2, 3, 4];

// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }



// const people = [
//     { name: 'bob', age: 20, position: 'Content Creator'},
//     { name: 'peter', age: 22, position: 'Developer'},
//     { name: 'susan', age: 26, position: 'Designer'},
//     { name: 'anna', age: 28, position: 'Designer'},
// ];

// forEach array

// function showPerson(person) {
//     console.log(person.name.toUpperCase());
// }

// people.forEach(function(item) {
//     console.log(item);
// }); 

// Map array

// const ages = people.map(function (person) {
//     return person.age + 3;
// });

// const newPeople = people.map(function (person) {
//     return {
//         firstName: person.name.toUpperCase(),
//         oldAge: person.age + 3
//     };
// });

// const names = people.map(function (person) {
//     return `${person.name.toUpperCase()}`;
// });

// document.body.innerHTML = names.join('<br><br>');

// console.log(names);

// Filter array

// const youngPeople = people.filter(function(person){
//     return person.age <= 25
// });

// const developers = people.filter(function(person){
//     return person.position === 'Developer';
// })

// console.log(developers);

// const people = [
//     { id:1, name: 'bob', age: 20, position: 'Content Creator'},
//     { id:2, name: 'peter', age: 22, position: 'Developer'},
//     { id:3, name: 'susan', age: 26, position: 'Designer'},
//     { id:4, name: 'anna', age: 28, position: 'Designer'},
// ];


// Find array

// const names = ['bob', 'peter', 'susy'];
// console.log(
//     names.find(function (name) {
//         return name === 'bob';
//     })
// );

// const person = people.find(function (person) {
//     return person.id === 3;
// });

// console.log(person.name);

// const person2 = people.filter(function (person) {
//     return person.id === 3;
// });

// console.log(person2[0   ].name);


// Reduce

// const people = [
//     { name: 'bob', age: 20, position: 'developer', id: 1, salary: 200 },
//     { name: 'peter', age: 22, position: 'seo', id: 2, salary: 300 },
//     { name: 'susan', age: 24, position: 'designer', id: 3, salary: 400 },
//     { name: 'anna', age: 26, position: 'architect', id: 4, salary: 500 }
// ];

// const total = people.reduce(function (acc, currItem) {
//     console.log(`total ${acc}`);
//     console.log(`current money  ${currItem.salary}`);
//     acc += currItem.salary;
//     return acc;
// }, 0);

// console.log(total);

// Math, Standard built-in objects - always available

// const number = 4.56789;
// const result = Math.floor(number);

// const number = 4.56789;
// const result = Math.ceil(number);

// const number = 4;
// const result = Math.sqrt(number);

// const result = Math.PI
// const result = Math.min(1,2,3,4);
// const result = Math.max(1,2,3,4);
// const result = Math.random();

// console.log(result);

// Date & Days
const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];
const date = new Date();
console.log(date);
const month = date.getMonth();
console.log(months[month]);

const day = date.getDay();
console.log(days[day]);

console.log(date.getDate());
console.log(date.getFullYear());

const sentence = `${days[day]}, ${date.getDate()} ${months[month]} ${date.getFullYear()}`;

console.log(sentence);
