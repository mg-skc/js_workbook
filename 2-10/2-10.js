"use strict"

let numInput = prompt("Input a number!");

if (numInput>0) {
    alert("1")
} else if (numInput<0){
    alert("-1");
} else {
  alert("0");
}




let answer = prompt("What's the “official” name of JavaScript?");

if (answer == "ECMAScript") {
    alert("Correct!")
} else {
    alert("You don't know? ECMAScript");
}




//  answer to task #3    let result = (a + b < 4) ? below:over;

/*let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}
*/


let login = prompt("Role at company?");

let message = (login=="Employee") ? 'Hello' :
  (login=="Director") ? 'Greetings!' :
  (login=="") ? 'No login!' :
  '';

alert( message );

/*
if (year == 2015) {
    alert( 'You guessed it right!' );
  } else {
    alert( 'How can you be so wrong?' ); // any value except 2015
  }
  */

//alert( `hello ${"name"}` );
/*
alert( `a's value is ${a}` ); // ?
alert( `b's value is ${b}` ); // ?
alert( `c's value is ${c}` ); // ?
alert( `d's value is ${d}` ); // ?
alert( `e's value is ${e}` ); // ?
alert( `f's value is ${f}` ); // ?
alert( `g's value is ${g}` ); // ?
*/

//alert("${1}"); 

