const form = document.querySelector('form');
const inputBudget = document.getElementById('inputBudget');
const budget = document.getElementById('budget');
const budgetHeadline = document.querySelector('.budgetHeadline');
//Meals
const meals = document.getElementById('meals');
const btnAddMeal = document.getElementById('btnAddMeal');

console.log(meals.value);

console.log(btnAddMeal);
console.log(meals);
console.log(meals.firstElementChild);
// btnAddMeal.onclick = function(){
//     console.log(meals.childNodes)
// }


//Submiting budget
let budgetSubmitted;
form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log(inputBudget.value);
    budgetSubmitted = inputBudget.value;
    budget.innerText = budgetSubmitted;
    inputBudget.value = "";

    budgetHeadline.style.display = 'block';
})


//Submiting type meals entries
const breakContainer = document.querySelector('.breakContainer');
const lunchContainer = document.querySelector('.lunchContainer');
const dinnerContainer = document.querySelector('.dinnerContainer');
const snacksContainer = document.querySelector('.snacksContainer');
// console.log(breakContainer)
// const test = document.createElement('p')
// test.innerText = 'this is a test'
// breakContainer.append(test)

function createMeal(container){
    const inputMeal = document.createElement('input');
    const inputCalorie = document.createElement('input');

    container.append(inputMeal);
    container.append(inputCalorie);
}

let currentMealType = meals.value;
let mealContainer = breakContainer;
meals.addEventListener('change', function(){
    // console.log(this.value);
    currentMealType = this.value;
    mealContainer = `${this.value}Container`;
    // console.log(mealContainer);
    // console.log(currentMealType);


    switch(currentMealType){
        case 'breakfast':
            mealContainer = breakContainer;
            break;
        case 'lunch':
            mealContainer = lunchContainer;
            break;
        case 'dinner':
            mealContainer = dinnerContainer;
            break;
        case 'snacks':
            mealContainer = snacksContainer;
            break;
        default:
            mealContainer = meals.value;
    }

})

// btnAddMeal.addEventListener('click', createMeal(mealContainer));

btnAddMeal.addEventListener('click', function(){
    if(mealContainer){
        createMeal(mealContainer);

    }
});