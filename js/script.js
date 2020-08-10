$(document).ready(function () {

    $(".card").hover(hoverIn, hoverOut);

    function hoverIn() {
        $(this).children(".card-img").css("filter", "blur(5px)");
        $(this).children(".desc").addClass("showDesc");
        $(this).children(".desc").removeClass("hideDesc");
    }

    function hoverOut() {
        $(this).children(".card-img").css("filter", "blur(0px)");
        $(this).children(".desc").addClass("hideDesc");
        $(this).children(".desc").removeClass("showDesc");
    }

});