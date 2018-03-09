let easypdf = require('../../src/index.js');
let path = require('path');

let pdf_file_remote = 'http://ricardogeek.com/docs/r_clean_code.pdf';

// pdf file
let pdfFile = easypdf(pdf_file_remote);
// set the container
let pdfContainerRemote = pdfFile.setContainer('#pdf-file');
// render the pdf
pdfContainerRemote.render();
// render thumbnail
pdfFile.getThumbnail(300).then(thumbnail => {
  thumbnail.render('#pdf-img');
});
// save thumbnail
pdfFile.getThumbnail(300).then(thumbnail => {
  thumbnail.save(path.resolve(__dirname, 'thumbnai.jpg'));
});
