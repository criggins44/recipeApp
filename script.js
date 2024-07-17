//GET
//const axios = require ("axios");
let url = "https://www.themealdb.com/api/json/v1/1/random.php";
let displayContainer = document.getElementById("display-container");
let thumbNail = document.getElementById("thumbnail-container");
let recipeBtn = document.getElementById("recipe-btn");
let videoBtn = document.getElementById("video-btn");


//thumbNail.innerHTML = `insert thumbnail here`;
//displayResults.innerHTML = `display recipe results here`;

//creates the function called by eventListeners that populates the recipe and instructions
let getRecipe = () => {
    axios.get(url).then(res => {
        let myMeal = res.data.meals[0];
        thumbNail.innerHTML = `
        <img id='thumbnail' src=${myMeal.strMealThumb}>
        <p class='label'>${myMeal.strMeal}</p>
        <p class='label'>${myMeal.strArea}</p>
        `
        displayContainer.innerHTML = `
        ${myMeal.strInstructions}
        `;

//populates the instructions for making the dish
        let ingredientList = [];
        let count = 1;
        for(i in myMeal){
            let ingredient = "";
            let measure = "";
            if (i.startsWith("strIngredient") && myMeal[i]) {
                ingredient = myMeal[i];
                measure = myMeal[`strMeasure` + count];
                count += 1;
                console.log(ingredient, measure);
                ingredientList.push(`${measure} ${ingredient}`);
            }
        };

 //creates a bulleted list based on the ingredients from the website       
        let list = document.createElement("ul");

        ingredientList.forEach((i) => {
            let listItem = document.createElement("li");
            listItem.innerText = i;
            list.appendChild(listItem);
            displayContainer.appendChild(list);
        })
        
        let videoClip = () => {
            window.open(res.data.meals[0].strYoutube);
            videoBtn.removeEventListener("click", videoClip);
        }
//creats the function used to remove the event listener in order to retrieve new video

        videoBtn.addEventListener("click", videoClip)

    }) 
};

document.addEventListener("DOMContentLoaded", getRecipe);

recipeBtn.addEventListener("click", getRecipe);
