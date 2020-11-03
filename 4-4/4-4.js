"use strict"
/*
let calculator = {
  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },

  read() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
*/







/*
Task 1:
function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert( user.ref.name); // What's the result?

ANSWER: it returns nothing - it's an error!
*/

//Task 2  
/*
let calculator = {
  read (){
    this.vala=  +prompt ("Input value of a",0);
    this.valb= +prompt ("Input value of b",0);
},

 sum() {
  return this.vala+this.valb;},
 mul (){
  return this.vala * this.valb;
 },
  

}
calculator.read();
alert(calculator.sum());
alert(calculator.mul());
*/

//Task 3

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  // shows the current step
  showStep: function() { 
    alert( this.step );
    return this;
  }
};
ladder.up().up().down().showStep();
