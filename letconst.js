    // es6 is ALWAYS in 'use strict' mode
    // what is 'use strict'? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
    'use strict';
    // scenario 1: variable created without let, var, const are global
    /// and global variables are not allowed using 'use strict'
    globalVar = 'this is not allowed using strict mode';

    // scenario 2: variables defined in a function are 
    // out of scope OUTSIDE of the function
    // this is called function level scope
    function simpleFunction() {
      let varInFunction = 1;
    }
    simpleFunction();
    console.log(varInFunction); // undefined

// es6 block scope
// Scenario 3: variables from outside function will work within a function && block within the function
// Scenario 4: variables from inside a function will work within a contained block
// scenario 5: variables defined inside a block will NOT outside of block 

let outsideFunctionVar = 'a variable defined outside a function works inside a function';

function example() {
  let insideFunctionOutsideBlock = 'a variable defined inside a function works inside a block';
  console.log(outsideFunctionVar);
  
  for (var i = 0; i <= 1; i++) {
    let insideBlock = 'a variable defined inside a block DOES NOT work outside a block';
    console.log(outsideFunctionVar + ' plus inside a block too.');
    console.log(insideFunctionOutsideBlock + ' plus inside a block too.');
  }
  
  console.log(insideBlock); // undefined = reference error
}

example();
//scenario 6 - const can't be redefined..
const cantChangeThis = 'please don\'t change me';
cantChangeThis = 'can I please change this??'; // error
