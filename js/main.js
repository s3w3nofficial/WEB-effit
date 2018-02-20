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
        $(".main-circle .heading").text("Organizace");
        $(".main-circle .text").text("Lorem ipsum");
    } else if($(this).attr("class").indexOf("c2") >= 0)
    {
        $(".main-circle .heading").text("Správa");
        $(".main-circle .text").text("Lorem ipsum");
    } else if($(this).attr("class").indexOf("c3") >= 0)
    {
        $(".main-circle .heading").text("Úřady");
        $(".main-circle .text").text("Lorem ipsum");
    } else if($(this).attr("class").indexOf("c4") >= 0)
    {
        $(".main-circle .heading").text("Školství");
        $(".main-circle .text").text("Lorem ipsum");
    } else if($(this).attr("class").indexOf("c5") >= 0)
    {
        $(".main-circle .heading").text("Zdravotnictví");
        $(".main-circle .text").text("Lorem ipsum");
    } 
});

function checker() {
    if($(this).text() == "keyboard_arrow_down")
    {
        $(this).parent().parent().parent().children('.col-8').children('.subheading').css({
            "text-overflow": "unset",
            "white-space": "unset",
            "overflow": "unset",
        });

        $(this).parent().parent().parent().children('.col-8').children('.heading').css({
            "color": "#f44336",
        });

        $(this).text("keyboard_arrow_up");
    } else {
        $(this).parent().parent().parent().children('.col-8').children('.subheading').css({
            "text-overflow": "ellipsis",
            "white-space": "nowrap",
            "overflow": "hidden",
        });

        $(this).parent().parent().parent().children('.col-8').children('.heading').css({
            "color": "#455a64",
        });

        $(this).text("keyboard_arrow_down");
    }
}

$(".functions .collapse-button").click(function() {
    checker();
});