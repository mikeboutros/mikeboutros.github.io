<script>
	
</script>

<style lang="scss">
	@import "src/scss/global.scss";
	
	// img {
	// 	width: 100%;
	// 	height: auto;
	// }

	section {
		display: grid;
		grid-template-columns: 30px 1fr 30px;
		grid-template-rows: 250px 1fr 250px;
	}

	.intro {
		grid-column: 2 / 3;
		grid-row: 2 / -2;
		text-align: center;
		align-self: center;
	}

	a[href^="http://"], a[href^="https://"] {
		// text-decoration-style: wavy;
		color: red;
		font-size: 1.25em;
	}

	@import "src/scss/mediaqueries.scss";
</style>

<!-- <img src="./develop3.png" alt="" /> -->

<section>
	<div class="intro">
		<h4>This is my technical profile and it is built in <a href="https://sapper.svelte.dev/">Sapper</a>, an application framework powered by <a href="https://svelte.dev/">Svelte</a>.</h4>
	</div>
</section>