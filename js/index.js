

async function displayData(recipes) {
    const RecipeSection = document.querySelector("section");

    recipes.forEach((recipe) => {
        const recipeModel = recipesFactory(recipe);
        const userCardDOM = recipeModel.getUserCardDOM();
        RecipeSection.insertAdjacentHTML(`beforeend`,`${userCardDOM}`);
    });
};
async function init() {
    
    displayData(recipes);
    document.getElementById("myDropdown_ingredient").firstElementChild.insertAdjacentHTML("afterend",refreshmenu(".ingredient"))

};

init();
