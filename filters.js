function generateIngredientsFromJs(ingredients) {
    let result = ""; // on déclare une chaîne de caractères vide

    ingredients.forEach(ingredientElement => {
        /*'<p>' + ingredientElement.ingredient + ': ' + ingredientElement.quantity + '</p>' ;*/

        result = result + '<p><b>' + ingredientElement.ingredient + '</b>';

        if (ingredientElement.quantity) {
            result = result + ': ' + ingredientElement.quantity;
        }
        if (ingredientElement.unit) {
            result = result +  ' ' + ingredientElement.unit;
        }

        result = result  + '</p>';
    });
    //console.log("allô" + result);
    return result;
}

function generateRecipeFromJs(recipes) {
    recipes.forEach(recipeElement => {
        let arrayToFill1 = [];
        let recipesDisplay = document.querySelector(".recipesDisplay");
        let recipe = document.createElement("div");
        recipe.setAttribute("class", "recipe");
        recipe.setAttribute("tabindex", "0");
        recipe.setAttribute("aria-label", "recette");
        arrayToFill1.push(recipe);
        recipesDisplay.replaceChildren(...arrayToFill1);
        //console.log(recipesDisplay + ": recipesDisplay");

        let arrayToFill2 = [];
        let recipeImage = document.createElement("div");
        let recipePreparation = document.createElement("div");
        recipeImage.setAttribute("class", "recipeImage");
        recipePreparation.setAttribute("class", "recipePreparation");
        recipeImage.innerHTML = "&nbsp;";
        arrayToFill2.push(recipeImage);
        arrayToFill2.push(recipePreparation);
        recipe.replaceChildren(...arrayToFill2);

        let arrayToFill3= [];
        let recipeNameAndTiming = document.createElement("div");
        recipeNameAndTiming.setAttribute("class", "recipeNameAndTiming");

        recipeNameAndTiming.innerHTML = 
            '<span class="recipeName">' + recipeElement.name + '</span> <span class ="recipeTiming"> <img class="time" src="images/time.png">' + recipeElement.time + ' min </span>';

        let recipeIngredientsAndInstructions = document.createElement("div");
        recipeIngredientsAndInstructions.setAttribute("class", "recipeIngredientsAndInstructions");

        recipeIngredientsAndInstructions.innerHTML =
            '<span class="recipeIngredients">' + generateIngredientsFromJs(recipeElement.ingredients) + '</span> <span class="recipeInstructions">' + recipeElement.description + '</span>';

            /*recipeElement.ingredients[0].ingredient + ': ' + recipeElement.ingredients[0].quantity + recipeElement.ingredients[0].unit*/
        
        arrayToFill3.push(recipeNameAndTiming);
        arrayToFill3.push(recipeIngredientsAndInstructions);
        recipePreparation.replaceChildren(...arrayToFill3);
    });
    
}

generateRecipeFromJs(recipes);


