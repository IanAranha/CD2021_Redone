
{/* Write a function that returns an array with all the numbers from 1 to 255. */}
function first_array(){
    console.log("hello world");
    first_array=[];
    for(var i=1; i < 256 ; i++){
        first_array.push(i);
    }
    return first_array;
}
// console.log(first_array());


// Write a function that would get the sum of all the even numbers from 1 to 1000.  You may use a modulus operator for this exercise.

function sumOfEvenNumbers_a(){
    var sum = 0;
    for(var i = 1; i < 1001; i++){
        if( i % 2 == 0){
            sum = sum + i
        }
    }
    return sum
}


function sumOfEvenNumbers_b(){
    var sum = 0;
    for(var i = 2; i < 1001; i+=2){
        sum = sum + i
    }
    return sum
}

// console.log(sumOfEvenNumbers_a())
// console.log(sumOfEvenNumbers_b())

//Write a function that returns the sum of all the odd numbers from 1 to 5000.
function sumOfOddNumbers_a(){
    var sum = 0;
    for(var i = 0 ; i < 5000; i++){
        if(i % 2 != 0){
            sum = sum + i
        }
    }
    return sum
}

function sumOfOddNumbers_b(){
    var sum = 0;
    for(var i = 1; i < 5000; i+=2){
        sum = sum + i;
    }
    return sum;
}
//console.log(sumOfOddNumbers_a())
//console.log(sumOfOddNumbers_b())

// Write a function that returns the sum of all the values within an array.
function sumOfArrayItems(arr){
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        sum = sum + arr[i]
    }
    return sum;
}

// console.log(sumOfArrayItems([1,2,5]))
// console.log(sumOfArrayItems([-5,2,5,12]))

// Given an array with multiple values, write a function that returns the maximum number in the array.
function maximumNumber(arr){
    var max = arr[0]
    for(var i=1; i<arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}

// console.log(maximumNumber([-3,3,5,7] ))

// Given an array with multiple values, write a function that returns the average of the values in the array.
function averageOfAnArray(arr){
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    return (sum/arr.length)
}

// console.log(averageOfAnArray([1,3,5,7,20]))

// Write a function that would return an array of all the odd numbers between 1 to 50.
function arrayOfOddNumbers(){
    var arr=[]
    for(var i=1; i<51; i+=2){
        arr.push(i)
    }
    return arr;
}
// console.log(arrayOfOddNumbers())

// Given value of Y, write a function that takes an array and returns the number of values that are greater than Y.
function greaterThanY(y, arr){
    var counter = 0;
    for(var i=0; i < arr.length; i++){
        if(arr[i] > y){
            counter++
        }
    }
    return counter;
}
// console.log(greaterThanY(3,[1,3,5,7]))
//
// Given an array with multiple values, write a function that replaces each value in the array with the value squared by itself.

function squares(arr){
    for(var i = 0 ; i < arr.length; i++){
        arr[i] = arr[i] * arr[i];
    }
    return arr
}

// console.log(squares([1,2,3,4,5,6]))
// console.log(squares([1,5,10,-2]))

// Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0.

function noNegatives(arr){
    for(var i = 0 ; i < arr.length; i++){
        if(arr[i] < 0){
            arr[i] = 0
        }
    }
    return arr
}

// console.log(noNegatives([1,2,-3,4,5,6,-7,-4,3]))

// Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array

function maxMinAvg(arr){
    var sum = 0
    var max = arr[0]
    var min = arr[0]
    var result=[]
    for(var i=0; i < arr.length; i++){
        var sum = 0
        var max = arr[i]
        var min = arr[i]
        var result=[]
        for (var i=0; i < arr.length; i++){
            sum = sum + arr[i];
            if(arr[i] > max){
                max = arr[i]
            }
            if(arr[i] < min){
                min = arr[i]
            }
        
        }
    result.push(max, min, sum/arr.length);
    return result
    }
}

// console.log(maxMinAvg([1,5,10,-2]))

// Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2

function swapValues(arr){
    var temp = arr[0]
    arr[0] = arr[arr.length-1]
    arr[arr.length-1] = temp;
    return arr
}

// console.log(swapValues([1,5,10,-2] ))

// Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'

function numberToString(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            arr[i] = "Dojo"
        }
    }
    return arr;
}

console.log(numberToString([-1,-3,2]))