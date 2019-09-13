//Create program that will calculate how many days passed since someone is born.
function calculateDays(birthday){    
    let birthdayDate = new Date(birthday);
    let today = new Date();
    let Difference_In_Time = today.getTime() - birthdayDate.getTime(); 
    let days = Difference_In_Time / (1000 * 3600 * 24); 

    console.log(Math.floor(days));
    
}
calculateDays('09/01/1996');