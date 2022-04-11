function recipesFactory(data) {
    
    function getUserCardDOM() {
      var ingredienthtml='';
        data.ingredients.forEach((ingredients) => {

            ingredienthtml=ingredienthtml+`<li class="list-group-item item-menu">${ingredients.ingredient}</li><p>${ingredients.quantity}${ingredients.unit}</p>
            `
            
        });
        

        cardshtml=`<div class="col" id="${data.id}">
        <div class="card">
          <img src="..." class="card-img-top" alt="..." />
          <div class="card-body" id="${data.id}">
            <h5 class="card-title">${data.name}</h5>
            <ul class="list-group">
            ${ingredienthtml}

            </ul>
              ${data.time} min           </p>

              <p class="card-text">
              ${data.description}            </p>

              <p class="card-text appliance">
              ${data.appliance}            </p>
              <p class="card-text ustensil">

              ${data.ustensils}
            </p>
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