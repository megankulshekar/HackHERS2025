<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mentorship Page</title>
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin="anonymous">
        <link href="https://fonts.googleapis.com/css2?family=Marcellus&family=Marcellus+SC&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Marcellus', serif;
            background-color: rgb(208, 191, 226);
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
    <nav>
        <a href="/">home</a>
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
                <p>I am a graduate from Rutgers University-New Brunswick and majored in 
                    Computer Science. Feel free to connect with me and sign up to talk!
                </p>
                <div class="meta">
                    <a href="https://www.linkedin.com/company/example" target="_blank">LinkedIn Profile Example</a>
                </div>
            </div>
        </div>
        
        <style>
            /* Container Styling */
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
        
            .mentor-right .category {
                background: #e0e0e0;
                padding: 5px 10px;
                border-radius: 5px;
            }
        
            .meta a {
                text-decoration: none;
                color: #0073b1; /* LinkedIn Blue */
                font-weight: bold;
            }
        
            .meta a:hover {
                text-decoration: underline;
            }
        </style>
        
        <div class="mentor-box">
            <!-- Left Section: Profile Picture + Name -->
            <div class="mentor-left">
                <img src="https://www.bootdey.com/img/Content/avatar/avatar3.png" alt="Flora Miller">
                <h2>Flora Miller</h2>
            </div>
        
            <!-- Right Section: Description -->
            <div class="mentor-right">
                <p>I am a graduate from Rutgers University-New Brunswick and majored in 
                    Computer Science. Feel free to connect with me and sign up to talk!
                </p>
                <div class="meta">
                    <a href="https://www.linkedin.com/company/example" target="_blank">LinkedIn Profile Example</a>
                </div>
            </div>
        </div>
        
        <style>
            /* Container Styling */
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
        
            .mentor-right .category {
                background: #e0e0e0;
                padding: 5px 10px;
                border-radius: 5px;
            }
        
            .meta a {
                text-decoration: none;
                color: #0073b1; /* LinkedIn Blue */
                font-weight: bold;
            }
        
            .meta a:hover {
                text-decoration: underline;
            }
        </style>
        
    <div class="mentor-box">
        <!-- Left Section: Profile Picture + Name -->
        <div class="mentor-left">
            <img src="https://www.bootdey.com/img/Content/avatar/avatar5.png" alt="Flora Miller">
            <h2>Max James</h2>
        </div>
    
        <!-- Right Section: Description -->
        <div class="mentor-right">
            <p>I am a graduate from Rutgers University-New Brunswick and majored in 
                Data Science. Feel free to connect with me and sign up to talk!
            </p>
            <div class="meta">
                <a href="https://www.linkedin.com/company/example" target="_blank">LinkedIn Profile Example</a>
            </div>
        </div>
    </div>
    
    <style>
        /* Container Styling */
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
    
        .mentor-right .category {
            background: #e0e0e0;
            padding: 5px 10px;
            border-radius: 5px;
        }
    
        .meta a {
            text-decoration: none;
            color: #0073b1; /* LinkedIn Blue */
            font-weight: bold;
        }
    
        .meta a:hover {
            text-decoration: underline;
        }
        </style>
       
<div class="mentor-box">
    <!-- Left Section: Profile Picture + Name -->
    <div class="mentor-left">
        <img src="https://www.bootdey.com/img/Content/avatar/avatar6.png" alt="Flora Miller">
        <h2>Noah Brown</h2>
    </div>

    <!-- Right Section: Description -->
    <div class="mentor-right">
        <p>I am a graduate from Rutgers University-New Brunswick and majored in 
            Computer Engineering. Feel free to connect with me and sign up to talk!
        </p>
        <div class="meta">
            <a href="https://www.linkedin.com/company/example" target="_blank">LinkedIn Profile Example</a>
        </div>
    </div>
</div>

<style>
    /* Container Styling */
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

    .mentor-right .category {
        background: #e0e0e0;
        padding: 5px 10px;
        border-radius: 5px;
    }

    .meta a {
        text-decoration: none;
        color: #0073b1; /* LinkedIn Blue */
        font-weight: bold;
    }

    .meta a:hover {
        text-decoration: underline;
    }
    </style>

    </div>
</body>
</html>
