let easypdf = require('../../src/index.js');
let path = require('path');

let pdf_file_remote = 'https://www.investigatii.md/uploads/resurse/Clean_Code.pdf';
let pdf_file_local = path.resolve(__dirname, 'sample.pdf');

// set the container
let pdfContainerRemote = easypdf(pdf_file_remote).setContainer('#pdf-remote');
// render the pdf
pdfContainerRemote.render();

//------------------

// set the container
let pdfContainerLocal = easypdf(pdf_file_local).setContainer('#pdf-local');
// render the pdf
pdfContainerLocal.render();
