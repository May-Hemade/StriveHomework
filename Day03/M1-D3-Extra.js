// Additional assignments for Day 3

/* EXTRA 1
 Use a ternary operator to assign to a variable called gender the string values "male" or "female".
 The choice should be made based on the value of another variable called isMale.
*/

let isMale = true

let gender = isMale ? "male" : "female"

console.log (gender)


/* EXTRA 2
 Write a piece of code for checking if, given two integers, the value of one of them is 8 or if their addition or subtraction is equal to 8.
*/
let boys = 6
let girls = 2
let boysGirls = boys === 8 || girls === 8 || boys + girls === 8 || boys-girls === 8
console.log ( boysGirls)



/* EXTRA 3
 Create a variable and assign to it the concatenation of two strings.
*/
let firstName= "May"
let surname = "Hemade"
// firstName.concat(surname)


let fullName = firstName + " " + surname
console.log ( fullName)


/* EXTRA 4
 Create three variables and assign a numerical value to each one of them. 
 Using a conditional statement, write a piece of code for sorting their values from highest to lowest.
 Display the result in the console.
*/

/*let numberA = 25
let numberB = 5
let numberC = 34
  if ( numberA > numberB &&  numberA > numberC) {
    console.log (numberA)
} else if ( numberB > ) */

let numbers = [25, 5 ,9]
console.log(numbers)


/* WRITE YOUR ANSWER HERE */

/* EXTRA 5
 Write a piece of code for finding the average of two given integers.
*/
let gradeA = 80
let gradeB = 76

let average = (gradeA+gradeB)/2

console.log(average)



/* EXTRA 6
 Write a piece of code for finding the longest of two given strings.
*/

let string1 = "helloWorld"
let string2 = "goodbyeWorld"

if ( string1.length > string2.length) {
    console.log (string1 + "is longer")  
} else if ( string2.length > string1.length) {
    console.log (string2 + " is longer ")
    
}
/* WRITE YOUR ANSWER HERE */

/* EXTRA 7
 Write a piece of code for checking if a given value is a integer or not.
*/

let bees = 3.8
let isInteger = Number.isInteger (bees)
console.log (isInteger)


/* EXTRA 8
 Write a piece of code for calculating a certain percentage of a given number.
 (Ex.: the 20% of 400 is 80)
*/

let juice = 56
let drinks = 87

let percentage = juice*100/drinks
console.log (percentage)

/* EXTRA 9
 Write a piece of code for checking if a given number is even or odd.
*/

let shirts = 57

let isEven = shirts%2 === 0 
console.log (isEven)

/* WHEN YOU ARE FINISHED
 Upload the .js file on Eduflow before 5PM CET. In the next days we'll also learn how to use GIT!
*/
