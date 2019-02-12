
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

/*
  Put the JavaScript code you want below.
*/

console.log("Hey look in your browser console. It works!");

let photos = [];

let cat1 = new Image();
cat1.src = 'images/cat1.jpg';
photos.push(cat1);

let cat2 = new Image();
cat2.src = 'images/cat2.jpeg';
photos.push(cat2);
