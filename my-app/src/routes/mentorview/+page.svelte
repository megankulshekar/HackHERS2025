<script lang="ts">
    import { goto } from "$app/navigation";
    let activeTab: 'requests' | 'currentMentees' = 'requests';
    function selectTab(tab: 'requests' | 'currentMentees') {
        activeTab = tab;
    }
    function handleSelect() {
        goto("/confirmation");
    }
</script>

<svelte:head>
    <title>Mentorship Page</title>
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css2?family=Marcellus&family=Marcellus+SC&display=swap" rel="stylesheet">
</svelte:head>

<style>
            /* Navbar */
            .navbar {
    background-color: #583d68 !important;
    padding: 15px 5px;
    padding-left: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed; /* Make it stick */
    top: 0; /* Align it to the top */
    left: 0;
    width: 100%; /* Full width */
    z-index: 1000; /* Ensure it stays above other elements */
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
            padding: 25px;
        }
        .nav-link:hover {
            text-decoration: underline;
        }
    footer {
                background: #583d68;
                color: white;
                text-align: center;
                padding: 2rem 0;
                font-size: 0.9rem;
                margin-top: 100px;
                position: fixed;
                left: 0;
                bottom: 0;
                width: 100%;
            }

            footer p {
                margin: 0;
                opacity: 0.7;
            }
    :global(body) {
        font-family: 'Marcellus', serif;
        background-color: rgb(208, 191, 226);
    }
    .tabs {
        display: flex;
        justify-content: center;
        margin-bottom: 20px;
        margin-top: 40px;
    }
    .tab {
        padding: 10px 20px;
        cursor: pointer;
        background-color: #583d68;
        color: white;
        border: none;
        border-radius: 5px;
        margin: 0 5px;
        margin-top: 50px;
        transition: background-color 0.3s;
    }
    .tab.active {
        background-color: #583d68;
    }
    button {
        background-color: #583d68;
        font-family: 'Marcellus', serif;
        color: white;
        border: none;
        padding: 10px 30px;
        text-decoration: none;
        border-radius: 5px;
        cursor: pointer;
        margin-bottom: 20px;
        transition: background-color 0.3s, transform 0.3s;
    }
    .container {
        max-width: 900px;
        margin: auto;
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
        margin-top: auto;
    }
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
    .container {
        max-width: 900px;
        margin: auto;
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
        padding: 10px;
    }
    /* Right Section */
    .mentor-right {
        flex: 1;
    }
    .meta a {
        text-decoration: none;
        color: #583d68; /* LinkedIn Blue */
        font-weight: bold;
    }
    .meta a:hover {
        text-decoration: underline;
    }
</style>
<nav class="navbar">
    <a class="navbar-brand" href="#">Mentor View</a>
    <ul class="navbar-nav">
        <li class="nav-item"><a class="nav-link" href="/">Home</a></li>
    </ul>
</nav>
<div class="tabs">
    <button class="tab {activeTab === 'requests' ? 'active' : ''}" on:click={() => selectTab('requests')}>Requests</button>
    <button class="tab {activeTab === 'currentMentees' ? 'active' : ''}" on:click={() => selectTab('currentMentees')}>Current Mentees</button>
</div>
<div class="container">
    {#if activeTab === 'requests'}
        <div class="mentor-box">
            <!-- Left Section: Profile Picture + Name -->
            <div class="mentor-left">
                <img src="https://www.bootdey.com/img/Content/avatar/avatar3.png" alt="Flora Miller">
               
                <button on:click={handleSelect}>Accept</button>
            </div>
        
            <!-- Right Section: Description -->
            <div class="mentor-right">
                <h2>Sarah Smith</h2>
                <p class="desc">Major: Computer Science

                <p class="desc">Princeton University</p>
                <div class="meta">
                    <a href="https://www.linkedin.com/company/example" target="_blank">LinkedIn Profile</a>
                </div>
                
            </div>
        </div>
        <div class="mentor-box">
            <!-- Left Section: Profile Picture + Name -->
            <div class="mentor-left">
                <img src="https://www.bootdey.com/img/Content/avatar/avatar1.png" alt="Flora Miller">
                
                <button on:click={handleSelect}>Accept</button>   
            </div>
        
            <!-- Right Section: Description -->
            <div class="mentor-right">
                <h2>Jared Lewis</h2>
                <p class="desc">Major: Computer Science
                <p class="desc">Penn State University</p>
                <div class="meta">
                    <a href="https://www.linkedin.com/company/example" target="_blank">LinkedIn Profile</a>
                </div>
            </div>
        </div>
        <!-- Add more request boxes as needed -->
    {:else if activeTab === 'currentMentees'}
        <div class="mentor-box">
            <!-- Left Section: Profile Picture + Name -->
            <div class="mentor-left">
                <img src="https://www.bootdey.com/img/Content/avatar/avatar2.png" alt="Flora Miller"> 
            </div>
        
            <!-- Right Section: Description -->
            <div class="mentor-right">
                <h2>Alan Thompson</h2>
                <p class="desc">Major: Computer Science
                <br>
                <p class="desc">University: Rutgers University-New Brunswick</p>
                <div class="meta">
                    <a href="https://www.linkedin.com/company/example" target="_blank">LinkedIn Profile</a>
                </div>
            </div>
        </div>
        <div class="mentor-box">
            <!-- Left Section: Profile Picture + Name -->
            <div class="mentor-left">
                <img src="https://www.bootdey.com/img/Content/avatar/avatar5.png" alt="Flora Miller"> 
            </div>
        
            <!-- Right Section: Description -->
            <div class="mentor-right">
                <h2>Mason Jefferson</h2>
                <p class="desc">Major: Computer Science
                <br>
                <p class="desc">University: Rutgers University-New Brunswick</p>
                <div class="meta">
                    <a href="https://www.linkedin.com/company/example" target="_blank">LinkedIn Profile</a>
                </div>
            </div>
        </div>
        <!-- Add more current mentee boxes as needed -->
    {/if}
</div>
<footer>
    <p>&copy; 2025 WINTech. All rights reserved.</p>
</footer>