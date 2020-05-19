'use strict'

alert('Hello!');

// Operators

var n01 = 7;
var n02 = 15;
var operation = n01 + n02;
/* WRONG: operación = n01 + n02 */

console.log('The Result is: ' + operation);

// Data Types

var string01 = "this is 'a' string and"; // String
var string02 = 'this is "another" string'; // String
var string03 = `OMG 'another'  "string" `; // String
/* WRONG: string01 = "this is "a" string " */

var int01 = 502; // Int
var int02 = 147612; // Int
var int03  = 12481210; // Int

var boolean01 = true; // Bool
var boolean02 = false; // Bool

var float01 = 12.84444; // Float
var float02 = 4.121416; // Float

var array = ["string", 127, 14.666666, true, false, 'another', 87, false]; // Array

var false_number = "32"; // String Number
var false_float = "11.7777777"; // String Float

// Functions

Number();
parseInt();
parseFloat();
String();

console.log(false_number + int01); // Append
console.log(Number(false_number) + int01); // Operation

console.log(parseInt(float01)); // Float to Int
console.log(parseInt(float02)); // Float to Int

console.log(parseFloat(false_float)); // Text to Float
console.log(String(float01) + int01); // Number to string and Append

/*  This -> console.log(String(float01) + int01); 
and This -> console.log(String(float01 + int01));
are differents.

*/
