function search_recipe(){

    let input = document.getElementById('search_recipe').value;
    input=input.toLowerCase();
    let x = document.getElementsByClassName('card');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].parentElement.style.display="none";
        }
        else {
            x[i].parentElement.style.display="block";                 
        }
    }
    document.getElementById("menu_buttontag").innerHTML=refreshmenu(".item-menu");

}




