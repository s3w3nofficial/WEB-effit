var finished = true;

$(".functions-button").click(function() {
    $('html, body').animate({
        scrollTop: $(".functions").offset().top-80
    }, 2000);
});

$(".button-scroll").click(function() {
    $('html, body').animate({
        scrollTop: $(".spectrum").offset().top
    }, 2000);
});

$(".spectrum .circle").click(function(){
    $(".spectrum .circle ").removeClass("active");
    $(this).addClass("active");

    if($(this).attr("class").indexOf("c1") >= 0)
    {
        $(".main-circle .heading").text("Komerční firmy");
        $(".main-circle .text").text("Lorem ipsum");
    } else if($(this).attr("class").indexOf("c2") >= 0)
    {
        $(".main-circle .heading").text("Distribuce");
        $(".main-circle .text").text("Lorem ipsum");
    } else if($(this).attr("class").indexOf("c3") >= 0)
    {
        $(".main-circle .heading").text("Školství");
        $(".main-circle .text").text("Lorem ipsum");
    } else if($(this).attr("class").indexOf("c4") >= 0)
    {
        $(".main-circle .heading").text("Úřady");
        $(".main-circle .text").text("Lorem ipsum");
    } else if($(this).attr("class").indexOf("c5") >= 0)
    {
        $(".main-circle .heading").text("Zdravotnictví");
        $(".main-circle .text").text("Lorem ipsum");
    } 
});

$(".functions .collapse-href").click(function( event ) {
    event.preventDefault();
});

$('.collapse').on('shown.bs.collapse', function (e) {
    $(this).parent().children('.row').children('.col-1').children('.collapse-href').children('.collapse-button').text("keyboard_arrow_up")
    $(this).parent().children('.row').children('.collapse-card-text').children('.subheading').css({
        "text-overflow": "unset",
        "white-space": "unset",
        "overflow": "unset",
    });
})

$('.collapse').on('hide.bs.collapse', function (e) {
    $(this).parent().children('.row').children('.col-1').children('.collapse-href').children('.collapse-button').text("keyboard_arrow_down")
    $(this).parent().children('.row').children('.collapse-card-text').children('.subheading').css({
        "text-overflow": "ellipsis",
        "white-space": "nowrap",
        "overflow": "hidden",
    });
})

$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
    console.log(event)
    event.parent();
});