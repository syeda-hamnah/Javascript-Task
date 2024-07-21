//SMIT Batch 11 – Code Jam
//Q1
//Create a function that reverses an array. Start small here and work your way up. Begin with an array of 5 numbers, and then try your program with a larger array to verify its success.
function reverseArray() {
    let reversedarray = [];
    let arr = ['Falcon', 'Steve', 'Tony', 'Peter', 'Natasha', 'Loki'];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedarray.push(arr[i]);  
    }
    return reversedarray;
}
console.log(reverseArray());



//Q2
//Create a function that filters out negative numbers. In this challenge, you’ll have a function that takes an array as an input and returns an array. But if all goes according to plan, it’ll remove the negative numbers. This is another example of a task that’ll be useful when combing through data and looking for clever ways to eliminate “bad data.”
function filterArray() {
    let arr = [-1, 2, 3, 4, 5, -6, 7, 8, 9, 10];
    let filteredarray = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            filteredarray.push(arr[i]);
        }
    }
    return filteredarray;
}
console.log(filterArray());



//Q3
//Return the number of vowels in a string. Create a function that’ll return an integer of the number of vowels found in a string.
function vowelCount() {
    let str = "and i am iron man";
    let vowels = ["a", "e", "i", "o", "u"];
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
}
console.log(vowelCount());



//Q4
//Check if a string is a palindrome. A palindrome is a word, phrase, number, or other sequences of characters that reads the same forward and backward (like the words “kayak,” “mom,” “radar,” and “refer”). Create a function that returns a Boolean indicating whether the string is a palindrome. 
function Palindrome() {
    let input = prompt('Enter a Palindrome: ');
    let str = "";
    for (let i = input.length - 1; i >= 0; i--) {
        str += input[i];
    }
    return str === input;
}
console.log(Palindrome());



//Q5
//Write a JavaScript program to check whether two given integer values are in the range 50 - 99 (inclusive). Return true if either of them falls within the range.
function checkrange() {
    let num1 = prompt('Enter a number to check Range: ');
    let num2 = prompt('Enter another number to check range: ');
    if (num1 >= 50 && num1 <= 99 || num2 >= 50 && num2 <= 99) {
        return true;
    }
    else {
        return false;
    }
}
console.log(checkrange());



//Q6
//Write a JavaScript program to get the minimum value of an array
function min() {
    let arr = [17, 55, 67, 8, 33, 90];
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
console.log(min());



//Q7
//Write a JavaScript program to create an updated string of 4 copies of the last 3 characters of a given original string. The string length must be 3 and above.
function copystring() {
    let str = prompt('Enter a string to copy: ');
    if (str.length < 3) {
        return 'String length must be 3 and above';
    }
    else {
        console.log(str.slice(-3));
        console.log(str.slice(-3));
        console.log(str.slice(-3));
    }
}
console.log(copystring());



//Q8
// Write a JavaScript program to find the types of a given angle.
// Acute angle: An angle between 0 and 90 degrees.
// Right angle: An 90 degree angle.
// Obtuse angle: An angle between 90 and 180 degrees.
// Straight angle: A 180 degree angle.
function angle() {
    let angle = prompt('Enter an angle: ');
    if (angle >= 0 && angle <= 90) {
        return angle + ' is Acute angle: An angle between 0 and 90 degrees.';
    }
    else if (angle == 90) {
        return angle + ' is Right angle: An 90 degree angle.';
    }
    else if (angle >= 90 && angle <= 180) {
        return angle + ' is Obtuse angle: An angle between 90 and 180 degrees.';
    }
    else if (angle == 180) {
        return angle + ' is Straight angle: A 180 degree angle.';
    }
    else {
        return angle + ' is Invalid angle';
    }
}
console.log(angle());



// Q9
// Write a JavaScript program to find the smallest round number not less than a given value. 
function roundnumber() {
    let num = prompt('Enter a number to Round: ');
    if (num % 10 == 0) {
        return 'The number is already a round number';
    }
    else {
        return Math.ceil(num);
    }
}
console.log(roundnumber());



//Q10
// Write a JavaScript program to find the index of an array item in a for loop.
function index() {
    let heros = ['Thor', 'Spiderman', 'Captain America', 'Iron Man'];
    let index = prompt('Enter a hero name to find index (Thor, Spiderman, Captain America, Iron Man):  ');
    for (let i = 0; i < heros.length; i++) {
        if (heros[i] == index) {
            return 'The index of the hero is: ' + i;
        }
    }
}
console.log(index());







































