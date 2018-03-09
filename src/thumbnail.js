const { PDFJS } = require('../pdfjs/build/pdf');
const fs = require('fs');

function getThumbnail(pdf, width) {
  let canvas = document.createElement('canvas');
  const CONTEXT = canvas.getContext('2d');

  return new Promise((resolve, reject) => {
    PDFJS.getDocument(pdf).then(pdf_document => {
      pdf_document.getPage(1).then(page => {
        let viewport = page.getViewport(width / page.getViewport(1).width)
  
        canvas.width = width;
        canvas.height = viewport.height;
  
        let render_context = {
          canvasContext: CONTEXT,
          viewport: viewport
        };
  
        page.render(render_context).then(() => {
          let base64_data = canvas.toDataURL('image/jpeg', 1);
          canvas.remove();
  
          resolve({
            save(file_path) {
              base64_data = base64_data.replace(/^data:image\/jpeg;base64,/, '');
              fs.writeFileSync(file_path, base64_data, 'base64');
            },
            render(img_tag_selector) {
              let img_tag = document.querySelector(img_tag_selector);
              img_tag.src = base64_data;
            }
          });
        });
      }).catch((err) => {
        reject(err);
      });
    }).catch((err) => {
      reject(err);
    });
  });
}

module.exports = getThumbnail;