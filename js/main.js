/* Intended for průvodce objednávkou
function setupBuyForm(version) {
	$('#buyform select[name="selectedversion"]').val(version);
	$('#buyformimg')[0].src = '/assets/img/' + $('#buyform select[name="selectedversion"]').val() + '.png';
}
*/

function setupBuyForm(version) {
	$('#contactform select[name="selectedversion"]').val(version);
	if (version != "just_contact") {
		$('#contactform input[name="systemmessage"').val('Objednávka');
	} else {
		$('#contactform input[name="systemmessage"').val('Vzkaz z kontaktního formuláře');
	}
}

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
});

$('#buyform select[name="selectedversion"]').change(function() {
    $('#buyformimg')[0].src = '/assets/img/' + $('#buyform select[name="selectedversion"]').val() + '.png';
});

$('#contactform select[name="selectedversion"]').change(function() {
    setupBuyForm($('#contactform select[name="selectedversion"]').val());
});

$('#sendmessagebutton').on('click', function () {
	var objednavanaVarianta = "";
	var objednavanaVariantaRaw = $('#contactform select[name="selectedversion"]').val();
	switch (objednavanaVariantaRaw) {
		case "mala_firma":
			objednavanaVarianta = "EFFIT GDPR Pro malou firmu";
			break;
		case "stredni_firma":
			objednavanaVarianta = "EFFIT GDPR Pro střední firmu";
			break;
		case "velka_firma":
			objednavanaVarianta = "EFFIT GDPR Pro velkou firmu";
			break;
	}
	var msg = `Vážený správce,

tímto Vás informujeme, že jste byl kontaktován pomocí webu EFFIT. Detaily o tomto kontaktu naleznete níže. Na tento e-mail můžete odpovědět stisknutím tlačítka Odpovědět ve svém e-mailovém klientovi.

S pozdravem,
Váš přátelský zasílač hlášení EFFIT

---- DATA ----
Jméno: ` + $('#contactform input[name="name"').val() + `
E-mail: ` + $('#contactform input[name="email"]').val()  + `
Telefon: ` + $('#contactform input[name="tel"').val() + `
Firma: ` + $('#contactform input[name="company"').val() + `
Poznámka systému: ` + $('#contactform input[name="systemmessage"').val() + `
Objednávaná varianta: ` + objednavanaVarianta + `

` + $('#contactform input[name="message"').val();
	$.post('/mailer.php', {
		from: "noreply@webappky.cz",
		to: "test@webappky.cz",
		message: msg,
		subject: "[EFFIT] Kontakt od " + $('#contactform input[name="name"').val(),
		replyto: $('#contactform input[name="email"').val(),
	}, function (data) {
		console.log('email sent');
		$('contactus').modal('hide');
		alert('Mail byl odeslán');
		console.log(msg);
	});
});

$('#buybutton').on('click', function () {
	$('#contactform input[name="company"').val($('#buyform input[name="name"').val() + ", sídlící na " + $('#buyform input[name="company_address"').val() + ', IČO ' + $('#buyform input[name="ico"').val());
	$('#contactform input[name="systemmessage"').val('Objednávka');
	$('#contactform input[name="name"').val($('#buyform input[name="contact_person"]').val());
	$('#contactform input[name="tel"]').val($('#buyform input[name="tel"]').val());
	$('#contactform input[name="email"]').val($('#buyform input[name="email"]').val());
	$('#buyModal').modal('hide');
	$('#contactus').modal('show');
	$('#contactformhead').text('Dokončete svou objednávku');
});

$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
    console.log(event)
    event.parent();
});
