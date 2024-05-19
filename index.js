#!/usr/bin/env node
const pkgJSON = require('./package.json');
const welcome = require('cli-welcome');

welcome({
    title: pkgJSON.name,
    tagLine: `Hi 👋🏼, nice to meet ya!`,
    description: pkgJSON.description,
    version: pkgJSON.version,
    bgColor: `#1880bf`,
    color: `#000000`,
    bold: true,
    clear: true,
});

console.log(`
👨🏼‍💻 Dotbrains

We are a collective dedicated to the craft of software engineering, driven by a mission to make the world better through software. Our journey is fueled by a passion for innovation, creativity, and the transformative power of technology. We believe that software is more than just code; it's a tool that can enhance lives, solve complex problems, and create new opportunities.

We are committed to building software that is ethical and user-centric. Protecting user data and privacy is paramount, and we strive to develop solutions that enhance lives by automating mundane and time-consuming tasks. Our work is grounded in rigorous discipline, attention to detail, and a dedication to meeting the real needs of developers.

Join us on this journey as we harness the power of software engineering to bring joy, efficiency, and positive change to the world. Together, we can make a difference, one line of code at a time.

📖 GitHub:  https://github.com/dotbrains
`);