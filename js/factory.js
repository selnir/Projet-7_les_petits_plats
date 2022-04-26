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
          <div class="header-card"><h5 class="card-title">${data.name}</h5><div class="time"><svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-clock"
          viewBox="0 0 16 16"
        >
          <path
            d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"
          />
          <path
            d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"
          />
        </svg>${data.time}min</div></div>

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