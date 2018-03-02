<?php
if ($_POST) {
	// Firstly fetch all required infos from $_POST
	$to = $_POST['to'];
	$domain = explode('@', $to)[1];
	$subject = $_POST['subject'];
	$replyto = $_POST['replyto'];
	$html = $_POST['html'] == "yes";
	$from = $_POST['from'];
	$message = $_POST['message'];
	$headers = "From: $from";
	if($replyto != "") {
		$headers .= "\nReply-To: $replyto\n";
	}
	if($html) {
		$headers .= "\nMIME-Version: 1.0\n";
		$headers .= "Content-Type: text/html; charset=ISO-8859-1\n";
	}
	if ($domain == "webappky.cz") {
		// If so, send mail
		mail($to, $subject, $message, $headers);
	}
	else {
		// Else, return 403
		header('HTTP/1.0 403 Forbidden');
	}
}
else {
	header('HTTP/1.0 403 Forbidden');
}
?>
