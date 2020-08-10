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
    grid-template-rows: repeat(2, 1fr) repeat(7, 60px);
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

// /* START TOOLTIP STYLES */
// [tooltip] {
//   position: relative; /* opinion 1 */
// }

// /* Applies to all tooltips */
// [tooltip]::before,
// [tooltip]::after {
//   text-transform: none; /* opinion 2 */
//   font-size: .9em; /* opinion 3 */
//   line-height: 1;
//   user-select: none;
//   pointer-events: none;
//   position: absolute;
//   display: none;
//   opacity: 0;
// }
// [tooltip]::before {
//   content: '';
//   border: 5px solid transparent; /* opinion 4 */
//   z-index: 1001; /* absurdity 1 */
// }
// [tooltip]::after {
//   content: attr(tooltip); /* magic! */
  
//   /* most of the rest of this is opinion */
//   font-family: Helvetica, sans-serif;
//   text-align: center;
  
//   /* 
//     Let the content set the size of the tooltips 
//     but this will also keep them from being obnoxious
//     */
//   min-width: 3em;
//   max-width: 21em;
//   white-space: nowrap;
//   overflow: hidden;
//   text-overflow: ellipsis;
//   padding: 1ch 1.5ch;
//   border-radius: .3ch;
//   box-shadow: 0 1em 2em -.5em rgba(0, 0, 0, 0.35);
//   background: #333;
//   color: #fff;
//   z-index: 1000; /* absurdity 2 */
// }

// /* Make the tooltips respond to hover */
// [tooltip]:hover::before,
// [tooltip]:hover::after {
//   display: block;
// }

// /* don't show empty tooltips */
// [tooltip='']::before,
// [tooltip='']::after {
//   display: none !important;
// }

// /* FLOW: UP */
// [tooltip]:not([flow])::before,
// [tooltip][flow^="up"]::before {
//   bottom: 100%;
//   border-bottom-width: 0;
//   border-top-color: #333;
// }
// [tooltip]:not([flow])::after,
// [tooltip][flow^="up"]::after {
//   bottom: calc(100% + 5px);
// }
// [tooltip]:not([flow])::before,
// [tooltip]:not([flow])::after,
// [tooltip][flow^="up"]::before,
// [tooltip][flow^="up"]::after {
//   left: 50%;
//   transform: translate(-50%, -.5em);
// }

// /* FLOW: DOWN */
// [tooltip][flow^="down"]::before {
//   top: 100%;
//   border-top-width: 0;
//   border-bottom-color: #333;
// }
// [tooltip][flow^="down"]::after {
//   top: calc(100% + 5px);
// }
// [tooltip][flow^="down"]::before,
// [tooltip][flow^="down"]::after {
//   left: 50%;
//   transform: translate(-50%, .5em);
// }

// /* FLOW: LEFT */
// [tooltip][flow^="left"]::before {
//   top: 50%;
//   border-right-width: 0;
//   border-left-color: #333;
//   left: calc(0em - 5px);
//   transform: translate(-.5em, -50%);
// }
// [tooltip][flow^="left"]::after {
//   top: 50%;
//   right: calc(100% + 5px);
//   transform: translate(-.5em, -50%);
// }

// /* FLOW: RIGHT */
// [tooltip][flow^="right"]::before {
//   top: 50%;
//   border-left-width: 0;
//   border-right-color: #333;
//   right: calc(0em - 5px);
//   transform: translate(.5em, -50%);
// }
// [tooltip][flow^="right"]::after {
//   top: 50%;
//   left: calc(100% + 5px);
//   transform: translate(.5em, -50%);
// }

// /* KEYFRAMES */
// @keyframes tooltips-vert {
//   to {
//     opacity: .9;
//     transform: translate(-50%, 0);
//   }
// }

// @keyframes tooltips-horz {
//   to {
//     opacity: .9;
//     transform: translate(0, -50%);
//   }
// }

// /* FX All The Things */ 
// [tooltip]:not([flow]):hover::before,
// [tooltip]:not([flow]):hover::after,
// [tooltip][flow^="up"]:hover::before,
// [tooltip][flow^="up"]:hover::after,
// [tooltip][flow^="down"]:hover::before,
// [tooltip][flow^="down"]:hover::after {
//   animation: tooltips-vert 300ms ease-out forwards;
// }

// [tooltip][flow^="left"]:hover::before,
// [tooltip][flow^="left"]:hover::after,
// [tooltip][flow^="right"]:hover::before,
// [tooltip][flow^="right"]:hover::after {
//   animation: tooltips-horz 300ms ease-out forwards;
// }

@import "src/scss/mediaqueries.scss";

</style>

<svelte:head>
	<title>Technical Skills</title>
</svelte:head>

<div class="tech-skills-box">

  <header>
    <h1>Technical Skills</h1>
  </header>

  <div class="tech-skills-year-1">&lt; 1 year</div>

  <div class="tech-skills-icon-1"><img src={bootstrap} alt="BOOTSTRAP ICON" /></div>
  <!-- <div class="tech-skills-icon-1">
    <span tooltip="BOOTSTRAP" flow="right"><img src={bootstrap} alt="BOOTSTRAP ICON" /></span>
  </div> -->
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

<!-- <main>
  <div>
    <span tooltip="I'm up above it!">Up</span>
  </div>
  <div>
    <span tooltip="Slide to the left" flow="left">Left</span>
    <span tooltip="Slide to the right" flow="right">Right</span>
  </div>
  <div>
    <span tooltip="Get Down." flow="down">Down</span>
  </div>
</main> -->