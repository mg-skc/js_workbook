"use strict"
/*
Is it possible to create functions A and B such as new A()==new B()?

function A() { ... }
function B() { ... }

let a = new A;
let b = new B;

alert( a == b ); // true
*/



//Task 1: After looking at the solution - I did not get this correct...I was going down the wrong path.
/*
function A(){
this.a==1;

}

function B(){
this.b==1;

}


A = new A();
B = new B();

alert (new A.a);
alert (new B.b);
alert (new A===new B)
*/

//Task 2 - worked with help from your code the other day
/*
function Calculator(){
  //this = {};
  //declaring the values to be collected and computed
  this.value1 = 0;
  this.value2 = 0; 

//this collects the values to compute
  this.read = function(){
    this.value1 = +prompt("Enter the first value", 0); 
    this.value2 = +prompt("Enter the second value", 0); 
  }
  //addition of values input
  this.sum = function(){
    return this.value1 + this.value2;
  }
  //multiplication of values input
  this.mul = function(){
    return this.value1 * this.value2; 
  }

}
//don't understand this
let calculator = new Calculator();
//run the data collection
calculator.read();
//share the results of the computations.
alert("Addition: "+ calculator.sum() );
alert("Multiplication: " + calculator.mul() );

*/

//Task 3
/*
Create a constructor function Accumulator(startingValue).

Object that it creates should:

Store the “current value” in the property value. The starting value is set to the argument of the constructor startingValue.
The read() method should use prompt to read a new number and add it to value.
In other words, the value property is the sum of all user-entered values with the initial value startingValue.

Here’s the demo of the code:

let accumulator = new Accumulator(1); // initial value 1

accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value

alert(accumulator.value); // shows the sum of these values
*/

function Accumulator(){
  this.startingValue=1;
  function read (){
    prompt("How much to add to starting value?",0);
    this.startingValue = this.add + this.startingValue;
    return this.startingValue;
  }
};
let accumulator = new Accumulator();

accumulator.read();
accumulator.read();
alert("Here's the new value: " & this.startingValue);


