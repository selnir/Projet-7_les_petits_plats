function filterTag(Tagname){

    const cards=getrecipeshtml()

    cards.forEach((card)=>{
        if(card.innerHTML.includes(Tagname)!=true){
            card.parentElement.style.display="none";
        }
    });
return;
}

function taghandle(button,button_parent){
            var datacolor="";
           const actualTag=button.dataset.tag;
           switch(button_parent.id) {
            case "menu_buttontag_ingredient":
                 datacolor="blue";
                break;
            case "menu_buttontag_appareil":
                datacolor="green";
                break;

              case "menu_buttontag_ustensile":
                datacolor="red";
                break;

            default:
          } 
 
            const taghtml=`<div class="chip ${datacolor}" data-tag="${actualTag}">
            ${actualTag}
            <span class="closebtn" onclick="erasefilter(this)"
            ><i class="far fa-times-circle"></i></span>
            </div>`;
            filterTag(actualTag);
    
            document.getElementById("chip-section").insertAdjacentHTML("afterbegin",taghtml);
            refreshmenus();
            button_parent.parentElement.parentElement.firstElementChild.style.display="flex";
            toggle_menu(button_parent);
    
    }

    function erasefilter(closebtn){

       const Tagname=closebtn.parentElement.dataset.tag;
        closebtn.parentElement.style.display='none';
        const chip_section=closebtn.parentElement.parentElement;

        const cards=getrecipeshtml()

        cards.forEach((card)=>{
        if(card.innerText.includes(Tagname)!=true){
            card.parentElement.style.display="block";
        }
    });
    refreshmenus();

    }

    function toggle_menu(btn_drp){



       const  x=btn_drp.getAttribute("id");
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
          } 



    }

