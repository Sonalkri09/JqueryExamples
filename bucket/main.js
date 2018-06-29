$('.plus').click(function() {
    var randomColor = '#'+ ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);
    var thisBucket = $(this).closest('.bucket');
    $(thisBucket).find('ol').append('<li style="background-color: '+randomColor+';"></li>');
});

$('.minus').click(function() {
    var thisBucket = $(this).closest('.bucket');
    $(thisBucket).find('li:last').remove();
});

$(document).on("click", "li" , function() {
    var id = $(this).closest('.bucket').attr('id');
    var num = $('.bucket').length;
    if(id == num)
    {
        $('.bucket:first').find('ol').append(this);
    }
    else
    {
        $(this).closest('.bucket').next('.bucket').find('ol').append(this);
    } 
 });
