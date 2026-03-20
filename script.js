var base32768 = require("base32768");



function init(){
    let params = new URLSearchParams(document.location.search);
    let image = params.get("i");
     
    document.getElementById("imageDialog").showModal();
    document.getElementById("imageDialogImage").src = image;
}

function strEncodeUTF16(str) {
  var buf = new ArrayBuffer(str.length*2);
  var bufView = new Uint16Array(buf);
  for (var i=0, strLen=str.length; i < strLen; i++) {
    bufView[i] = str.charCodeAt(i);
  }
  return new Uint8Array(buf)
}


function loadNewImage(){
    var input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = e => { 
    var file = e.target.files[0];
    var blobURL = URL.createObjectURL(file); 
    var reader = new window.FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function () {
        base64data = reader.result;
        console.log(base64data);
        const string = base32768.encode(strEncodeUTF16(base64data).buffer); 
        console.log(imageString);
}   }

    input.click();

   
}