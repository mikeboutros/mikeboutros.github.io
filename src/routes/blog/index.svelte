<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>

<script>
	export let posts;
</script>

<style lang="scss">
	@import "src/scss/global.scss";

.blog-list {
	display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr;
	grid-gap: 1em;
}

li {
	color: #4073CA;
	font-size: 1.4em;
	text-transform: uppercase;
	list-style-type: none;
	justify-items: left;
}

	@import "src/scss/mediaqueries.scss";
</style>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<div class="blog-list">

	<header>
		<h1>Table of Contents</h1>
	</header>

	<ul>
		{#each posts as post}
			<!-- we're using the non-standard `rel=prefetch` attribute to
					tell Sapper to load the data for the page as soon as
					the user hovers over the link or taps it, instead of
					waiting for the 'click' event -->
			<li><a rel='prefetch' href='blog/{post.slug}'>{post.title}</a></li>
		{/each}
	</ul>

</div>