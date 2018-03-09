const handleEasyPDFEvent = require('./event');
const { shell }  = require('electron');

function bind(selector, listeners) {
  let iframe = document.querySelector(`${selector} #easy-pdf-iframe`);
  iframe.onload = () => {
    // open external links in the browser
    let externalLink = iframe.contentDocument.getElementById('externalLink')
    if (externalLink) {
      externalLink.onchange = () => shell.openExternal(externalLink.value)
    }

    for(let event in listeners) {
      let callback = listeners[event];
      if (!handleEasyPDFEvent(event, iframe.contentDocument, callback)) {
        iframe.contentDocument.addEventListener(event, callback);
      }
    }
    
  }
}

module.exports = bind;