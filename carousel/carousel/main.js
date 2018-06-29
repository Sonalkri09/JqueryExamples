/*var slideIndex = 1;
showDivs(slideIndex);*/

var slideIndex = 1;
function plusDivs(n) {
  showDivs(slideIndex += n);
}
function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var y = document.getElementsByClassName("badge");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  for (i = 0; i < y.length; i++) {
      y[i].className = y[i].className.replace(" active", "");
  }
  x[slideIndex-1].style.display = "block";
  y[slideIndex-1].className += " active";
}


$(document).ready(function(){
   
    showDivs(slideIndex);
    $(".left").on("click", function(){
        plusDivs(-1);
    });
    $(".right").on("click", function(){
        plusDivs(1);
    });

});