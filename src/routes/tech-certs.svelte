<script>
  let aplus = './svg/aplus.svg';
  let networkplus = './svg/networkplus.svg';
  let securityplus = './svg/securityplus.svg';
</script>

<style lang="scss">
  @import "src/scss/global.scss";

  .tech-certs-list {
    display: grid;
    text-align: center;
    justify-items: center;
    grid-template-rows: 100px 60px repeat(3, 200px) 100px;
    grid-template-columns: 1fr;

    & a {
      @include links;
      font-size: 2em;
      // grid-row: 2 / 3;
    }

    & a:hover {
      text-decoration-style: wavy;
    }

    & img {
      width: 200px;
      align-self: center;
    }
  }

  .transcript {
    grid-column: 1 / -1;
  }

  .icon-1 {
    grid-row: 3 / 4;
  }

  .icon-2 {
    grid-row: 4 / 5;
  }

  .icon-3 {
    grid-row: 5 / 6;
  }

  // @media all and (max-width: 992px) {
  //   .tech-certs-list a {
  //     font-size: 1.5em;
  //   }
  // }

  @media all and (max-width: 600px) {
    .tech-certs-list {
      grid-template-rows: 100px 60px repeat(3, 150px) 100px;

      & a {
        font-size: 1.5em;
      }

      & img {
        width: 150px;
      }
    }
  }

  @media all and (min-width: 992px) {
    .tech-certs-list {
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: 100px 60px 200px 100px;
    
    & a {
      font-size: 2.25em;
    }

    .icon-1 {
      grid-row: 3 / 4;
    }
  
    .icon-2 {
      grid-row: 3 / 4;
    }
  
    .icon-3 {
      grid-row: 3 / 4;
    }
  }
}

.border-box {
@include border-box;
}


  @import "src/scss/mediaqueries.scss";
</style>

<!-- <svelte:head>
	<title>Technical Certs</title>
</svelte:head> -->

<div class="tech-certs-list border-box">

  <!-- <header>
    <h1>Technical Certs</h1>
  </header> -->

  <a href="./microsoft_certified_professional_transcript.png" title="Microsoft Transcript Image" class="transcript">Microsoft Transcript</a>

  <img class="icon-1" src={aplus} alt="COMPTIA A+ ICON" />
  <img class="icon-2" src={networkplus} alt="COMPTIA NETWORK+ ICON" />
  <img class="icon-3" src={securityplus} alt="COMPTIA SECURITY+ ICON" />

</div>