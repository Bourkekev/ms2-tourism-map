/* jQuery -----------------------------------------------------------*/
$(document).ready(function () {
    /* Close navbar on click sub-menu */
    $(".navbar-nav .nav-link").on("click", function () {
        $(".navbar-collapse").collapse("hide");
    });
    /* BS tooltip */
    $("body").tooltip({ selector: "[data-toggle=tooltip]" });
    //show more weather widget
    $(".more-weather-link").click(function () {
        $("#more-weather").slideToggle(300);
        if ($('.view-more-text').text() == "View more") {
            $('.view-more-text').text("View less");
        } else {
            $('.view-more-text').text("View more");
        }
    });
    $(".less-weather-link").click(function () {
        $("#more-weather").slideToggle(300);
        if ($('.view-more-text').text() == "View less") {
            $('.view-more-text').text("View more");
        } else {
            $('.view-more-text').text("View less");
        }
    });
    /**
     * Opens the take notes section and changes text depending on text
     */
    $(".open-notes").on("click", function () {
        $("#take-notes").toggleClass("opened");
        if ($(this).text() == "Open notes") {
            $(this).text("Close notes");
        } else {
            $(this).text("Open notes");
        }
    });
    /**
     * Moves the weather widget when reach 992px wide
     */
    let weatherWidget = $(".dublin-weather-outer");
    // on page load
    if ($(window).width() > 991) {
        $(weatherWidget).appendTo(".navbar");
    }
    // on window resize
    $(window).resize(function () {
        if ($(window).width() > 991) {
            $(weatherWidget).appendTo(".navbar");
        } else {
            $(weatherWidget).prependTo(".topbar .row > .col-9");
        }
    });
});
