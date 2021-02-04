//Countdown
//Create a function that accepts a number as an input. Return a new array that counts 
//down by one, from the number (as array’s ‘zeroth’ element) down to 0 (as the last element). 
//How long is this array?

function countDown(num){
    var arr=[];
    for (var i = num; i > 0; i--) {
        arr.push(i);
    }
    return arr;
}

// console.log (countDown(4));
// console.log (countDown(10));


//Print and Return
//Your function will receive an array with two numbers. Print the first value, and return the second

function printReturn(arr){
    console.log(arr[0]);
    return (arr[1]);
}

// console.log(printReturn([2,5]));

//First Plus Length

function firstPlusLength(arr){
    var sum = arr[0] + arr[arr.length-1];
    return (sum);
}

// console.log(firstPlusLength([1,2,3,4,5]));

//Values Greater than the Second

function greaterThanSecond(arr){
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > arr[1]){
            console.log (arr[i]);
            sum ++;
        }
    }
    return sum;
}

// console.log(greaterThanSecond([1,3,5,7,9,13]));

//This Length, That Value

function lengthValue(num1, num2){
    var arr=[];
    for (var i = 0; i < num1+1; i++) {
        if (num1 == num2){
            return console.log("Jinx!");
        }
        else{
            arr[i]= num2;
        }
    }
    return console.log(arr);
}

// lengthValue(2,4);
// lengthValue(2,2);

//Fit the first Value

function bestFit(arr){
    for (var i = 0; i < arr.length; i++){
        if (arr[0] > arr.length){
            console.log("Too Big!");
        }
        if (arr[0]<arr.length){
            console.log("Too Small!");
        }
        if (arr[0] == arr.length) {
            console.log("Just Right!")
        }
    }
}

// bestFit([1,2,3,4]);
// bestFit([10, 3, 4, 5]);
// bestFit([4,3,2,1]);

//Celsius to Fahrenheit

function cDegrees(celcius){
    var fahrenheit = celcius * 1.8000 + 32;
    return fahrenheit;
}

// console.log (cDegrees(200));
// console.log (cDegrees(0));
// console.log (cDegrees(100));
// console.log (cDegrees(37));
