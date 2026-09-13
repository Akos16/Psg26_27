/*
Template Strings use back-ticks (``) rather than the quotes ("") to define a string:
*/ 
let text = `Hello World!`;

/*
Template Strings allow both single and double quotes inside a string:
*/
let text1 = `He's often called "Johnny"`;

/*
Multiline strings
Template Strings allow multiline strings:
*/

let text2 =
`The quick
brown fox
jumps over
the lazy dog`;

/*
Interpolation

Template Strings allow variables in strings.

Template strings provide an easy way to interpolate variables in strings.

${...} 
*/

let firstName = "John";
let lastName = "Doe";

let text3 = `Welcome ${firstName}, ${lastName}!`;

/*
Template Strings allow interpolation of expressions in strings:
*/

let price = 10;
let VAT = 0.25;

let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;

/*
Html templates
*/

let header = "Template Strings";
let tags = ["template strings", "javascript", "es6"];

let html = `<h2>${header}</h2><ul>`;
for (const x of tags) {
  html += `<li>${x}</li>`;
}

html += `</ul>`;