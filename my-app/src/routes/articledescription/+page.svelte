<script lang="ts">
	let username = '';
	let password = '';
	let firstName = '';
	let lastName = '';
	let university = '';
	let major = '';
	let isMentor: boolean = false;

	async function handleSubmit(event: Event) {
		event.preventDefault();

		const userData = {
			firstName,
			lastName,
			university,
			major,
			isMentor
		};

		const response = await fetch('/api/signup', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(userData)
		});

		const result = await response.json();
		console.log(result);

		if (response.ok) {
			alert('Sign up successful!');
			username = '';
			password = '';
			firstName = '';
			lastName = '';
			university = '';
			major = '';
			isMentor = false;
		} else {
			alert(result.error || 'Sign up failed.');
		}
	}
</script>

<svelte:head>
	<title>Article</title>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
	<link href="https://fonts.googleapis.com/css2?family=Marcellus&family=Marcellus+SC&display=swap" rel="stylesheet">
</svelte:head>

<style>
	:global(body) {
			font-family: 'Marcellus', serif;
			background-color: #d0bfe2;
			color: #333;
	}
	p {
		margin-bottom: 5px;
        text-align: left;
	}
	button {
		background-color: #583d68;
		font-family: 'Marcellus', serif;
		color: white;
		padding: 10px 20px;
		border: none;
		border-radius: 5px;
		margin-top: 15px;
		cursor: pointer;
	}
	.card {
		width: 70%;
		margin: auto;
		margin-top: 50px;
		padding-left: 60px;
        padding-right: 60px;
        padding-top: 20px;
        padding-bottom: 30px;
		border-radius: 2px;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
		text-align: center;
		background-color: #F5F5F5;
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
	footer {
        background: #583d68;
        color: white;
        text-align: center;
        padding: 2rem 0;
        font-size: 0.9rem;
        margin-top: 50px;
        left: 0;
        bottom: 0;
        width: 100%;
    }
    footer p {
        margin: 0;
        opacity: 0.7;
    }
    .title {
        margin-bottom: -5px;
    }
    .author {
        margin-bottom: 0px;
    }
    .date {
        font-size: medium;
        padding-bottom: 10px;
    }
</style>

<nav class="navbar">
    <a class="navbar-brand" href="#">Article</a>
    <ul class="navbar-nav">
        <li class="nav-item"><a class="nav-link" href="/">Home</a></li>
    </ul>
</nav>
<div class="main-wrapper">


	<!-- Form card with proper spacing -->
	<div class="card">
        <h1 class="title">Empowering Women in Tech—A Milestone Event</h1>
		<h2 class="author">Chat GPT</h2>
        <h3 class="date">February 9, 2025</h3>
		<p>The tech world is celebrating a historic milestone as women in technology gather for the first-ever Global Women Innovators Summit, held this week in San Francisco. The event, which attracted thousands of participants from around the globe, showcases the incredible advancements women are making in various sectors, from AI development to cybersecurity, and offers a platform for women to discuss their experiences, challenges, and triumphs in the traditionally male-dominated field.<br><br>

            This year’s summit, themed Breaking Barriers, Shaping Futures, featured keynote speakers like Dr. Maya Johnson, a renowned AI researcher, and Sarah Lee, a tech entrepreneur who recently secured a multi-million dollar investment for her female-led startup. Their speeches inspired many young women, emphasizing the importance of resilience, creativity, and fostering a supportive community in the tech industry.<br><br>
            
            One of the summit’s most significant highlights was the announcement of the TechEquity Initiative, a new program aimed at bridging the gender gap in tech education and career opportunities. The initiative, backed by a coalition of major tech companies, promises scholarships, mentorship programs, and internships for women seeking careers in technology. According to organizers, this effort is part of a broader commitment to increase the percentage of women in leadership roles within the tech industry by 2028.<br><br>
            
            "We are at a turning point," said Dr. Johnson in her keynote address. "Tech is evolving faster than ever, and it is crucial that women are part of that evolution—not just as contributors, but as innovators leading the charge."<br><br>
            
            The summit also featured a series of workshops focused on skills like coding, data analytics, and entrepreneurship. Many women attendees expressed gratitude for the opportunity to learn from industry experts and network with like-minded peers. The event included a special panel on combating the pervasive issue of gender bias in tech, featuring voices from both established professionals and rising stars.<br><br>
            
            Though the event’s official programming concluded on a high note, the impact is expected to resonate far beyond the venue. Organizers have pledged to make the Global Women Innovators Summit an annual event, with plans to take it to other cities around the world.<br><br>
            
            As women continue to make waves in tech, their growing presence is shaping a future where innovation is powered by diversity. This summit marks just the beginning of what promises to be a transformative journey toward gender equality in one of the world’s most influential industries.</p>
	</div>
</div>

<footer>
	<p>&copy; 2025 WINTech. All rights reserved.</p>
</footer>