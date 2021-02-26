//1. (Setting and Swapping)
// var myNumber = 42;
// var myName = "Jennifer";
// var temp = 42;
// myNumber = myName;
// myName=temp;

// console.log(myName);
// console.log(myNumber);

//2. (Print -52 to 1066)
// for(var i = -52; i <1067; i++){
//     console.log(i);
// }

//3. (Don't worry, Be happy)
// function beCheerful() {
//     for (var i =0; i<98; i++) {
//         console.log("Good Morning");
//     }
// }

// beCheerful();

//4. (Multiples of Three- but not all)
// for (var i = -300; i < 1; i += 3){
//     if (i == -6 || i == -3){
//     } else {
//         console.log(i)
//     }
// }

//5. (Printing Integers with while)
// var x= 2000;
// while (x < 5281){
//     console.log(x);
//     x++;
// }

//6. (You say it's your birthday)
// If 2 given numbers represent your birth month and day in either order, log "How did you know?", else log "Just another day...."
// function happyBirthday(day, month){
//     if (day == 17 && month == 9 || day == 9 && month == 17){
//         console.log("How did you know?")
//     }
//     else {
//         console.log("Just another day...")
//     }
// }

// happyBirthday(9,17);
// happyBirthday(2,8);
// happyBirthday(9,10);

//7. (Leap Year)
// var sum = 0
// for (var i = 512; i < 4097; i ++) {
//     if (i % 5 == 0){
//         console.log(i);
//         sum = sum + 1;
//     }
//     console.log(sum);
// }

//8. (Print and Count)
// var num = 6
// while (num < 60001) {
//     console.log(num);
//     num += 6;
// }

//9. Counting, the Dojo Way
// for (num = 1; num < 101; num++){
//     if (num % 10 == 0) {
//         console.log("dojo")
//     }
//     else if (num % 5 == 0) {
//         console.log("coding dojo")
//     }
//     else {
//         console.log(num)
//     }
// }

//10. What do you know?
// function whatDoYouKnow (incoming){
//     console.log(incoming);
// }

// whatDoYouKnow ("hey");
// whatDoYouKnow ("data");

//11. Whoa, That Sucker's Huge
// function sum(x,y){
//     sum =0;
//     for (var x=x; x<y+1; x++){
//         sum = sum + x;
//         console.log(sum);
//     }
// }

// sum(-300000, 300000);

//12. Countdown by fours
// var num = 2016;
// while (num>0){
//     console.log(num);
//     num -=4;
// }

//13. Leap Year
// function leapYear(year){
//     if (year % 4 == 0){
//         if (year % 100 == 0 && year % 400 == 0){
//             console.log("This is a leap year");
//         }
//         else {
//             console.log("This is not a leap year");
//         }
//     }
//     else {
//         console.log("Not a leap year");
//     }
// }

// leapYear(2000);
// leapYear(1995);
// leapYear(2004);
// leapYear(1997);

//14. Flexible Counting
// function flexCount(lowNum, highNum, mult){
//     for (var x= lowNum; x < highNum +1; x= x + mult) {
//         console.log(x);
//     }
// }

// flexCount(2, 14, 3);

//15.Final Countdown
// function countDown(param1, param2, param3, param4) {
//     num = param2;
//     while (num<param3 +1){
//         if (num == param4){
//             num ++
//         }
//         if (num % param1 == 0){
//             console.log(num);
//             num +=param1
//         }
//         else {
//         num ++
//         }
//     }
// }

// countDown(3,5,17,9);

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

//only keep the last few

function keepLastFew(arr, num){
    for (var i = 0; i< arr.length; i++){
        arr[i]= arr[i+num-1];
        }
    for(var j= arr.length-1; j>num-1; j--){
        arr.pop(arr[i]);
    } 
    return arr;
}

// console.log(keepLastFew([2,4,6,8,10], 3));

//Math Help

function xIntercept(M, B){
    var x = (0-B) / M;
    return x; 
}
// console.log(xIntercept(-1, 2));

//Poor Kenny

function whatHappensToday(){
    var weather = Math.floor(Math.random() * 100);
    if (weather > 0 && weather <= 10){
        console.log("Volcano");
    }
    if (weather > 10  && weather <= 25){
        console.log("Tsunami");
    }
    if (weather > 25 && weather <= 45){
        console.log("Earthquake");
    }
    if (weather > 45 && weather <= 70){
        console.log("Blizzard");
    }
    if (weather > 70 && weather <= 100){
        console.log("Meteor");
    }
}

// whatHappensToday();

// What Really Happened

function whatReallyHappensToday(){
    var roll1= Math.floor(Math.random() * 100);
    var roll2= Math.floor(Math.random() * 100);
    var roll3= Math.floor(Math.random() * 100);
    var roll4= Math.floor(Math.random() * 100);
    var roll5= Math.floor(Math.random() * 100);
    if (roll1 <= 10) {
        console.log("Volcanoe Erruption Today!");
    }
    if (roll2 <= 15){
        console.log("Tsunami Today!");
    }
    if(roll3 <= 20){
        console.log("Earthquake Today!");
    }
    if (roll4 <= 25){
        console.log("Blizzard Today!");
    }
    if (roll5 <= 30){
        console.log("Meteor Today!");
    }
    if (roll1 > 10 && roll2 > 15 && roll3 > 20 && roll4 > 25 && roll5 > 30){
        console.log("Great Weather Today!");
    }
}

// whatReallyHappensToday();

//Soaring IQ

function soaringIq(iq, rate, days){
    var growth = 0;
    for (var i = days; i > 0; i --){
        growth = growth + (i * rate);
    }
    var finalIq = iq + growth;
    return finalIq;
}

// console.log(soaringIq(101, .01, 98));

//letter Grade

function grade(num){
    if (num >= 90){
        console.log("Score:" + num + " Grade:A")
    }
    if (num >= 80 && num < 90){
        console.log("Score:" + num + " Grade:B")
    }
    if (num >= 70 && num < 80){
        console.log("Score:" + num + " Grade:C")
    }
    if (num >= 60 && num < 70){
        console.log("Score:" + num + " Grade:D")
    }
    if (num < 60){
        console.log("Score:" + num + " Grade:F")
    }
}

// grade (92);
// grade(84);
// grade(76);
// grade(69);
// grade(45);
// grade(80);

//More Accurate Grades

function accGrade(num){
    if (num >= 95){
        console.log("Score:" + num + " Grade:A")
    }
    if (num < 95 && num >=90){
        console.log("Score:" + num + " Grade:A-")
    }
    if (num >= 85 && num < 90){
        console.log("Score:" + num + " Grade:B+")
    }
    if (num >= 80 && num < 85){
        console.log("Score:" + num + " Grade:B-")
    }
    if (num >= 75 && num < 80){
        console.log("Score:" + num + " Grade:C+")
    }
    if (num >= 70 && num < 75){
        console.log("Score:" + num + " Grade:C-")
    }
    if (num >= 65 && num < 70){
        console.log("Score:" + num + " Grade:D+")
    }
    if (num >= 60 && num < 65){
        console.log("Score:" + num + " Grade:D-")
    }
    if (num < 60){
        console.log("Score:" + num + " Grade:F")
    }
}

// accGrade (92);
// accGrade(84);
// accGrade(76);
// accGrade(69);
// accGrade(45);
// accGrade(89);

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

// drawLeftChars(4,"-");
// drawRightChars(4, "+");
// drawCenteredChars(4, "#");

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
    var fibarr=[];
    fibarr[0] = 0; 
    fibarr[1]=1;
    for (var i = 2; i < num+1; i ++){
        fibarr[i] = fibarr[i-1] + fibarr[i-2];
    }
    console.log(fibarr[num])
}

// fibonacci(7);

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
    var sec = seconds;
    var min = sec/60;
    var hr = min/60;
    var minAngle = ((min - (Math.trunc(hr)*60)) /60) * 360;
    var secAngle = ((sec % 60)/60) * 360;
    if (hr > 24){
        hr = hr - 24;
    } 
    var hrAngle =  (hr/12) * 360;
    console.log("Hours Hand:", hrAngle+"°");
    console.log("Minutes Hand:", minAngle+"°");
    console.log("Seconds Hand:", secAngle+"°");
}

// clockHandAngles(119730);

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

//Rockin' the Dojo Sweatshirt

function sweatshirtPricing(num){
    var price = 20;
    if (num == 1){
        console.log ('$' + price);
    }
    if (num ==2){
        price = Math.ceil(2*(price-(price*.09)))
        console.log ('$' + price);
    }
    if (num ==3){
        price = Math.ceil(3*(price-(price*.19)))
        console.log ('$' + price);
    }
    if (num >3){
        price = Math.ceil(num*(price-(price*.35)))
        console.log ('$' + price);
    }
}
// sweatshirtPricing(1);
// sweatshirtPricing(2);
// sweatshirtPricing(3);
// sweatshirtPricing(4);

//Clock Hand Angles, Revisited
//come back to this

//Extract-o-Matic

// function extractDigit(num,digitNum){
//     var digitValue= num / (Math.pow(10, digitNum));
//     digitValue = Math.trunc(digitValue);
//     digitValue = digitValue % 10;
//     console.log (digitValue);
// }

// extractDigit(1824, 2);
// extractDigit(1824, 0);
// extractDigit(1824, 7);

//Second and Third Extract-o-Matic

function extractDigit(num,digitNum){
    if (num >=0){
        if (digitNum >= 0){
            var digitValue= num / (Math.pow(10, digitNum));
            digitValue = Math.trunc(digitValue);
            digitValue = digitValue % 10;
            console.log (digitValue);
        }
        if (digitNum < 0){
            var digitNum= num * (Math.pow(10,digitNum*-1));
            digitNum=Math.trunc(digitNum);
            digitNum=digitNum % 10;
            console.log(digitNum);
        } 
    } 
    if (num < 0){
        if (digitNum >= 0){
            var digitValue= num / (Math.pow(10, digitNum));
            digitValue = Math.trunc(digitValue);
            digitValue = digitValue % 10;
            digitValue = -(digitValue);
            console.log (digitValue);
        }
        if (digitNum < 0){
            var digitNum= num * (Math.pow(10,digitNum*-1));
            digitNum=Math.trunc(digitNum);
            digitNum=digitNum % 10;
            digitValue = -(digitValue);
            console.log(digitNum);
        }
    }
}

// extractDigit(123.45, -1);
// extractDigit(-1824, 2);

//Most Significant Digit

function sigDigit (num){
    var i = num.length;
    console.log(i);
    // while (i >= 0) {
    //     var sig = num / (Math.pow(10, num.length-1));
    //     if (sig == 0){
    //         i--;
    //     }else{
    //         console.log (sig);
    //         break;
    //     }
    // }
}

sigDigit(12345);