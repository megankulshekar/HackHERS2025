<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css2?family=Marcellus&family=Marcellus+SC&display=swap" rel="stylesheet">
</svelte:head>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CS Blog Page</title>
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <style>
        	:global(body) {
        font-family: 'Marcellus', serif;
        background-color: rgb(208, 191, 226);
    }
        body {

            font-family: 'Marcellus', serif;
            background-color: rgb(208, 191, 226);
            margin: 0;
            padding: 0;
        }
        .navbar {
            background-color: #583d68 !important;
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
            padding: 40px;
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
        .blog-post {
            display: flex;
            background: #fff;
            border-radius: 10px;
            overflow: hidden;
            margin-bottom: 30px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .blog-post img {
            width: 250px;
            height: auto;
            object-fit: cover;
        }
        .blog-content {
            padding: 20px;
            flex: 1;
        }
        .blog-content h2 {
            font-size: 1.5rem;
            color: #212529;
            margin-bottom: 10px;
        }
        .blog-content p {
            font-size: 1rem;
            color: #6c757d;
            margin-bottom: 15px;
        }
        .meta {
            display: flex;
            align-items: center;
            font-size: 0.9rem;
            color: #6c757d;
        }
        .meta img {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            margin-right: 10px;
        }
        footer {
            background: #583d68;
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
</head>
<body>
    <nav class="navbar">
        <a class="navbar-brand" href="#">Articles</a>
        <ul class="navbar-nav">
            <li class="nav-item"><a class="nav-link" href="/">Home</a></li>
        </ul>
    </nav>

    <div class="container">
        <div class="blog-header">
            <h1>CS Insights</h1>
            <p>Stay updated with the latest trends in Computer Science and Technology.</p>
        </div>
        
        <div class="blog-post">
            <img src="https://s3.amazonaws.com/msoe/files/callouts/wide_xlrg_computer-science-landing-page.jpg" alt="Blog Image">
            <div class="blog-content">
                <p class="meta">Jan 25, 2025 • <span style="background:#e0e0e0;padding:5px 10px;border-radius:5px;">Artificial Intelligence</span></p>
                <h2>The Future of AI: Trends and Predictions</h2>
                <p>Explore how artificial intelligence is shaping industries and what to expect in the coming years.</p>
                <div class="meta">
                    <span>Revati Ghanekar - AI Researcher</span>
                </div>
            </div>
        </div>

        <div class="blog-post">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Computer_science_and_engineering.jpg/440px-Computer_science_and_engineering.jpg" alt ="download icon"/>
            <div class="blog-content">
                <p class="meta">December 19, 2024 • <span style="background:#e0e0e0;padding:5px 10px;border-radius:5px;">Cybersecurity</span></p>
                <h2>How to Protect Your Data Online</h2>
                <p>Discover essential cybersecurity practices to keep your personal and professional data safe from hackers.</p>
                <div class="meta">
                    <span>Megan Kulshekar - Security Analyst</span>
                </div>
            </div>
        </div>

        <div class="blog-post">
            <img src="https://snit.edu.in/wp-content/uploads/2023/08/computer-science-engineering-1536x1024.jpg" alt="Blog Image">
            <div class="blog-content">
                <p class="meta">October 15, 2024 • <span style="background:#e0e0e0;padding:5px 10px;border-radius:5px;">Machine Learning</span></p>
                <h2>Introduction to Machine Learning</h2>
                <p>Learn the basics of machine learning and how it is revolutionizing the field of data science.</p>
                <div class="meta">
                    <span>Mahima Ragupati - ML Engineer</span>
                </div>
            </div>
        </div>

        <div class = "blog-post">
            <img src="https://images.shiksha.com/mediadata/ugcDocuments/images/wordpressImages/2021_12_Programming-vs-Web-Development.jpg" alt="Blog Image">
            <div class="blog-content">
                <p class="meta">August 20, 2024 • <span style="background:#e0e0e0;padding:5px 10px;border-radius:5px;">Web Development</span></p>
                <h2>Building Modern Web Applications</h2>
                <p>Explore the latest web development technologies and frameworks to create responsive and dynamic web applications.</p>
                <div class="meta">
                    <span>Mekhiah Chapman - Web Developer</span>
                </div>
            </div>
        </div>

    </div>
    <footer>
        <p>&copy; 2025 WINTech. All rights reserved.</p>
    </footer>
</body>
</html>
