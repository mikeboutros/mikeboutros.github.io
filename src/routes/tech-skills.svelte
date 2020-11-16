<script>
  import List1 from './tech-skills/List1.svelte';
  import List2 from './tech-skills/List2.svelte';
  import List3 from './tech-skills/List3.svelte';
  import List4 from './tech-skills/List4.svelte';
  import List5 from './tech-skills/List5.svelte';

</script>

<style lang="scss">
  @import "src/scss/global.scss";
  
//   .tech-skills-box {
//     display: grid;
//     grid-template-columns: repeat(5, 1fr);
//     grid-template-rows: 1fr repeat(9, 60px);
//     justify-items: center;
// }

.tech-skills-box {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 1fr 60px;
    justify-items: center;
}

@for $i from 1 through 5 {
  .tech-skills-year-#{$i} {
    grid-column: $i;
    writing-mode: tb-rl;
    transform: rotate(-180deg);
    grid-row: 1 / 2;
    text-shadow: 0px 0px 0.5px #000;
    font-size: 1em;
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
  }
}

$grid-row-1: 1;
$grid-row-2: 2;

@for $i from 1 through 9 {
  .tech-skills-icon-#{$i} {
    grid-row: $grid-row-1 + $i unquote("/") $grid-row-2 + $i;
  }
}

@media all and (min-width: 992px) {

.tech-skills-box {
  // grid-template-rows: 50px repeat(8, 1fr);
  grid-template-rows: 50px 1fr;
  & img {
    width: 115px;
  }
}

@for $i from 1 through 5 {
  .tech-skills-year-#{$i} {
    grid-column: $i;
    grid-row: 1 / 2;
    text-shadow: 0px 0px 0.5px #000;
    text-align: center;
    writing-mode: horizontal-tb;
    transform: rotate(0deg);
    font-size: 1.5em;
    font-family: Arial, Helvetica, sans-serif;
    align-self: center;
  }
}

$grid-row-1: 1;
$grid-row-2: 2;

@for $i from 1 through 9 {
  .tech-skills-icon-#{$i} {
    grid-row: $grid-row-1 + $i unquote("/") $grid-row-2 + $i;
  }
}

}

@import "src/scss/mediaqueries.scss";

</style>

<!-- <svelte:head>
	<title>Technical Skills</title>
</svelte:head> -->

<div class="tech-skills-box">

  <!-- <header>
    <h1>Technical Skills</h1>
  </header> -->

  <div class="tech-skills-year-1">&lt; 1 year</div>

  <div class="tech-skills-icon-1">
    <List1 />
  </div>

  <!-- <div class="tech-skills-icon-1"><img src={bootstrap} alt="BOOTSTRAP ICON" /></div>
  <div class="tech-skills-icon-2"><img src={js} alt="JS ICON" /></div>
  <div class="tech-skills-icon-3"><img src={jquery} alt="JQUERY ICON" /></div>
  <div class="tech-skills-icon-4"><img src={ruby} alt="RUBY ICON" /></div>
  <div class="tech-skills-icon-5"><img src={ror} alt="ROR ICON" /></div>
  <div class="tech-skills-icon-6"><img src={react} alt="REACT ICON" /></div>
  <div class="tech-skills-icon-7"><img src={python} alt="PYTHON ICON" /></div>
  <div class="tech-skills-icon-8"><img src={svelte} alt="SVELTE ICON" /></div>-->

  <div class="tech-skills-year-2">1 year</div>
  
  <div class="tech-skills-icon-1">
    <List2 />
  </div>

  <!-- <div class="tech-skills-icon-1"><img src={sass} alt="SASS ICON" /></div>
  <div class="tech-skills-icon-2"><img src={mysql} alt="MYSQL ICON" /></div>
  <div class="tech-skills-icon-3"><img src={git} alt="GIT ICON" /></div>
  <div class="tech-skills-icon-4"></div> -->

  <div class="tech-skills-year-3">3 years</div>

  <div class="tech-skills-icon-1">
    <List3 />
  </div>

  <!-- <div class="tech-skills-icon-1"><img src={html} alt="HTML ICON" /></div>
  <div class="tech-skills-icon-2"><img src={css} alt="CSS ICON" /></div>
  <div class="tech-skills-icon-3"><img src={pcdata} alt="PC DATA ICON" /></div>
  <div class="tech-skills-icon-4"><img src={oracle} alt="ORACLE ICON" /></div> -->

  <div class="tech-skills-year-4">6 years</div>

  <div class="tech-skills-icon-1">
    <List4 />
  </div>

  <!-- <div class="tech-skills-icon-1"><img src={sap} alt="SAP ICON" /></div> -->

  <div class="tech-skills-year-5">&gt; 10 years</div>

  <div class="tech-skills-icon-1">
    <List5 />
  </div>

  <!-- <div class="tech-skills-icon-1"><img src={office} alt="OFFICE ICON" /></div>  -->

</div>