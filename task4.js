/*Create program that will sum numbers and concatenate string but
 if you enter end it will stop and print the info numbers: ... , .... , ... strings .. ,... ,....
 */

function sum(array){
    let numArr = [];
    let strArr = [];
 
     for(let i = 0; i < array.length; i++){
     if(typeof array[i] == 'number'){
         numArr.push(array[i]);
     } else {
         strArr.push(array[i]);
         }
     }     
     return {nums: numArr, strings: strArr};
 };
 
 console.log(sum([5,'h',7,'asd',88]));
 console.log(sum([5,8,88]));
 