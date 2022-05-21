$(function(){
    // Preloader Start
    $(window).on('load', function(){
        $('#preloader').fadeOut(1000);
    })
    // Preloader End



    // Back To Top Button Start
    $(window).on('scroll', function(){
        var scrollSize = $(document).scrollTop();
        console.log($(document).scrollTop());
        if(scrollSize > 500){
            $('#backToTop').fadeIn();
        }
        else{
            $('#backToTop').fadeOut();
        }
    });

    $('#backToTop').on('click', function(){
        $('html, body').animate({
            scrollTop: 0
        }, 500)
    });
    // Back To Top Button End
})