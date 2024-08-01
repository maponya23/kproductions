<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $company = htmlspecialchars($_POST['company']);
    $project_type = htmlspecialchars($_POST['project_type']);
    $project_description = htmlspecialchars($_POST['project_description']);

    $to = "cmaponya357@gmail.com";
    $subject = "New Enquiry from " . $name;
    $message = "Name: " . $name . "\n"
             . "Email: " . $email . "\n"
             . "Phone: " . $phone . "\n"
             . "Company: " . $company . "\n"
             . "Project Type: " . $project_type . "\n"
             . "Project Description: " . $project_description . "\n";
    $headers = "From: " . $email;

    if (mail($to, $subject, $message, $headers)) {
        echo "<script>
                alert('Your enquiry has been sent successfully! We will get back to you soon!');
                window.location.href = 'index.html';
              </script>";
    } else {
        echo "<script>
                alert('There was an error sending your submission. Please try again.');
                window.history.back();
              </script>";
    }
} else {
    echo "Invalid request.";
}

?>
