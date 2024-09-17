const form = document.querySelector('form');
const inputBudget = document.getElementById('inputBudget');
const budget = document.getElementById('budget');
const budgetHeadline = document.querySelector('.budgetHeadline');
//Meals
const mealsForm = document.querySelector('.mealsForm');
const meals = document.getElementById('meals');
const headline = document.querySelector('.headline');
const btnAddMeal = document.getElementById('btnAddMeal');
const calculateBtn = document.getElementById('calculate');
//Sumarry div
const summaryContainer = document.querySelector('.summaryContainer');
const submittedCalories = document.querySelector('submittedCalories');
const remainingCal = document.getElementById('remainingCal');
const budgetSpan = document.getElementById('budet');
const consumedSpan = document.getElementById('consumed');


console.log(meals);
console.log(mealsForm);


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


//Chosing meal type
function choosingMeal(mealVal){
//     let container = document.createElement('div');
    // container.classList.add('mealContainer');
    // container.innerHTML = 
    // `
    //         <h3 class="headline" id="${mealVal}">${mealVal}</h3>
    //         <label for="meal${mealVal}">Meal</label>
    //         <input type="text" id="meal${mealVal}"></input>
    //         <label for="calories${mealVal}">Calories</label>
    //         <input type="number" id="calories${mealVal}"></input>
    // `
    let container = document.createElement('div');
    container.classList.add('mealContainer');

        const headline = document.createElement('h3');
        headline.classList.add('headline');
        headline.innerText = mealVal;
        container.appendChild(headline);
    //Adding Meal
        const mealLabel = document.createElement('label');
        mealLabel.setAttribute('for', `meal${mealVal}`);
        mealLabel.innerText = 'Meal ';

        const mealInput = document.createElement('input');
        mealInput.setAttribute('type', 'text');
        mealInput.id = `meal${mealVal}`;

        container.appendChild(mealLabel);
        container.appendChild(mealInput);
    
    //Adding Calories
        const caloriesLabel = document.createElement('label');
        caloriesLabel.setAttribute('for', `calories${mealVal}`);
        caloriesLabel.innerText = 'Calories ';

        const caloriesInput = document.createElement('input');
        caloriesInput.setAttribute('type', 'number');
        caloriesInput.id = `calories${mealVal}`;
        
        container.appendChild(caloriesLabel);
        container.appendChild(caloriesInput);

    

    mealsForm.appendChild(container);
}


btnAddMeal.addEventListener('click', function(){
    if(!budgetSubmitted){
        alert('Please submit your calorie budget');
    } else {
        choosingMeal(meals.value);
        console.log(meals.value);

    }
})


//Getting calories and Calculating --------

function CalculateCalories(budget, plan){
    console.log(budget - plan);
    return budget - plan;
}

mealsForm.addEventListener('submit', function(e){
    e.preventDefault();
    let caloriesSubmitted = 0;
    
    const caloriesVal = document.querySelectorAll('.mealsForm .mealContainer input[type="number"]');

    caloriesVal.forEach(item => {
        console.log(typeof item.value);
        const valueToNumber = Number(item.value);
        // console.log(valueToNumber);

        caloriesSubmitted += valueToNumber;
        console.log(caloriesSubmitted);
    })

    summaryContainer.style.display = "flex";


    calculateBtn.onclick = CalculateCalories(budgetSubmitted, caloriesSubmitted);
    remainingCal.innerText = CalculateCalories(budgetSubmitted, caloriesSubmitted);
    budgetSpan.innerText = budgetSubmitted;
    consumedSpan.innerText = caloriesSubmitted;

})
