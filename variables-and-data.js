/*
 * Variables, Data Types, and Typing
 */

/*
*Variables
 */

let wordData;

wordData = "Word List";

console.log(wordData);

let subTotal = 100;
let tax = subTotal * 0.07;
let totalWithTax = tax + subTotal;

/*
*Data Types
 */
let obj = {
	key1: "value",
	key: 4,
	boolean: true,
	obj2: {
		obj2key1: "Internal Object Value",
	}
};

console.log (obj.obj2.obj2key1);

/*
*Typing Systems
 */
let var1 = 2;
let var2 = 5;
let result = var1 + var2;

console.log(result);

/*
*operators
 */
let add = 1 + 2;
let sub = 2 - 1;
let mult = 2*4;
let division = 4 / 2;
let mod = 5 % 2;

let string = "String 1 " + "String 2";

console.log(string);