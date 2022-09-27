// 1.
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)
// Output will be 'Tesla' because it is positional, and 'Tesla' is the first value in the array
console.log(otherRandomCar)
// Output will be 'Mercedes' because the comma skips whichever value is at the position of the comma.

// 2.
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name);
// This will throw a type-error because name is not able to be accessed outside of the object. It was used to assign its value to otherName, but name itself wasn't used.
console.log(otherName);

// 3.
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
// At first glance, this may appear to be reassigning a CONST. However, it is copying the value from the first CONTS into a new CONST. 
const { password: hashedPassword } = person;  
// Predict the output
console.log(password);
// This will output '12345'
console.log(hashedPassword);
// This will output '12345' but store it in a new CONST called 'hashedPassword'.

// 4.
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
// first is set to '2'
const [,,,second] = numbers;
// second is set to '5'
const [,,,,,,,,third] = numbers;
// third is set to 2

// Predict the output
console.log(first == second);
// this will print "False"
console.log(first == third);
// this will print "True"

// 5.
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
// CONST key is set to 'value'
const { secondKey } = lastTest;
// CONST secondKey is set to the values of the array in the second key of the object.
const [ ,willThisWork] = secondKey;
// Predict the output
console.log(key);
// this prints 'value'
console.log(secondKey);
// this will print the array presented in brackets. '[1,5,1,8,3,3]'
console.log(secondKey[0]);
// this will print the first index of secondKey, which is '1'
console.log(willThisWork);
// this will work. It will set the variable 'willThisWork' to the second value of the array, which is '5'
