/* const name="krishan kant" // its is a primitive string 


string constructor: The String constructor is a built-in function in JavaScript that allows you to create string objects. When you use the String constructor, it creates an object that wraps around a primitive string value. This object has properties and methods for working with strings, such as length, toUpperCase(), toLowerCase(), includes(), indexOf(), slice(), split(), replace(), and many more.

When you create a string using the String constructor, it is stored in heap memory because it is an object. In contrast, primitive strings are stored in stack memory. The String constructor allows you to create string objects that can have additional functionality beyond what primitive strings offer, but it is generally recommended to use primitive strings for most purposes in JavaScript due to their simplicity and performance benefits. 
const game= new String('cricket') // it is a string object created using the String constructor. It is not a primitive string, but rather an object that wraps around a primitive string value. The String constructor creates an object that has properties and methods for working with strings, while a primitive string is simply a sequence of characters without any additional functionality.
console.log(game) // Output: [String: 'cricket']
console.log(typeof game) // Output: object
console.log(game[0]) // Output: c
console.log(game.length) // Output: 7
console.log(game.toUpperCase()) // Output: CRICKET
console.log(game.toLowerCase()) // Output: cricket
console.log(game.includes('ick')) // Output: true
console.log(game.indexOf('c')) // Output: 0
console.log(game.slice(0, 3)) // Output: cricket
console.log(game.split('')) // Output: [ 'c', 'r', 'i', 'c', 'k', 'e', 't' ]
console.log(game.replace('cricket', 'football')) // Output: football

NOTE: it not Change the original string because strings are immutable in JavaScript. When you call a method like toUpperCase() or replace(), it returns a new string with the modifications, but the original string remains unchanged.
offcourse string store data in stack memory but when we create a string using String constructor then it is stored in heap memory because it is an object.


/*console.log('kk'.indexOf('k')) // op=0
console.log('kk'.lastIndexOf('k')) // op=1
*/
