function search_recipe(){

    let input = document.getElementById('search_recipe').value;
    input=input.toLowerCase();

    const cards=getrecipeshtml();

    cards.forEach((card)=>{
    if(card.textContent.toLowerCase().includes(input)!=true){
        card.parentElement.style.display="none";
    }
    else{
        card.parentElement.style.display="block";
    }
        refreshmenus();})}



