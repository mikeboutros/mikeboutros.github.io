<script>
	let github = "./svg/github.svg";

	
</script>

<style lang="scss">
	@import "src/scss/global.scss";

	section {
		display: grid;
		grid-template-columns: 30px 1fr 30px;
		grid-template-rows: 250px 1fr 250px 1fr;
	}

	.intro {
		grid-column: 2 / 3;
		grid-row: 2 / -4;
		text-align: center;
		align-self: center;
	}

	footer {
		grid-column: 2 / 3;
		grid-row: 4 / -2;
		text-align: center;
		align-self: center;
	}

	img {
		width: 50px;
	}

	.icons:hover {
        // filter: opacity(0.2);
		filter: drop-shadow(0 0 0.25rem crimson);
    }

	h4 {
		font-size: 1em;
	}

	a[href^="http://"], a[href^="https://"] {
		color: red;
		font-size: 1em;
		// text-decoration-style: wavy;
	}

	// @media all and (max-width: 480px) {
	// 	section {
	// 		grid-template-columns: 30px 1fr 30px;
	// 		grid-template-rows: 200px 1fr 200px 85px;
	// 	}
	// }

	// @media all and (min-width: 890px) {
	// 	section {
	// 		grid-template-columns: 30px 1fr 30px;
	// 		grid-template-rows: 200px 1fr 200px 110px;
	// 	}
	// }


	// @import "src/scss/mediaqueries.scss";
</style>

<section>
	<div class="intro">
		<h4>This is my technical profile and it is built in <a href="https://sapper.svelte.dev/">Sapper</a>, an application framework powered by <a href="https://svelte.dev/">Svelte</a>.</h4>
	</div>

	<footer>
		<a href="https://github.com/mikeboutros"> <img src = { github } class="icons" alt="github icon" /> </a>
	</footer>
</section>