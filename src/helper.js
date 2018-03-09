const readChunk = require('read-chunk');
const fileType = require('file-type');

function isPDF(pdf) {
  const url_regex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
  if (url_regex.test(pdf)) {
    console.log("Remote pdf is not fully supported yet, use it at your own risk");
    const remote_pdf_regex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)\.pdf$/;
    return remote_pdf_regex.test(pdf);
  }
  else {
    const buffer = readChunk.sync(pdf, 0, 4100);
    const type = fileType(buffer);
    return type.ext == 'pdf' && type.mime == 'application/pdf';
  }
}

module.exports = {
  isPDF
}