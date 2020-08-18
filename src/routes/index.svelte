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
		grid-template-rows: 50px 1fr;
		grid-template-columns: 1fr;
		grid-gap: 10px;
	}

	p {
		grid-column: 1 / -1;
	}

	ul {
		grid-column: 1 / 2;
	}

	@import "src/scss/mediaqueries.scss";
</style>

<!-- <img src="./develop3.png" alt="" /> -->

<section>
	<p>This is my technical profile. It is built in Sapper using:</p>

	<ul>
		<li>HTML5</li>
		<li>CSS3/SCSS</li>
		<li>JavaScript</li>
		<li>BootStrap4</li>
		<li>SVG for the icons</li>
		<li>Font Awesome</li>
		<li>Custom Google Fonts</li>
	</ul>

</section>