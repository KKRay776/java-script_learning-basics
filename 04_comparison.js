// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);//op:false
console.log(null == 0);//op:false
console.log(null >= 0);//op:true

/*________________________________________________________________________________________________________________________________
                                                                                                                                
NOTE: when we compare null with a number, JavaScript will convert null to 0 before making the comparison.                     |
Therefore, null is considered equal to 0 when using the loose equality operator (==), but it is not considered greater than or 
less than 0 when using the greater than (>) or less than (<) operators.
 However, when using the greater than or equal to (>=) operator, null is considered greater than or equal to 0 because
  it is converted to 0 before the comparison. This can lead to unexpected results in comparisons involving null and numbers, 
  so it is important to be aware of how JavaScript handles type coercion in these cases.
________________________________________________________________________________________________________________________________*/
console.log(undefined == 0);//op:false
console.log(undefined > 0);//op:false
console.log(undefined < 0);//op:false

// === 

console.log("2" === 2);
// comparison always not give predictable output because of type coercion in java script. 
// when we compare two values of different types, JavaScript will try to convert one or both of the values to a common type before making the comparison. 
// This can lead to unexpected results, especially when comparing values that are not of the same type. For example, 
// when we compare a string and a number, JavaScript will convert the string to a number before making the comparison. 
// If the string cannot be converted to a valid number, it will be treated as NaN (Not-a-Number), 
// which can lead to unexpected results in comparisons. Therefore, it is important to be aware of type coercion and use strict equality (===) when comparing values of different types to avoid unexpected results.