let easypdf = require('../../src/index.js');
let path = require('path');

let pdf_file_remote = 'http://ricardogeek.com/docs/r_clean_code.pdf';

// pdf file
let pdfFile = easypdf(pdf_file_remote);
// set the container
let pdfContainerRemote = pdfFile.setContainer('#pdf-file');
// render the pdf
pdfContainerRemote.render();
// add the event
pdfContainerRemote.on('firstLoad', function() {
  console.log("Loaded !");
});

pdfContainerRemote.on('pageNumberChanged', function(new_page) {
  console.log("Current page number: " + new_page);
});

pdfContainerRemote.listen();