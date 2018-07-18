/*$(document).ready(function() {
    $('.add-to-heart').toggle(
    	function() {
        $(this)
        .css('background','url(https://www.carters.com/on/demandware.static/Sites-Carters-Site/-/default/v1528743962165/images/mobileSprite.svg) -222px -71px no-repeat');
        },
        function () {
        $(this)
        .css('background','url(https://www.carters.com/on/demandware.static/Sites-Carters-Site/-/default/v1528743962165/images/mobileSprite.svg) -268px -71px no-repeat');
    });
});*/
$(document).ready(function() {
	$('.add-to-heart').click(function(){
		$(this).toggleClass("main");
	})
})