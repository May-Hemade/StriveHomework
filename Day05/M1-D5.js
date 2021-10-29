/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/
const area = function (l1, l2) {
  // console.log(`${l1* l2} is the area` )
  return l1 * l2;
};
console.log(`${area(2, 4)} is the Area`);

/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/
const crazySum = function (a, b) {
  if (a === b) {
    return (a + b) * 3;
  }

  return a + b;
};
console.log(crazySum(3, 8));

console.log(crazySum(2, 2));

/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/

const crazyDiff = function (x) {
  const diff = Math.abs(x - 19);

  if (x > 19) {
    return diff * 3;
  } else {
    return diff;
  }
};
console.log(crazyDiff(20));
/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/

const boundary = function (n) {
  // if ((n >= 20 && n<= 100) || n===400 ) {
  //     return true
  // }
  // return false

  return (n >= 20 && n <= 100) || n === 400;
};

console.log(boundary(100));

console.log(boundary(200));

console.log(boundary(400));

/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

const strivify = function (things) {
  if (things.startsWith("Strive")) {
    return things;
  }
  return "Strive" + things;
};
console.log(strivify("heyyy"));
console.log(strivify("Strive hey "));

/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/
const check3and7 = function (y) {
  if (y % 3 === 0) {
    console.log("multi of 3");
  }
   if (y % 7 === 0) {
    console.log("multi of 7");
  }
}
check3and7 (3)
check3and7 (8)
check3and7 (7)
check3and7 (21) 

/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/
const reverseString = function (input) {
    let inputSplit = input.split("")
    let reverseInput = inputSplit.reverse()
    let newInput  = reverseInput.join("")
return newInput

}

console.log(reverseString ("hellooo"))

/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/

const upperFirst = function (input) {
    let words = input.split(" ")
    for (let i=0; i<words.length; i++ ) {
        words[i] = capitalizeWord(words[i])
    }
    return words.join(" ")
 }

 const capitalizeWord =  function (word) {
     return word[0].toUpperCase() + word.slice(1)
 }

 console.log(upperFirst("i am studying to be a full stack developer"))

/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/

const cutString = function(input) {
    let result = input.slice(1)
    let resultArr = result.split("")
    resultArr.pop()
    return resultArr.join("")
}

console.log(cutString("hope"))

/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

const giveMeRandom = function(n) {
    let result = []
    for (let i = 0; i< n; i++) {
        result.push(getRandomInt(0, 10))
    }
    return result
}

const getRandomInt = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(giveMeRandom(7))

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/
