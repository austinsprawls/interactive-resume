$(document).ready(function(){
    $('h6').hide();
    $('.main-body h3').toggle(
        function(){
            $(this).next('h6').fadeIn();
        }, //end clickdown
        function(){
            $(this).next('h6').fadeOut();
        } //end clickup
    ); //end toggle
});//end ready
