<script>
  
  let bootstrap = './svg/bootstrap.svg';
  let js = './svg/js.svg';
  let jquery = './svg/jquery.svg';
  let ruby = './svg/ruby.svg';
  let ror = './svg/ror.svg';
  let react = './svg/react.svg';
  let python = './svg/python.svg';
  let svelte = './svg/svelte.svg';
  let sass = './svg/sass.svg';
  let mysql = './svg/mysql.svg';
  let git = './svg/git.svg';
  let html = './svg/html.svg';
  let css = './svg/css.svg';
  let pcdata = './svg/pcdata.svg';
  let oracle = './svg/oracle.svg';
  let sap = './svg/sap.svg';
  let office = './svg/office.svg';
  
</script>

<style lang="scss">
  @import "src/scss/global.scss";
  
  .tech-skills-box {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 100px 1fr repeat(8, 60px);
    justify-items: center;
}

@for $i from 1 through 5 {
  .tech-skills-year-#{$i} {
    grid-column: $i;
    @include years;
  }
}

$grid-row-1: 2;
$grid-row-2: 3;

@for $i from 1 through 9 {
  .tech-skills-icon-#{$i} {
    grid-row: $grid-row-1 + $i unquote("/") $grid-row-2 + $i;
  }
}

@media all and (min-width: 992px) {

.tech-skills-box {
  grid-template-rows: 100px 50px repeat(7, 1fr);

  & img {
    width: 115px;
  }
}

@for $i from 1 through 5 {
  .tech-skills-year-#{$i} {
    grid-column: $i;
    @include years;
    writing-mode: horizontal-tb;
    transform: rotate(0deg);
    font-size: 1.5em;
    font-family: Arial, Helvetica, sans-serif;
    align-self: center;
  }
}

}


.border-box {
  @include border-box;
  padding: 0 !important;
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

  <div class="tech-skills-icon-1"><img src={bootstrap} alt="BOOTSTRAP ICON" /></div>
  <div class="tech-skills-icon-2"><img src={js} alt="JS ICON" /></div>
  <div class="tech-skills-icon-3"><img src={jquery} alt="JQUERY ICON" /></div>
  <div class="tech-skills-icon-4"><img src={ruby} alt="RUBY ICON" /></div>
  <div class="tech-skills-icon-5"><img src={ror} alt="ROR ICON" /></div>
  <div class="tech-skills-icon-6"><img src={react} alt="REACT ICON" /></div>
  <div class="tech-skills-icon-7"><img src={python} alt="PYTHON ICON" /></div>
  <div class="tech-skills-icon-8"><img src={svelte} alt="SVELTE ICON" /></div>

  <div class="tech-skills-year-2">1 year</div>

  <div class="tech-skills-icon-1"><img src={sass} alt="SASS ICON" /></div>
  <div class="tech-skills-icon-2"><img src={mysql} alt="MYSQL ICON" /></div>
  <div class="tech-skills-icon-3"><img src={git} alt="GIT ICON" /></div>
  <div class="tech-skills-icon-4"></div>

  <div class="tech-skills-year-3">3 years</div>

  <div class="tech-skills-icon-1"><img src={html} alt="HTML ICON" /></div>
  <div class="tech-skills-icon-2"><img src={css} alt="CSS ICON" /></div>
  <div class="tech-skills-icon-3"><img src={pcdata} alt="PC DATA ICON" /></div>
  <div class="tech-skills-icon-4"><img src={oracle} alt="ORACLE ICON" /></div>

  <div class="tech-skills-year-4">6 years</div>

  <div class="tech-skills-icon-1"><img src={sap} alt="SAP ICON" /></div>

  <div class="tech-skills-year-5">&gt; 10 years</div>

  <div class="tech-skills-icon-1"><img src={office} alt="OFFICE ICON" /></div>

</div>