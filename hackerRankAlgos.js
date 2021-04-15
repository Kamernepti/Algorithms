function staircase (n){
    var stair = "#";
    var space= " ";
    for (var i = 1; i < n+1; i ++){
        console.log(space.repeat(n-i) + stair.repeat(i));
    }
};

// staircase (4);

function miniMaxSum(arr){
    var max = arr[0];
    var min = arr[0];
    var sum = 0;
    for (var i = 0; i < arr.length; i ++){
        sum += arr[i];
        if (arr[i] > max){
            max = arr[i];
        }
        if (arr[i] < min){
            min = arr[i]
        }
    }
    console.log (sum - max);
    console.log (sum - min);
};

// miniMaxSum([1,3,5,7,9]);

function birthdayCakeCandles(arr){
    var count = 0;
    var tall = arr[0];
    for (var i = 1; i < arr.length; i++){
        if (arr[i] > tall){
            tall = arr[i];
        }
    }
    for (var j = 0; j < arr.length; j++){
        if (arr[j] == tall){
            count +=1
        }
    }
    console.log (count);
};

birthdayCakeCandles([4,4,1,3]);