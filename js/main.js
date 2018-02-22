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

function checker(object) {

    if($(object).text() == "keyboard_arrow_down")
    {
        $(object).parent().parent().parent().children('.col-8').children('.subheading').css({
            "text-overflow": "unset",
            "white-space": "unset",
            "overflow": "unset",
        });

        $(object).parent().parent().parent().children('.col-8').children('.heading').css({
            "color": "#f44336",
        });

        $(object).text("keyboard_arrow_up");
    } else {
        $(object).parent().parent().parent().children('.col-8').children('.subheading').css({
            "text-overflow": "ellipsis",
            "white-space": "nowrap",
            "overflow": "hidden",
        });

        $(object).parent().parent().parent().children('.col-8').children('.heading').css({
            "color": "#455a64",
        });

        $(object).text("keyboard_arrow_down");
    }
}

$(".functions .collapse-card").click(function() {
    $.when(checker()).done(function(){
        checker($(this).children('.row').children('.col-1').children('.collapse-href').children('.collapse-button'));
    });
});

$(".functions .collapse-href").click(function( event ) {
    event.preventDefault();
});