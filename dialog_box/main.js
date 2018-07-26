$(document).ready(function() {
	var dialog, form,
	zipcode = $("#zipcode"),
	allFields = $([]).add(zipcode);
	$("#loc").button().on("click", function() {
		dialog.dialog("open");
	});


	dialog = $(".toggler").dialog({
		autoOpen: false,
		modal: true,
		buttons: {
			"Track": googlemap,
			Cancel: function() {
				dialog.dialog("close");
			}
		},
		close: function() {
			form[0].reset();
			//allFields.removeClass("ui-state-error");
		},
		show: {
        effect: "slide",
        duration: 900
      },
      hide: {
        effect: "blind",
        duration: 900
      }
	});
	form = dialog.find("form").on("submit", function(event){
		event.preventDefault();
		googlemap();
	});

	function googlemap(){
		
		return true;
	}

});