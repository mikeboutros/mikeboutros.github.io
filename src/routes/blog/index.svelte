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

	.c-posts {
	display: flex;
	flex-wrap: wrap;
	align-items: top;
	padding: 5%;
  
  &__item {
    flex-grow: 1;
    padding-bottom: 2em;
    
    &:first-child {
      flex-grow: 2;
    }
  }
}

@media all and (min-width:600px) {
  .c-posts {
    &__item {
      flex-basis: 50%;
      padding-right: 5%;
      
      &:first-child {
        flex-basis: 100%;
      }
    }
  }
}

@media all and (min-width:1000px) {
  .c-posts {
    &__item {
      flex-basis: 33%;
      
      &:first-child {
        flex-basis: 66%;
      }
    }
  }
}

@media all and (min-width:1400px) {
  .c-posts {
    &__item {
      flex-basis: 25%;
      
      &:first-child {
        flex-basis: 50%;
      }
    }
  }
}

/* Other Non-Flexbox Related Styles */
.c-header {
  background: #EDD382;
  text-align: center;
  padding: 2em;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 1.4em;
  font-weight: 300;
  line-height: 1.6em;
  
  h1, h2, p {
    max-width: 40em;
    margin: 0 auto;
    
    &:not(:last-child) {
      margin-bottom: 1em;
    }
  }
  
  h1 {
    text-transform: uppercase;
    font-weight: 900;
  }
  
  a {
    color: #000;
  }
}

h1 {
  font-size: calc(130% + 1vw);
  font-weight: normal;
}

h2 {
  font-size: 1.5em;
  font-weight: normal;
  margin-bottom: 0;
  margin-top: 0;
}

a {
  color: #0F5257;
}

.c-btn {
  color: #000;
  display: inline-block;
  border-bottom: 4px solid #000;
  text-decoration: none;
  text-transform: uppercase;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 900;
  letter-spacing: .1em;
  padding: .3em 0;
  position: relative;
  transition: .2s all;
  
  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    background: #FF521B;
    height: 0%;
    transition: .2s all;
    left: 0;
    z-index: -10;
  }
  
  &:hover {
    padding-left: .75em;
    padding-right: .75em;
    color: grey;
    border-color: #FF521B;
    
    &:before {
      height: 100%;
    }
  }
}

.blog-list {
	display: grid;
	grid-template-rows: 80px;
  	// grid-template-rows: 80px repeat(4, 1fr);
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
	grid-template-rows: 1fr;
    // grid-template-rows: repeat(5, 1fr);
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

<!-- <svelte:head>
	<title>Blog</title>
</svelte:head> -->

<div class="blog-list">

	<header>
		<h1>Table of Contents</h1>
	  </header>

<!--   
  {#each posts as post}
    <div class="blog-post">
      <h1 class="blog-title">
        <a rel='prefetch' href='blog/{post.slug}'>{post.title}</a>
      </h1>
    </div>
  {/each} -->

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

  <section class="c-posts">
	{#each posts as post}
	<article class="c-posts__item">
		  <h2>{post.title}</h2>
		  <p>{@html post.html}</p>
		  <!-- <p><a rel='prefetch' href="blog/{post.slug}" class="c-btn">Read More</a></p> -->
	</article>
	{/each}
  </section>