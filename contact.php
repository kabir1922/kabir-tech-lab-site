<?php
if($_SERVER["REQUEST_METHOD"] == "POST"){
  $name = htmlspecialchars($_POST['name']);
  $email = htmlspecialchars($_POST['email']);
  $message = htmlspecialchars($_POST['message']);
  // mail() or store in DB goes here
  echo "Thank you, $name! I’ll get back to you soon.";
}
?>
