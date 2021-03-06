const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"
      />
      <title>Chittorgardh</title>
      <link rel="stylesheet" href="css/style.css" />
      <style>* {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Josefin Sans', sans-serif;
      }
      body {
        width: 100%;
        height: 100%;
        background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)),
          url(../img/1.jpg);
        background-size: cover;
        background-repeat: no-repeat;
      }
      header {
        width: 100%;
        height: 15vh;
        display: flex;
        color: #fff;
        justify-content: space-between;
      }
      header #logo {
        /* background-color: blue; */
        width: 25%;
        height: 15vh;
        font-weight: 600;
        font-size: 25px;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding-top: 1.2rem;
      }
      h3 {
        font-size: 3.9rem;
        align-items: center;
        justify-content: center;
        color: aliceblue;
        font-weight: 700;
        letter-spacing: 0.4rem;
        text-shadow: 1px 1px 2px black;
      }
      
      h3 span {
        color: rgb(230, 133, 23);
      }
      h3 b {
        color: green;
      }
      h1 {
        font-size: 4rem;
        font-weight: 700;
        color: cornsilk;
        justify-content: center;
        align-items: center;
        letter-spacing: 2px;
        text-shadow: 2px 2px 3px black;
        margin: 2rem 0 2rem 0;
      }
      p {
        font-size: 2.8rem;
        color: floralwhite;
        font-weight: 600;
        justify-content: center;
        align-items: center;
        letter-spacing: 1px;
        margin-bottom: 2rem;
        text-shadow: 1px 1px 2px black;
      }
      
      nav {
        width: 40%;
        display: flex;
        justify-content: space-around;
        align-items: center;
      }
      nav a {
        text-decoration: none;
        color: rgb(255, 255, 255);
        font-weight: 500;
        width: 20%;
      }
      main {
        width: 100%;
        height: 85vh;
        margin-top: 15%;
        justify-content: center;
        align-items: center;
        text-align: center;
      }
      main a {
        text-decoration: none;
        font-size: 1rem;
        padding: 12px 20px;
        border-radius: 4px;
        outline: none;
        font-weight: 600;
        letter-spacing: 0.1rem;
        text-transform: uppercase;
      }
      main .btn1 {
        background-color: #fff;
        color: black;
      }
      main .btn2 {
        color: #fff;
        background-color: #080c0b;
      }
      nav a:first-child {
        color: #00b894;
      }
      .change_content:after {
        content: '';
        animation: changetext 12s infinite linear;
        color: #c75e21;
      }
      @keyframes changetext {
        0% {
          content: 'Ayodhya';
        }
        10% {
          content: 'Kanya Kumari';
        }
        20% {
          content: 'Chittorgardh';
        }
        30% {
          content: 'Jaipur';
        }
        40% {
          content: 'Jhansi';
        }
        50% {
          content: 'New Delhi';
        }
        60% {
          content: 'Kashi';
        }
        70% {
          content: 'Pushkar';
        }
      
        80% {
          content: 'Bhuwaneshwar';
        }
        90% {
          content: 'Kedarnath';
        }
        100% {
          content: 'Mathura';
        }
      }
      
      h3 a {
        text-transform: lowercase;
        font-size: 3.9rem;
      }
</style>      
    </head>
    <body>
      <header>
        <div id="logo" class="animated infinite heartBeat">MERA BHARAT</div>
  
        <nav>
          <a href="#">HOME</a>
          <a href="#">ABOUT</a>
          <a href="#">PHOTOS</a>
          <a href="#">CONTACT</a>
        </nav>
      </header>
      <main>
        <h3>Welcome To <span>In</span>d<b>ia</b></h3>
        <h1>Do Come & Visit <span class="change_content"></span></h1>
        <p>I Love My India</p>
        <a href="#" class="btn1">know more</a>
        <a href="#" class="btn2">sign up</a>
      </main>
    </body>
  </html>
  `);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});