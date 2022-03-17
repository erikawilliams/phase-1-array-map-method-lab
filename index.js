const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];
const practiceString = "This is a practice string."

const titleCased = () => {
  const newTut = tutorials.map(caseFunc)
  console.log(newTut)
  return newTut
}

function caseFunc(element){
    return (element.charAt(0).toUpperCase() +element.slice(1))
  }

titleCased()

// titleCased = takes in no arguments, outputs a new array with proper casing
// map tutorials to apply casing function  = input tutorials array and case function, output new final array
// define case function: for each element:
//      split by space, capitalize first letter, re-join, add to new object

