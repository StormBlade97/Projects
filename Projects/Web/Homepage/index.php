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
    echo $from,$full_name,$message;
    mail($to,$subject,$message,$headers);
    mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
    echo "Mail Sent. Thank you " . $full_name . ", we will contact you shortly.";
    }
    else echo "Sorry something went wrong!";
?>


<!DOCTYPE html>
<html lang="en">
<head>
<!-- Metas -->
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Thanh Nguyen</title>
  <!-- Favicon -->
  <link rel="shortcut icon" href="favicon.ico" >
  <link rel="icon" href="favicon.ico">
  <!-- Externals link -->
  <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
  <link rel="stylesheet" href="Customize.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
  <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
  <script src="Customscript.js"></script>
  <!-- Fonts -->
  <link href="http://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" type="text/css">
  <link href="http://fonts.googleapis.com/css?family=Lato" rel="stylesheet" type="text/css">
</head>
<body id="mainpage" data-spy="scroll" data-target=".navbar" data-offset="50">
<!-- nav -->
<nav class="navbar navbar-default navbar-fixed-top">
  <div class="container">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">Logo</a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#about">ABOUT ME</a></li>
        <li><a href="#skills">SKILLS</a></li>
        <li><a href="#plans">PLANS FOR THE FUTURE</a></li>
        <li><a href="#gallery">GALLERY</a></li>
        <li><a href="#contact">CONTACT</a></li>
      </ul>
    </div>
  </div>
</nav>
<!-- end nav -->
  <div class="jumbotron text-center">
  <img src="Profile-pic.jpg" class="img-circle" alt="Cinque Terre" width="230" height="230">
  <div class="text-white">
      <h1><span id="Iam">Tôi Là</span> Thanh Nguyen</h1>
      <p>"I'm a dreamer. I have to dream and reach for the stars, and if I miss a star then I grab a handful of clouds"</p>
    </div>
</div>

<div class="container-fluid about text-center" id="about">
  <h1>WHO AM I?</h1>
  <h3>PERHAPS YOU DO NOT KNOW, BUT THE MOST INTERESTING PERSON IS FROM WITHIN</h3>
  <p id="origin">yolo</p>
  <button type="button" class="btn btn-lg btn-info">Know more about me</button>
</div>

<div class="container-fluid bg-grey text-center" id="skills">
  <div class="row">
    <div class="col-sm-4">
      <h1>SKILLS & COMPETENCE</h1>
      <p class="text-left"> As a just-graduated-highschooler whose main speciality is English, I have little knowledge in programming. However, I have the love for computer, and I firmly believe that such will empower me to the future. With determination, these are the ability I have managed to obtain so far.</p>
    </div>
    <div class="col-sm-8">
    <!-- Begin progress -->
        <div class="progress">
            <div class="progress-bar progress-bar-success active progress-bar-striped" role="progressbar" aria-valuenow="40"
            aria-valuemin="0" aria-valuemax="100" style="width:80%">
            ENGLISH SKILL: 80%
            </div>
        </div>
        <div class="progress">
            <div class="progress-bar progress-bar-info active" role="progressbar" aria-valuenow="40"
            aria-valuemin="0" aria-valuemax="100" style="width:50%">
            C++ SKILL 50%
            </div>
        </div>
        <div class="progress">
          <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60"
          aria-valuemin="0" aria-valuemax="100" style="width:30%">
        WEB-DEVELOPMENT SKILL 30%
          </div>
        </div>
      <!-- End progress -->
    </div>
  </div>
</div>
<div class="container-fluid" id="plans">
  <h1 class="text-right">MY PLANS FOR THE FUTURE</h1>
  <div class="row">
  <div class="col-sm-7">
    <img src="Phasor.png" alt="Phasor" class="img-circle" width="300" height="300">
    <img src="Success-in-life.jpg" alt="Success" class="img-circle" width="300" height="300">
    <img src="Finnish.jpg" alt="Finnish" class="img-circle" width="300" height="300">
  </div>
    <div class="col-sm-5">
      <h3>IT's good to organize life</h3>
      <p>A life plan seems ambitious, but thanks to planning, I have got to this far. Why afraid of it? The long road is yet to discover as there are so many variables, so many unknowns. However, if you are curious, here are my short-term goals. If you plan the same, we should work together!</p>
      <ul>
        <li>Acquite more comprehension of Js, Jquery, Css, Json, PHP</li>
        <li>Being able to do something with C++</li>
        <li>Continue working on a game of mine based on Javascript, you can play it <a href="http://www.cc.puv.fi/~e1500970/HTMLPage2.html">HERE</a>. I intent to use the popular game engine Phasor to implement many more interesting physics. You can check it <a href="http://phaser.io/">here</a></li>
        <li>Become fluent in Finish, of course</li>
      </ul>
      <div class="container text-center">
      <button class="btn btn-warning  disabled">Know more of my long-term goals</button>
      </div>
    </div>
  </div>
</div>
<!-- Gallery -->
<div class="container-fluid text-center bg-grey" id="gallery">
<h1>LIFE IN A SNAPSHOT</h1>
<h3>Where you find interesting things!</h3>
  <div class="row text-center">
    <div class="col-sm-4">
      <div class="thumbnail">
        <img src="finland-05.jpg" alt="a" width="300" height="300">
        <p><strong>I love Finland</strong></p>
      </div>
    </div>
    <div class="col-sm-4">
      <div class="thumbnail">
        <img src="Pho.jpg" alt="v" width="300" height="300">
        <p><strong>Yes, I love Pho</strong></p>
      </div>
    </div>
    <div class="col-sm-4">
      <div class="thumbnail">
        <img src="space.jpg" alt="c" width="500" height="300">
        <p><strong>I also love space</strong></p>
      </div>
    </div>
  </div>
</div>
<div class="container-fluid bg-grey" id="contact">
  <h2 class="text-center">CONTACT</h2>
  <div class="row">
    <div class="col-sm-5">
      <p>Contact me if you have any ideas to improve this page, or simply be friend</p>
      <p><span class="glyphicon glyphicon-map-marker"></span> Palosaarentie 62 S61</p>
      <p><span class="glyphicon glyphicon-phone"></span> +00 1515151515</p>
      <p><span class="glyphicon glyphicon-envelope"></span> Golddragon.1997bd@gmail.com</p>
    </div>
    <form action="" method="post">
    <div class="col-sm-7">
      <div class="row">
        <div class="col-sm-6 form-group">

          <input class="form-control" id="name" name="name" placeholder="Name" type="text" required>
        </div>
        <div class="col-sm-6 form-group">
          <input class="form-control" id="email" name="email" placeholder="Email" type="email" required>
        </div>
      </div>
      <textarea class="form-control" id="message" name="message" placeholder="Comment" rows="5"></textarea><br>
      <div class="row">
        <div class="col-sm-12 form-group">
          <button class="btn btn-primary pull-right" id="submit" name="submit" type="submit">Send</button>
        </div>
      </div>
    </div>
    </form>
  </div>
</div>
<!-- Footer -->
<footer class="container-fluid text-center">
  <a href="#mainpage" title="To Top">
    <span class="glyphicon glyphicon-chevron-up"></span>
  </a>
  <p>Page made based on a guide of w3school and Bootstrap <br>
  Great thanks to Glyphicon for the awesome icons</a></p>
</footer>
</body>
</html>