var button1=document.getElementById("menu2")
var modal = document.getElementById("myModal");
var close = document.getElementById("close")



button1.addEventListener("click", Showmenu);
close.addEventListener("click",Closemenu);


function Closemenu(){

    modal.style.display="none";

}


function Showmenu() {

    modal.style.display = "block";

}