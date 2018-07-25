$(document).ready(function() {
	var dialog, form,
	zipcode = $("#zipcode"),
	allFields = $([]).add(zipcode);
	$("#loc").button().on("click", function() {
		dialog.dialog("open");
	});

	dialog = $("#dialog-form").dialog({
		autoOpen: false,
		height:400,
		width: 350,
		modal: true,
		buttons: {
			"Track": googlemap,
			Cancel: function() {
				dialog.dialog("close");
			}
		},
		close: function() {
			form[0].reset();
			allFields.removeClass("ui-state-error");
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