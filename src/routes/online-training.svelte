<script>
  	// import LinkPreview from "../components/link-preview.svelte";
</script>

<style lang="scss">
  @import "src/scss/global.scss";

  .online-training-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 100px repeat(3, 60px) 100px;
    text-align: center;
    justify-items: center;

  & a {
      @include links;
      // text-decoration-style: wavy;
      // transition-property: color;
      // transition-duration: 1s;
      // transition-timing-function: ease-out;
    }

    & a:hover {
      text-decoration-style: wavy;
      color: red;
    }
  }

  .blank1 {
    grid-area: 1 / 1 / 2 / 3;
  }

  .cert1 {
    grid-area: 2 / 1 / 3 / 3;
  }

  .link1 {
    grid-area: 3 / 1 / 4 / 2;
  }

  .link2 {
    grid-area: 3 / 2 / 4 / 3;
  }

  .link3 {
    grid-area: 4 / 1 / 5 / 2;
  }

  .link4 {
    grid-area: 4 / 2 / 5 / 3;
  }
  
  .blank2 {
    grid-area: 5 / 1 / 6 / 3;
  }

  @media all and (max-width: 600px) {
  // header h1 {
  //   font-size: 2em;
  // }

  .online-training-list {
    grid-template-rows: 100px repeat(5, 60px) 100px;
    grid-template-columns: 1fr;

    & a {
      font-size: 1.25em;
    }

    & a:hover {
      text-decoration-style: wavy;
    }
  }

  .blank1 {
    grid-area: 1 / 1 / 2 / 3;
  }

  .cert1 {
    grid-area: 2 / 1 / 3 / 3;
  }

  .link1 {
    grid-area: 3 / 1 / 4 / 3;
  }

  .link2 {
    grid-area: 4 / 1 / 5 / 3;
  }

  .link3 {
    grid-area: 5 / 1 / 6 / 3;
  }

  .link4 {
    grid-area: 6 / 1 / 7 / 3;
  }

  .blank2 {
    grid-area: 7 / 1 / 8 / 3;
  }
}

  .card {
    padding: 1.5rem;
    // width: 225px;
    background: white;
    border-radius: 15px;
    // margin-right: 50px;
    // margin-bottom: 15px;
    box-shadow: 2px 2px 5px #9cb3b7;
  }

  .card h3 {
    color: #00a1df;
  }

  @import "src/scss/mediaqueries.scss";
</style>

<!-- <svelte:head>
	<title>Online Training</title>
</svelte:head> -->

<div class="online-training-list card">

  <!-- <header>
    <h1>Online Training</h1>
  </header> -->

    <a href="https://www.freecodecamp.org/certification/mb1/responsive-web-design" class="cert1">Responsive Web Design</a>
    <a href="https://www.freecodecamp.org/mb1" class="link1">FreeCodeCamp</a>
    <a href="https://www.codecademy.com/profiles/mikeboutros" class="link2">Codecademy</a>
    <a href="https://www.sololearn.com/Profile/8663991" class="link3">Sololearn</a>
    <a href="https://www.datacamp.com/profile/mb1" class="link4">Datacamp</a>

</div>

<!-- <p>
	<LinkPreview href="https://www.codecademy.com/profiles/mikeboutros">dev.to.</LinkPreview>
</p> -->