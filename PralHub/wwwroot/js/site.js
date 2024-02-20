// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function displayGIF(elem) {
    let src = elem.childNodes[1].childNodes[1].src;
    src = src.replace("jpg", "gif");
    src = src.replace("thumbnails", "tb-gifs");
    elem.childNodes[1].childNodes[1].src = src;
    console.log(src);
}

function displayJPG(elem) {
    let src = elem.childNodes[1].childNodes[1].src;
    src = src.replace("gif", "jpg");
    src = src.replace("tb-gifs", "thumbnails");
    elem.childNodes[1].childNodes[1].src = src;
    console.log(src);
}
