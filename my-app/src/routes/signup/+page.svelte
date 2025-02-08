<!DOCTYPE html>
<html lang="en">
	<head>
		<title>Sign Up</title>
		<link rel="preconnect" href="https://fonts.googleapis.com">
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
		<link href="https://fonts.googleapis.com/css2?family=Marcellus&family=Marcellus+SC&display=swap" rel="stylesheet">
		<style>
			body {
				font-family: 'Marcellus', serif;
				background-color: #F5F5F5;
				color: #333;
			}
			p {
				margin-bottom: 5px;
			}

			button {
				background-color: #876BD4;
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
				padding: 20px;
				border-radius: 10px;
				box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
				text-align: center;
			}
		</style>
	</head>
	<body>
		<div class="card">
			<h2>
				Sign Up for the Mentorship Program
			</h2>
			<p>
				First Name
			</p>
			<input class="textbox" type="text">
			<p>
				Last Name
			</p>
			<input class="textbox" type="text">
			<p>
				University
			</p>
			<input class="textbox" type="text">
			<p>
				Major
			</p>
			<input class="textbox" type="text">
			<p>
				Are you signing up as a mentor?
			</p>
			<input type="radio" id="yes" name="mentor" value="yes">
			<label for="yes">Yes</label>
			<input type="radio" id="no" name="mentor" value="no">
			<label for="no">No</label>
			<br>
			<button>
				Submit
			</button>
		</div>
	</body>
</html>
  