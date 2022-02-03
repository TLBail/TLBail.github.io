
console.log("sflsdfj");
function changeGif() {
    window.setTimeout(function () {
        nextImg();
    }, 3000);
}


var index = 0;


var images = [
    "./images/flappyburne0.jpg",
    "./images/flappyburne1.jpg",
    "./images/flappyburne2.jpg",
    "./images/flappyburne3.jpg",
    "./images/flappyburne4.jpg",
];
function nextImg() {


    let img = document.getElementById('gifimgcontainer');
    index++;
    if (index > images.length - 1) index = 0;
    img.src = images[index];


}