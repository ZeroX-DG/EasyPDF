# EasyPDF api

```
EasyPDF
 - setContainer
  - render
  - on
  - listen
 - getThumbnail
  - save
  - render
```

`function EasyPDF`
<br>
This is the entry point of the library, in this function, you can specify the link to the pdf file that you want to render 
<br>
Parameters:
- file_path (String): The link to the pdf file (must use absolute path if specify the local file)

Returns:
- action (object): This object contains function

`function setContainer`
<br>
After setting the link to the pdf file, the `EasyPDF` function will return a new object that contains this function. In here you can specify the selector to the container that will later hold your pdf file
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
<br>

`function listen`
<br>
Remember after using the `on` function, you will need to call the listen function for EasyPDF to begin listening to all the events.
<br>
`function getThumbnail`
<br>
This function is used to get the thumbnail of the pdf (or the first page) then you can save it to disk or render it to a specific img tag by specifying its selector
<br>
Parameters:
- thumbnail_width (Number): The width of the thumbnail
<br>
Returns:
- thumbnail (Object): This object contains function to apply on the thumbnail:

  - `function save`:
    <br>
    Parameters:
    - thumbnail_path (String): Path to save the thumbnail to
  - `function render`:
    <br>
    Parameters:
    - img_tag_selector (String): The selector to the img tag to render the thumbnail

## EasyPDF events:
Beside the events provided by the [pdf.js](https://github.com/mozilla/pdf.js/) library, you can also use events provided by EasyPDF:

`firstLoad`: Only occur first time the pdf file is loaded and a page of it is rendered.

`pageNumberChanged`: This event occur when the pdf page is changed