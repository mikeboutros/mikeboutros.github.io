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
  	grid-template-rows: 80px repeat(4, 1fr);
  	grid-template-columns: 1fr;
	grid-gap: 1em;
}

li {
	color: #4073CA;
	font-size: 1em;
	text-transform: uppercase;
	list-style-type: none;
}

@media all and (min-width: 992px) {
	.blog-list {
    grid-template-rows: repeat(5, 1fr);
  }
}

img {
	max-width: 100%;
	height: auto;
	border-radius: 3px;
}

a {
	text-decoration: none;
	color: inherit;
}

/* Grid */

.section {
	clear: both;
	padding: 0;
	margin: 0;
}

.col {
	display: block;
	float:left;
	margin: 1% 0 1% 1.6%;
}

.col:first-child {
	margin-left: 0;
}

ul {
	padding: 0;
	margin: 0;
	overflow: hidden;
	color: #fff;
	text-align: center;
	-webkit-transition: max-height 0.5s;
	transition: max-height 0.5s;
}

/* Blog Posts */


.blog-post {
	padding: 35px 0px;
	text-align: center;
	align-self: center;
	box-shadow: 5px 5px 15px -1px rgba(0,0,0,0.3);
	grid-row: auto;
}

.blog-content {
	font-size: 1em;
	border-left: 5px solid #8EE5EE;
  	padding-left: 15px;
}

.side-content {
	font-size: .9em;
	margin-top: 8px;
	margin-bottom: 0;
}

@media all and (max-width: 600px) {
  .blog-title {
    font-size: 0.5em;
  }
}

// .blog-title{
// 	margin-top: 5px;
// }

/* @685px*/
@media only screen and (max-width: 42.813em) {
	.blog-title{ font-size: 1em; }
}

/* @380px*/
@media only screen and (max-width: 23.75em) {
	.blog-content{ font-size: .9em; }
	.nav-item{ font-size: 1.2em; }
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
  
  {#each posts as post}
    <div class="blog-post">
      <h1 class="blog-title">
        <a rel='prefetch' href='blog/{post.slug}'>{post.title}</a>
      </h1>
    </div>
  {/each}

	<!-- <ul>
		{#each posts as post} -->
			<!-- we're using the non-standard `rel=prefetch` attribute to
					tell Sapper to load the data for the page as soon as
					the user hovers over the link or taps it, instead of
					waiting for the 'click' event. -->
			<!-- <li><a rel='prefetch' href='blog/{post.slug}'>{post.title}</a></li>
		{/each}
	</ul> -->

</div>