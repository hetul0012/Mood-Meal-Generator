window.onload = function() {

//  Get Elements
var result = document.getElementById("result");
var meal_img = document.getElementById("meal-image");
var ingredients_name = document.getElementById("ingredients");
var spin_button = document.getElementById("spinButton");

//Meal variable
var meals = [
    // Happy Mood Meals
    { name: "Grilled Chicken Salad", image: "image/grilled-chicken-salad.jpg", ingredients: ["Chicken", "Lettuce", "Tomato"], mood: "Happy" },
    { name: "Chocolate lava cake", image: "image/chocolate-lavacake.jpg", ingredients: ["Chocolate", "Egg", "Vanilla"], mood: "Happy" },
    { name: "Cheese Burger", image: "image/cheeseburger.jpg", ingredients: ["Cheese", "Lettuce", "Tomato", "Bun"], mood: "Happy" },
    { name: "Pizza", image: "image/pizza.jpg", ingredients: ["Dough", "Cheese", "Pepperoni", "Olives"], mood: "Happy" },
    { name: "Pasta", image: "image/pasta.png", ingredients: ["Pasta","Eggs", "Cheese", "Black Pepper"], mood: "Happy" },

    // Sad Mood Meals
    { name: "Quinoa Bowl", image: "image/quinoa-bowl.jpg", ingredients: ["Quinoa", "Avocado", "Tomato", "Cucumber"], mood: "Sad" },
    { name: "Vegetable Soup", image: "image/vegetable-soup.jpg", ingredients: ["Carrot", "Potato", "Onion", "Garlic"], mood: "Sad" },
    { name: "Fruit Salad", image: "image/fruit-salad.jpg", ingredients: ["Apple", "Banana", "Strawberries", "Grapes", "Orange"], mood: "Sad" },
    { name: "Minestrone Soup", image: "image/minestrone-soup.jpg", ingredients: ["Beans", "Tomato", "Carrot", "Garlic"], mood: "Sad" },
    { name: "Avocado Toast", image: "image/avocado-toast.jpg", ingredients: ["Avocado", "Bread", "Olive Oil", "Lemon",], mood: "Sad" },

    // Tired Mood Meals
    { name: "Veggie Stir Fry", image: "image/veggie-stir-fry.jpg", ingredients: ["Broccoli", "Carrot", "Bell Peppers",], mood: "Tired" },
    { name: "Paneer Tikka", image: "image/paneer-tikka.jpg", ingredients: ["Paneer", "Yogurt", "Garlic"], mood: "Tired" },
    { name: "Egg Sandwich", image: "image/egg-sandwiches.jpg", ingredients: ["Egg", "Bread", "Lettuce"], mood: "Tired" },
    { name: "Pasta Primavera", image: "image/pasta-primavera.jpg", ingredients: ["Pasta", "Garlic", "Olive Oil"], mood: "Tired" },
    { name: "Smoothie Bowl", image: "image/smoothie-bowl.jpg", ingredients: ["Banana", "Strawberries", "Chia Seeds", "Granola"], mood: "Tired" },

    // Exhausted Mood Meals
    { name: "Spiced Tacos", image: "image/spiced-tacos.jpg", ingredients: ["Taco Shells", "Lettuce", "Cheese", "Salsa"], mood: "Exhausted" },
    { name: "Fried Chicken", image: "image/fried-chicken.jpg", ingredients: ["Chicken", "Eggs", "Breadcrumbs", "Spices"], mood: "Exhausted" },
    { name: "Chicken Nuggets", image: "image/chicken-nuggets.jpg", ingredients: ["Chicken", "Breadcrumbs", "Eggs", "Flour"], mood: "Exhausted" },
    { name: "Mac & Cheese", image: "image/baked-mac-cheese.jpg", ingredients: ["Macaroni", "Cheese", "Flour"], mood: "Exhausted" },
    { name: "Burger and Fries", image: "image/burger-fries.jpg", ingredients: ["Cheese", "Bun", "Potatoess", "Ketchup"], mood: "Exhausted" }
];


function getMeal(mood) {
    var filteredMeals = meals.filter(meal => meal.mood === mood);
    if (filteredMeals.length === 0){
        return {
            name: "No meals match your mood! Try selecting another mood.",
            ingredients: [] 
        };
    } 
    var randomMeal = Math.floor(Math.random() * filteredMeals.length);
    return filteredMeals[randomMeal];
}

function suggestMealByMood() {
    var mood = document.querySelector('input[name="mood"]:checked').value;
    var meal = getMeal(mood);
    result.innerText = "You should eat: " + meal.name;
    meal_img.src = meal.image;
    if (meal.image) {
        meal_img.style.display = "block";
    } else {
        meal_img.style.display = "none";
    }
    ingredients_name.innerText = "Ingredients: " + meal.ingredients.join(", ");
}

function spinForMeal() {
    var mood = document.querySelector('input[name="mood"]:checked');
    if (mood =! mood ) {
        alert("Please select a mood first.");
        return;
    }

    suggestMealByMood();
    spin_button.textContent = "Spin Again!";
}

    spin_button.addEventListener("click", spinForMeal);
};
