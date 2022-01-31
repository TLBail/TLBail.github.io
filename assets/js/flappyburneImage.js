
console.log("sflsdfj");
function changeGif() {
    window.setTimeout(function () {
        nextImg();
    }, 3000);
}


var index = 0;


var images = [
    "./images/flappyburne.png",
];
function nextImg() {


    let img = document.getElementById('gifimgcontainer');
    index++;
    if (index > images.length - 1) index = 0;
    img.src = images[index];


}