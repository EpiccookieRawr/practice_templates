$(document).ready(function() {
    /* For the sticky navigation */
    $('.js--explain-section').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '60px;'
    });

    //ion-close-round
    $('.js--nav-icon').click(function() {
        if($('.js--nav-icon i').hasClass('ion-navicon-round')) {
            $('.js--nav-icon i').addClass('ion-close-round');
            $('.js--nav-icon i').removeClass('ion-navicon-round');
        } else {
            $('.js--nav-icon i').removeClass('ion-close-round');
            $('.js--nav-icon i').addClass('ion-navicon-round');
        }
        $('.nav-links').toggle( "slow", function() {});
    });
});