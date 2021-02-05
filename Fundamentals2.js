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