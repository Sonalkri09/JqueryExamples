
$(document).ready(function() {
	$("#btn").click(function(e){

	var formData = JSON.stringify($("#myForm").serializeArray());
	 console.log(formData);
//localStorage.setItem('myStorage', formData);


   
    var request = new XMLHttpRequest();
    var URL = "http://localhost:3000/db";
    request.open("POST", URL);
    request.setRequestHeader("Content-Type",
                             "text/plain;charset=UTF-8");
    request.send();
           


	})
});

$(".toggle-password").click(function() {
  $(this).toggleClass("fa-eye fa-eye-slash");
  var input = $($(this).attr("toggle"));
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});

