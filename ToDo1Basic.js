// Remove Blanks
// Create a function that, given a string, returns all of that string’s contents, but without blanks. 
// If given the string " Pl ayTha tF u nkyM usi c ", return "PlayThatFunkyMusic".

// function removeBlanks(str) {
//     var newArr=[];
//     var newString="";
//     for (var i=0; i<str.length; i++) {
//         if (str[i] != " ") {
//             // console.log(str[i]);
//             newArr.push(str[i]);
//         }
//     }
//     // console.log (newArr);
//     for (var j=0; j<newArr.length; j++){
//         newString= newString + newArr[j];
//     }
//     console.log(newString);
// }

// console.log(removeBlanks(" Pl ayTha tF u nkyM usi c "))


// Get Digits
// Create a JavaScript function that given a string, returns the integer made from the string’s digits. Given 
//"0s1a3y5w7h9a2t4?6!8?0", the function should return the number 1357924680.

// function getDigits(str){
//     for (var i = 0; i <str.length; i++){
//         if (str[i]<10){
//             console.log(str[i]);
//         }
//     }
// }

// console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0"));


// Acronyms
// Create a function that, given a string, returns the string’s acronym (first letters only, capitalized). 
// Given " there's no free lunch - gotta pay yer way. ", return "TNFL-GPYW". 
// Given "Live from New York, it's Saturday Night!", return "LFNYISN".

// function acronyms(str) {
//     for (var i=0; i <str.length; i++) {
//         if (str[i]=" "){
//             console.log(str[i+1]);
//         }
//     }
// }

// console.log (acronyms("there's no free lunch - gotta pay yer way"));




// Count Non-Spaces
// Accept a string and return the number of non-space characters found in the string. 
// For example, given "Honey pie, you are driving me crazy", return 29 (not 35).

// function nonSpaces(str){
//     var sum = 0;
//     for (var i = 0; i <str.length; i++){
//         if(str[i] != " ") {
//             sum= sum + 1;
//         }
//     }
//     console.log(sum);
// }

// nonSpaces("Honey pie, you are driving me crazy");

// Remove Shorter Strings
// Given a string array and value (length), remove any strings shorter than the length from the array.

function removeShortString(arr){
    for (var i =0; i< arr.length; i++){
        var str = arr[i];
        if (str.length>arr.length){
            console.log(arr[i]);
        }
    }
}

removeShortString(["hello", "george", "I", "had", "to", "stop", "superstar"]);