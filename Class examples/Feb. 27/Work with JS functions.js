Notes
function functionName (parameters){
    //what happens when we go here
}

//A function with no parameters that doesn't return a value
function showYear() {
    const today = new Date();
    alert("The year is " + today.getFullYear() );
}
//How to fall the function
showYear();

//The syntax for a function expression
const constantName = function(prarameters) {
    //statementst that run
    
}
//A function expression with 2 params that returns a value
const caluculatTax = function(subtotal, taxRate) {
    const tax = subtotal * taxRate;
    return tax.toFixed(2);
};

//How to call the function
const subotoal = 85.00;
const taxRate = 0.05;
const SalesTax = calculateTax(subtotal, taxRate);
alert(salesTax)