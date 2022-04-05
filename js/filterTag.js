function filterTag(Tagname){

    const cards=getrecipeshtml()

    cards.forEach((card)=>{
        if(card.innerText.includes(Tagname)!=true){
            card.style.display="none";

        }
    });

}