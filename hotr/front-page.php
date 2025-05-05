<?php
/* Template Name: HOTR Custom Front Page */
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>House On The Rock Asaba</title>

  <link rel="icon" type="image/png" href="<?php echo get_template_directory_uri(); ?>/hotrimages/hotr-ico.png">
  <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/hotrstyle.css">
  <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/hotrfooterstyle.css">

  <link
    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Poppins:wght@400;700&family=Playfair+Display:wght@400;700&family=Roboto+Mono:wght@400;700&family=DM+Sans:wght@400;700&display=swap"
    rel="stylesheet">
  <script src="https://kit.fontawesome.com/9783530849.js" crossorigin="anonymous"></script>
</head>

<body>
  <nav class="navbar">
    <div class="nav-logo">
      <a href="/"><img src="<?php echo get_template_directory_uri(); ?>/hotrimages/HOTR-Logo.webp" alt="HOTR Logo"></a>
    </div>
    <ul class="nav-menu">
      <li><a href="/">Home</a></li>
      <li><a href="/cith">CITH</a></li>
      <li><a href="/rock-news">News</a></li>
      <li><a href="#"><i class="fa-solid fa-circle-dollar-to-slot"></i></a></li>
    </ul>
    <div class="nav-toggle" id="navToggle" role="button" tabindex="0" aria-label="Toggle menu">
      <i class="fas fa-bars"></i>
    </div>
  </nav>

  <div class="mobile-menu" id="mobileMenu">
    <div class="hotr-full-menu">
      <div class="left-menu">
        <div class="social-links">
          <a href="https://www.facebook.com/HouseOnTheRockAsaba" target="_blank" aria-label="Facebook"><i class="fab fa-facebook"></i></a>
          <a href="https://www.instagram.com/hotrasaba/" target="_blank" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
          <a href="https://www.youtube.com/channel/UCrl6R7dpS9HBaMX8gQwD1EQ" target="_blank" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
          <a href="https://twitter.com/hotrasaba" target="_blank" aria-label="twitter"><i class="fab fa-twitter"></i></a>
        </div>
        <div class="menu-blocks">
          <div class="menu-block"><i class="fa-solid fa-house-user"></i><a href="/cith">CITH Centers</a></div>
          <div class="menu-block"><i class="fa-solid fa-newspaper"></i><a href="/rock-news">Rock News</a></div>
          <div class="menu-block"><i class="fa-solid fa-circle-dollar-to-slot"></i><a>Give</a></div>
          <div class="menu-block"><i class="fa-solid fa-images"></i><a href="https://drive.google.com/drive/folders/1M-CESSOH-Z_Fcnm4aUYOIenSz5KFkDX4" target="_blank">HOTR In Pictures</a></div>
          <div class="menu-block"><i class="fa-solid fa-video"></i><a href="https://www.facebook.com/HouseOnTheRockAsaba" target="_blank">Livestream</a></div>
          <div class="menu-block"><i class="fa-solid fa-building"></i><a href="/departments">Departments</a></div>
          <div class="menu-block"><i class="fa-solid fa-walkie-talkie"></i><a href="mailto:gcthotrasaba@gmail.com">Send Testimony</a></div>
          <div class="menu-block"><i class="fa-solid fa-calendar-days"></i><a href="/events">Events</a></div>
          <div class="menu-block"><i class="fa-solid fa-children"></i><a href="/rock-kids">Rock Kids</a></div>
          <div class="menu-block"><i class="fa-solid fa-circle-chevron-down"></i><a href="https://linktr.ee/houseontherockasaba" target="_blank">More</a></div>
        </div>
        <div id="staticVerse" class="static-verse"></div>
        <iframe class="yt-home-Iframe" src="https://www.youtube.com/embed/WUw2w36KRIA?si=vQESUqOFwWemqq-L" title="YouTube video player" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      <div class="right-menu">
        <div class="carousel-container">
          <button class="carousel-btn left">&#10094;</button>
          <div class="carousel-track"></div>
          <button class="carousel-btn right">&#10095;</button>
        </div>
      </div>
    </div>
  </div>

  <div class="slider">
    <div class="slide active" style="background-image: url('<?php echo get_template_directory_uri(); ?>/slider-images/PIC_9257.webp');"></div>
  </div>
  <div class="hotr-specials">
    <button id="specialButton" onclick="window.location.href='/watch-service'">Watch Service</button>
  </div>

  <div class="slider-nav">
    <button class="prev">&#10094;</button>
    <button class="next">&#10095;</button>
  </div>

  <div id="giveOverlay" class="give-overlay">
    <div class="give-content">
      <button class="close-overlay" id="closeOverlay">&times;</button>
      <h2>Support the Mission</h2>
      <p>Thank you for choosing to give! "God loves a cheerful giver" 2 Corinthians 9:7.</p>
      <div class="bank-details">
        <div class="bank-row"><strong>Account Name:</strong> <span class="copy-text" data-copy="House On The Rock Asaba">House On The Rock Asaba <i class="fa-regular fa-copy"></i></span></div>
        <div class="bank-row"><strong>Account Number:</strong> <span class="copy-text" data-copy="1234567890">1234567890 <i class="fa-regular fa-copy"></i></span></div>
        <div class="bank-row"><strong>Bank:</strong> <span class="copy-text" data-copy="Access Bank">Access Bank <i class="fa-regular fa-copy"></i></span></div>
        <p class="copy-note">Tap any item to copy</p>
      </div>
    </div>
  </div>

  <section class="section2 fade-section">
    <section class="welcome-pastor-section">
      <h2>Welcome to House on The Rock Asaba!</h2>
      <p class="welcome-to-hotr">We are a vibrant community passionate about seeing lives transformed through the love of Christ. Join us this Sunday — your story is just beginning!</p>

      <h3>Meet our Senior Pastors</h3>
      <div class="card-wrapper">
        <div class="pastor-card fade-section">
          <div class="pastor-header">
            <img src="<?php echo get_template_directory_uri(); ?>/slider-images/_Q9A8393.webp" alt="Pastor Photo" class="pastor-photo">
            <div class="pastor-info">
              <h3>Pastor Cosfinney Udoka <span class="verified-badge">✓</span></h3>
              <span class="post-time">Just now</span>
            </div>
          </div>
          <div class="pastor-caption">
            We are a family, rooted in Christ and reaching out to the world. You are welcome here, just as you are.🌎✨<br> — <b>Pastor Cosfinney Udoka (Senior Pastor)</b>
          </div>
          <div class="pastor-image-container">
            <img src="<?php echo get_template_directory_uri(); ?>/hotrimages/Pst-CosfinneyU.webp" alt="Pastor Quote" class="pastor-quote-image">
          </div>
        </div>

        <div class="pastor-card fade-section">
          <div class="pastor-header">
            <img src="<?php echo get_template_directory_uri(); ?>/hotrimages/Pastor-Paul.webp" alt="Pastor Photo" class="pastor-photo">
            <div class="pastor-info">
              <h3>Pastor Paul Adefarasin <span class="verified-badge">✓</span></h3>
              <span class="post-time">Just now</span>
            </div>
          </div>
          <div class="pastor-caption">
            There are things that may come against you—but they cannot cancel your destiny.<br> — <b>Pastor Paul Adefarasin (Founder and Senior Pastor)</b>
          </div>
          <div class="pastor-image-container">
            <img src="<?php echo get_template_directory_uri(); ?>/hotrimages/HOTR.webp" alt="Pastor Quote" class="pastor-quote-image">
          </div>
        </div>
      </div>
      <button class="btn-primary fade-section"><a href="http://bit.ly/hotrform" target="_blank">Plan Your Visit</a></button>
    </section>
  </section>

  <section class="section3 events-section fade-section">
    <h2 class="events-heading">Upcoming Events</h2>
    <div class="events-container">
      <div class="event-card"><img src="<?php echo get_template_directory_uri(); ?>/slider-images/PIC_6789.webp" alt="Event 2"><div class="event-name">Woman to Woman</div></div>
      <div class="event-card"><img src="<?php echo get_template_directory_uri(); ?>/slider-images/PIC_7095.webp" alt="Event 1"><div class="event-name">Youth Conference</div></div>
      <div class="event-card"><img src="<?php echo get_template_directory_uri(); ?>/slider-images/_89A9666.webp" alt="Event 3"><div class="event-name">Prayer Retreat</div></div>
      <div class="event-card"><img src="<?php echo get_template_directory_uri(); ?>/slider-images/DL4A4688.webp" alt="Event 4"><div class="event-name">Word on Stage</div></div>
      <div class="event-card"><img src="<?php echo get_template_directory_uri(); ?>/slider-images/_Q9A6951.webp" alt="Event 5"><div class="event-name">Worship Night</div></div>
    </div>
    <button class="scroll-btn left" id="scrollLeft">&#10094;</button>
    <button class="scroll-btn right" id="scrollRight">&#10095;</button>
  </section>

  <section class="section4 fade-section">
    <h2>Join Our Church</h2>
    <p>Find your home, grow your faith, and become part of a family that loves you just as you are — join us at House on the Rock Asaba Church.</p>
    <button class="btn-primary"><a href="http://bit.ly/hotrform" target="_blank" rel="noopener noreferrer">Join Us</a></button>
  </section>

  <div id="verseOverlay" class="verse-overlay">
    <div class="verse-box">
      <button id="closeVerse" class="close-btn" aria-label="Close">&times;</button>
      <h2>HOTR Verse of the Day</h2>
      <p id="verseText">Loading verse...</p>
      <small id="verseRef"></small>
      <hr />
      <p>Follow us and be inspired daily:</p>
      <div class="social-links">
        <a href="https://www.facebook.com/HouseOnTheRockAsaba" target="_blank" aria-label="Facebook"><i class="fab fa-facebook"></i></a>
        <a href="https://www.instagram.com/hotrasaba/" target="_blank" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
        <a href="https://www.youtube.com/channel/UCrl6R7dpS9HBaMX8gQwD1EQ" target="_blank" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
        <a href="https://twitter.com/hotrasaba" target="_blank" aria-label="twitter"><i class="fab fa-twitter"></i></a>
      </div>
    </div>
  </div>

  <button id="backToTop" title="Back to top">↑</button>

  <script src="<?php echo get_template_directory_uri(); ?>/hotrscript.js"></script>

  <footer class="footer fade-section">
    <div class="footer-container">
      <div class="footer-col">
        <img src="<?php echo get_template_directory_uri(); ?>/hotrimages/HOTR-Logo.webp" alt="House On The Rock Logo" class="footer-logo">
        <h3 class="footer-title">HOTR Asaba</h3>
        <p class="footer-tagline">Word, Worship & Warfare company of believers, with a vision of enriching lives & raising godly families that'll stand as icons of leadership in society</p>
        <div class="social-icons">
          <a href="https://www.facebook.com/HouseOnTheRockAsaba" target="_blank"><i class="fab fa-facebook-f"></i></a>
          <a href="https://twitter.com/hotrasaba" target="_blank"><i class="fab fa-twitter"></i></a>
          <a href="https://www.instagram.com/hotrasaba/" target="_blank"><i class="fab fa-instagram"></i></a>
          <a href="https://www.youtube.com/channel/UCrl6R7dpS9HBaMX8gQwD1EQ" target="_blank"><i class="fab fa-youtube"></i></a>
        </div>
      </div>

      <div class="footer-col">
        <h4 class="footer-heading">Quick Links</h4>
        <ul class="footer-links">
          <li><a href="/about">About Us</a></li>
          <li><a href="/ministries">Ministries</a></li>
          <li><a href="/cith">CITH Centers</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/privacy-policy">Terms</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4 class="footer-heading">Visit Us</h4>
        <p class="footer-address">
          Block XI, Beside Plato Plaza DBS road<br>
          Central Core Area Asaba<br>
          Delta State
        </p>
        <p class="footer-contact">
          Phone: (080) 954-6132<br>
          Email: asabaadmin@houseontherock.org.ng
        </p>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; <span id="current-year"></span> House on the Rock Church, Asaba. All Rights Reserved.</p>
      <p>Created by the Rock News Team • Opensource church project • Contribute on <a href="https://github.com/Iamtsquare07/hotrasaba" target="_blank">Github</a></p>
    </div>
  </footer>
</body>
</html>
