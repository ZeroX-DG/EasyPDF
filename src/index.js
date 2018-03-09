const bind = require('./bind');
const render = require('./render');
const {isPDF} = require('./helper');
const getThumbnail = require('./thumbnail');

function EasyPDF(pdf) {
  let selector = '';

  if (!isPDF(pdf)) {
    throw new Error("The file specified is not a valid pdf file");
    return;
  }
  
  let listeners = {};

  return {
    // force user to set container first
    setContainer: (_selector) => {
      selector = _selector;
      return {
        render: () => {
          render(selector, pdf);
        },
        on: (event, callback) => {
          listeners[event] = callback;
        },
        listen: () => {
          bind(selector, listeners);
        }
      }
    },
    getThumbnail: function(width) {
      return getThumbnail(pdf, width);
    }
  };
}

module.exports = EasyPDF;