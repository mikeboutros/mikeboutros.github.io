<script>

    import hljs from 'highlight.js';

    import { str1, str2, str3, str4, str5 } from './project-code.js';

    let {value: highlighted1} = hljs.highlight("javascript", str1);
    let {value: highlighted2} = hljs.highlight("javascript", str2);
    let {value: highlighted3} = hljs.highlight("bash", str3);
    let {value: highlighted4} = hljs.highlight("Python", str4);
    let {value: highlighted5} = hljs.highlight("python", str5);

    // **** //

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

.project-list {
    display: grid;
    grid-template-columns: 200px 1fr;
    // grid-template-rows: 100px;
    grid-gap: 10px;
    align-items: center;
}

pre, .result-style {
    word-break: break-word;
    // border-radius: 10px;
    // box-shadow: 1px 1px 1px 1px;
    border-radius: 15px;
}

// code {
//    color: #ec5f67;
// }

pre {
    // background: #ffffff;
    // background: rgb(0, 158, 250);
    // border: 3px solid hsl(208, 100%, 49%);
    // border-left: 2px solid #69c;
    border: 1px solid #f2f2f2;
    padding: 35px;
}

h3 {
    font-weight: bold;
}

h3, h5, .result {
    // background: #7fbfff;
    // border-bottom: 1px solid #000000;
    padding: 15px 5px;
    text-align: center;
    border-radius: 15px;
    border: 1px solid #7fbfff75;
}

.result-style {
    // background: rgb(223, 14, 14);
    // border: 3px solid hsl(0, 93%, 60%);
    color: #5fb3b3;
    text-align: center;
    background: #ffffff;
    // border-left: 2px solid #69c;
    border: 1px solid #f2f2f2;
    padding: 15px 45px;
}
@media all and (max-width: 480px) {
  .project-list {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 10px;
    align-items: center;
  }
}
@media all and (max-width: 768px) {
  .project-list {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 10px;
    align-items: center;
  }
}

    @import "src/scss/mediaqueries.scss";
</style>

<!-- <svelte:head>
	<title>Projects</title>
</svelte:head> -->

<div class="project-list">

	<!-- <header>
        <h1>Projects</h1>
        <h3>Code Snippets</h3>
    </header> -->

    <h3>Alphabet Generator</h3>

    <pre><code>{@html highlighted1}</code></pre>

<!-- original -->
    
<!-- <pre>
    <code>
        {`
    const letters = (() => {
        const caps = [...Array(26)].map((val, i) => String.fromCharCode(i + 65));  
        return caps.concat(caps.map(letter => letter.toLowerCase()));
        })();
            console.log(letters);
        `}
    </code>
</pre> -->

<div class="result">Result</div>

<div class="result-style">{@html letters}</div>

    <h3>Needle In Haystack</h3>

    <pre><code>{@html highlighted2}</code></pre>

    <!-- original -->

    <!-- <pre>
        <code>
            {`
        function search(needle, haystack)
            {
                return haystack.flat(6).includes(needle);
            }
            const haystack = [1, 4, [5, 6, 7, [8, 18, [34, 17, [98, [210, [213]]]]]]];
            const needle = 213;
        
            console.log(search(needle, haystack));
            `}
        </code>
    </pre> -->

    <div class="result">Result</div>

    <div class="result-style">
        {@html search(needle, haystack)}
    </div>

    <h3>Code Snippets</h3>

    <pre><code>{@html highlighted3}</code></pre>

    <!-- original -->

    <!-- <pre class="code-snippet">
        <code>
            {`
        # Compare two folders
        diff -qr /path/to/folder1 /path/to/folder2
        
        # Show build number of OS
        sw_vers

        # Generate secure password and copy to clipboard
        LC_ALL=C tr -dc "[:alnum:]" < /dev/urandom | head -c 20 | pbcopy

        # Convert audio file to iPhone ringtone
        afconvert input.mp3 ringtone.m4r -f m4af

        # Convert file to HTML
        # Supported formats are plain text, rich text (rtf) and Microsoft Word (doc/docx).
        textutil -convert html file.ext

        # Files, Disks and Volumes
        # Create an empty file (creates an empty 10 gigabyte test file).
        mkfile 10g {path/to/file/file.txt}
            `}
        </code>
    </pre> -->

    <h5>Host file online</h5>

    <pre><code>{@html highlighted4}</code></pre>

    <!-- <pre class="code-snippet">
        <code>
            {`
        # Python2
        python -m SimpleHTTPServer 80
        
        # Python3
        python3 -m http.server 80 
            `}
        </code>
    </pre> -->

    <h5>Setting up FTP server</h5>

    <pre><code>{@html highlighted5}</code></pre>

    <!-- <pre class="code-snippet">
        <code>
            {`
        # Python3
        pip3 install pyftpdlib
        python3 -m pyftpdlib -p 21 -w
            `}
        </code>
    </pre> -->
</div>