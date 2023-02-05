$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#back-to-top-btn').fadeIn();
        } else {
            $('#back-to-top-btn').fadeOut();
        }
    });

    $('#back-to-top-btn').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1600);
    });
});