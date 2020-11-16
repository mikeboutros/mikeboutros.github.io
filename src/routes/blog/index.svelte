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
	grid-template-rows: 1fr;
}

.table-of-contents {
	grid-row: 2 / -3;
}

.posts {
	grid-row: 3 / -2;
}

h2 {
	padding: 1em;
	text-align: center;
}

@media all and (max-width: 600px) {
	h2 {
		font-size: 1.25em;
	}
  }

p {
	padding: 2em;
	border-top: 2px solid orange;
}

.card {
    padding: 1.25rem;
    background: white;
    border-radius: 15px;
    box-shadow: 2px 2px 5px #9cb3b7;
  }

	@import "src/scss/mediaqueries.scss";
</style>

<!-- <svelte:head>
	<title>Blog</title>
</svelte:head> -->

	<!-- <header>
		<h1>Table of Contents</h1>
  </header> -->

<div class="blog-list">

	<!-- <section class="table-of-contents">
		{#each posts as post}
		<article class="posts-item">
			<h4>{post.title}</h4>
			<br>
		</article>
		{/each}
	</section> -->

	<section class="posts">
		{#each posts as post}
		<article class="posts-item card">
			<h2>{post.title}</h2>
			<p>{@html post.html}</p>
			<!-- <a href="/blog">Back to list</a> -->
		</article>
		{/each}
	</section>
</div>