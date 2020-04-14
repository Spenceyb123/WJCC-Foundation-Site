//smooth scrolling
$(".buttons").click(function() {
    $('html,body').animate({
        scrollTop: $("#Events").offset().top},
        "slowly");
});

$("a[href$='about']").click(function() {
    $('html,body').animate({
        scrollTop: $("#about").offset().top},
        "slowly");
});

$("a[href$='community']").click(function() {
    $('html,body').animate({
        scrollTop: $("#community").offset().top},
        "slowly");
});

$("a[href$='events']").click(function() {
    $('html,body').animate({
        scrollTop: $("#events").offset().top},
        "slowly");
});

$("a[href$='contact']").click(function() {
    $('html,body').animate({
        scrollTop: $("#contact").offset().top},
        "slowly");
});
