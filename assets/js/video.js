
let vid = document.getElementById('videoTunnel');

vid.oncanplay = () => {

    console.log("ajout de off");
    document.getElementById('banner').classList.remove('on');
    document.getElementById('banner').classList.add("off");
}