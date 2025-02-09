<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="A clean and modern blog layout" />
        <meta name="author" content="Your Name" />
        <title>Blog Home - Modern Bootstrap Design</title>
        <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
        <!-- Bootstrap CSS -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" />
        <!-- Custom CSS -->
        <style>
            /* General Styles */
            body {
                font-family: 'Poppins', sans-serif;
                background-color: #d0bfe2;
                color: #333;
                line-height: 1.7;
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


            /* Blog Post Cards */
            .card {
                border: none;
                border-radius: 12px;
                transition: transform 0.3s ease, box-shadow 0.3s ease;
                overflow: hidden;
            }

            .card:hover {
                transform: translateY(-5px);
                box-shadow: 0 15px 25px rgba(0, 0, 0, 0.15);
            }

            .card-img-top {
                border-top-left-radius: 12px;
                border-top-right-radius: 12px;
            }

            .card-body {
                padding: 1.8rem;
            }

            .card-title {
                font-size: 1.5rem;
                font-weight: bold;
            }

            .card-text {
                color: #555;
            }

            .btn-custom {
                background: #876BD4;
                color: white;
                border-radius: 50px;
                padding: 10px 20px;
                transition: background 0.3s ease;
            }

            .btn-custom:hover {
                background: #2563eb;
                color: white;
            }

            /* Sidebar */
            .card-header {
                background: #876BD4;
                color: white;
                font-weight: bold;
                border-radius: 12px 12px 0 0;
            }

            .card-body a {
                color: white;
                font-weight: bold;
                text-decoration: none;
            }


            /* Pagination */
            .pagination .page-link {
                color: #876BD4;
                border-radius: 50px;
                transition: background 0.3s ease;
            }

            .pagination .page-item.active .page-link {
                background: #4a90e2;
                color: white;
                border-radius: 50px;
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
    </head>
    <body>
        <!-- Navbar -->
        <nav class="navbar">
            <a class="navbar-brand" href="#">Articles</a>
            <ul class="navbar-nav">
                <li class="nav-item"><a class="nav-link" href="/">Home</a></li>
            </ul>
        </nav>


        <!-- Page content -->
        <div class="container mt-5">
            <div class="row">
                <!-- Blog entries (wrapping in row for alignment) -->
                <div class="col-lg-8">
                    <div class="row">
                        <!-- First Card -->
                        <div class="col-md-6 mb-4">
                            <div class="card" style="width: 24rem;">
                                <a href="#"><img class="card-img-top" src="https://dummyimage.com/850x350/dee2e6/6c757d.jpg" alt="Blog Image"></a>
                                <div class="card-body">
                                    <div class="small text-muted">January 1, 2023</div>
                                    <h2 class="card-title">How to Improve Your Blog Design</h2>
                                    <p class="card-text">Learn the latest trends in blog design and how you can enhance user experience with simple tweaks.</p>
                                    <a class="btn btn-custom" href="#">Read more →</a>
                                </div>
                            </div>
                        </div>
        
                        <!-- Second Card -->
                        <div class="col-md-6 mb-4">
                            <div class="card" style="width: 24rem;">
                                <a href="#"><img class="card-img-top" src="https://dummyimage.com/850x350/dee2e6/6c757d.jpg" alt="Blog Image"></a>
                                <div class="card-body">
                                    <div class="small text-muted">January 2, 2023</div>
                                    <h2 class="card-title">Boost Your Website Performance</h2>
                                    <p class="card-text">Discover techniques to optimize your website’s speed and enhance user experience.</p>
                                    <a class="btn btn-custom" href="#">Read more →</a>
                                </div>
                            </div>
                        </div>
                    </div>
        
                    <!-- Second Row of Cards -->
                    <div class="row">
                        <!-- Third Card -->
                        <div class="col-md-6 mb-4">
                            <div class="card" style="width: 24rem;">
                                <a href="#"><img class="card-img-top" src="https://dummyimage.com/850x350/dee2e6/6c757d.jpg" alt="Blog Image"></a>
                                <div class="card-body">
                                    <div class="small text-muted">January 3, 2023</div>
                                    <h2 class="card-title">Mastering SEO for Bloggers</h2>
                                    <p class="card-text">Learn the best SEO practices to increase traffic and visibility for your blog.</p>
                                    <a class="btn btn-custom" href="#">Read more →</a>
                                </div>
                            </div>
                        </div>
        
                        <!-- Fourth Card -->
                        <div class="col-md-6 mb-4">
                            <div class="card" style="width: 24rem;">
                                <a href="#"><img class="card-img-top" src="https://dummyimage.com/850x350/dee2e6/6c757d.jpg" alt="Blog Image"></a>
                                <div class="card-body">
                                    <div class="small text-muted">January 4, 2023</div>
                                    <h2 class="card-title">Creating Engaging Content</h2>
                                    <p class="card-text">Discover how to craft compelling blog posts that keep your audience engaged.</p>
                                    <a class="btn btn-custom" href="#">Read more →</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
        

                <!-- Sidebar -->
                <div class="col-lg-4">
                    <div class="card mb-4">
                        <div class="card-header">Search</div>
                        <div class="card-body">
                            <div class="input-group">
                                <input class="form-control" type="text" placeholder="Enter search term..." />
                                <button class="btn btn-custom">Go!</button>
                            </div>
                        </div>
                    </div>
                    <div class="card mb-4">
                        <div class="card-header">Categories</div>
                        <div class="card-body">
                            <ul class="list-unstyled">
                                <li><a href="#" style="color: #6C757D">Web Design</a></li>
                                <li><a href="#" style="color: #6C757D">HTML & CSS</a></li>
                                <li><a href="#" style="color: #6C757D">JavaScript</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Footer -->
        <footer>
            <p>&copy; 2025 WINTech. All rights reserved.</p>
        </footer>

        <!-- Bootstrap JS -->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
    </body>
</html>
