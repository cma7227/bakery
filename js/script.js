// let image00 = document.getElementById('cake-image');

// const cakeImage1 = "https://i2.wp.com/www.sugarspunrun.com/wp-content/uploads/2019/03/Best-Birthday-Cake-Recipe-1-of-1.jpg";

// image00.onclick = () => {
//     image00.src = cakeImage1;
// }

//sticky nav

$(window).on("load", function() {

    $(".loader .inner").fadeOut(500, function() {
        $(".loader").fadeOut(750);
    });
});

$(document).ready(function() {
    $('#slides').superslides({
        animation: 'fade',
        play: 5000,
        // pagination: false
    });

    //smooth scroll
    $("#navigation li a").click(function(e) {
        e.preventDefault();

        var targetElement = $(this).attr("href");
        var targetPosition = $(targetElement).offset().top;
        $("html, body").animate({scrollTop: targetPosition - 50}, "slow")
    });


})

