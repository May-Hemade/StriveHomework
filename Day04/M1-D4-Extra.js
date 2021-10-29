// Additional assignments for Day 4

/* EXTRA 1
 Write a piece of code for reverting an array.
 es:
 [1, 3, 5] ==> [5, 3, 1]
*/

let numbers = [
    3, 4, 5, 9, 12, 8,7
]
let reversedNumbers = numbers.reverse
console.log(numbers)

/* EXTRA 2
 Write a piece of code for getting the maximum numerical value from an array.
*/
let max = -Infinity
for (let number of numbers) {
    if (number > max) {
        max = number
    }
}
console.log(`the maximum is  ${max}`) 



/* EXTRA 3
 Write a piece of code for getting the minimum numerical value from an array.
*/
let min = Infinity
for (let number of numbers) {
    if (number < min) {
        min = number
    }
}
console.log(`the minimum is  ${min}`) 


/* WRITE YOUR ANSWER HERE */

/* EXTRA 4
 Write a piece of code for getting only even numerical values from an array.
*/

let mix= [2, 35, 40, 33, "number", 90, "cat"]
let evenNumbers = []
for (let item1 of mix) {
    if (typeof item1=== "number" && item1 % 2 === 0) {
        //console.log(`hey i am mix${item1}`)
        evenNumbers.push(item1)
    }
}
console.log(evenNumbers)

/* EXTRA 5
 Write a piece of code for deleting only even entries from an array.
*/

// for (let i=0; i<=numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//        numbers.splice(i,1)
//        i--;
//     }
// } 
let result = []
for (let i=0; i<=numbers.length; i++) {
    if (numbers[i] % 2 === 1) {
       result.push(numbers[i])
    }
} 

console.log(`heyy ${result}`)

/* EXTRA 6
 Write a piece of code for removing all the vowels from a string.
*/
// var strings = ["joy", "guitar", "flute", "double bass",
//                "xylophone","piano"];
// string = strings.map(x=>x.replace( /[aeiou]/g, '' ));
// console.log(string);
let word ="superkalifradgylisticxpialidoshes"

let letters= Array.from(word)
console.log(letters)

// for (let i=0; i<letters.length; i++ ){
//     if (letters [i]=== "a"
//     || letters [i]=== "e"
//     || letters [i]=== "u"
//     ||letters [i]=== "i"
//     ||letters [i]=== "o"
//     ||letters [i]=== "y") { 
//        letters.splice(i,1)
//        i--
//     }
// }
// console.log(letters)

let i = 0 
while (i<letters.length){
    if ( letters [i]=== "a"
        || letters [i]=== "e"
        || letters [i]=== "u"
        ||letters [i]=== "i"
        ||letters [i]=== "o"
        ||letters [i]=== "y" ){ 
            letters.splice(i,1)
            
        } else { i++}
        
       
} 
console.log(letters)



/* EXTRA 7
 Write a piece of code for increasing all the numerical values in a array by 1.
*/
 
 for ( let i=0; i<numbers.length; i++ ) {
    numbers[i]++
 } 
 
 console.log(numbers)
 
/* EXTRA 8
 Replace all the strings contained in an array with their length.
 es.: ["strive", "is", "great"] => [6, 2, 5]
*/

 let replace = [ "strive", "is", "great"]
// replace[0]="strive".length
// replace[1]="is".length
// replace[2]="great".length
// console.log(replace)

for (let i=0; i < replace.length; i++) {
    replace[i]=replace[i].length
}
console.log(replace)

// for( let item of replace) {
//     item = item.length
// }
// console.log(replace)

/* WHEN YOU ARE FINISHED
 Upload the .js file on Eduflow before 5PM CET. In the next days we'll also learn how to use GIT!
*/
