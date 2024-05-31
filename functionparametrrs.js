// functions as parameters
function calculateForTwoNums(num1,num2,calculate){
    console.log(calculate(num1, num2));
    
}

function addNums(num1,num2){
    return num1+num2;
}

calculateForTwoNums(5, 10, addNums);


// for each & map
// for each
const arr = [1,2,3,4,5];
// for each() method calls a function for each element in an array.
//it does not modify the original array
let sum = 0;
arr.forEach(e=>sum += e);
console.log(sum)


//Map()
// the map(). cretaes a new array from calling a fnction for eery 
// array element without changing the original array

const newArray=arr.map(e=>e*10);
console.log(newArray)


//Find()

let myArray = [1,2,3,4,5];
// the find () returns the value of the first element that passes a test.it does nt modify the original array

const passing = myArray.find(element=>element>2 && element<4);
console.log (passing)

//some()
//this checks if any element inside the array passes the test
const checking=myArray.some(e=>e>3);
console.log(checking);

// Every()
// this checks if all elements inside the array passes the test
const ifAll=myArray.every(e=>e>3);
console.log(ifAll);


// Filter & Reduce
// filter()
// this creates a newarray filled with elements that passes a test provided by a function.
//it does not modify the array
//The function we pass in can still have three parameters. 
//If we return true inside of the function that is run on an element, 
//that element gets returned to the new array,
// and if we return false it gets skipped. We can just return a whole condition instead.

const arrayNew=myArray.filter(e=>e>3);
console.log(arrayNew);

// Reduce
// The reduce() method executes a reducer function for array element. 
//It returns a single value: 
//the function's accumulated result. 
function reducer(summ, currentNumber){
    return summ += currentNumber;
}
const theSum=myArray.reduce(reducer,0);
console.log(theSum);