function filterTag(Tagname){

    const cards=getrecipeshtml()
    var hiddencards=new Array();

    cards.forEach((card)=>{
        if(card.innerText.includes(Tagname)!=true){
            card.parentElement.style.display="none";
            hiddencards.forEach((hiddencard)=>{
                hiddencard=card.parentElement.getAttribute("id");

            });
        }
    });
return hiddencards;
}