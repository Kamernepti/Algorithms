//Biggie Size

function makeItBig(arr){
    newArr=[];
    for (var i=0; i < arr.length; i++){
        if (arr[i] > 0){
            newArr.push("big");
        }
        else{
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

// console.log(makeItBig([-1,3,5,-5]));

//Print Low, Return High

function lowHigh(arr){
    var lowNum= arr[0];
    var highNum = arr[0];
    for (var i = 0; i < arr.length; i++){
        if (arr[i] < lowNum){
            lowNum = arr[i];
        }
        if (arr[i]>highNum){
            highNum = arr[i];
        }
    }
    console.log(lowNum);
    return (highNum);
}

// console.log(lowHigh([1,2,3,4,5,0]));

//Print one, return another

function printReturn(arr){
    console.log(arr[arr.length-2]);
    for (var i = 0; i < arr.length; i++){
        if (arr[i] % 2 !== 0){
            return arr[i];
        }
    }
}

// console.log(printReturn([4,3,2,3,4,5,6,7]));

//Double Visions

function doubleVision(arr){
    var newArr=[];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(arr[i]*2);
    }
    return newArr;
}

// console.log (doubleVision([1,2,3]));

//Count Positives

function countPositives(arr){
    var totalPositives= 0;
    for (var i=0; i < arr.length; i++){
        if (arr[i] > 0 ){
            totalPositives ++;
        }
    }
    arr.pop();
    arr.push(totalPositives);
    return (arr);
}

// console.log (countPositives([-1,1,1,1]));

//Evens and Odds

function thatsOdd(arr){
    var odds=0;
    var evens =0;
    for (var i=0; i<arr.length; i ++){
        if (arr[i] % 2 != 0){
            odds++;
            evens=0;
        }
            if (odds == 3){
                console.log("That's Odd");
            }
        if (arr[i] % 2 == 0){
            odds=0;
            evens++;
        }
            if (evens == 3){
                console.log("Even More So");
            }
    }
}

// thatsOdd([1,1,1,2,1,4,4,4,5]);

//Increment the seconds

function addOneOdd(arr){
    var newArr=[];
    for (var i = 0; i <arr.length; i++) {
        if (arr[i] % 2 != 0){
            arr[i] =arr[i]+1;
            newArr.push(arr[i]);
        } else{
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

// console.log(addOneOdd([1,2,3,4,5,6,7]));

//Previous Lengths

function prevLengths(arr){
    for (var i = arr.length; i > 0; i--){
        var string= arr[i-1];
        var temp = string.length;
        arr[i]=temp;
    }
    return arr;
}

// console.log(prevLengths(['dog', 'house', 'running', 'class']));

//Add Seven to Most

function addSeven(arr){
    var newArr=[];
    for (var i = 1; i< arr.length; i ++) {
        newArr.push(arr[i]+7);
    }
    return newArr;
}

// console.log(addSeven([1,2,3,4,5,6,7,8]));

//Reverse Array 

function reverseArr(arr){
    for (var i = 0; i< arr.length/2; i ++) {
        var temp = arr[i];
        arr[i] = arr[arr.length-i-1];
        arr[arr.length-i-1] = temp;
    }
    return arr;
}

// console.log(reverseArr([1,2,3,4,5]));

//Outlook: Negative

function negativeNums(arr) {
    for (var i = 0; i < arr.length; i ++) {
        if (arr[i] > 0){
            arr[i] = -arr[i];
        }
    }
    return arr;
}

// console.log (negativeNums([1,-3, 5]));

//Always Hungary

function hungary(arr){
    for (var i = 0; i < arr.length; i ++){
        if (arr[i] == "food"){
            console.log ("yummy");
        }
        else{
            console.log("I'm Hungary")
        }
    }
}

// hungary (["food", "house", "cat", "food", "dog"]);

//Swap Towards the Center

function swapToCenter(arr){
    for(var i = 0; i<arr.length/2; i+=2){
        var temp = arr[i];
        arr[i] = arr[arr.length-i-1];
        arr[arr.length-i-1] = temp;
    }
    return arr;
}

// console.log (swapToCenter([1,2,3,4,5,6]));

//Scale the Array

function scaleArr(arr, num){
    for (var i= 0; i <arr.length; i ++){
        arr[i]= arr[i]*num;
    }
    return arr;
}

// console.log (scaleArr([1,2,3,4,5], 2))