// evento de mouseover

var par = document.querySelector(".hide");
var title = document.querySelector("#title");

title.addEventListener("mouseover", function(){
    
    this.style.backgroundColor = "yellow"
    par.style.display = "block"    
});


// evento mouseout

title.addEventListener("mouseout", function(){

    this.style.backgroundColor = "red"
    par.style.display = "none"  
});


