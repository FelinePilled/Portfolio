<?php 
if($_POST){
    $first = test_input($_POST["first"]);
    $last = test_input($_POST["last"]);
    $email = test_input($_POST["email"]);
    $message = test_input($_POST["message"]);

// the message
$msg="Name: ".$first." ".$last."\nEmail: ".$email."\nMessage: ".$message;



// send email
mail("shylo.olsen@lethbridgecollege.ca","You've got mail!",$msg);

}

function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
  }

?>