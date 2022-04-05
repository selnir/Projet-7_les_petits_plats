

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
    document.getElementById("myDropdown_ingredient").firstElementChild.insertAdjacentHTML("afterend",refreshmenu(".ingredient"));
    const menu=document.getElementsByClassName("dropdown-content");

const tags = document.querySelectorAll('.buttonTag');
// je récupère dans le DOM, l'emplacement des tags à selectionner

const j = tags.length;

for(let i=0; i<j; i++){
  // je loop au travers chaque tags 

     tags[i].addEventListener("click", function(){
          // J'écoute l'évènement click sur chaque tag
          // On récupère la valeur textuelle du tag
          // https://developer.mozilla.org/fr/docs/Web/HTML/Global_attributes/data-*

          const actualTag = this.dataset?.tag;
          // Je récupère dans le DOM le tag selectionné, et récupère son nom exact, grace au data-tag
          
          // Je construis les tags 
          const taghtml=`<div class="chip">
          ${actualTag}
          <span class="closebtn" onclick="this.parentElement.style.display='none'"
            >&times;</span
          >
        </div>`;
        filterTag(actualTag);

            document.getElementById("chip-section").innerHTML=taghtml;
            document.getElementById("myDropdown_ingredient").classList.toggle("show");


     });

}

};

init();
