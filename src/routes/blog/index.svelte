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
	row-gap: 15px;
}

.table-of-contents {
	grid-row: 2 / -3;
}

// .posts {
// 	grid-row: 3 / -2;
// }

h2 {
	padding: 0.5em 1em 1em 1em;
	text-align: center;
}

@media all and (max-width: 600px) {
	h2 {
		font-size: 1.25em;
	}
  }

// p {
// 	padding: 2.5em;
// 	border-top: 2px solid orange;
// }

.posts-item {
    padding: 1.25rem;
    // box-shadow: 2px 2px 5px #9cb3b7;
	transition: box-shadow .3s;
	border-radius: 15px;
	border: 1px solid #ccc;

	&:hover {
		box-shadow: 0 0 11px rgba(33,33,33,.2); 
	}
}

hr {
    border-top: 3px solid orange;
    padding: 15px;
	width: 175px;
	margin: auto;
}

</style>

<!-- <svelte:head>
	<title>Blog</title>
</svelte:head> -->

	<!-- <header>
		<h1>Table of Contents</h1>
  </header> -->

	<!-- <section class="table-of-contents">
		{#each posts as post}
		<article class="posts-item">
			<h4>{post.title}</h4>
			<br>
		</article>
		{/each}
	</section> -->

	<section class="blog-list">
		{#each posts as post}
		<article class="posts-item">
			<h2>{post.title}</h2>
			<hr>
			<p>{@html post.html}</p>
			<!-- <a href="/blog">Back to list</a> -->
		</article>
		{/each}
	</section>