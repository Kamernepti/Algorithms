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
