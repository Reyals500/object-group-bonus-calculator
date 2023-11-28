// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// console.log('array of employee data: ',  employees );


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.




// This function will calculate 1 employee's bonus!
//

function calculateIndividualEmployeeBonus( employee ) {  
  // your logic here
let bonus;
if (employee.reviewRating <= 2){
  bonus = 0
}
if ( employee.reviewRating === 3){
  bonus = 4
}
if ( employee.reviewRating === 4){
  bonus = 6
}
if ( employee.reviewRating === 5){
  bonus = 10
}
if(employee.employeeNumber.length === 4){
  console.log(`${employee.name} has been around for a while`);
  bonus = bonus + 5
}
if (Number(employee.annualSalary) > 65000){
  bonus = bonus -1
}
if(bonus > 13){
  bonus = 13
}
if(bonus < 0){
  bonus = 0
}
let bonusPercentage = bonus / 100
// console.log('Bonus Percentage', bonusPercentage);

let totalBonus = bonusPercentage * employee.annualSalary
// console.log('Total Bonus', totalBonus);

let totalCompensation = Number(employee.annualSalary) + totalBonus
// console.log('Total Compensation', totalCompensation);


  // for ( let object of employee){
  //   console.log('inside of calculateIndividualEmployeeBonus', object);
  //   if(object.reviewRating <= 2){
  //     console.log('You get no bonus');
  //   } if(object.reviewRating===3){
  //     let bonus = 0.04 * object.annualSalary;
  //     console.log('YOU JUST GOT BONUS:', bonus)
  //   } if(object.reviewRating===4){
  //     let bonus = 0.06 * object.annualSalary;
  //     console.log('YOU JUST GOT BONUS:', bonus)
  //   } if(object.reviewRating===5){
  //     let bonus = 0.1 * object.annualSalary;
  //     console.log('YOU JUST GOT BONUS:', bonus)
  //   } 
 
    
  // let bonus = 0

  //   for ( let object of employee){
  //     console.log('inside of calculateIndividualEmployeeBonus', object);
  //     if(object.reviewRating <= 2){
  //       console.log('You get no bonus');
  //     } if(object.reviewRating===3){
  //       bonus = .04
  //       bonus = bonus * object.annualSalary
  //       console.log('YOU JUST GOT BONUS:', bonus)
  //     } 
  //     if(object.reviewRating===4){
  //       let bonus = 0.06 * object.annualSalary;
  //       console.log('YOU JUST GOT BONUS:', bonus)
  //     } if(object.reviewRating===5){
  //       let bonus = 0.1 * object.annualSalary;
  //       console.log('YOU JUST GOT BONUS:', bonus)
  //     } 
  //   }
    
//     If their employee number is 4 digits long, this means they have been with the company for longer than 15 years,
// and should receive an additional 5%.
// - However, if their annual income is greater than $65,000, they should have their bonus adjusted down 1%.
// - No bonus can be above 13% or below 0% total.


    
    
  //   if(object.employeeNumber.length === 4, object.annualSalary > 65000 Ob ) {

  //     let extraBonus = 0.05 * object.annualSalary ;

  //     console.log('YOU JUST GOT BONUS:', extraBonus)

  //   }
  // }
 
  
  // return new object with bonus results
  let result = {
    name: employee.name,
    bonusPercentage: bonusPercentage,
    totalCompensation: totalCompensation,
    totalBonus: bonus
  }
console.log(`bonuses for ${employee.name}:`, result);
return result;

}
//Todo later this will turn into a loop


for(let empl of employees){
  console.log(calculateIndividualEmployeeBonus(empl));
}
