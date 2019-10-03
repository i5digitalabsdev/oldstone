$(document).ready(function () {
    $(".phone-menu").click(function() {
        if($(".navigation-container-phone").css('display') == 'none'){
            $(".navigation-container-phone").css({'display':'block'})
        } else {
            $(".navigation-container-phone").css({'display':'none'})
        }
    });
});


