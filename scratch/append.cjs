const fs = require('fs');
let css = fs.readFileSync('builder/styles.css', 'utf16le'); // Oh wait, I don't know what encoding it read.
// Let me just restore from git and append.
