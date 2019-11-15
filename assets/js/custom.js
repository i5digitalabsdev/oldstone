$(document).ready(function () {
    $(".phone-menu").click(function() {
        if($(".navigation-container-phone").css('display') == 'none'){
            $(".navigation-container-phone").css({'display':'block'})
        } else {
            $(".navigation-container-phone").css({'display':'none'})
        }
    });

    $("#menu-icon").click(function () {
        $("#nav-bar").slideToggle('fast');
    });
});

$('.owl-one').owlCarousel({
    loop:true,
    items:1,
    nav:false,
    dots:true,
    center:true
})

$('.owl-two').owlCarousel({
    loop:true,
    items:2,
    margin:5,
    nav:false,
    dots:true,
    center:true
})



