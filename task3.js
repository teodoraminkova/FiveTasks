//Create program that when you enter text it will get all digit and print it on separate line.
// function extractNums(str){
//     let reg = /\d/g;
//     let onlyDigits = str.match(reg);
//     return onlyDigits ;

// }
// var result = extractNums('tddy97feb02vladi09f1c67843b786hg6j8');
// result.map(res=>console.log(res));


// another way 
function extractNums(str){
    str.split('').forEach(element => {
        if(element.typeOf(Number)){
            console.log(element);
        }
    });    
}
extractNums('tddy97feb02vladi09f1c67843b786hg6j8');
