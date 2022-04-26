// function search_recipe(){

//     let input = document.getElementById('search_recipe').value;
//     input=input.toLowerCase();
//     let x = document.getElementsByClassName('card');
      
//     for (i = 0; i < x.length; i++) { 
//         if (!x[i].textContent.toLowerCase().includes(input)) {
//             x[i].parentElement.style.display="none";
//         }
//         else {
//             x[i].parentElement.style.display="block";                 
//         }
//     }
//     refreshmenus();

// }
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


