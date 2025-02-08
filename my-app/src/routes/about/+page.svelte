<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blog Page</title>
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f7f6;
            margin: 0;
            padding: 40px;
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
    </style>
</head>
<body>
    <div class="container">
        <div class="blog-header">
            <h1>From the Blog</h1>
            <p>Learn how to grow your business with our expert advice.</p>
        </div>
        
        <div class="blog-post">
            <img src="https://www.bootdey.com/image/400x300/FFB6C1/000000" alt="Blog Image">
            <div class="blog-content">
                <p class="meta">Mar 16, 2020 • <span style="background:#e0e0e0;padding:5px 10px;border-radius:5px;">Marketing</span></p>
                <h2>Boost your conversion rate</h2>
                <p>Discover how to optimize your website and increase your conversion rates with proven strategies.</p>
                <div class="meta">
                    <img src="https://www.bootdey.com/img/Content/avatar/avatar1.png" alt="Author">
                    <span>Michael Foster - Co-Founder / CTO</span>
                </div>
            </div>
        </div>

        <div class="blog-post">
            <img src="https://www.bootdey.com/image/400x300/87CEFA/000000" alt="Blog Image">
            <div class="blog-content">
                <p class="meta">Mar 10, 2020 • <span style="background:#e0e0e0;padding:5px 10px;border-radius:5px;">Sales</span></p>
                <h2>How to use search engine optimization to drive sales</h2>
                <p>Learn how SEO can help drive traffic to your website and boost sales for your business.</p>
                <div class="meta">
                    <img src="https://www.bootdey.com/img/Content/avatar/avatar2.png" alt="Author">
                    <span>Lindsay Walton - Front-end Developer</span>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
