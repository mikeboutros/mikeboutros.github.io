<script>
    import { stores } from '@sapper/app';
    const { page } = stores();

</script>

<style lang="scss">
    @import "src/scss/global.scss";

    ul {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        list-style-type: none;
        // background-color: rgb(0, 183, 255);
        // background-color: #63e1f6;
        // background-color: #222222;
        // margin: 15px;
    }

    li {
        text-align: center;
        font-weight: bold;
        padding: 1em;
        align-self: center;
        
        &:hover {
            // filter: blur(1px);
            color: #f00;
            text-shadow: 0px 0px 1px #fff;
        }

        & a {
            display: block;
        }
    }

    @media all and (min-width: 890px) {
        ul {
            grid-template-columns: repeat(6, 1fr);
            // background-color: #63e1f6;
            // text-shadow: 0px 0px 1px #fff;
        }

        li {
            padding: 1em;
        }
    }

    @import "src/scss/mediaqueries.scss";
</style>

<nav>
   <ul>
       <li><a href="." active="{$page.path == '/'}">home</a></li>
       <li><a href="/tech-skills" active="{$page.path == '/tech-skills'}">technical skills</a></li>
       <li><a href="/online-training" active="{$page.path == '/online-training'}">online training</a></li>
       <li><a href="/tech-certs" active="{$page.path == '/tech-certs'}">technical certs</a></li>
       <li><a href="/projects" active="{$page.path == '/projects'}">projects</a></li>
       <li><a href="/blog" active="{$page.path.startsWith('/blog')}">blog</a></li>
   </ul>
</nav>