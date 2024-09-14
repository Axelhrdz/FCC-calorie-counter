const form = document.querySelector('form');
const inputBudget = document.getElementById('inputBudget');
const budget = document.getElementById('budget');
const budgetHeadline = document.querySelector('.budgetHeadline');
//Meals
const mealsform = document.querySelector('.mealsForm');
const meals = document.getElementById('meals');
const btnAddMeal = document.getElementById('btnAddMeal');

console.log(mealsform);
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
    const labelMeal = document.createElement('label');
    const calorieLabel = document.createElement('label');
    const inputCalorie = document.createElement('input');
    
    inputMeal.id = 'meal';
    inputMeal.setAttribute('type', 'text');
    labelMeal.id = 'labelMeal';
    labelMeal.innerHTML = 'Meal ';
    
    inputCalorie.id = 'calorie';
    inputCalorie.setAttribute('type', 'number');
    calorieLabel.id = 'calorieLabel';
    calorieLabel.innerHTML = 'Calories ';

    container.append(labelMeal);
    container.append(inputMeal);

    container.append(calorieLabel);
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

btnAddMeal.addEventListener('click', function(){
    if(mealContainer){
        createMeal(mealContainer);
        console.log(mealContainer);

    }
});


//Getting meals values
const mealsList = [];

mealsform.addEventListener('submit', function(e){
    e.preventDefault();
    const mealsInputs = document.querySelectorAll('.mealsForm input[id="meal"]');
    const caloriesInputs = document.querySelectorAll('.mealsForm input[id="calorie"]');

    const currentDish = {
        name: '',
        calories: 0
    }

    console.log(mealsInputs); 
    console.log(caloriesInputs);
    // console.log(Array.from(mealsInputs.value));

    mealsInputs.forEach((meal, index) => {
        console.log(meal.value)
        console.log(caloriesInputs[index].value);

        currentDish.name = meal.value;
        currentDish.calories = caloriesInputs[index].value;

        
        console.log(currentDish);
        console.log(mealsList);
        
    })
    mealsList.push(currentDish);

})