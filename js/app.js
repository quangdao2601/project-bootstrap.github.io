$(document).ready(function () {
    $(window).resize(function () {
        if ($(document).width() <= 768) {
            $(".explore-more").addClass('explore-more-sm');
        }
        if ($(document).width() > 768) {
            $(".explore-more").removeClass('explore-more-sm');
        }
    })
    $(".icon-menu").click(function () {
        $(".respon-menu").slideToggle();
        return false;
    })
})