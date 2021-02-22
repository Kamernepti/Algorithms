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

function twelveBarBlues() {
    for (var i = 1; i<= 12; i ++){
        if (i % 2 != 0){
            console.log(i);
            console.log("chick");
            console.log("boom");
            console.log("chick");
        }
        else {
            console.log(i + "chick" , "boom" , "chick");
        }
    }
}

// twelveBarBlues();

//Fibonacci

function fibonacci (num){
    
}

//Sum to One Digit

function sumToOne(num) {
    var sum = 0;
    var digits = num.toString().split('');
    var realDigits = digits.map(Number);
    // console.log (realDigits);
    for (var i = 0; i < realDigits.length; i++) {
        sum = sum + realDigits[i];
        // console.log (sum);
    }
        if (sum >= 10){
            var newDigits = sum.toString().split('');
            var finalDigits = newDigits.map(Number);
            // console.log(finalDigits);
            var sum = 0;
            for(var j = 0; j<finalDigits.length; j++){
                sum = sum + finalDigits[j];
                return sum;
            }
        }else {
                return sum;
        }
}

// console.log(sumToOne(928));
// console.log(sumToOne(111));

//Clock Hand Angels
function clockHandAngles(seconds){

}

//Is Prime

function isPrime(num){
    if (num > 10) {
        if (num % 2 == 0 || num % 3 == 0 || num % 4 == 0 || num % 5 == 0 || num % 6 == 0 || num % 7 == 0 || num % 8 == 0 || num % 9 == 0){
            console.log("Number is not Prime");
        }else {
            console.log("Number is Prime");
        }
    }
    if (num <=10){
        if (num == 2 || num == 3 || num == 5 || num == 7){
            console.log("Number is Prime");
        } else {
            console.log("Number is not Prime");
        }
    }
}

// isPrime(41);
// isPrime(3);
// isPrime(6);