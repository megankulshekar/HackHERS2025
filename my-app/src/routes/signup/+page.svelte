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
	<title>Sign Up</title>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
	<link href="https://fonts.googleapis.com/css2?family=Marcellus&family=Marcellus+SC&display=swap" rel="stylesheet">
</svelte:head>

<style>
	/* Full-page layout */
	html, body {
		height: 100%;
		margin: 0;
		display: flex;
		flex-direction: column;
		font-family: 'Marcellus', serif;
		background-color: #d0bfe2;
		color: #333;
	}

	/* Wrapper to create space between navbar, card, and footer */
	.main-wrapper {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 40px 0; /* Adds space above and below the form */
	}

           /* Navbar */
		   .navbar {
            background-color: #876BD4 !important;
            /*color: #876BD4;*/
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

	/* Card Styling */
	.card {
		width: 50%;
		max-width: 500px;
		background-color: #F5F5F5;
		padding: 25px;
		border-radius: 10px;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		text-align: center;
		margin-top: 40px;
		margin-bottom: 40px; /* Space between form and footer */
	}

	.textbox {
		width: 100%;
		padding: 8px;
		margin: 5px 0;
		border: 1px solid #ccc;
		border-radius: 5px;
	}

	/* Button Styling */
	button {
		background-color: #876BD4;
		font-family: 'Marcellus', serif;
		color: white;
		padding: 10px 20px;
		border: none;
		border-radius: 5px;
		cursor: pointer;
		margin-top: 15px;
		transition: background-color 0.3s, transform 0.3s;
	}

	button:hover {
		background-color: #755ac7;
		transform: scale(1.05);
	}

	/* Footer stays at bottom with spacing */
	footer {
		background: #876BD4;
		color: white;
		text-align: center;
		padding: 1.5rem 0;
		font-size: 0.9rem;
		width: 100%;
		margin-top: auto;
	}

	footer p {
		margin: 0;
		opacity: 0.7;
	}
</style>
<nav class="navbar">
	<a class="navbar-brand" href="#">Sign Up</a>
	<ul class="navbar-nav">
		<li class="nav-item"><a class="nav-link" href="/">Home</a></li>
	</ul>
</nav>
<div class="main-wrapper">


	<!-- Form card with proper spacing -->
	<div class="card">
		<h2>Mentorship Program Sign Up</h2>
		<form on:submit={handleSubmit}>
			<p>Username</p>
			<input class="textbox" type="text" bind:value={username}/> 

			<p>Password</p>
			<input class="textbox" type="password" bind:value={password}/> 

			<p>First Name</p>
			<input class="textbox" type="text" bind:value={firstName}/> 

			<p>Last Name</p>
			<input class="textbox" type="text" bind:value={lastName}/> 

			<p>University</p>
			<input class="textbox" type="text" bind:value={university}/> 

			<p>Major</p>
			<input class="textbox" type="text" bind:value={major}/> 

			<p>Are you a mentor or a mentee?</p>
			<input type="radio" id="yes" name="mentor" value="true" bind:group={isMentor}/>
			<label for="yes">Mentor</label>
			<input type="radio" id="no" name="mentor" value="false" bind:group={isMentor}>
			<label for="no">Mentee</label>

			<br>
			<button type="submit">Submit</button>
		</form>
	</div>
</div>

<footer>
	<p>&copy; 2025 WINTech. All rights reserved.</p>
</footer>
