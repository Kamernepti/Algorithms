//Threes and Fives

function threeFives(val1, val2, val3){
    var total = val1 + val2 + val3
    if (300 <= total <= 12000000 && total % 3 ==0 && total % 5 == 0){
        console.log(total);
    } else {
        console.log("Total not divisible by 3 & 5");
    }
}

// threeFives(200, 200, 200);

//Three Fives but better

function betterThreeFives(start, end){
    var sum = 0;
    for (var i = start; i <= end; i++){
        
        if (i % 3 == 0 && i % 5 == 0){
            sum = sum + i;
        }
    }
    console.log (sum);
}

// betterThreeFives(100, 300);

//Generate Coin Change

function generateCoinChange(cents){
    var total = cents;
    quarterLoop:
    if (total >= 25){
        if (total >= 75){
            console.log ("3 Quarters");
            total = total - 75;
            break quarterLoop;
        }
        if (50 <= total < 75 ){
            console.log("2 Quarters");
            total = total - 50;
            break quarterLoop;
        }
        if (25 <= total < 50){
            console.log ("1 Quarter");
            total = total - 25;
        }
    }

    dimeLoop:
    if (total >= 10){
        if (total >= 20){
            console.log("2 Dimes");
            total = total -20;
            break dimeLoop;
        }
        if (10 <= total < 20){
            console.log ("1 Dime");
            total = total - 10;
        }
    }

    if (total >= 5){
        console.log("1 Nickle");
        total = total - 5;
    }
    
    pennyLoop:
    if (total >= 1){
        if (total == 4){
            console.log("4 Pennies");
            break pennyLoop;
        }
        if (total == 3){
            console.log("3 Pennies");
            break pennyLoop;
        }
        if (total == 2){
            console.log("2 Pennies");
            break pennyLoop;
        }
        if (total == 1){
            console.log("1 Penny");
        }
    }
}

// generateCoinChange(51);

//Shorten Coin Code 

function generateCoinChange(cents){
    var total = cents;
    var quarter = total % 25;
    console.log(quarter);
}

// generateCoinChange(40);


//Messy Math Mashup

function messyMath(num) {
    var sum = 0;
    for (var i =0; i <= num; i++){
        if (i % 3 !=0){
            sum = sum + i;
            if (i % 7 == 0){
                sum = sum + i;
            }
            if (i == num/3){
                return -1;
            }
        }
    }
    console.log (sum);
}

// messyMath(4);
// messyMath(8);
// console.log(messyMath(15));

//Twelve Bar Blues