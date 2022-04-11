

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
    document.getElementById("menu_buttontag").innerHTML=refreshmenu(".item-menu");



};

init();
