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
	}
	p {
		margin-bottom: 5px;
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
		border-radius: 2px;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
		text-align: center;
		background-color: #F5F5F5;
	}
	.textbox {
		width: 50%;
		padding: 5px;
	}
</style>


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
