// JAVASCRIPT EXECUTION CONTEXT [JEC]:---

// code -> Global EC (its is stored in "this")
// code -> Function EC (its is stored in "this")
// code -> Eval EC (its is stored in "this")

let var1 = 10;
let var2 = 5;

function addTwo(num1, num2){
    let total = num1 + num2;
    return total;
}
let result = addNum(val1, val2);
let result2 = addNum(10,3);

// Code -> Memory Creation phase -> Execution phase

//  Global Execution -> this


//  Memory Phase :-
//  -> val1 = undefined
//  -> val2 = undefined
//  -> addnum = definition
//  -> result1 = undefined
//  -> result2 = undefined



//  Execution Phase :-
//  val1 = 10
//  val2 = 5
//  addNum -> it will create its new executional context...again it will have memory creation and execution phase and this will happen everytime when we will call a function...
//  result1 = 15