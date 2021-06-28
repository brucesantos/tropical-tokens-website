<?php

/* SETTINGS */
$recipient = "meaningful@tropicaltokens.com";
$subject = "cadastro site";

if($_POST){

  /* DATA FROM HTML FORM */
  // $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];
  $subject = $_POST['subject'];
  //$phone = $_POST['phone'];


  /* SUBJECT */
  $emailSubject = $subject . " by " . $email;

  /* HEADERS */
  $headers = "From: $name <$email>\r\n" .
             "Reply-To: $name <$email>\r\n" . 
             "Subject: $emailSubject\r\n" .
             "Content-type: text/plain; charset=UTF-8\r\n" .
             "MIME-Version: 1.0\r\n" . 
             "X-Mailer: PHP/" . phpversion() . "\r\n";
 
  /* PREVENT EMAIL INJECTION */
  if ( preg_match("/[\r\n]/", $email) || preg_match("/[\r\n]/", $email) ) {
    header($_SERVER['SERVER_PROTOCOL'] . ' 500 Internal Server Error', true, 500);
    die("500 Internal Server Error");
  }

  /* MESSAGE TEMPLATE */
  $mailBody = "Name: $name \n\r" .
              "Email:  $email \n\r" .
              "Subject:  $subject \n\r" .
              //"Phone:  $phone \n\r" .
              "Message: $message";

  /* SEND EMAIL */
  mail($recipient, $emailSubject, $mailBody, $headers);
}
?>