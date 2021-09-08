//Implement function sigma(num) that, given a number, returns the sum of all positive integers up to the given number (inclusive).  Ex: sigma(3) = 6 (or 1+2+3); sigma(5) = 15 (or 1+2+3+4+5).

function sigma(num){
    var sum = 0;
    for(var i = 0; i <=num; i++){
        sum = sum + i;
    }
    return sum
}

// console.log(sigma(3))
// console.log(sigma(5))
// console.log(sigma(100))
// console.log(sigma(5500))

//************************************************************************************************************************************
//*************************************************************************************************************************************

// Write a function factorial(num) that, given a number, returns the product (multiplication) of all positive integers from 1 up to the given number (inclusive).
function factorial(num){
    var product = 1;
    for(var i = 1; i <=num; i++){
        product = product * i;
    }
    return product
}

// console.log(factorial(3))
// console.log(factorial(5))
// console.log(factorial(100))
// console.log(factorial(5500))


//************************************************************************************************************************************
//*************************************************************************************************************************************

// Fibonacci - Create a function to generate Fibonacci numbers. 

function Fibonacci(num){
    var num1=0
    var num2=1;
    var sum = 0
   
    if(num==1){
        return 0;
    }
    if(num==2 || num==3){
        return 1;
    }
    var i = 3;
    while(i <= num){
        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
        i++
    }
    return sum;
}

console.log(Fibonacci(1))
console.log(Fibonacci(2))
console.log(Fibonacci(3))
console.log(Fibonacci(4))
console.log(Fibonacci(5))
console.log(Fibonacci(6))
console.log(Fibonacci(7))
console.log(Fibonacci(8))
console.log(Fibonacci(20))

//************************************************************************************************************************************
//*************************************************************************************************************************************


// Return the second-to-last element of an array. Given [42, true, 4, "Liam", 7], return "Liam".  If array is too short, return null.
function returnSecondToLastElement(arr){
    if (arr.length < 2){
        return null
    } else {
        return arr[arr.length-2]
    }
}

console.log(returnSecondToLastElement([]))
console.log(returnSecondToLastElement(["a"]))
console.log(returnSecondToLastElement(["Annmarie", "Tina", "Ian", "Andrew", "Mario"]))
console.log(returnSecondToLastElement(["Ashwin", "Rohini", "Aditi", "Rebecca", "Rachel", "Ryan", "Nina", "Varun", "Luke"]))

//************************************************************************************************************************************
//***********************************************************************************************************************************

//return the element that is N-from-array's-end.  Given ([5,2,3,6,4,9,7],3), return 4.  If the array is too short, return null

function nthToLast(arr, n){
    if(arr.length-n < 0){
        return null
    }
    var index = arr.length-n
    return arr[index]
}

console.log(nthToLast([5,2,3,6,4,9,7],3))
console.log(nthToLast(["A", "R", "A2", "R1", "R2", "R3", "N", "V", "L"], 5))

//************************************************************************************************************************************
//***********************************************************************************************************************************
// Return the second-largest element of an array. Given [42,1,4,3.14,7], return 7.  If the array is too short, return null.

function secondLargest(arr){
    if(arr.length < 2){
        return null
    }
    
}
//************************************************************************************************************************************
//***********************************************************************************************************************************
