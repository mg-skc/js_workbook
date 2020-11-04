/* Create a constructor function Calculator that creates objects with 3 methods:

read() asks for two values using prompt and remembers them in object properties.
sum() returns the sum of these properties.
mul() returns the multiplication product of these properties.
For instance:

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() ); */

function Calculator(){
    //this = {};
    //declaring the values to be collected and computed
    this.value1 = 0;
    this.value2 = 0; 

  //this collects the values to compute
    this.read = function(){
      this.value1 = prompt("Enter the first value", 0); 
      this.value2 = prompt("Enter the second value", 0); 
    }
    //addition of values input
    this.sum = function(){
      return(this.value1 + this.value2);
    }
    //multiplication of values input
    this.mul = function(){
      return(this.value1 * this.value2); 
    }
  
  }
  //don't understand this
  let calculator = new Calculator();
  //run the data collection
  calculator.read();
  //share the results of the computations.
  console.log( calculator.sum() );
  console.log( calculator.mul() );
  
  HI GUYS