<script>
    import { stores } from '@sapper/app';
    const { page } = stores();

    let isOpen = false;
</script>

<style lang="scss">
    @import "src/scss/global.scss";

    button {
        background: transparent;
        border: 2px solid transparent;
        border-radius: 50%;
        height: 2.5rem;
        padding: .25rem;
        cursor: pointer;
        stroke: #5e5858;
        width: 2.5rem;
    }

    ul {
        list-style-type: none;
        display: grid;
        grid-template-rows: repeat(2, 1fr);
        grid-template-columns: repeat(3, 1fr);
        background-color: #000;
    }

    @media all and (min-width: 992px) {
        ul {
            grid-template-rows: repeat(1, 1fr);
            grid-template-columns: repeat(6, 1fr);
        }
    }

    li {
        // justify-content: center;
        text-align: center;
        text-transform: uppercase;
        font-weight: bold;
        text-underline-offset: -1em;
        align-self: center;
        color: #fff;
    }

    @import "src/scss/mediaqueries.scss";
</style>

<svelte:window on:click="{() => isOpen = false}"></svelte:window>

<div style="visibility: hidden; position: absolute;">
	<a href="/blog">blog</a>
	<a href="/projects">projects</a>
	<a href="/tech-skills">tech-skills</a>
	<a href="/online-training">online-training</a>
	<a href="/tech-certs">tech-certs</a>
  </div>

<nav>
    <button on:click|stopPropagation="{() => isOpen = !isOpen}">
        <svg viewBox="0 0 10 10" height="100%" width="100%">
            <path d="M1,2h8M1,5h8,M1,8h8" stroke-width="1" stroke-linecap="round" />
        </svg>
    </button>
    {#if isOpen}
   <ul>
       <li><a href="." active="{$page.path == '/'}">home</a></li>
       <li><a href="/blog" active="{$page.path.startsWith('/blog')}">blog</a></li>
       <li><a href="/projects" active="{$page.path == '/projects'}">projects</a></li>
       <li><a href="/tech-skills" active="{$page.path == '/tech-skills'}">technical skills</a></li>
       <li><a href="/online-training" active="{$page.path == '/online-training'}">online training</a></li>
       <li><a href="/tech-certs" active="{$page.path == '/tech-certs'}">technical certs</a></li>
   </ul>
    {/if}
</nav>