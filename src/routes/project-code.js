export let str1 =
    
`const letters = (() => {
    const caps = [...Array(26)].map((val, i) => String.fromCharCode(i + 65));
    return caps.concat(caps.map(letter => letter.toLowerCase()));
})();

console.log(letters);`

export let str2 =

`function search(needle, haystack){
    return haystack.flat(6).includes(needle);
}
    const haystack = [1, 4, [5, 6, 7, [8, 18, [34, 17, [98, [210, [213]]]]]]];

    const needle = 213;
    
console.log(search(needle, haystack));`

export let str3 =

`# Compare two folders
diff -qr /path/to/folder1 /path/to/folder2

# Show build number of OS
sw_vers

# Generate secure password and copy to clipboard
LC_ALL=C tr -dc "[:alnum:]" < /dev/urandom | head -c 20 | pbcopy

# Convert audio file to iPhone ringtone
afconvert input.mp3 ringtone.m4r -f m4af

# Convert file to HTML
# Supported formats are plain text, rtf and doc/docx.
textutil -convert html file.ext

# Files, Disks and Volumes
# Create an empty file (creates an empty 10 gigabyte ile).
mkfile 10g {path/to/file/file.txt}`

export let str4 = 

`# Python 2
python -m SimpleHTTPServer 80

# Python 3
python3 -m http.server 80`

export let str5 = 

`# Python 3
pip3 install pyftpdlib
python3 -m pyftpdlib -p 21 -w`