function recipesFactory(data) {
    function getUserCardDOM() {
      var ingredienthtml='';
      var unite="";
      var quantite="";
      var point="";
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

          if(ingredients.quantity==undefined&ingredients.unit==undefined){

            point="";           


          }else{
            point=":"

          }

            ingredienthtml=ingredienthtml+`<li class="list-group-item"><div class="ingredient">${ingredients.ingredient}</div><div>${point}</div><div>${quantite}${unite}</div></li>`
            
        });
        data.ustensils.forEach((ustensils)=>{

          ingredienthtml=ingredienthtml+`<div class="ustensile">${ustensils}</div>`


        });
        ingredienthtml=ingredienthtml+`<div class="appliance">${data.appliance}</div>`



        cardshtml=`<div class="container-fluid" id="${data.id}">
        <div class="card h-100">
          <img src="assets/img.jpg" class="card-img-top h-50" alt="..." />
          <div class="card-body row row-cols-2 h-50 w-100" id="${data.id}">
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