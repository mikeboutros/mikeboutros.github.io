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

pre, .result-style {
    word-break: break-word;
    // border-radius: 10px;
}

code {
    color: #ec5f67;
}

.result-style {
    color: #5fb3b3
}

pre {
    background: #f5f7f9;
    // background: rgb(0, 158, 250);
    // border: 3px solid hsl(208, 100%, 49%);
    border-left: 2px solid #69c;
    border-bottom: 1px solid #d8dee9;
}

.result-style {
    // background: rgb(223, 14, 14);
    // border: 3px solid hsl(0, 93%, 60%);
    text-align: center;
    background: #f5f7f9;
    border-left: 2px solid #69c;
    border-bottom: 1px solid #d8dee9;
}

// .code-snippet {
//     background: rgba(0, 250, 62, 0.781);
//     font-weight: bold;
//     padding: 10px;
//     color: #fff;

// }

// div > p:first-of-type {

//     &::before {
//         color: red;
//         content: "#";
//     }
// }

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

<p>Result:</p>

<div class="result-style">
    {@html letters}
</div>

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

<h3>Needle In Haystack</h3>

<pre>
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
</pre>

<p>Result:</p>

<div class="result-style">
    {@html search(needle, haystack)}
</div>

<h3>Code Snippets</h3>

<!-- <pre>
    <code>
        {`
            
        `}
    </code>
</pre> -->

<pre class="code-snippet">
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
</pre>

<h4>Host file online</h4>

<pre class="code-snippet">
    <code>
        {`
        # Python2
        python -m SimpleHTTPServer 80
        
        # Python3
        python3 -m http.server 80 
        `}
    </code>
</pre>

<h4>Setting up FTP server</h4>

<pre class="code-snippet">
    <code>
        {`
        # Python3
        pip3 install pyftpdlib
        python3 -m pyftpdlib -p 21 -w
        `}
    </code>
</pre>

</div>