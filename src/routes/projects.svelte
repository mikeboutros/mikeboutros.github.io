<script>
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
    @import "src/scss/global.scss";
  
//     code { 
//     background: hsl(220, 80%, 90%); 
// }

.project-list {
    display: grid;
    grid-template-rows: 1fr;
    grid-gap: 10px;
}

h3 {
    align-self: center;
    // background: rgb(0, 179, 250);
    padding: 10px;
    border-radius: 10px;
}

pre, .result-style {
    font-size: 12px;
    word-break: break-word;
    border-radius: 10px;
    align-self: center;
    padding: 16px;
    color: #fff;
}

code {
    color: white;
}

.result-style {
    background: rgb(250, 0, 0);
    font-weight: bold;
}

pre {
    background: rgb(0, 158, 250);
}

    @import "src/scss/mediaqueries.scss";
</style>

<svelte:head>
	<title>Projects</title>
</svelte:head>

<div class="project-list">

	<header>
        <h1>Projects</h1>
        <h3>Code Snippets</h3>
    </header>
    
    <!-- <ul>
        <li><a href='./projects/Python'>Alphabet Generator</a></li>
    </ul> -->

<h3>Alphabet Generator</h3>

<pre>
    <code>
        {`
        const letters = (() => {
        const caps = [...Array(26)].map((val, i) => String.fromCharCode(i + 65));
            return caps.concat(caps.map(letter => letter.toLowerCase()));
        })();
            console.log(letters);
        `}
    </code>
</pre>

<div class="result-style">Result: {@html letters}</div>

<!-- <h3>Lottery Generator</h3>

<pre>
    <code>
        {`
            import numpy as np

            l = np.random.randint(low=1, high=49, size=6)
            l.sort()
            print(l) 
        `}
    </code>
</pre>

<br />

    <p>{@html lottery}</p> -->

<h3>Needle and Haystack</h3>

<pre>
    <code>
        {`
        function search(needle, haystack) {
            return haystack.flat(6).includes(needle);
        }
        const haystack = [1, 4, [5, 6, 7, [8, 18, [34, 17, [98, [210, [213]]]]]]];
        const needle = 213;
            
        console.log(search(needle, haystack));
        `}
    </code>
</pre>

<div class="result-style">Result: {@html search(needle, haystack)}</div>

</div>