<script>
  	// import LinkPreview from "../components/link-preview.svelte";
</script>

<style lang="scss">
  @import "src/scss/global.scss";

  .online-training-list {
    display: grid;
    text-align: center;
    justify-items: center;
    grid-template-rows: 1fr repeat(2, 60px);
    grid-template-columns: repeat(2, 1fr);

    & a {
      @include links;
      // color: red;
      // transition-property: color;
      // transition-duration: 1s;
      // transition-timing-function: ease-out;
    }

    // & a:hover {
    //   color: green;
    // }
  }

  @import "src/scss/mediaqueries.scss";
</style>

<!-- <svelte:head>
	<title>Online Training</title>
</svelte:head> -->

<div class="online-training-list">

  <header>
    <h1>Online Training</h1>
  </header>

      <a href="https://www.freecodecamp.org/mb1">FreeCodeCamp</a>
      <a href="https://www.codecademy.com/profiles/mikeboutros">Codecademy</a>
      <a href="https://www.sololearn.com/Profile/8663991">Sololearn</a>
      <a href="https://www.datacamp.com/profile/mb1">Datacamp</a>
</div>

<!-- <p>
	<LinkPreview href="https://www.codecademy.com/profiles/mikeboutros">dev.to.</LinkPreview>
</p> -->