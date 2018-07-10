var dataGroup = [];
var i=0;
$(function () { 
    $(document).on('click', '#btn', function (e) {
       
        $('#event').each(function () {
            var emailData = {}; 
            emailData[$(this).data('name')] = $(this).val();
            dataGroup.push(emailData);
        });      
                var newHTML = '<div class="selected"><span>'+dataGroup[i].event+'</span><button type="button" class="delete" id="minusButton">x</button><hr></div>';
                $(".res").append( newHTML );
                i++;
                //var output = JSON.stringify(dataGroup);
    });

})
$(document).on('click','.delete', function(e) {
   $(this).closest('.selected').remove();
    console.log('removed');
});


