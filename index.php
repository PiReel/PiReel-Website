<!-- [Session] -->
<?php 
ini_set('session.gc_maxlifetime',60);
ini_set('session.gc_probability',100);
session_start();

$_date = new DateTime();
// Check to see if user is posted to this page.
    if($_POST["user_name"]){
        if($_POST["user_name"] != "Pi Alpha"){
            print "User name must Pi Alpha";
        }
        else{
            $_SESSION["username"] = $_POST["user_name"];
            $_SESSION["isLogged"] = "true";
        }
    }
// Check to see if user is logg on.
    if($_SESSION["isLogged"] == "true"){
        $_SESSION["date"] = $_date->format('m/d/Y');
    }
    else{
        $_SESSION["username"] = "New Visitor";
        $_SESSION["date"] = $_date->format('m/d/Y');
        $_SESSION["isLogged"] = "false";
        $_SESSION["count"] = 0;
    }
// Check session count.
    if($_SESSION["count"] < 1){
        $_SESSION["load"] = "true";
        $_SESSION["count"] = $_SESSION["count"]+1;
        $_SESSION["reload"] = "false";
        }
    else if($_SESSION["count"] > 1){
        $_SESSION["reload"] = "true";
        $_SESSION["count"] = $_SESSION["count"]+1;
    }
?>

<!doctype html>
<html>
    <head>

<!--
    Author: Steven Van Sant
-->
        <meta charset="utf-8"></meta>
        <meta name="description" content="Pi reel."></meta>
        <meta name="keywords" content="computer science, web, blog, science blog, social network, open source blog"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
        <link rel="stylesheet" href="https://code.cdn.mozilla.net/fonts/fira.css">
        <link rel="stylesheet" href="css/styles.css" type="text/css"></link>

<!-- [load script] -->
        <script type="text/javascript" src="node_modules/x-tag/dist/x-tag-core.js"></script>

<!-- [php title] -->
<?php 
    print "<title>Welcome: ".$_SESSION["username"]." *</title>";
?>

<!-- [stylesheet] -->
<style type="text/css">
@media screen and (max-width: 1960px){
    body{
        font-size: .85vw;
    }
    body > j-tray:first-child{
        height: 75px;
    }
    body > j-header:first-of-type{
        height: 125px;
    }
    j-header + j-tray{
        position: fixed; 
        top: 200px; 
        left: 0px; 
        z-index: 10; 
        width: 100%; 
        height: 40px;
        padding: 0px;
        overflow: visible;
    }
    j-header > j-btn + j-curtain{
        left: 25%;
    }
    body > json-canvas:first-of-type{
        position: fixed; 
        top: 240px; 
        left: 0%; 
        margin: 4px;
        width: calc(100% - 8px); 
        height: calc(100% - 260px);
        background-color: rgba(145,145,245,.5);
    }
    j-tray > j-select + j-tray:last-child{
        width: 60%;
        float: left;
    }
    j-tray > j-el:first-child{
        background: white;
        color: rgb(75,75,75);
        padding-left: 15px;
        padding-right: 10px;
        padding-top: 5px;
        height: 100%;
        font-weight: bold;
    }
    j-tray > label:first-child{
        position: relative;
        float: left;
        background: white;
        color: rgb(75,75,75);
        padding-left: 15px;
        padding-right: 10px;
        height: 100%;
        font-weight: bold;
    }
    j-tray > j-select:first-of-type{
        position: relative; 
        width: 30%; 
        height: 100%;
        float: left;
        background-color: rgba(255,255,255,0); border: rgba(255,255,255,0);
    }
    json-canvas > form:first-child{
        height: 98%;
        width: 100%;
        background-color: rgba(255,177,17,.75);
        border: ridge 2px rgba(255,177,17,.75);
    }

    .blog{
        position: absolute; 
        width: 30%; 
        height: calc(100% - 25px);
        background-color: rgba(255,255,255,.5);
    }
    .paragraph{
        font-size: 1.25vw;
    }
    .logo{
        width: 25%;
        height: 100%;
    }

    #footer-banner{
        position: fixed; left: 0%;top: 98%; width: 100%;
        background: rgba(147,147,147,1);
        font-size: .85vw;
    }
    #footer-banner:hover{
        background-color: rgba(255,125,36,1);
    }

    #form-promo{
      width: 94%; height: 50%;
      background-color: rgba(255,255,255,1);
      margin: 1%;
      box-sizing: border-box;
    }
    #form-promo div[name="promo"]{
      width: 92%; height: 60%;
      background: rgba(100,175,100,1);
      font-size: 1.125vw;
      box-sizing: border-box;
    }
    #promo-btn-list{
      position: absolute; top: 80%;
    }
    #user-inputs{
      position: absolute; top: 55%; width: 87%; height: 30%;
      margin: 1%;
      background-color: rgba(255,255,255,1);
    }
    #mozsprint_2017_talk-blog{
    position: absolute; left: 0px; top: 95%; 
    }
    #pi_reel_docs-blog{
    position: absolute; left: 620px; top: 95%;
    }
}
@media screen and (min-width: 860px){
}
</style>
    </head>

    <body>
<!-- [j-tray] -->
        <j-tray id="top-tray" class="bg-pireGrey bd-pireGrey">
            <j-tray>
                <j-ico class="btn fa fa-user dark-text" title="Users"></j-ico>
                <j-ico class="btn fa fa-envelope dark-text" title="Messages"></j-ico>
                <j-ico class="fa fa-gears btn dark-text" title="Settings"></j-ico>
                <j-ico class="fa fa-eye btn dark-text" title="Preferences"></j-ico>
            </j-tray><br/>
            <j-tray>
                <j-ico class="pireel-core ico-btn"></j-ico> <strong class="inline-block"> ://Pi.Reel.WebApps || </strong>  
                <j-ico class="google-docs ico-btn"></j-ico></j-el> <strong class="inline-block"> ://Pi.Reel.gDocs || </strong> 
                <j-ico class="google-sheets ico-btn"></j-ico> <strong class="inline-block"> ://Pi.Reel.gSheets </strong> 
            </j-tray>
<?php
    if($_SESSION["isLogged"] == "true"){
        print "<form action='includes/php/superDuperSecret-vx1.php'><input type='submit' value='Sign out'></form>";
    }
    print "<j-messages class='top marker-board left-20'>Welcome ".$_SESSION["username"].", today's date is ".$_SESSION["date"]."</j-messages>";
?>
        </j-tray>

<!-- [j-header] -->
        <j-header id="index-banner" class="header">
            <j-btn id="logo-button" class="logo pireel-1"></j-btn>
            <j-curtain id="banner-tray" class="dark-text" for="#logo-button"></j-curtain>
        </j-header>

<!-- [j-tray] -->
        <j-tray id="user-tray" class="bg-pireGrey bd-pireGrey">
            <label id="selection_label" class="lite-text" for="blog-selection">Blogs: </label>
            <j-select id="blog_select" class="selection lite-text" visibility="hidden" 
                data-queue="#que-tray"
                data-viewer="#blog-canvas"
                data-type="blog/svg" 
                data-href="url(blogs/writers.json)"
                data-get="$pireel.current;">
                <j-option><a>Loading...</a></j-option>
                <j-check class="fa fa-check" title="Select all"></j-check>
            </j-select>

            <j-tray id="que-tray" class="bg-liteGreen bd-darkGreen height-fill">
                <j-el>Qeued: </j-el>
<!-- [php Qeued] -->
<?php
    if($_SESSION["isLogged"] == "false"){
        print "Log on to start reading.";
    }
    else{
        print "<j-ico></j-ico>";
    }
?>
                
            </j-tray>
        </j-tray>

<!-- [json-canvas] -->
        <json-canvas id="blog-canvas" class="canvas oFlow inline-block">

<!-- [php canvas] -->
<?php
    if($_SESSION["isLogged"] == "false"){
        include "includes/html/blog_entry-form.html";
    }
    else{
        include "blogs/pireel/pireel-1.svg";
    }
?>

        </json-canvas>

<!-- [footer] -->
        <j-foot id="footer-banner" class="header paragraph">
            <h3>Communication Channels</h3>
            <j-el class="block">
                <a class="h5" href="https://pireel.github.io/PiReel-Website/">Site <img src="img/pireel-icon.svg" height="16px" width="auto"></img></a>
                <j-el class="inline-block"> : "Home of the Pi Reel Project."</j-el>
            </j-el>
            <j-el class="block">
                <a class="h5" href="construction.html">Facebook</a> 
                <strong class="fa fa-facebook-official"></strong> 
                <j-el class="inline-block"> : Chat and connect online with Facebook</j-el>
            </j-el>
            <j-el class="block">
                <a class="h5" href="https://gitter.im/PiReel/Lobby?utm_source=share-link&utm_medium=link&utm_campaign=share-link">Gitter:</a> 
                <img scr="//cdn03.gitter.im/_s/88aafe0/images/favicon-read.ico" height="16px" width="auto"></img>
                <j-el class="inline-block">Chat and connect online with Gitter</j-el>
            </j-el>
            <j-el class="block">
                <a class="h5" href="">Github </a> 
                <strong class="fa fa-github"></strong> 
                <j-el class="inline-block"> : Keep in touch with our project files</j-el>
            </j-el>
            <j-el class="block">
                <a class="h5">Cloud Nine </a> 
                <img src="https://ide.c9.io/favicon.ico" height="16px" width="auto"></img> 
                <j-el class="inline-block"> : "Code online with Pi Reel Coders"</j-el>
            </j-el>
            <j-el>
                <a href="https://github.com/PiReel/PiReel-Website/blob/master/LICENSE">Copyright, GNU General Public License v3.0</a>
            </j-el>
            <j-class></j-class>
        </j-foot>
    </body>

</html>
