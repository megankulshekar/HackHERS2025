<script>
    import { goto } from "$app/navigation";

    function handleSelect() {
        goto("/confirmation");
    }
</script>

<svelte:head>
    <title>Mentorship Page</title>
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css2?family=Marcellus&family=Marcellus+SC&display=swap" rel="stylesheet">
</svelte:head>

<style>
    :global(body) {
        font-family: 'Marcellus', serif;
        background-color: rgb(208, 191, 226);
        margin: 0;

    }
    button {
        background-color: #876BD4;
        font-family: 'Marcellus', serif;
        color: white;
        border: none;
        padding: 10px 30px;
        text-decoration: none;
        border-radius: 5px;
        cursor: pointer;
        margin-bottom: 8px;
        transition: background-color 0.3s, transform 0.3s;
    }
    /* Navbar */
    .navbar {
        background-color: #876BD4 !important;
        padding: 15px 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .navbar-brand {
        font-size: 1.5rem;
        color: white !important;
        text-decoration: none;
        font-weight: bold;
    }
    .navbar-nav {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
    }
    .nav-item {
        margin: 0 15px;
    }
    .nav-link {
        color: white !important;
        text-decoration: none;
        font-size: 1rem;
        transition: 0.3s;
    }
    .nav-link:hover {
        text-decoration: underline;
    }
    .container {
        max-width: 900px;
        margin: auto;
    }
    .blog-header {
        text-align: left;
        margin-bottom: 40px;
    }
    .blog-header h1 {
        font-size: 2.5rem;
        color: #212529;
        margin-bottom: 5px;
    }
    .blog-header p {
        color: #6c757d;
        font-size: 1.1rem;
    }
    .meta {
        display: flex;
        align-items: center;
        font-size: 0.9rem;
        color: #6c757d;
        padding-bottom: 20px;
    }
    .mentor-right {
        margin-left: 20px;
        
    }
    .desc {
        padding-top: 1px;
        
        margin-bottom: 20px;
    }
    .mentor-box {
        display: flex;
        align-items: center;
        border: 2px solid #ccc;
        border-radius: 10px;
        padding: 20px;
        background: #f9f9f9;
        max-width: 900px;
        margin-bottom: 20px;
    }
    /* Left Section */
    .mentor-left {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        margin-right: 20px;
    }
    .mentor-left img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        margin-bottom: 10px;
    }
    /* Right Section */
    .mentor-right {
        flex: 1;
    }
    .meta a {
        text-decoration: none;
        color: #0073b1; /* LinkedIn Blue */
        font-weight: bold;
    }
    .meta a:hover {
        text-decoration: underline;
    }
/* Main content wrapper */
.main-content {
    flex: 1; /* Pushes the footer down */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

/* Footer - sticks to bottom */
footer {
    background: #876BD4;
    color: white;
    text-align: center;
    padding: 1.5rem 0;
    font-size: 0.9rem;
    margin-top: auto; /* Pushes footer to bottom */
    width: 100%;
}

footer p {
    margin: 0;
    opacity: 0.7;
}

</style>

<nav class="navbar">
    <a class="navbar-brand" href="#">Mentees</a>
    <ul class="navbar-nav">
        <li class="nav-item"><a class="nav-link" href="/">Home</a></li>
    </ul>
</nav>

<div class="container">
    <div class="blog-header">
        <h1>Mentorship</h1>
        <p>Find a mentor that best matches you!</p>
    </div>
    
    <div class="mentor-box">
        <!-- Left Section: Profile Picture + Name -->
        <div class="mentor-left">
            <img src="https://www.bootdey.com/img/Content/avatar/avatar3.png" alt="Flora Miller">
            <h2>Sarah Smith</h2>
        </div>
    
        <!-- Right Section: Description -->
        <div class="mentor-right">
            <h2>Computer Science</h2>
            <p class="desc">I am a graduate from Rutgers University-New Brunswick and majored in 
                Computer Science. Feel free to connect with me and sign up to talk!
            </p>
            <div class="meta">
                <a href="https://www.linkedin.com/company/example" target="_blank">LinkedIn Profile</a>
            </div>
            <button on:click={handleSelect}>Select</button>
        </div>
    </div>
        
    <div class="mentor-box">
        <!-- Left Section: Profile Picture + Name -->
        <div class="mentor-left">
            <img src="https://www.bootdey.com/img/Content/avatar/avatar3.png" alt="Flora Miller">
            <h2>Flora Miller</h2>
        </div>
    
        <!-- Right Section: Description -->
        <div class="mentor-right">
            <h2>Computer Science</h2>
            <p class="desc">I am a Senior majoring in Computer Science at Rutgers University-New Brunswick. 
                Feel free to connect with me and sign up to talk!
            </p>
            <div class="meta">
                <a href="https://www.linkedin.com/company/example" target="_blank">LinkedIn Profile</a>
            </div>
            <button on:click={handleSelect}>Select</button>
        </div>
    </div>
        
    <div class="mentor-box">
        <!-- Left Section: Profile Picture + Name -->
        <div class="mentor-left">
            <img src="https://www.bootdey.com/img/Content/avatar/avatar5.png" alt="Flora Miller">
            <h2>Max James</h2>
        </div>
    
        <!-- Right Section: Description -->
        <div class="mentor-right">
            <h2>Data Science</h2>
            <p class="desc">I am a graduate from Rutgers University-New Brunswick. I got my bachelor's degree in 
                Data Science. Feel free to connect with me and sign up to talk!
            </p>
            <div class="meta">
                <a href="https://www.linkedin.com/company/example" target="_blank">LinkedIn Profile</a>
            </div>
            <button on:click={handleSelect}>Select</button>
        </div>
    </div>
       
    <div class="mentor-box">
        <!-- Left Section: Profile Picture + Name -->
        <div class="mentor-left">
            <img src="https://www.bootdey.com/img/Content/avatar/avatar6.png" alt="Flora Miller">
            <h2>Noah Brown</h2>
        </div>

        <!-- Right Section: Description -->
        <div class="mentor-right">
            <h2>Computer Engineering</h2>
            <p class="desc">I am in my final semester of the Computer Engineering program at Rutgers University-New Brunswick.
            Let's connect and talk!
            </p>
            <div class="meta">
                <a href="https://www.linkedin.com/company/example" target="_blank">LinkedIn Profile</a>
            </div>
            <button on:click={handleSelect}>Select</button>
        </div>
    </div>
</div>
<footer>
    <p>&copy; 2025 WINTech. All rights reserved.</p>
</footer>