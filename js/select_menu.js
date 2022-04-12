
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown_ingredient").classList.toggle("show");
  // document.querySelector(".dropbtn").style.display="none";
}

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput_ingredient");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown_ingredient");
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



function refreshmenu(menu_name){
  

  const menu_name_nodelist=document.querySelectorAll(menu_name);
  const item_tag_display=new Array();
  const menu_name_list = Array.from(menu_name_nodelist);
  var menu_name_items_html=``;
  var n=0;

  menu_name_nodelist.forEach((item_tag)=>{
    item_container=item_tag.parentElement.parentElement.parentElement.parentElement;
    item_tag_comp_display=getComputedStyle(item_container,null).display;
    // document.getElementById("test").insertAdjacentHTML("afterend",item_tag_comp_display);

    if(item_tag_comp_display!="none"){

      

      item_tag_display[n]=item_tag.innerText;

      n=n+1;
    }
  });
  
  // item_tag_display.forEach((item)=>{

  //   document.getElementById("test").insertAdjacentElement("afterend",item);

  // })

  // menu_name_list.forEach((menu_name_item,index)=>{
  //   menu_name_items[index]=menu_name_item.innerText;
  // });

  const menu_name_items_filtered=item_tag_display.filter((v,i) => item_tag_display.indexOf(v) == i);

  menu_name_items_filtered.forEach((menu_name_item)=>{
    menu_name_items_html=menu_name_items_html+`<button onclick="taghandle(this.dataset.tag)" type="button" class="buttonTag" data-tag="${menu_name_item}">${menu_name_item}</button>`;
  });

  return menu_name_items_html;

}


// function refreshmenus({

//   document.getElementById("menu_buttontag").innerHTML=refreshmenu(".item-menu");




// })