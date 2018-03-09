const path = require('path');
const readChunk = require('read-chunk');
const fileType = require('file-type');

const PDFJS_PATH = path.resolve(__dirname, '..', 'pdfjs', 'web', 'viewer.html');


function renderTo(selector, pdf) {
  let container = document.querySelector(selector);
  if (container) {
    let iframe = document.createElement('iframe');
    iframe.src = `file://${PDFJS_PATH}?file=${pdf}`;
    iframe.width = '100%';
    iframe.height = '100%';
    iframe.id = 'easy-pdf-iframe';

    container.appendChild(iframe);
  }
  else {
    throw new Error(`The container ${selector} is not exists !`);
  }
}

function bind(selector, event, callback) {
  let iframe = document.querySelector(`${selector} #easy-pdf-iframe`);
  iframe.onload = () => {
    if (event == 'firstLoad'){ 
      iframe.contentDocument.addEventListener('pagerendered', function pageRendered() {
        callback();
        // remove the current listener as we only need it to be fired once !
        iframe.contentDocument.removeEventListener('pagerendered', pageRendered);
      });
      return;
    }
    else if (event == 'pageNumberChanged') {
      let current_page_number = iframe.contentDocument.getElementById('pageNumber').value;
      iframe.contentDocument.addEventListener('pagechange', function (e) {
        if (current_page_number != e.pageNumber) {
          callback(e.pageNumber);
          current_page_number = e.pageNumber;
        }
      });
      return;
    }
    iframe.contentDocument.addEventListener(event, callback);
  }
}

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

function EasyPDF(pdf) {
  let selector = '';

  if (!isPDF(pdf)) {
    throw new Error("The file specified is not a valid pdf file");
    return;
  }
  
  return {
    // force user to set container first
    setContainer: (_selector) => {
      selector = _selector;
      return {
        render: () => {
          renderTo(selector, pdf);
        },
        on: (event, callback) => {
          bind(selector, event, callback);
        }
      }
    }
  };
}

module.exports = EasyPDF;