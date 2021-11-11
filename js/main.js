var asidebutton = document.getElementById("aside-button"),
    asideMmenu  = document.getElementById("aside-menu"),
    fff = document.getElementById("adell"),   
    gg = document.getElementById("add");    

asidebutton.onclick= function(){
    'use strict';
    asideMmenu.classList.toggle("active");
    fff.classList.toggle("dd");
}

gg.onclick= function(){
    'use strict';
    asideMmenu.classList.remove("active");
    fff.classList.remove("dd");
}