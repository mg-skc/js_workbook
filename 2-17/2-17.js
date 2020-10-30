"use strict"

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}


ask(
  "Do you agree?",
()=> { alert("You agreed."); },
()=> { alert("You canceled the execution."); }
);












//task
/*function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}

function checkAge(age){
  return (age>18) ? true|| confirm("Did parents allow you?")
}

function checkAge(age)  
return (age>18) || confirm("Did parents allow you?")
*/

/*
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Did parents allow you?');
  }
}
*/
/*
function min(a,b) {
 a=3;
 b=4;
  if (a>b){
    return b;}
    else {return a;}
  }
alert("The result is:" + min());
*/

/*
let x;
let n;
let z;

function pow(x,n) {
  x= prompt ("what number would you like?");
  n= prompt("To what power to multiply?");
  z=(x**n);
  if (Number.isInteger(z)){
 alert("The result is:" + (z));
  } else {alert("Try again");}
  }
  if (pow(x,n));

*/





//let age = prompt('How old are you?', 18);





/*
task 9
let whosThere = prompt("Who's there!")

if (whosThere = "Other") {
  alert("I don't know you")
} else if (whosThere="Admin"){
  prompt("Password?")
};
*/

/*let numInput = prompt("Input a number!");

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
*/




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

/*
let login = prompt("Role at company?");

let message = (login=="Employee") ? 'Hello' :
  (login=="Director") ? 'Greetings!' :
  (login=="") ? 'No login!' :
  '';

alert( message );
*/


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

