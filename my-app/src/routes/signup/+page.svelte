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
	:global(body) {
			font-family: 'Marcellus', serif;
			background-color: #d0bfe2;
			color: #333;
			margin-left: 0px;
			margin-right: 0px;
			margin-top: 0px;
			margin-bottom: 50px;
	}

	p {
		margin-bottom: 5px;
	}
                    /* Navbar */
                    .navbar {
            background-color: #876BD4 !important;
            padding: 15px 20px;
            display: flex;
            justify-content: space-between;
			margin-top: 0%;
            align-items: top;
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
            margin: 10px 15px; 
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

	button {
		background-color: #876BD4;
		font-family: 'Marcellus', serif;
		color: white;
		padding: 10px 20px;
		border: none;
		border-radius: 5px;
		margin-top: 15px;
		cursor: pointer;
	}

	.card {
		width: 50%;
		margin: auto;
		margin-top: 50px;
		padding: 20px;
		border-radius: 5px;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		text-align: center;
		background-color: #F5F5F5;
	}

	.textbox {
		width: 50%;
		padding: 5px;
	}
</style>

<nav class="navbar">
	<a class="navbar-brand" href="#">Articles</a>
	<ul class="navbar-nav">
		<li class="nav-item"><a class="nav-link" href="/">Home</a></li>
	</ul>
</nav>

<div class="card">
	<h2>
		Mentorship Program Sign Up
	</h2>
	<form on:submit={handleSubmit}>
		<p>
			Username
		</p>
		<input class="textbox" type="text" bind:value={username}/> 
		<p>
			Password
		</p>
		<input class="textbox" type="text" bind:value={password}/> 
		<p>
			First Name
		</p>
		<input class="textbox" type="text" bind:value={firstName}/> 
		<p>
			Last Name
		</p>
		<input class="textbox" type="text" bind:value={lastName}/> 
		<p>
			University
		</p>
		<input class="textbox" type="text" bind:value={university}/> 
		<p>
			Major
		</p>
		<input class="textbox" type="text" bind:value={major}/> 
		<p>
			Are you a mentor or a mentee?
		</p>
		<input type="radio" id="yes" name="mentor" value="true" bind:group={isMentor}/>
		<label for="yes">Mentor</label>
		<input type="radio" id="no" name="mentor" value="false" bind:group={isMentor}>
		<label for="no">Mentee</label>
		<br>
		<button type="submit">
			Submit
		</button>
	</form>
</div>