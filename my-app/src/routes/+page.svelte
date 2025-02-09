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
    }
    h1 {
        color:rgb(138, 92, 191);
        text-align: center; 
    }
</style>
<h1>Women in Tech</h1>
<h2>Database Connection Status:</h2>
  <p>{dbStatus}</p>

<nav>
    <a href="/">home</a>
    <a href="/articles">articles</a>
    <a href="/signup">signup</a>
    <a href="/menteeview"> mentee view</a>
    <a href="/mentorview">mentor view</a>
    <a href="/jobs">jobs</a>
</nav>