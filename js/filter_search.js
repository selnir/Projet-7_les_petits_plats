function search_recipe(){

    let input = document.getElementById('search_recipe').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('card-title');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].parentElement.parentElement.parentElement.style.display="none";
        }
        else {
            x[i].parentElement.parentElement.parentElement.style.display="block";                 
        }
    }
}




