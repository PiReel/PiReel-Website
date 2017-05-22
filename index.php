<?php 

    session_start();
    $_date = new DateTime();

    $servername = getenv('IP');
    $username = getenv('C9_USER');
    $database = "c9";


    // Create connection
    $db = new PDO("mysql:host=".$servername.";dbname=".$database, $username);

    // Check connection
    if ($db->connect_error) {
        die("Connection failed: " . $db->connect_error);
    } 

    $_SESSION["username"] = $username;
    $_SESSION["date"] = $_date->format('m/d/Y');
    $_SESSION["time"] = $_date->format("h:m a");

?>

<!doctype html>
<html>
    <head>

<!--
    Author: Steven Van Sant
-->

        <meta charset="utf-8"></meta>
        <meta name="description" content="Pi reel."></meta>
        <meta name="keywords" content="computer science, cgi, json, json markup, web, social network, open source"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
        <link rel="stylesheet" href="https://code.cdn.mozilla.net/fonts/fira.css">
        <link rel="stylesheet" href="css/styles.css" type="text/css"></link>

<!-- [load script] -->
        <!--  <script type="text/javascript" src="js/x-tag-pi-reel.js"></script> -->
        <script type="text/javascript" src="node_modules/x-tag/dist/x-tag-core.js"></script>
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
        height: 175px;
    }
    j-header + j-tray{
        position: fixed; top: 250px; left: 0px; z-index: 10; width: 100%; height: 40px;
        padding: 0px;
        overflow: visible;
    }
    j-header > j-btn + j-curtain{
        left: 25%;
    }

    body > json-canvas:first-of-type{
        position: fixed; top: 290px; left: 0%; width: 100%; height: 67%;
        background-color: rgba(145,145,245,.5);
    }
    j-tray > j-select + j-tray:last-child{
        width: 65%;
        float: left;
    }
    j-tray > j-el:first-child{
        background: white;
        color: rgb(75,75,75);
        padding-left: 15px;
        padding-top: 5px;
        height: 100%;
        font-weight: bold;
    }

    #blog_select{
        position: relative; height: 1.75vw; width: 30%;
        float: left;
        background-color: rgba(255,255,255,0); border: rgba(255,255,255,0);
    }
    #selection_label{
        position: relative;
        float: left;
    }

    .blog{
        position: absolute; width: 30%; height: calc(100% - 25px);
        background-color: rgba(255,255,255,.5);
    }
    .svg-landscape-index{
        width: 860px; height: 600px;
    }
    .svg-portrait-index{
        width: 600px; height: 860px;
    }
    .paragraph{
        font-size: .8vw;
    }
    .logo{
        width: 25%;
        height: 100%;
    }
    .first-item{
        border: none;
        margin: 5px;
    }
    .form{
        width: 99.5%; height: 98.25%;
        background-color: rgba(255,177,17,.75);
    }
    

    #footer-banner{
        position: fixed; left: 0%;top: 98%; width: 100%;
        background: rgba(147,147,147,1);
        font-size: .85vw;
    }
    #footer-banner:hover{
        background-color: rgba(255,125,36,1);
    }
    #user-btn{
    position: absolute; left: 0px; top: 0px; 
    }
    #msg-btn{
    position: absolute; left: 30px; top: 0px; 
    }
    #get-involved-btn{
      position: absolute; top: 75%; width: 100px; height: 50px;
      background-color: rgba(255,177,17,1);
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
                <j-el>Qued: </j-el>
            </j-tray>
        </j-tray>

<!-- [json-canvas] -->
        <json-canvas id="blog-canvas" class="canvas oFlow inline-block" data-layout=".canvas();.form();">
            <form id="blog_form" class="form abs small-margin first-item inline-block" action="lib/php/blog-vx1.php" target="_new" method="POST">
                <fieldset id="form-promo" class="abs tray inline-block">
                    <legend class="display lite-text">READ ME</legend>
                    <div class="display abs" name="promo">
                        <p class="dark-text">
                            Share your Sci Fi imagination. 
                        </p>
                    </div>
                    <div class="display abs" name="promo">
                        <p class="block dark-text margin-medium">
                            Anyone can be involved at Pi Reel including writers and graphic novelists.
                            Pi Reel's open blog allows technical and creative writers to share there talents 
                            and take part in open source and collaboration. 
                        </p>
                        <label class="lite=text" for="story-teller-checkbox">Are you a creative writer? </label><input id="story-teller-checkbox" name="storyteller" type="checkbox"/>
                        <label class="lite=text" for="story-teller-checkbox">Are you a technical writer? </label><input id="technical-teller-checkbox" name="techteller" type="checkbox"/>
                    </div>
                    <div id="promo-btn-list">
                        <input type="button" class="circle inline-block" name="" value="   " autofocus="true"/>
                        <input type="button" class="circle inline-block" name="" value="   "/>
                        <input type="button" class="circle inline-block" name="" value="   "/>
                        <input type="button" class="circle inline-block" name="" value="   "/>
                    </div>
                </fieldset>
                <fieldset id="user-inputs" class="display">
                    <!-- [php] -->
                    <?php
                    print '<label for="user-name">Please enter a user name: </label><input type="text" name="user_name" value="'.$_SESSION["username"].'" readonly/><br/>';
                    ?>
                    <input type="submit" value="Be Involved" id="get-involved-btn" class="circle" />
                </fieldset>
            </form>
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
