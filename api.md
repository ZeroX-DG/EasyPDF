# EasyPDF api

`function EasyPDF`
<br>
This is the entry point of the library, in this function, you can specify the link to the pdf file that you want to render 
<br>
Parameters:
- file_path (String): The link to the pdf file (must use absolute path if specify the local file)

Returns:
- action (object): This object contains only 1 function (`setContainer`)

`function setContainer`
<br>
After setting the link to the pdf file, the `EasyPDF` function will return a new object that contains only this function. In here you can specify the selector to the container that will later hold your pdf file
<br>
Parameters:
- selector (String): The selector to the container that will hold the pdf content

Returns:
- action (Object): This object contains all the main action of this library.

`function render`
<br>
After setting the container, another object will be returned and this object contains all the main action of the library. This function is inside that returned object and will be use to render the specified pdf file to the specified container
<br>
`function on`
<br>
In this function you can add your listener to the pdf file to listen to all the event that [pdf.js](https://github.com/mozilla/pdf.js/) will emit. This library also provide some custom event that might convenient for development.
<br>
Parameters:
- event (String): the event name to listen to
- callback (function): the callback function that will be invoke if the event occured.

## EasyPDF events:
Beside the events provided by the [pdf.js](https://github.com/mozilla/pdf.js/) library, you can also use events provided by EasyPDF:

`firstLoad`: Only occur first time the pdf file is loaded and a page of it is rendered.

`pageNumberChanged`: This event occur when the pdf page is changed