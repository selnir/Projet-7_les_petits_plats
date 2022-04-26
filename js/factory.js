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

          ingredienthtml=ingredienthtml+`<li class="list-group-item"><div class="ustensile">${ustensils}</div></li>`


        });
        ingredienthtml=ingredienthtml+`<li class="list-group-item"><div class="appliance">${data.appliance}</div></li>`

        

        cardshtml=`<div id="${data.id}">
        <div class="card">
          <img src="assets/img.jpg" class="card-img-top h-50" alt="..." />
          <div class="header-card"><h5 class="card-title">${data.name}</h5><div class="time"><i class="far fa-clock"></i>${data.time}min</div></div>

          <div class="card-body row row-cols-2 h-50" id="${data.id}">
            <ul class="list-group">
            ${ingredienthtml}
            </ul>
              <p class="card-text ">
              ${data.description.substring(0,147)}...</p>
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