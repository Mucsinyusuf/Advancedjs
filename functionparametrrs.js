// functions as parameters
function calculateForTwoNums(num1,num2,calculate){
    console.log(calculate(num1, num2));
    
}

function addNums(num1,num2){
    return num1+num2;
}

calculateForTwoNums(5, 10, addNums);


