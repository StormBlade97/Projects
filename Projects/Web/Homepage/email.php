<?php
if(isset($_POST['submit'])){
    $to = "golddragon.1997bd@gmail.com"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    $full_name = $_POST['name'];
    $subject = "Form submission";
    $subject2 = "Copy of your form submission";
    $message = $full_name . " wrote the following:" . "\n\n" . $_POST['message'];
    $message2 = "Here is a copy of your message " . $full_name . "\n\n" . $_POST['message'];

    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    $ipaddress = $_SERVER['REMOTE_ADDR'];
    $date = date("Y/m/d") . "\n";
    echo $from,$full_name,$message;
    mail($to,$subject,$message,$headers);
    mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
    echo "Mail Sent. Thank you " . $full_name . ", we will contact you shortly. Recorded IP address: ". $ipaddress. " Sent on " . $date;
    // You can also use header('Location: thank_you.php'); to redirect to another page.
    }
    else echo "file van chay";
?>