const { Button } = require("bootstrap");

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
  const menu_name_list = Array.from(menu_name_nodelist);
  var menu_name_items=new Array(menu_name_list.length);
  var menu_name_items_html=``;

  menu_name_list.forEach((menu_name_item,index)=>{
    menu_name_items[index]=menu_name_item.innerText;
  });

  const menu_name_items_filtered=menu_name_items.filter((v,i) => menu_name_items.indexOf(v) == i);

  menu_name_items_filtered.forEach((menu_name_item)=>{
    menu_name_items_html=menu_name_items_html+`<button onclick="addtag()">${menu_name_item}</button>`;
  });

  return menu_name_items_html;

}

function addtag(){

 const taghtml=`<div class="chip">
 John Doe
 <span class="closebtn" onclick="this.parentElement.style.display='none'"
   >&times;</span
 >`

}
