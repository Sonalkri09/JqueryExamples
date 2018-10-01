$(document).ready(function() {
  setInterval('updateEvent()', 1000);
     $('#btn').click(function() {
            $.ajax({
            type: "POST",
            url: "http://localhost:3000/menu",
            dataType: "json",
            data: {
                "value":$("#event").val()
            },
            success: function (data) {
               alert('Success');

            },
            error: function () {
             alert('Error');
            }
        });
          $("#event").val("");
      });
 });
var j=0
function updateEvent(){
  $.ajax({
          url: 'http://localhost:3000/db',
          data: {
             format: 'json'
          },
          error: function() {
            $('.res').html('<p>An error has occurred</p>');
          },
          dataType: 'jsonp',
          success: function(data) {
            for(; j<data.menu.length;j++){
            var newHTML = '<div class="selected" id="'+data.menu[j].id+'"><span>'+data.menu[j].value+'</span><button type="button" class="delete" id="minusButton">x</button><hr></div>';
            $('.res').append(newHTML);
          }
        },
          type: 'GET'
       });
}

$(document).on('click','.delete', function() {
  var $id = $(this).closest('.selected').attr('id');
    $.ajax({
        url: 'http://localhost:3000/menu/' + $id,
        data: {
             format: 'json'
        },
        type: 'DELETE',
        success: function(data) {
            updateEvent();
        }
    });
    $(this).closest('.selected').remove();


  var todolist = ["Travelling","Horse Riding","Playing","Studying","Coding","Reading","Learning"];

  $("#event").autocomplete({
    source: function( request, response ) {
          var matcher = new RegExp( "^" + $.ui.autocomplete.escapeRegex( request.term ), "i" );
          response( $.grep( todolist, function( item ){
              return matcher.test( item );
          }) );
      }
   });
});