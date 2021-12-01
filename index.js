//Preliminaries:
//Write a for loop that prints to the console the numbers 0 through 9.
for ( var i = 0; i < 10; i ++) {
    console.log(i)}
//Write a for loop that prints to the console 9 through 0.
for ( var i = 9; i > -1; i--) {
    console.log(i)
}
//Write a for loop that prints these fruits to the console.

var fruit = ["banana", "orange", "apple", "kiwi"]
for (var i = 0; i < fruit.length; i ++) {
    console.log(fruit)
}

//Bronze Medal:
//Write a for loop that will push the numbers 0 through 9 to an array.
var array = [];
for (var i = 0; i < 10; i ++) {
    array.push(i);
    console.log(array[i])
}
//Write a for loop that prints to the console only even numbers 0 through 100.
for (var i = 0; i < 101; i += 2) {
    console.log(i)
}
//Write a for loop that will push every other fruit to an array.
var bronzeFruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
for (var  i = 0; i < bronzeFruit.length; i+=2) {
    bronzeFruit.push(i);
    console.log(bronzeFruit[i])
}

//Silver Medal:
//Write a loop that will print out all the names of the people of the people array
const peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
    ]
for (var i = 0; i < peopleArray.length; i++) {
    console.log(peopleArray[i].name)
}
//Write a loop that pushes the names into a names array, and the occupations into an occupations array.
for (var i = 0; i < peopleArray.length; i++) {
    console.log(peopleArray[i].occupation)}
//Write a loop that pushes every other name to an array starting with the first person, in this case "Harrison Ford", and every other occupation to another array starting with, in this case, "Singer".
for (var i = 0; i < peopleArray.length; i+=2) {
    console.log(peopleArray[i].name)}

for (var i = 1; i < peopleArray.length; i+=2) {
     console.log(peopleArray[i].occupation)}
     
//Gold Medal:




