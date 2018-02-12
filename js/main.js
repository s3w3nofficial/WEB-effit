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
        $(".main-circle .heading").text("Úøady");
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

$(".functions .collapse-button").click(function() {
    console.log("neco");
    if($(this).text() == "keyboard_arrow_down")
    {
        $(this).text("keyboard_arrow_up");
    } else {
        $(this).text("keyboard_arrow_down");
    }
});