//Sigma

function sigma(num){
    var sum = 0;
    for (var i = num; i >0; i--){
        sum = sum + i;
    }
    return sum;
}

// console.log(sigma(3));

//Factorial

function factorial(num){
    var product = 1;
    for (var i = 1; i <= num; i++){
        product = product * i;
    }
    return product;
}

// console.log (factorial(4));

//Star Art

function drawLeftStars(num){
    var star = "*";
    var space= " ";
    console.log(star.repeat(num) + space.repeat(75-num));
}

function drawRightStars(num){
    var star = "*";
    var space= " ";
    console.log(space.repeat(75-num) + star.repeat(num));
}

function drawCenteredStars(num){
    var space = " ";
    var star = "*";
    console.log(space.repeat((75-num)/2) + star.repeat(num) + space.repeat((75-num)/2));    
}

// drawLeftStars(20);
// drawCenteredStars(20);
// drawRightStars(20);

//Character Art

function drawLeftChars(num, char){
    var char = char;
    var space= " ";
    console.log(char.repeat(num) + space.repeat(75-num));
}

function drawRightChars(num, char){
    var char = char;
    var space= " ";
    console.log(space.repeat(75-num) + char.repeat(num));
}

function drawCenteredChars(num, char){
    var space = " ";
    var char = char;
    console.log(space.repeat((75-num)/2) + char.repeat(num) + space.repeat((75-num)/2)); 
}

drawLeftChars(4,"-");
drawRightChars(4, "+");
drawCenteredChars(4, "#");