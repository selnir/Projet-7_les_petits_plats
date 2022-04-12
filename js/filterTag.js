function filterTag(Tagname){

    const cards=getrecipeshtml()

    cards.forEach((card)=>{
        if(card.innerText.includes(Tagname)!=true){
            card.parentElement.style.display="none";
        }
    });
return;
}

function taghandle(actualTag){
    // const tags = document.querySelectorAll('.buttonTag');
    // je récupère dans le DOM, l'emplacement des tags à selectionner
    
    // const j = tags.length;
    
    // for(let i=0; i<j; i++){
      // je loop au travers chaque tags 
    
        //  tags[i].addEventListener("click", function(){
              // J'écoute l'évènement click sur chaque tag
              // On récupère la valeur textuelle du tag
              // https://developer.mozilla.org/fr/docs/Web/HTML/Global_attributes/data-*
    
            // const actualTag = this.dataset?.tag;
              // Je récupère dans le DOM le tag selectionné, et récupère son nom exact, grace au data-tag
              
              // Je construis les tags 
            const taghtml=`<div class="chip" data-tag="${actualTag}">
            ${actualTag}
            <span class="closebtn" onclick="erasefilter(this)"
            >&times;</span>
            </div>`;
            filterTag(actualTag);
    
            document.getElementById("chip-section").insertAdjacentHTML("afterend",taghtml);
            document.getElementById("menu_buttontag").innerHTML=refreshmenu(".item-menu");
            document.getElementById("myDropdown_ingredient").classList.toggle("show");
        //  });
    // }
    }

    function erasefilter(closebtn){

       const Tagname=closebtn.parentElement.dataset.tag;
        closebtn.parentElement.style.display='none';
        const cards=getrecipeshtml()

        cards.forEach((card)=>{
        if(card.innerText.includes(Tagname)!=true){
            card.parentElement.style.display="block";
        }
    });
    document.getElementById("menu_buttontag").innerHTML=refreshmenu(".item-menu");


    }