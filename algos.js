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