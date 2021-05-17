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

function camelCase(s){
    var count = 1;
    var character = '';
    for (var i = 0; i < s.length; i ++){
        character = s.charAt(i);
        if (character == character.toUpperCase()){
            count += 1;
        }
    }
    console.log(count);
}

// camelCase("oneTwoThree");

function strongPassword(n, password){
    var numbers=[0,1,2,3,4,5,6,7,8,9];
    var lower_case=['a','b','c','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var upper_case=[];
    var special_character=[];
    if (n < 6){
        console.log()
    }
}

//come back to this one*********************************************************************************above

function cipher(s, k){
    var alphabet=['a','b','c','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var character = ""
    for (var i = 0; i < s.length; i++){
        character= s.charAt(i);
        if (s.character == alphabet[i]){
            s.character = alphabet[i+k]; 
        }
    }
    console.log(s);
}

// cipher("jgnnq", 2);
//this one isn't quite right

//Sales by Match

function sockMerchant(n, arr){
    arr.sort(function(a, b){return a-b});
    var pairs = 0;
    for (var i = 0; i < n; i++){
        if (arr[i+2] == arr[i+1] && arr[i+1] == arr[i]){
            pairs +=1
        }
    }
    var odds= n-(pairs*2);
    console.log (arr);
    console.log (pairs);
    console.log (odds);
}

// sockMerchant (7, [1,2,1,2,1,3,2]);

//Counting Valleys

function valleys(path){
    var count = 0;
    var valley = 0;
    for (var i = 0; i < path.length; i ++){
        if (path[i] == "U"){
            count -= 1;
            if (count == 0){
                valley +=1
            }
        }
        if (path[i] == "D"){
            count += 1;
            if (count == 0){
                valley +=1
            }
        }
    }
    console.log (valley);
}

valleys(["U","D","D","D","U","D","U","U"])