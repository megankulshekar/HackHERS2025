<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css2?family=Marcellus&family=Marcellus+SC&display=swap" rel="stylesheet">
</svelte:head>

<style>
	:global(body) {
        font-family: 'Marcellus', serif;
        background-color: rgb(208, 191, 226);
    }
    h1 {
        color:rgb(138, 92, 191);
        text-align: center; 
    }
    .scroll-container {
      margin: auto;
      text-align: center;
      width: 650px;
      height: 450px;
      overflow-y: scroll; /* Enable vertical scrolling */
      border: 1px solid #333;
      background-color: rgb(243, 243, 243);
      box-shadow: 0 4px 3px;
      margin-bottom: 10px;
      margin-top: 50px;
      border-radius: 25px
    }

    
    .content {
      height: 500px; 
    }

/*     
    .button {
      padding: 10px;
      background-color: #007BFF;
      color: white;
      border: none;
      cursor: pointer;
      margin-top: 10px;
      border-radius: 5px;
    } */

    
</style>

<h1>Women in Tech</h1>

<!-- <nav>
    <a href="/">home</a>
    <a href="/articles">articles</a>
    <a href="/signup">signup</a>
    <a href="mentorship"> mentorship</a>
</nav> -->

<a href="/">
    <button>home</button>
  </a>

  <a href="/articles">
    <button>articles</button>
  </a>

  <a href="/signup">
    <button>signup</button>
  </a>

  <a href="mentorship">
    <button>mentorship</button>
  </a>

  <div class="scroll-container" id="scrollContainer">
    <div class="content">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <p>Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
      <p>Suspendisse potenti. Sed egestas est in feugiat.</p>
      <p>Phasellus auctor urna at est sollicitudin interdum.</p>
      <p>Donec non justo ac purus fringilla ullamcorper at sed urna.</p>
      <p>Curabitur mollis, ante ut venenatis sodales, magna eros sodales eros.</p>
    </div>
  </div>

 