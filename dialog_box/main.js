$(document).ready(function() {
	var geocoder;
  	var map;
	var dialog, form,
	zipcode = $("#zipcode"),
	allFields = $([]).add(zipcode);
 

	$("#loc").button().on("click", function() {
		dialog.dialog("open");
	});

    $("#call").on('click', function() {
        var link = "tel:18003334444";
        window.location.href = link;
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
        var address = document.getElementById('zipcode').value;
        var geocoder = new google.maps.Geocoder();
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 8,
          center: {lat: -34.397, lng: 150.644}
        });
        geocoder.geocode({'address': address}, function(results, status) {
          if (status === 'OK') {
            map.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
              map: map,
              position: results[0].geometry.location
            });
          } else {
            alert('Geocode was not successful for the following reason: ' + status);
          }
        });
	     
		
		return true;
	}

});
