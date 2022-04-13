function filterTag(Tagname){

    const cards=getrecipeshtml()

    cards.forEach((card)=>{
        if(card.innerText.includes(Tagname)!=true){
            card.parentElement.style.display="none";
        }
    });
return;
}

function taghandle(button){

           const actualTag=button.dataset.tag;
 
            const taghtml=`<div class="chip" data-tag="${actualTag}">
            ${actualTag}
            <span class="closebtn" onclick="erasefilter(this)"
            >&times;</span>
            </div>`;
            filterTag(actualTag);
    
            document.getElementById("chip-section").insertAdjacentHTML("afterend",taghtml);
            refreshmenus();            
            // document.getElementById("myDropdown_ingredient").classList.toggle("show");
            toggle_menu(button.parentElement);
    
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
    refreshmenus();

    }

    function toggle_menu(btn_drp){

        // .previousElementSibling.previousElementSibling.getAttribute("id");


       const  x=btn_drp;
        switch(x) {
            case "menu_buttontag_ingredient":
                document.getElementById("myDropdown_ingredient").classList.toggle("show");
                break;
            case "menu_buttontag_appareil":
                document.getElementById("myDropdown_appareil").classList.toggle("show");
              break;

              case "menu_buttontag_ustensile":
                document.getElementById("myDropdown_ustensile").classList.toggle("show");
                break;

            default:
              // code block
          } 



    }

