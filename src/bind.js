const handleEasyPDFEvent = require('./event');


function bind(selector, event, callback) {
  let iframe = document.querySelector(`${selector} #easy-pdf-iframe`);
  let old_onload = iframe.onload;
  if (typeof iframe.onload != 'function') {
    iframe.onload = () => {
      if (!handleEasyPDFEvent(event, iframe.contentDocument, callback)) {
        iframe.contentDocument.addEventListener(event, callback);
      }
    }
  }
  else {
    iframe.onload = () => {
      if (old_onload) {
        old_onload();
      }
      if (!handleEasyPDFEvent(event, iframe.contentDocument, callback)) {
        iframe.contentDocument.addEventListener(event, callback);
      }
    }
  }
}

module.exports = bind;