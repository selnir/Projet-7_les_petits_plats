function recipesFactory(data) {
    function getUserCardDOM() {
      var ingredienthtml='';
      var unite="";
      var quantite="";
        data.ingredients.forEach((ingredients) => {


          if(ingredients.unit==undefined){

            unite="";

          }else{
            unite=ingredients.unit;

          }

          if(ingredients.quantity==undefined){

            quantite="";
          }else{
            quantite=ingredients.quantity;

          }

            ingredienthtml=ingredienthtml+`<li class="list-group-item ingredient">${ingredients.ingredient} : ${quantite}${unite}</li>`
            
        });
        data.ustensils.forEach((ustensils)=>{

          ingredienthtml=ingredienthtml+`<li class="list-group-item ustensile">${ustensils}</li>`


        });
        ingredienthtml=ingredienthtml+`<li class="list-group-item appliance">${data.appliance}</li>`



        cardshtml=`<div class="col " id="${data.id}">
        <div class="card ">
          <img src="..." class="card-img-top" alt="..." />
          <div class="card-body row row-cols-2" id="${data.id}">
            <h5 class="card-title">${data.name}</h5>
            <ul class="list-group">
            ${ingredienthtml}
            </ul>
              <p class="card-text">
              ${data.description}</p>
          </div>
        </div>
      </div>`;

        return (cardshtml);
    }
    return { getUserCardDOM }}

    function getrecipeshtml(){


    const cardnodelist=document.querySelectorAll(".card");

    const cardlist = Array.from(cardnodelist);
    
    return cardlist;

    }