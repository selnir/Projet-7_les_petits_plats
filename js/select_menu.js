
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction(btn_menu) {
  document.getElementById(btn_menu.nextElementSibling.getAttribute("id")).classList.toggle("show");
  btn_menu.style.display="none";
  
}

function filterFunction(input) {
  var input, filter, ul, li, a, i;
  filter = input.value.toUpperCase();
  div = document.getElementById(input.parentElement.parentElement.getAttribute("id"));
  a = div.getElementsByTagName("button");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
} 

//permet de mettre a jour les bouton d'un menu apres selection d'un tag
function refreshmenu(menu_name){
  
  const menu_name_nodelist=document.querySelectorAll(menu_name);
  const item_tag_display=new Array();
  const menu_name_list = Array.from(menu_name_nodelist);
  var menu_name_items_html=``;
  var n=0;

  menu_name_nodelist.forEach((item_tag)=>{
    item_container=item_tag.parentElement.parentElement.parentElement.parentElement.parentElement;
    item_tag_comp_display=getComputedStyle(item_container,null).display;

    if(item_tag_comp_display!="none"){

      

      item_tag_display[n]=item_tag.innerText;

      n=n+1;
    }
  });

  const menu_name_items_filtered=item_tag_display.filter((v,i) => item_tag_display.indexOf(v) == i);

  menu_name_items_filtered.forEach((menu_name_item)=>{
    menu_name_items_html=menu_name_items_html+`<button onclick="taghandle(this,this.parentElement)" type="button" class="buttonTag" data-tag="${menu_name_item}">${menu_name_item}</button>`;
  });

  return menu_name_items_html;

}

//permet la mise a jour de tous les menu apres selection d'un tag.
function refreshmenus(){

  document.getElementById("menu_buttontag_ingredient").innerHTML=refreshmenu(".ingredient");
  document.getElementById("menu_buttontag_appareil").innerHTML=refreshmenu(".appliance");
  document.getElementById("menu_buttontag_ustensile").innerHTML=refreshmenu(".ustensile");


}