/*
JavaScript változó 8 típusú lehet
7 primitíve és 1 object
Primitíve:
    - Numeric: Number, BigInt
    - Non-Numeric: string, boolen (true, false), null, undefined, symbol
    Javascript numbers are always double (64-bit floating point).
    typeof - megkapjuk a típust
    The typeof operator returns object for null.
    In JavaScript, a variable or an expression can obtain the datatype null in several ways. 

    

    The typeof operator returns object for null.

    This is a historical quirk in JavaScript and does not indicate that null is an object.

    The strict equality operator (===) compares both the value and the type of the operands.

    It returns true only if both the operands values and types are null.

    The loose equality operator (==) also returns true for a null value, but it also returns true if the value is undefined.

    Using == is not recommended when checking for null.
*/ 

// Number
let length = 16; //
let weight = 7.5; 
let wDecimal = 16.00 //with decimal

// BigInt All JavaScript numbers are stored in a 64-bit floating-point format.
let a = 1234567890123456789012345n;
let b = BigInt(1234567890123456789012345)
// Strings
let color = "Yellow";
let lastName = "Johnson";

// Boolean
let c = true;
let d = false;

// Undefined
let e;
let f;

// Null
let g = null;
let h = null;

// Symbol
const x = Symbol();
const y = Symbol();


// Using double quotes:
let carName1 = "Volvo XC60";

// Using single quotes:
let carName2 = 'Volvo XC60';

//You can use quotes inside a string, as long as they don't match the quotes surrounding the string:

// Single quote inside double quotes:
let answer1 = "It's alright";

// Single quotes inside double quotes:
let answer2 = "He is called 'Johnny'";

// Double quotes inside single quotes:
let answer3 = 'He is called "Johnny"';

//
let i = 123e5;    // 12300000
let j = 123e-5;   // 0.00123 
