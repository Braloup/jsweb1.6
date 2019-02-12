// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

/*
  Put the JavaScript code you want below.
*/

console.log("Hey look in your browser console. It works!");

import images from "./images/*.jpg";

let imgArr = Object.keys(images);

let i = 1;

while (i <= imgArr.length) {

  document.getElementById("cat" + i).src = images["cat" + i];
  i++;
}

let shufleArr = (imgArr) => {

  for (let i = imgArr - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temporary = imgArr[i];
    imgArr[i] = imgArr[j];
    imgArr[j] = temporary;
  }
}

let random = () => {

  shufleArr(imgArr);

  for(let i = 1; i < imgArr.length; i++) {
    document.getElementById("cat" + i).src =  images[imgArr[i]];
  }
}

document.getElementById("random").addEventListener("click",() => random());
