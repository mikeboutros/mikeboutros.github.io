<script>
    export let aplus = './svg/aplus.svg';
    export let networkplus = './svg/networkplus.svg';
    export let securityplus = './svg/securityplus.svg';
</script>

<style lang="scss">
  @import "static/global.scss";

  section {
    display: grid;
    text-align: center;
    justify-items: center;
    grid-template-rows: 150px 1fr 1fr 1fr;
    // grid-template-rows: 50px repeat(3, 200px);
    // grid-template-columns: 1fr;
    // height: 100vh;

    & a {
      @include links;
      // font-size: 2em;
      // grid-row: 2 / 3;
    }

    & a:hover {
      text-decoration-style: wavy;
    }

    & img {
      width: 150px;
      align-self: center;
    }
  }

  .transcript {
    grid-column: 1 / -1;

    &:hover {
      color: red;
    }
  }

  .icon-1, .icon-2, .icon-3 {
    filter: grayscale(100%);

    &:hover {
      filter: grayscale(0);
    }
  }

  .icon-1 {
    grid-row: 2 / 3;
  }

  .icon-2 {
    grid-row: 3 / 4;
  }

  .icon-3 {
    grid-row: 4 / 5;
  }

  // @media all and (max-width: 992px) {
  //   .tech-certs-list a {
  //     font-size: 1.5em;
  //   }
  // }

  // @media all and (max-width: 600px) {
    
  //   section {
  //     grid-template-rows: 100px 60px repeat(3, 200px);
  //     // height: 100vh;

  //     // & a {
  //     //   font-size: 1.5em;
  //     // }

  //     & img {
  //       width: 200px;
  //     }

  //     .icon-1 {
  //       grid-row: 3 / 4;
  //     }
    
  //     .icon-2 {
  //       grid-row: 4 / 5;
  //     }
    
  //     .icon-3 {
  //       grid-row: 5 / 6;
  //     }
  //   }
  // }

  @media all and (min-width: 992px) {

    section {
      grid-template-columns: repeat(5, 1fr);
      grid-template-rows: 100px 1fr;
      // grid-template-rows: repeat(2, 1fr);
    }
    // & a {
    //   font-size: 2.25em;
    // }

    .icon-1 {
      grid-column: 2 / 3;
      grid-row: 2 / 3;
    }
  
    .icon-2 {
      grid-column: 3 / 4;
      grid-row: 2 / 3;
    }
  
    .icon-3 {
      grid-column: 4 / 5;
      grid-row: 2 / 3;
    }


}

// .border-box {
//   @include border-box;
// }


  // @import "src/scss/mediaqueries.scss";
</style>

<!-- <svelte:head>
	<title>Technical Certs</title>
</svelte:head> -->

<section>

  <!-- <header>
    <h1>Technical Certs</h1>
  </header> -->

  <a href="./microsoft_certified_professional_transcript.png" title="Microsoft Transcript Image" class="transcript">Microsoft Transcript</a>

  <img class="icon-1" src={aplus} alt="COMPTIA A+ ICON" />
  <img class="icon-2" src={networkplus} alt="COMPTIA NETWORK+ ICON" />
  <img class="icon-3" src={securityplus} alt="COMPTIA SECURITY+ ICON" />

</section>