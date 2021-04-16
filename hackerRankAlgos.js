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

// birthdayCakeCandles([4,4,1,3]);

function diagonalDiff(n, arr){
    var sum1 = 0;
    var sum2 = 0;
    for (var i = 0; i < n; i++){
        sum1 += arr[i][i];
    }
    for (var j = n-1; j >= 0; j--){
        sum2 += arr[j][n-j-1];
    }
    console.log(sum1-sum2);
};

// diagonalDiff(3,[[11,2,4],[4,5,6],[10,8,-12]]);

function gradingStudents(n){
    if ((n+2) % 5 ==0 && n > 37){
        n = n + 2;
    }
    if ((n+1) % 5 ==0 && n > 37){
        n = n + 1;
    }
    
    console.log(n);
};

// gradingStudents(89);
// gradingStudents(29);
// gradingStudents(73);
// gradingStudents(67);