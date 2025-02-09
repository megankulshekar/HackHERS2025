<svelte:head>
    <title>Confirmation</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css2?family=Marcellus&display=swap" rel="stylesheet">
</svelte:head>

<style>
    :global(body) {
        font-family: 'Marcellus', serif;
        background-color: #d0bfe2;
        color: #333;
        margin: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }

 /* Navbar Styling */
.navbar {
    background-color: #876BD4;
    display: flex;
    align-items: center;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    height: 60px; /* Ensure fixed height */
    padding: 0 20px; /* Reduce unnecessary padding */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Brand Styling */
.navbar-brand {
    font-size: 1.5rem;
    color: white;
    text-decoration: none;
    font-weight: bold;
    line-height: 60px; /* Keep it vertically aligned */
}

/* Spacer to push items */
.nav-spacer {
    flex-grow: 1;
}

/* Home Link Fix */
.nav-link {
    color: white;
    text-decoration: none;
    font-size: 1rem;
    font-weight: bold;
    padding: 0 30px; /* Adjust padding */
    height: 60px; /* Make it the same height as navbar */
    display: flex;
    align-items: center; /* Center vertically */
}

.nav-link:hover {
    text-decoration: underline;
}



    /* Card Styling */
    .card-body {
        background-color: #fff;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        padding: 40px;
        margin-top: 100px; /* Adjusted for navbar spacing */
        max-width: 400px;
        width: 90%;
        text-align: center;
    }

    h1 {
        color: #5a3ea1;
    }
                /* Footer */
                footer {
                background: #876BD4;
                color: white;
                text-align: center;
                padding: 2rem 0;
                font-size: 0.9rem;
                margin-top: 50px;
            }

            footer p {
                margin: 0;
                opacity: 0.7;
            }
</style>

<nav class="navbar">
    <a class="navbar-brand" href="#">Confirmation</a>
    <div class="nav-spacer"></div> <!-- Pushes "Home" to the right -->
    <a class="nav-link" href="/">Home</a>
</nav>

<div class="card-body">
    <h1>Thank You!</h1>
    <p>You will receive an email confirmation with more details soon.</p>
</div>
<footer>
    <p>&copy; 2025 WINTech. All rights reserved.</p>
</footer>
