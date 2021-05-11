function one255(){
    for (var i = 1; i < 256; i++){
        console.log(i);
    }
}

// one255();


//odd numbers

function oddNumbers(){
    for (var i = 1; i < 1000; i += 2){
        console.log (i);
    }
}

// oddNumbers();

//Print Sum

function printSum(){
    sum = 0;
    for (var i = 1; i < 5000; i += 2){
        sum = sum + i;
    }
    console.log (sum);
}

// printSum();

//iterate through array

function iterateArr(arr){
    for (var i =0; i < arr.length; i ++){
        console.log(arr[i]);
    }
}

// iterateArr([1,3,5,6,9,13]);

//maximum number

function maxNum(arr){
    var max = arr[0];
    for (var i = 1; i < arr.length; i ++){
        if (arr[i] > max){
            max = arr[i];
        }
    }
    console.log (max);
}

// maxNum([-3,17, 3,5,7]);

//find Average

function averageArr(arr){
    var sum = 0;
    var count = 0;
    for (var i = 0; i < arr.length; i ++){
        sum = sum + arr[i];
        count ++;
    }
    var avg = sum/count;
    console.log (avg);
}

// averageArr ([1,3,5,7,20]);

//Array with Odd Numbers

function oddArr(){
    arr = [];
    for (var i = 1; i <256; i += 2){
        arr.push(i);
    }
    console.log (arr);
}

// oddArr();

//greater than Y

function greaterThan(arr, y){
    var count = 0;
    for (var i = 0; i < arr.length; i ++){
        if (arr[i] > y){
            count++
        }
    }
    console.log (count);
}

// greaterThan([1,3,5,7], 3)

//Square the Values

function squareVals(arr){
    for (var i = 0; i < arr.length; i ++){
        arr[i] = arr[i]*arr[i];
    }
    console.log(arr);
}

// squareVals([1,5,10,-2]);

//Eliminate Neg Numbers

function noNegs(arr){
    for (var i = 0; i < arr.length; i ++){
        if (arr[i] < 0){
            arr[i] = 0;
        }
    }
    console.log(arr);
}

// noNegs([1,5,10,-2])

//Max, Min, Avg

function maxMinAvg(arr){
    var sum = arr[0];
    var count = 1;
    var max = arr[0];
    var min = arr[0];
    for (var i = 1; i < arr.length; i++){
        sum = sum + arr[i];
        count ++;
        if (arr[i] > max){
            max = arr[i];
        }
        if (arr[i] < min){
            min = arr[i];
        }
    }
    var avg = sum/count;
    console.log ("MAX: " + max);
    console.log ("MIN: " + min);
    console.log ("AVG: " + avg);
}

// maxMinAvg ([1,5,10,-2]);

//shifting the vals in the array

function shiftForward(arr){
    var temp = arr[arr.length-1];
    for (var i = arr.length-1; i > 0; i --){
        arr [i]= arr[i-1];
    }
    arr[0]=temp;
    console.log (arr);
}

// shiftForward([1,5,10,7,-2]);

//Number to String

function numToString(arr){
    for(var i = 0; i < arr.length; i ++){
        if (arr[i] < 0){
            arr[i] = "Dojo";
        }
    }
    console.log (arr);
}

// numToString([-1,-3,2]);

//Random Array

function randomArr(){
    var arr=[];
    for (var i = 0; i < 10; i++){
        arr[i]= Math.round(Math.random()*100);
    }
    console.log(arr);
}

// randomArr();

//Swapping two values

function swapVals(arr){
    var temp = arr[arr.length-1];
    arr[arr.length-1]=arr[0];
    arr[0]=temp;
    console.log (arr);
}

// swapVals([2,3,5,7,6]);

//Reversing

function reverseArr(arr){
    for (var i = 0; i < ((arr.length)/2) + 1; i ++){
        var temp = arr[arr.length-i-1];
        arr[arr.length-i-1] = arr[i];
        arr[i]=temp;
    }
    console.log(arr);
}

// reverseArr([-3,5,1,3,2,10]);

//Insert X in Y

function xInY(arr, x, y){
    for (var i = arr.length; i > y; i --){
        arr[i] = arr[i-1];
    }
    arr[y]=x;
    console.log(arr);
}

// xInY([1,3,5,7], 10, 2);

//Removing Negatives

function removeNegs(arr){
}

removeNegs([0, -1, 2, -3, 4, -5, 6]);