<?php

    if($_POST["user_name"] != "Pi Alpha"){
    print "User name must Pi Alpha";
    }
    else{
    $_SESSION["username"] = $_POST["user_name"];
    $_SESSION["isLogged"] = "true";
    }

?>

