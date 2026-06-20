// Data Types:a variable is a named storage location in memory that holds data, while a data type defines the kind of data that variable can store and the operations allowed on it. Together, they ensure that programs handle data correctly and efficiently.


/* in java script there are two types of data types:
1.                                             
                                                  Data Types
                                                  /         \
                                                 /           \
                                 primitive data types         non-primitive data types
                                --------------------         ----------------------
         |     |     |     |     |        |      |               |        |        |
     string number boolean null undefined  symbol Bigint          object   array  function


1. Primitive data types(call by value): These are basic data types that represent a single value and are immutable (cannot be changed).
2. Non-primitive data types(call by reference): These are complex data types that can store collections of values and are mutable (can be changed). 


1. Primitive data types:
a. String: Represents a sequence of characters enclosed in single quotes, double quotes, or backticks. Example: 'Hello', "World", `JavaScript`.
console.log(typeof 'Hello'); // Output: string

b. Number: Represents numeric values, including integers and floating-point numbers. Example: 42, 3.14.
console.log(typeof 42); // Output: number   

c. Boolean: Represents a logical value that can be either true or false. Example: true, false.
console.log(typeof true); // Output: boolean    

d. Null: Represents the intentional absence of any object value. It is a primitive value that indicates "no value" or "empty". Example: null.
console.log(typeof null); // Output: object (this is a known quirk in JavaScript)

e. Undefined: Represents a variable that has been declared but has not yet been assigned a value. Example: let x; console.log(x); // Output: undefined
console.log(typeof undefined); // Output: undefined

f. Symbol: Represents a unique and immutable identifier, often used as keys for object properties. Example: const sym = Symbol('description');
// Two symbols with the same description
const s1 = Symbol("hello");
const s2 = Symbol("hello");

// Compare them
console.log(s1 === s2); // false
Symbol is a primitive data type where every symbol is unique, even if you give them the same description.

g. BigInt: Represents integers with arbitrary precision, allowing you to work with numbers larger than the maximum safe integer in JavaScript. Example: 9007199254740991n.
console.log(typeof 9007199254740991n); // Output: bigint    


2. Non-primitive data types:
a. Object: Represents a collection of key-value pairs, where keys are strings (or symbols) and values can be of any data type. Example: const obj = { name: 'Alice', age: 30 };
console.log(typeof obj); // Output: object

b. Array: Represents an ordered list of values, which can be of any data type. Arrays are a special type of object in JavaScript. Example: const arr = [1, 2, 3, 'four'];
console.log(typeof arr); // Output: object (arrays are technically objects in JavaScript)

c. Function: Represents a block of code that can be executed when called. Functions are also objects in JavaScript. Example: function greet() { return 'Hello'; }
console.log(typeof greet); // Output: function

*/
