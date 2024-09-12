const form = document.querySelector('form');
const inputBudget = document.getElementById('inputBudget');
const budget = document.getElementById('budget');
const budgetHeadline = document.querySelector('.budgetHeadline');

form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log(inputBudget.value);
    let budgetSubmitted = inputBudget.value;
    budget.innerText = budgetSubmitted;
    inputBudget.value = "";

    budgetHeadline.style.display = 'block';
})


// //Entry meals
// console.log(test);
// for(meal of test){
//     console.log(meal.id);
// }


// entryMealBtn.addEventListener('click', function(){
//     console.log('meal added');

//     console.log(mealsDropdown);
// })