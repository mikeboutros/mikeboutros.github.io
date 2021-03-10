<script>

    import hljs from 'highlight.js';
    import ProjectBox from './ProjectBox.svelte';

    import { str1, str2, str3, str4, str5 } from './project-code.js';

    let {value: highlighted1} = hljs.highlight("javascript", str1);
    let {value: highlighted2} = hljs.highlight("javascript", str2);
    let {value: highlighted3} = hljs.highlight("bash", str3);
    let {value: highlighted4} = hljs.highlight("python", str4);
    let {value: highlighted5} = hljs.highlight("python", str5);

    // **************** //

    const letters = (() => {
        const caps = [...Array(26)].map((val, i) => String.fromCharCode(i + 65));
        return caps.concat(caps.map(letter => letter.toLowerCase()));
    })();

    console.log(letters);

    export function search(needle, haystack) {
    return haystack.flat(6).includes(needle);
    }

    const haystack = [1, 4, [5, 6, 7, [8, 18, [34, 17, [98, [210, [213]]]]]]];
    const needle = 213;
                
    console.log(search(needle, haystack));

</script>

<style lang="scss">
    // @import "static/global.scss";

// .project-list {
//     // grid-template-rows: 100px;
// }

// pre, .result-style {
//     // border-radius: 10px;
//     // box-shadow: 1px 1px 1px 1px;
// }

// // code {
// //    color: #ec5f67;
// // }

// pre {
//     // background: #ffffff;
//     // background: rgb(0, 158, 250);
//     // border: 3px solid hsl(208, 100%, 49%);
//     // border-left: 2px solid #69c;
// }

// h3, h5, .result {
//     // background: #7fbfff;
//     // border-bottom: 1px solid #000000;
// }

// .result-style {
//     // background: rgb(223, 14, 14);
//     // border: 3px solid hsl(0, 93%, 60%);
//     // border-left: 2px solid #69c;
// }

    // @import "src/scss/mediaqueries.scss";
</style>

<!-- <svelte:head>
	<title>Projects</title>
</svelte:head> -->

<ProjectBox>
    
    <div slot="title_type1">Alphabet Generator</div>
    <div slot="code_type1"><pre><code>{@html highlighted1}</code></pre></div>
    <div slot="result_type1">Result</div>
    <div slot="result-style_type1">{@html letters}</div>


    <div slot="title_type2">Needle In Haystack</div>
    <div slot="code_type2"><pre><code>{@html highlighted2}</code></pre></div>
    <div slot="result_type2">Result</div>
    <div slot="result-style_type2">{@html search(needle, haystack)}</div>


    <div slot="title_type3">Code Snippets</div>
    <div slot="code_type3"><pre><code>{@html highlighted3}</code></pre></div>


    <div slot="title_type4">Host a file online</div>
    <div slot="code_type4"><pre><code>{@html highlighted4}</code></pre></div>


    <div slot="title_type5">Setting up FTP server</div>
    <div slot="code_type5"><pre><code>{@html highlighted5}</code></pre></div>

</ProjectBox>