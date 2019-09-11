// //Create methods like Math.pow, Math.max, Math.max, Math.round, Math.abs, Math.floor.

// function tedyPow(a,b){
//     let result = a;
//     if( b != 0){
//         for(let i = 1; i < b; i++){
//             result *= a;
//         }
//         return result;
//     } else {
//         return result = 1;
//     }
// }
// console.log(tedyPow(2,0));
// console.log(tedyPow(2,3));
// console.log(tedyPow(2,5));



// //Math.max
// function tedyMax(arr) {
//     biggestNum = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (biggestNum < arr[i]) {
//          biggestNum = arr[i];
//         }
//     }
//     return biggestNum + ' is the biggest number.'
// }
// console.log(tedyMax([997,7,-7,55]));

// function tedyMin(arr) {
//     biggestNum = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (biggestNum > arr[i]) {
//          biggestNum = arr[i];
//         }
//     }
//     return biggestNum + ' is the smallest number.'
// }
// console.log(tedyMax([997,7,-7,55]));



// //Math.abs
// function tedyAbs(num){
//     if(num < 0){
//        return num*=(-1);
//     }
//     return num;
// }
// console.log(tedyAbs(-22));



//Math.floor
// function tedyFloor(n){
//     let nStr =  n.toString();
//     let newNum = nStr.split('.');
//     if(newNum[0] < 0){
//      return newNum[0] -1;
//     }
//     return newNum[0];
//  }
//  console.log(tedyFloor(-1.22));

