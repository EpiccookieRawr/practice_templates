$(document).ready(function() {
    /* For the sticky navigation */
    $('.js--explain-section').waypoint(function(direction) {
        console.log(direction);
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '60px;'
    });
});