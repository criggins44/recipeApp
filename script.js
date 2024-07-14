//GET
//const axios = require ("axios");
let url = "https://www.themealdb.com/api/json/v1/1/random.php";
let displayContainer = document.getElementById("display-container");
let thumbNail = document.getElementById("thumbnail-container");
let recipeBtn = document.getElementById("recipe-btn");
let videoBtn = document.getElementById("video-btn");

//thumbNail.innerHTML = `insert thumbnail here`;
//displayResults.innerHTML = `display recipe results here`;

/*
axios.get(url).then((res)=> {
    let myMeal = res.data.meals[0];
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
    console.log(ingredientList);
    let list = document.createElement("ul");

    ingredientList.forEach((i) => {
        let listItem = document.createElement("li");
        listItem.innerText = i;
        list.appendChild(listItem);
        displayContainer.appendChild(list);
    })
});
*/

recipeBtn.addEventListener("click", function(){
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

//generates new recipe and tutorial video with each mouse click

        /*
        videoBtn.addEventListener("click", function(){
            window.open(res.data.meals[0].strYoutube);
        })

        videoBtn.removeEventListener("click", function(){
            window.open(res.data.meals[0].strYoutube);
        })
        */
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