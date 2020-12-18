<?php
     use PHPMailer\PHPMailer\PHPMailer;
     use PHPMailer\PHPMailer\Exception;
     
    if (isset($_POST['name']) && isset($_POST['email'])&& isset($_POST['subject'])&& isset($_POST['description'])) {
        $name = $_POST['name'];
        $email = $_POST['email'];
        $subject = $_POST['subject'];
        $description = $_POST['description'];
         
        require   "PHPMailer/PHPMailer.php";
        require   "PHPMailer/SMTP.php";
        require   "PHPMailer/Exception.php";

        $mail = new PHPMailer(true);

        //SMTP Settings
        $mail->isSMTP();
        $mail->Host = "smtp.gmail.com";
        $mail->SMTPAuth = true;
        $mail->Username = "ederantonyo@gmail.com"; //enter you email address
        $mail->Password = 'eden71087'; //enter you email password
        $mail->Port = 587;
        $mail->SMTPSecure = "tls";

        //Email Settings
        $mail->isHTML(true);
        $mail->setFrom($email, $name);
        $mail->addAddress("ederantonyo@gmail.com"); //enter you email address
        // $mail->Subject = ("$email ($subject)");
         $mail->Subject = ($subject);
        $mail->Body = $description;

        if ($mail->send()) {
            $status = "success";
            $response = "Email is sent!";
        } else {
            $status = "failed";
            $response = "Something is wrong: <br><br>" . $mail->ErrorInfo;
        }

      echo json_encode(array("status" => $status, "response" => $response));
        // echo json_encode(array("status" => $status, "response" => $response));
         
    }
?>
