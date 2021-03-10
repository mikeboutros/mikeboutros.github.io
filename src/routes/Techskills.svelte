<script>
  import List1 from './tech-skills/List1.svelte';
  import List2 from './tech-skills/List2.svelte';
  import List3 from './tech-skills/List3.svelte';
  import List4 from './tech-skills/List4.svelte';
  import List5 from './tech-skills/List5.svelte';
  // import List6 from './tech-skills/List6.svelte';
  import List7 from './tech-skills/List7.svelte';
</script>

<style lang="scss">
  @import "static/global.scss";

section {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 150px repeat(6, 60px);
    justify-items: center;
    grid-gap: 10px;
}

@for $i from 0 through 5 {
  .tech-skills-year-#{$i} {
    writing-mode: tb-rl;
    transform: rotate(-180deg);
    text-shadow: 0px 0px 0.5px #000;
    font-size: 1.25em;
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
  }
}

@media all and (min-width: 992px) {

  @for $i from 1 through 5 {
    .tech-skills-year-#{$i} {
      grid-column: $i;
      // grid-row: 1 / 2;
      text-shadow: 0px 0px 0.5px #000;
      text-align: center;
      writing-mode: horizontal-tb;
      transform: rotate(0deg);
      font-size: 1.5em;
      font-family: Arial, Helvetica, sans-serif;
      align-self: center;
    }
  }
}

@import "src/scss/mediaqueries.scss";

</style>

<!-- <svelte:head>
	<title>Technical Skills</title>
</svelte:head> -->

<section>

  <!-- <header>
    <h1>Technical Skills</h1>
  </header> -->

  <div class="tech-skills-year-1">&lt; 1 year</div>

    <List1 />

  <!-- <div class="tech-skills-icon-1"><img src={bootstrap} alt="BOOTSTRAP ICON" /></div>
  <div class="tech-skills-icon-2"><img src={js} alt="JS ICON" /></div>
  <div class="tech-skills-icon-3"><img src={jquery} alt="JQUERY ICON" /></div>
  <div class="tech-skills-icon-4"><img src={ruby} alt="RUBY ICON" /></div>
  <div class="tech-skills-icon-5"><img src={ror} alt="ROR ICON" /></div>
  <div class="tech-skills-icon-6"><img src={react} alt="REACT ICON" /></div>
  <div class="tech-skills-icon-7"><img src={python} alt="PYTHON ICON" /></div>
  <div class="tech-skills-icon-8"><img src={svelte} alt="SVELTE ICON" /></div>-->

  <div class="tech-skills-year-2">1 year</div>
  
    <List2 />

  <!-- <div class="tech-skills-icon-1"><img src={sass} alt="SASS ICON" /></div>
  <div class="tech-skills-icon-2"><img src={mysql} alt="MYSQL ICON" /></div>
  <div class="tech-skills-icon-3"><img src={git} alt="GIT ICON" /></div>
  <div class="tech-skills-icon-4"></div> -->

  <div class="tech-skills-year-3">3 years</div>

  <!-- <div class="tech-skills-icon-3"> -->
    <List3 />
  <!-- </div> -->

  <!-- <div class="tech-skills-icon-1"><img src={html} alt="HTML ICON" /></div>
  <div class="tech-skills-icon-2"><img src={css} alt="CSS ICON" /></div>
  <div class="tech-skills-icon-3"><img src={pcdata} alt="PC DATA ICON" /></div>
  <div class="tech-skills-icon-4"><img src={oracle} alt="ORACLE ICON" /></div> -->

  <div class="tech-skills-year-4">6 years</div>

  <!-- <div class="tech-skills-icon-4"> -->
    <List4 />
  <!-- </div> -->

  <!-- <div class="tech-skills-icon-1"><img src={sap} alt="SAP ICON" /></div> -->

  <div class="tech-skills-year-5">&gt; 10 years</div>

  <!-- <div class="tech-skills-icon-5"> -->
    <List5 />
  <!-- </div> -->

  <!-- <div class="tech-skills-icon-1"><img src={office} alt="OFFICE ICON" /></div>  -->

    <!-- <List6 /> -->

    <List7 />
    
  </section>

<!-- <meter value="0.6">60%
</meter> 60% -->