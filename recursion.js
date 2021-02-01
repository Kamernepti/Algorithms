function counting(){
    for(var i=3; i >= 1; i--){
        console.log(i);
    }
}

counting();

function countingRec(num){
    //the if statement is less than rather than == because it catches more errors this way
    if(num < 1){
        return "Done Counting"
    }
    //var num= 3 this is what has happened in the background
    console.log(num);
    //how do i go down to 2 from 3 now? so now we recall the function
    countingRec(num-1);
    //num now has multiple unique versions of the same variable
    //how do I stop at 1? this is with an if statement that is at the start of the function so we catch it. 

}   

console.log(countingRec(3))  //starting point passed into this function call
console.log(countingRec(7))

//To Do 1
//Recursive Sigma: write a recursive function that give and number returns the sum f integers from 1 to that number

function rSigma(num){
    if(num == 0){
        return 0
    }
    return num + rSigma(num-1)
}

console.log(rSigma(3))

//To Do 2
//Recursive Factorial: Given num, return the product of ints from 1 up t num.  if less than zero, treat as zero.  If not int, truncate(0!=1)

function rFact(num){
    if (num < 0){
        num = 0;
    }
    if(num == 0){
        return 1;
    }
    return num * rSigma(num-1);
}

console.log(rSigma(3));