/*
4***:
Преобразовать задание 3* таким образом, чтобы возраст вводился, используя функцию prompt в привязанной верстке
*/

const checkAge = function(age_1) 
{ 
    let age_2 = 18;
    let age_3 = 60;
    
    if ((isNaN(age_1)))
    {
        console.log('ERROR! Enter a numeric value!');
        alert ('ERROR! Enter a numeric value!');
    }
    else if (age_1 < age_2)
    {
        console.log('You don’t have access because your age is ${age_1}. It’s less then necesary');
        alert('You don’t have access because your age is ${age_1}. It’s less then necesary');
    }
    else if (age_1 >= age_2 && age_1 < age_3) 
    {
        console.log('Welcome!');
        alert ('Welcome!');
    }
    else if (age_1 > age_3)
    {
        console.log('Keep calm and look Culture channel!');
        alert('Keep calm and look Culture channel!');
    }
    else 
    {
        console.log('Technical work');
        alert('Technical work');
    }
}

let ageQuery = prompt('How old are you?');
checkAge(ageQuery); 