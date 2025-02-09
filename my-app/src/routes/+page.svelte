<script>
    import { onMount } from 'svelte';
  
    let dbStatus = '';
  
    // Use onMount to fetch data only on the client-side
    onMount(async () => {
      const response = await fetch("/api/signup");
      const data = await response.json();
  
      if (response.ok) {
        dbStatus = data.message;
      } else {
        dbStatus = data.error;
      }
    });
  </script>
  
<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css2?family=Marcellus&family=Marcellus+SC&display=swap" rel="stylesheet">
</svelte:head>

<style>
	:global(body) {
        font-family: 'Marcellus', serif;
        background-color: rgb(208, 191, 226);
        background-size: 25px;
        background-image: url('https://media3.giphy.com/media/1EOTlC86tfUvQdwg4H/giphy.gif?cid=6c09b9526cm3j5q0swi7xc2m6mnu1a1hyij1u829pbzw67ff&ep=v1_stickers_search&rid=giphy.gif&ct=s');
        background-position: center;
    }
    
    h1 {
        color:#715a7c;
        text-align: center; 
        text-shadow: 2px 4px 5px rgb(29, 29, 29);
        font-size: 75px;
    }
    .scroll-container {
      font-size: 15px;
      margin: auto;
      text-align: center;
      width: 700px;
      height: 500px;
      overflow-y: scroll; /* Enable vertical scrolling */
      border: 1px solid #333;
      background-color: rgb(243, 243, 243);
      box-shadow: 0 4px 3px;
      margin-bottom: 10px;
      margin-top: 50px;
      border-radius: 20px;
      padding: 15px;
    }

    .scroll-container h2 {
            font-size: 40px; /* Set font size for h2 and p inside the scroll container */
            color: #715a7c;/* Set the color of the text inside the scroll container */
            text-shadow: 2px 3px 3px rgb(29, 29, 29);
            font-family: 'Marcellus', serif; /* Set the font family */
        }

        .scroll-container p, .scroll-container h3 {
            font-size: 18px; /* Set font size for h2 and p inside the scroll container */
            color: #594d60; /* Set the color of the text inside the scroll container */
            line-height: 1.5; /* Add some line spacing */
            font-family: 'Marcellus', serif; /* Set the font family */
        }
    .scroll-container img{
     
        width: 200px;
        height: auto;
        vertical-align: middle;
        margin-right: 10px;
    }

    /* img {
        position: absolute;
        left: 0px;
        top: 0px;
        z-index: -1;
    } */
    
    .content {
      height: 500px; 
    }

    .button{
        display: inline-block;
        padding: 15px 25px;
        font-size: 24px;
        cursor: pointer;
        text-align: center;
        text-decoration: none;
        outline: none;
        color: #fff;
        background-color: #583d68;
        border: none;
        border-radius: 15px;
        box-shadow: 0 9px #af8abf;
        font-family: 'Marcellus', serif;
    }

    .button:hover {background-color: #38293f}

    .button:active {
        background-color: #38293f;
        box-shadow: 0 5px #615568;
        transform: translateY(4px);
        }

     .center {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 50%;
    } 

    .button-container {
            display: flex;
            justify-content: center; /* Centers the buttons horizontally */
            gap: 15px; /* Adds space between buttons */
            margin-top: 20px; /* Adds some space above the buttons */
        }

</style>
<h1>Women in Tech</h1>
<!-- <h2>Database Connection Status:</h2> -->
  <p>{dbStatus}</p>



<!-- 
<img src ="https://media3.giphy.com/media/1EOTlC86tfUvQdwg4H/giphy.gif?cid=6c09b9526cm3j5q0swi7xc2m6mnu1a1hyij1u829pbzw67ff&ep=v1_stickers_search&rid=giphy.gif&ct=s"> -->

<div class="button-container">
<a href="/signup"><button class ="button"> Mentor Signup</button></a>
<a href ="/menteeview"><button class = "button">Mentee View</button></a>
<a href="/mentorview"><button class = "button">Mentor View</button></a>
<a href="/articles"><button class = "button">Articles</button></a>
<a href="/jobs"><button class = "button">Jobs</button></a>
</div>


<div class="scroll-container" id="scrollContainer">
    
  <div class="content">
    <i><b><h2>Welcome to our Hub</h2></b></i>
    <img src = "https://media3.giphy.com/media/fQrSBv2mR1xrDJ3YUJ/giphy.gif?cid=6c09b952b4rhfadeyl2swc7jhmtl7f50ptwgxv0eod6nqtr7&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s">
    <h3> Mission statement ❦ </h3>
    <b><p>We aim to provide a safe & empowering community for women in undergrad pursuing careers in tech, seeking to find jobs, resources, & mentorship!</p></b>
    <b><h3>Join our Community at WINTech!</h3></b>
    <!-- <a href="#"><button class = "button">Explore</button></a> -->
  </div>
</div>



    <!-- <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <p>Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
    <p>Suspendisse potenti. Sed egestas est in feugiat.</p>
    <p>Phasellus auctor urna at est sollicitudin interdum.</p>
    <p>Donec non justo ac purus fringilla ullamcorper at sed urna.</p>
    <p>Curabitur mollis, ante ut venenatis sodales, magna eros sodales eros.</p> -->