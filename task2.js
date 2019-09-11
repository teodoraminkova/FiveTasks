/*
Create program that will read gender, if male, it will ask you your age, name and birthday. 
If female, it will ask you your hair color, eyes color and how much you spent for nails. 
Then it will print all the info
*/

function printInfo(){
    let pers = prompt('Please, fill you gender!');
    if(pers === 'female'){
        let hair = prompt('What is your hair color?');
        let eyes = prompt('Eye color: ');
        let nails = prompt('How you spent for nails?');
        return 'Female ->  Hair: ' + hair + ' , eye color: ' + eyes + ' and spent ' + nails + ' money for nails.';
    } else if(pers === 'male'){
        let age = prompt('What is your age?');
        let name = prompt('What is your name?');
        let birthday = prompt('What is your birthday?');
        return 'Male -> Name: ' + name + ' ' + age + ' years old' + ' , born in' + birthday;
    }
    return prompt('What is your gender - male or female?') + printInfo();
}
console.log(printInfo());