// //Push Front: Given an array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods.
// var myArr= [1,2,3,4];

// function pushFront(arr, num){
//     for (var index = arr.length; index> -1; index--){
//         arr[index] = arr[index-1];
//     }
//     arr[0]=num;
//     return arr;
// }

// pushFront(myArr, 0);

// //2.Pop Front: Given an array, remove and return the value at the beginning of the array. Do this without using any built-in array methods except pop().
// myArr=[1,2,3,4];

// function popFront(arr) {
//     var temp = arr[0];
//     arr.pop(arr[0]);
//     for (var index = arr.length; index> -1; index--){
//         arr[index] = arr[index-1];
//     }
//     arr[0]=temp;
//     return arr;
// }

// popFront(myArr);

// //3. Insert At: Given an array, index, and additional value, insert the value into array at given index. Do this 
// //without using built-in array methods. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).
// myArr=[1,2,3,4,5];

// function insertAt(arr, idx, val) {
// 	for(let i = arr.length; i > idx; i--)
// 		arr[i] = arr[i-1]
	
// 	arr[idx] = val;
// }

// insertAt (myArr, 2, 3);

// //4. Remove At: Given an array and an index into array, remove and return the array value at that index. Do this without 
// //using built-in array methods except pop(). Think of popFront(arr) as equivalent to removeAt(arr,0).

// myArr=[1,2,3,4,5];

// function removeAt(arr, idx) {
// 	remove = arr[idx];
// 	for(let i = idx; i < arr.length-1; i++) {
//         arr[i] = arr[i+1];
//     }
//     arr.length = arr.length-1;
//     return remove;
// }

// removeAt(myArr, 2);

// //5. Swap Pairs: Swap positions of successive pairs of values of given array. If length is odd, do not change the final element. 
// //For [1,2,3,4], return [2,1,4,3]. For example, change input ["Brendan",true,42] to [true,"Brendan",42]. As with all array 
// //challenges, do this without using any built-in array methods.

// myArr=[1,2,3,4,5];

// function swapPairs(arr) {
// 	for(var i = 0; i < arr.length - 1; i = i + 2) {
// 		var temp = arr[i];
// 		arr[i] = arr[i + 1];
// 		arr[i + 1] = temp;
// 	}
// }

// swapPairs(myArr);

// //6.Remove Duplicates: Sara is looking to hire an awesome web developer and has received applications from various sources. 
// //Her assistant alphabetized them but noticed some duplicates. Given a sorted array, remove duplicate values. Because array 
// //elements are already in order, all duplicate values will be grouped together. As with all these array challenges, do this without using any built-in array methods.
// //Second: Solve this without using any nested loops.

// myArr=[1,2,3,4,5];

// function removeDupesUnnested(arr) {
// 	let newArr = [];
// 	for(let i = 0; i < arr.length; i++) {
// 		if(arr[i] !== arr[i+1]) 
// 			newArr.push(arr[i])
// 	}
// 	return newArr;
// }

// removeDupesUnnested(myArr);

//Given an array of comparable values, move the lowest element to array’s front, shifting backward any elements previously ahead of it. Do not otherwise change 
//the array’s order. Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it. As always, do this without using built-in functions.

function switchArr(arr) {
    var min = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[1] < min) {
            min = arr[i];
        }
    }
    for (var i = arr.length; i> -1; i--){
        arr[i] = arr[i-1];
    }
    arr[0]=min;
    return arr;
}

var myArr= [4,2,1,3,5];
switchArr(myArr);