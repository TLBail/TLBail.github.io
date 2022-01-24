window.addEventListener('scroll', function () {
    var element = document.querySelector('#visor');
    var position = element.getBoundingClientRect();
    var sommaire = this.document.getElementById('sommaireProjetboye');

    // checking whether fully visible
    if (position.top >= 0 && position.bottom <= window.innerHeight) {
        console.log('Element is fully visible in screen');
    }

    // checking for partial visibility
    if (position.top < window.innerHeight && position.bottom >= 0) {
        console.log('Element is partially visible in screen');
        sommaire.classList.add('on');
        sommaire.classList.remove('off');
    } else {
        sommaire.classList.add('off');
        sommaire.classList.remove('on');
    }
});