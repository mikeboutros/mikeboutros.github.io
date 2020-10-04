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
		grid-template-rows: repeat(3, 200px);
	}

	.intro {
		grid-column: 2 / 3;
		grid-row: 2 / -2;
		text-align: center;
		align-self: center;
	}

	.underline {
		text-decoration-style: wavy;
		color: red;
		font-size: 1.25em;
	}

	@import "src/scss/mediaqueries.scss";
</style>

<!-- <img src="./develop3.png" alt="" /> -->

<section>
	<div class="intro">
		<h1>WELCOME</h1>
		<p>This is my technical profile.</p>
		<p>It is built in <a href="https://sapper.svelte.dev/" class="underline">Sapper</a>, an application framework powered by <a href="https://svelte.dev/" class="underline">Svelte</a>.</p>
	</div>
</section>