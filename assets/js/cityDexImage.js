
console.log("sflsdfj");
function changeGif() {
    window.setTimeout(function () {
        nextImg();
    }, 3000);
}


var index = 0;


var images = [
    "./images/cityDexPlaystore.jpg",
    "./images/citydexpage.jpg",
    "./images/citydexstart.GIF",
    "https://upload.wikimedia.org/wikipedia/commons/c/c7/Saint-Omer-en-Chauss%C3%A9e-FR-60-panneau_d%27agglom%C3%A9ration-02.jpg"
];
function nextImg() {


    let img = document.getElementById('gifimgcontainer');
    index++;
    if (index > images.length - 1) index = 0;
    img.src = images[index];


}