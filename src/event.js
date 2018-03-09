function handleEasyPDFEvent(event, doc, callback) {
  if (event == 'firstLoad'){ 
    doc.addEventListener('pagerendered', function pageRendered() {
      callback();
      // remove the current listener as we only need it to be fired once !
      doc.removeEventListener('pagerendered', pageRendered);
    });
    return true;
  }
  else if (event == 'pageNumberChanged') {
    let current_page_number = doc.getElementById('pageNumber').value;
    doc.addEventListener('pagechange', function (e) {
      if (current_page_number != e.pageNumber) {
        callback(e.pageNumber);
        current_page_number = e.pageNumber;
      }
    });
    return true;
  }
}

module.exports = handleEasyPDFEvent;