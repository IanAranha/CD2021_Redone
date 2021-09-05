// Given an array, write a function that changes all positive numbers in the array to the string "big". 
function bigChange(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            arr[i] = "Big"
        }
    }
    return arr
}
console.log(bigChange([1,2,-3,-7, 0, -8]))

//*******************************************************************************************************/
//*******************************************************************************************************/
//*******************************************************************************************************/

// Create a function that takes in an array of numbers.  The function should print the lowest value in the array, and return the highest value in the array.
function printLowReturnHigh(arr){
    var max = arr[0]
    var min = arr[0]
    for(var i=1;i<arr.length;i++){
        if(arr[i] > max){
            max = arr[i]
        }
        if(arr[i] < min){
            min = arr[i]
        }
    }
    console.log(min);
    return max
}

console.log(printLowReturnHigh([1,2,3,4,5]))
console.log(printLowReturnHigh([10,9,8,7,6]))

//*******************************************************************************************************/
//*******************************************************************************************************/
//*******************************************************************************************************/

// Build a function that takes in an array of numbers.  The function should print the second-to-last value in the array, and return the first odd value in the array.

function printOneReturnAnother(arr){
    console.log(arr[arr.length-2])
    for(var i=0; i < arr.length; i++){
        if(arr[i] % 2 != 0){
            return arr[i]
        }
        else {
            return ("No odd values detected")
        }
    }
}

console.log(printOneReturnAnother([1,2,3,4,5,6,7,8]))
console.log(printOneReturnAnother([2,4,6,8,10,12,14,16,18]))

//*******************************************************************************************************/
//*******************************************************************************************************/
//*******************************************************************************************************/

// Given an array (similar to saying 'takes in an array'), create a function that returns a new array where each value in the original array has been doubled
function double(arr){
    for(var i=0; i<arr.length; i++){
        arr[i] = arr[i] * 2
    }
    return arr
}

console.log(double([2,4,6,8]))

//*******************************************************************************************************/
//*******************************************************************************************************/
//*******************************************************************************************************/

// Given an array of numbers, create a function to replace the last value with the number of positive values found in the array. 

function countPositives(arr){
    var count = 0;
    for(var i = 0; i<arr.length; i++){
        if(arr[i] > 0){
            count+=1;
        }
    }
    arr[arr.length] = count;
    return arr;
}

console.log(countPositives([-1,-2,3,0,4,8,9,-10]))

//*******************************************************************************************************/
//*******************************************************************************************************/
//*******************************************************************************************************/

// Create a function that accepts an array.  Every time that array has three odd values in a row, print "That's odd!".  Every time the array has three evens in a row, print "Even more so!".
function callOuts(arr){
    for(var i = 0; i < arr.length-2; i++){
        if( arr[i] % 2 != 0 && arr[i+1] % 2 !=0 && arr[i+2] % 2 != 0){
            console.log("That's odd")
        } else if( arr[i] % 2 == 0 && arr[i+1] % 2  == 0 && arr[i+2] % 2 == 0){
            console.log("Even more so!")
        }
    }
}

console.log(callOuts([1,3,5]))
console.log(callOuts([2,4,6]))
console.log(callOuts([1,2,3,4,8,12,1,2,3,1,1,1]))

//*******************************************************************************************************/
//*******************************************************************************************************/
//*******************************************************************************************************/

// Given an array of numbers arr, add 1 to every other element, specifically those whose index is odd (arr[1], arr[3], arr[5], etc).  Afterward, console.log each array value and return arr.
function addOneToOdds(arr){
    for(var i=1; i<arr.length; i+=2){
        arr[i] = arr[i]+1
    }
    for(var i=0; i<arr.length; i+=1){
        console.log(arr[i])
    }
    return arr
}

console.log(addOneToOdds([1,2,3,4,5,6,7]))

//*******************************************************************************************************/
//*******************************************************************************************************/
//*******************************************************************************************************/

// You are passed an array containing strings.  Working within that same array, replace each string with a number - the length of the string at the previous array index - and return the array.  For example, previousLengths(["hello", "dojo", "awesome"]) should return ["hello", 5, 4]. Hint: Can for loops only go forward?
function previousLengths(arr){
    for(var i=arr.length-1; i>0;i--){
        arr[i] = arr[i-1].length
    }
    return arr
}

console.log(previousLengths(["hello", "dojo", "awesome"]))

//*******************************************************************************************************/
//*******************************************************************************************************/
//*******************************************************************************************************/

// Build a function that accepts an array. Return a new array with all the values of the original, but add 7 to each. Do not alter the original array.
function addSeven(arr){
    var newArr=[]
    for(var i =0; i < arr.length; i++){
        newArr.push(arr[i] + 7)
    }
    return newArr
}

console.log(addSeven([1,2,3,4,5]))

//*******************************************************************************************************/
//*******************************************************************************************************/
//*******************************************************************************************************/

// Given an array, write a function that reverses its values, in-place.
function reverseArray(arr){
    var temp;
    var mid = arr.length/2;
    var i = 0;
    while(i < mid){
        temp = arr[i]
        arr[i] = arr[arr.length-1-i]
        arr[arr.length-1-i] = temp;
        i++
    }
    return arr;
}
console.log(reverseArray([1,2,3,4,5,6,7,8,9,10,11]))
console.log(reverseArray([11,10,9,8,7,6]))

//*******************************************************************************************************/
//*******************************************************************************************************/
//*******************************************************************************************************/

// Given an array, create and return a new one containing all the values of the original array, but make them all negative (negative values should remain negative). 
function makeAllItemsNegative(arr){
    var newArr = []
    for(var i = 0 ;  i < arr.length; i++){
        if(arr[i] < 0){
            newArr.push(arr[i])
        } else {
            newArr.push(arr[i] * -1)
        }
    }
    return newArr
}

console.log(makeAllItemsNegative([1,2,-3,4,-5,-6]))

//*******************************************************************************************************/
//*******************************************************************************************************/
//*******************************************************************************************************/

// Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food".  If no array values are "food", then print "I'm hungry" once.
function yummy(arr){
    var counter = 0;
    for(var i=0; i < arr.length; i++){
        if(arr[i] == "food"){
            console.log("yummy")
        } else {
            counter=counter+1
        }
        if(counter == arr.length){
            console.log("I'm hungry")
        }
    }
}

console.log(yummy([1,2,3,4,5]))
console.log(yummy([1,2,"food",4,5,6,7,6,"food"]))
console.log(yummy([1,"plate",3,4,"dessert"]))

//*******************************************************************************************************/
//*******************************************************************************************************/
//*******************************************************************************************************/

// Given an array, swap the first and last values, third and third-to-last values, etc.
function swapToCenter(arr){
    var temp;
    var mid = arr.length/2;
    var i = 0;
    while(i < mid){
        temp = arr[i]
        arr[i] = arr[arr.length-1-i]
        arr[arr.length-1-i] = temp;
        i=i+2
    }
    return arr
}

console.log(swapToCenter([1,2,3,4,5,6,7,8,9,10]))

//*******************************************************************************************************/
//*******************************************************************************************************/
//*******************************************************************************************************/

// Given an array arr and a number num, multiply all values in the array arr by the number num, and return the changed array arr.
function scaleArray(arr, num){
    for(var i=0; i<arr.length; i++){
        arr[i] = arr[i]*num
    }
    return arr
}

console.log(scaleArray([1,3,5,7,9,11,13,15,17], 2))

