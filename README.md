# EasyPDF
*A simple library that use PDF.js for rendering pdf file on electron*

Author: Hung Nguyen

## About this project
This library will help you render your pdf file using [pdf.js](https://github.com/mozilla/pdf.js/) on your electron app with minimal effort.

## Documentation
Check out the documentation [here](api.md)

## Example
First you need to install the library using the command
```
npm install easypdf
```

Then include it in your js file (I named mine index.js)
```js
let easypdf = require('easypdf');
// example pdf file
let pdf_file = 'http://www.africau.edu/images/default/sample.pdf';

// load the pdf file and set the container
let container = easypdf(pdf_file).setContainer('#pdf-container');

// render the pdf
container.render();
```

Then include it the html file
```html
<html>
  <head>
    <title>EasyPDF demo</title>
  </head>
  <style>
    body, html {padding: 0; margin: 0}
    #pdf-container {
      width: 100%;
      height: 100%;
      position: fixed;
    }
  </style>
  <body>
    <!-- The container of the pdf -->
    <div id="pdf-container"></div>
  </body>
  <!-- The file contains our code above -->
  <script src="index.js"></script>
</html>
```

Finally, load the html file to electron browser window and here is what we get

![result](https://media.giphy.com/media/TITLlBd68poAr5SOg4/giphy.gif)

Want more example? checkout the [test folder](/test)

## Contributing
To getting started, you can fork and clone this repo. After that run the command bellow to install all dependencies
```
npm install
``` 

Then edit your code in the [src folder](/src) and send me a PR :)

## Contact
If you have any questions, you can find me at:

Facebook: https://fb.com/ZeroXCEH <br>
Twitter: https://twitter.com/ZeroX_Hung <br>
Email: viethungax@gmail.com