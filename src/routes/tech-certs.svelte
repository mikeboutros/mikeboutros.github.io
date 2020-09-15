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
    grid-template-rows: 1fr 60px repeat(3, 1fr);
    grid-template-columns: 1fr;

    & a {
      @include links;
      font-size: 1.25em;
    }

    & img {
      width: 115px;
    }
  }

  .transcript {
    grid-column: 1 / -1;
  }

  .cert-position-1 {
    justify-self: center;
  }

  @import "src/scss/mediaqueries.scss";
</style>

<!-- <svelte:head>
	<title>Technical Certs</title>
</svelte:head> -->

<div class="tech-certs-list">

  <header>
    <h1>Technical Certs</h1>
  </header>

  <a href="./microsoft_certified_professional_transcript.png" title="Microsoft Transcript Image" class="transcript">Microsoft Transcript</a>

  <img class="cert-position-1" src={aplus} alt="COMPTIA A+ ICON" />
  <img class="cert-position-1" src={networkplus} alt="COMPTIA NETWORK+ ICON" />
  <img class="cert-position-1" src={securityplus} alt="COMPTIA SECURITY+ ICON" />

</div>