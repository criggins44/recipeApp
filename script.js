//GET
//const axios = require ("axios");
let url = "https://www.themealdb.com/api/json/v1/1/random.php";
let displayResults = document.getElementById("display-container");
let thumbNail = document.getElementById("thumbnail-container");
let recipeBtn = document.getElementById("recipe-btn");
let videoBtn = document.getElementById("video-btn");

//thumbNail.innerHTML = `insert thumbnail here`;
//displayResults.innerHTML = `display recipe results here`;

recipeBtn.addEventListener("click", function(){
    axios.get(url).then(res => {
        let myMeal = res.data.meals[0];
        thumbNail.innerHTML = `
        <img id='thumbnail' src=${myMeal.strMealThumb}>
        <p class='label'>${myMeal.strMeal}</p>
        <p class='label'>${myMeal.strArea}</p>
        `
        displayResults.innerHTML = `
        ${myMeal.strInstructions}
        `;
    
        videoBtn.addEventListener("click", function(){
            window.open(res.data.meals[0].strYoutube);
        })
    }) 
})


/*
axios.get(url).then(res => {
    let myMeal = res.data.meals[0];
    thumbNail.innerHTML = `
    <img id='thumbnail' src=${myMeal.strMealThumb}>
    <p class='label'>${myMeal.strMeal}</p>
    <p class='label'>${myMeal.strArea}</p>
    `
    displayResults.innerHTML = `
    ${myMeal.strInstructions}
    `;

    videoBtn.addEventListener("click", function(){
        window.open(myMeal.strYoutube)
    })
})
*/
/*
recipeBtn.addEventListener("click", () => {
    axios.get(url)
    .then(res => {
        let myMeal = res.data.meals[0];
        console.log(myMeal);
        console.log(myMeal.strMealThumb);
        console.log(myMeal.strMeal);
        console.log(myMeal.strArea);
        console.log(myMeal.strInstructions);
        let ingredientsList = [];
        let count = 1;

        for(i in myMeal){
            let ingredient = "";
            let measurements = "";

            if (i.startsWith("strIngredient") && myMeal[i]){
                ingredient = myMeal[i];
                measurements = myMeal[`strMeasure` + count];
                count +=1;
                ingredientsList.push(`${measurements} ${ingredient}`);
            }
        }
    })
    displayResults.innerHTML = `test this`;
    .catch(err => console.log(err));
})
*/