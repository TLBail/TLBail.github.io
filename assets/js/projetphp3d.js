import { GLTFLoader } from '/assets/js/threejs/GLTFLoader.js';
import { TextGeometry } from '/assets/js/threejs/TextGeometry.js';
import { FontLoader } from '/assets/js/threejs/FontLoader.js';
let scene, camera, renderer, scrollPercent = 0, wind;

function init() {

    setup();

    lighting();

    skybox();

    environement();

    text();

    scroolSetup();
    animate();
}

function setup() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 30000);
    camera.position.set(1, -50, 700);
    camera.rotation.set(0, 0, 0);
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    const container = document.getElementById('threecontainer');
    container.appendChild(renderer.domElement);
    OrbitControls();

}



function OrbitControls() {
    console.log("wtf");
    let controls = new THREE.OrbitControls(camera, renderer.domElement);
    // // controls.addEventListener('change', renderer);
    controls.minDistance = 500;
    controls.maxDistance = 1500;
}

function lighting() {
    let hlight = new THREE.AmbientLight(0x404040, 10);
    scene.add(hlight);
    let directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(0, 1, 0);
    directionalLight.castShadow = true;
    scene.add(directionalLight);
}

function scroolSetup() {
    document.body.onscroll = () => {
        //calculate the current scroll progress as a percentage
        scrollPercent =
            ((document.documentElement.scrollTop || document.body.scrollTop) /
                ((document.documentElement.scrollHeight ||
                    document.body.scrollHeight) -
                    document.documentElement.clientHeight)) *
            100
            ;
    }
}

function skybox() {
    let materialArray = [];
    let texture_ft = new THREE.TextureLoader().load('./images/skybox/Box_Front.bmp');
    let texture_bk = new THREE.TextureLoader().load('./images/skybox/Box_Back.bmp');
    let texture_up = new THREE.TextureLoader().load('./images/skybox/Box_Top.bmp');
    let texture_dn = new THREE.TextureLoader().load('./images/skybox/Box_Bottom.bmp');
    let texture_rt = new THREE.TextureLoader().load('./images/skybox/Box_Right.bmp');
    let texture_lf = new THREE.TextureLoader().load('./images/skybox/Box_Left.bmp');

    materialArray.push(new THREE.MeshBasicMaterial({ map: texture_ft }));
    materialArray.push(new THREE.MeshBasicMaterial({ map: texture_bk }));
    materialArray.push(new THREE.MeshBasicMaterial({ map: texture_up }));
    materialArray.push(new THREE.MeshBasicMaterial({ map: texture_dn }));
    materialArray.push(new THREE.MeshBasicMaterial({ map: texture_rt }));
    materialArray.push(new THREE.MeshBasicMaterial({ map: texture_lf }));



    for (let i = 0; i < 6; i++)
        materialArray[i].side = THREE.BackSide;
    let skyboxGeo = new THREE.BoxGeometry(10000, 10000, 10000);
    let skybox = new THREE.Mesh(skyboxGeo, materialArray);
    scene.add(skybox);
}


function environement() {
    loadModel();


    let geometry = new THREE.BoxGeometry(10000, 10, 10000);
    let material = new THREE.MeshBasicMaterial({ color: 0x1e1e1e });
    let cubeMesh0 = new THREE.Mesh(geometry, material);
    cubeMesh0.position.y = -500;
    scene.add(cubeMesh0);

    geometry = new THREE.BoxGeometry(100, 100, 100);
    material = new THREE.MeshBasicMaterial({ color: 0x002020 });
    var vraicube = new THREE.Mesh(geometry, material);
    vraicube.position.set(0, 0, 0);
    scene.add(vraicube);


    arch(0, 0, 0);
    arch(-1000, 0, 0);
    arch(-2000, 0, 0);
    arch(-3000, 0, 0);
    arch(-4000, 0, 0);
    arch(-5000, 0, 0);


}

function loadModel() {
    const loader = new GLTFLoader();

    loader.load('model/houselvl1.glb', function (gltf) {

        let house = gltf.scene.children[0];
        house.scale.set(20, 20, 20);
        house.position.set(-4000, -200, -100);
        scene.add(gltf.scene);
    }, undefined, function (error) {

        console.error(error);

    });

    loader.load('model/houselvl2.glb', function (gltf) {

        let house = gltf.scene.children[0];
        house.scale.set(20, 20, 20);
        house.position.set(-3000, -200, -100);
        scene.add(gltf.scene);
    }, undefined, function (error) {

        console.error(error);

    });

    loader.load('model/lumberMill.glb', function (gltf) {

        let house = gltf.scene.children[0];
        house.scale.set(20, 20, 20);
        house.position.set(-2000, -200, -100);
        scene.add(gltf.scene);
    }, undefined, function (error) {

        console.error(error);

    });

    loader.load('model/Wildmill.glb', function (gltf) {

        let house = gltf.scene.children[0];
        house.scale.set(20, 20, 20);
        house.position.set(-1000, -100, -200);
        house.rotation.set(0, (Math.PI / -2), 0);
        scene.add(gltf.scene);
    }, undefined, function (error) {

        console.error(error);

    });

    loader.load('model/Wildmillwind.glb', function (gltf) {

        wind = gltf.scene.children[0];
        wind.scale.set(20, 20, 20);
        wind.position.set(-1000, 0, 0);
        scene.add(wind);
    }, undefined, function (error) {

        console.error(error);

    });


    //part 2

    loader.load('model/towerlvl2.glb', function (gltf) {


        let flag = gltf.scene.children[1];

        let tower = gltf.scene.children[0];
        tower.scale.set(20, 20, 20);
        tower.position.set(2000, -200, -2000);
        scene.add(tower);
        let tower2 = tower.clone();
        tower2.scale.set(20, 20, 20);
        tower2.position.set(0, -200, -2000);
        scene.add(tower2);
        let tower3 = tower.clone();
        tower3.scale.set(20, 20, 20);
        tower3.position.set(4000, -200, -2000);
        scene.add(tower3);

        flag.scale.set(20, 20, 20);
        flag.position.set(2010, 0, -2000);
        scene.add(flag);
        let flag2 = flag.clone();
        flag2.scale.set(20, 20, 20);
        flag2.position.set(10, 0, -2000);
        scene.add(flag2);
        let flag3 = flag.clone();
        flag3.scale.set(20, 20, 20);
        flag3.position.set(4010, 0, -2000);
        scene.add(flag3);

    }, undefined, function (error) {

        console.error(error);

    });

    loader.load('model/towerlvl3.glb', function (gltf) {

        let cannon = gltf.scene.children[1];
        let tower = gltf.scene.children[0];
        tower.scale.set(30, 30, 30);
        tower.position.set(1000, -300, -2200);
        scene.add(tower);
        let tower2 = tower.clone();
        tower2.scale.set(30, 30, 30);
        tower2.position.set(3000, -300, -2200);
        scene.add(tower2);


        cannon.scale.set(30, 30, 30);
        cannon.position.set(1000, -100, -2200);
        scene.add(cannon);
        let cannon2 = cannon.clone();
        cannon2.scale.set(30, 30, 30);
        cannon2.position.set(3000, -100, -2200);
        scene.add(cannon2);


    }, undefined, function (error) {

        console.error(error);

    });

    loader.load('model/wall.glb', function (gltf) {

        let wall = gltf.scene.children[0];
        wall.scale.set(20, 20, 60);
        wall.position.set(2000, -350, -2300);
        wall.rotation.y = Math.PI / 2;
        scene.add(wall);
        let wall2 = wall.clone();
        wall2.position.x = 450;
        scene.add(wall2);
        let wall3 = wall.clone();
        wall3.position.x = 3550
        scene.add(wall3);
        let wall4 = wall.clone();
        wall4.position.x = 2500;
        scene.add(wall4);
        let wall5 = wall.clone();
        wall5.position.x = 1500;
        scene.add(wall5);


    }, undefined, function (error) {

        console.error(error);

    });


    //Unit

    loader.load('model/archer.glb', function (gltf) {


        var archer = gltf.scene.children[0];

        archer.scale.set(30, 30, 30);
        archer.position.set(1400, -450, -200);
        archer.rotation.y = Math.PI / 2;
        console.log(archer);
        scene.add(archer);


    }, undefined, function (error) {

        console.error(error);

    });


    loader.load('model/swordmen.glb', function (gltf) {
        var archer = gltf.scene.children[0];
        archer.scale.set(30, 30, 30);
        archer.position.set(1500, -450, -200);
        archer.rotation.y = Math.PI / 2;
        scene.add(archer);
    }, undefined, function (error) {

        console.error(error);

    });


    loader.load('model/wizard.glb', function (gltf) {
        var wizard = gltf.scene.children[0];
        wizard.scale.set(30, 30, 30);
        wizard.position.set(2000, -450, -200);
        wizard.rotation.y = Math.PI / 2;
        scene.add(wizard);
    }, undefined, function (error) {

        console.error(error);

    });



}


function text() {

    const loader = new FontLoader();

    loader.load('assets/fonts/font2.json', function (font) {

        let config = {
            font: font,
            size: 40,
            height: 5,
            curveSegments: 12,
            bevelEnabled: true,
            bevelThickness: 2,
            bevelSize: 3,
            bevelOffset: 0,
            bevelSegments: 5
        };
        var material = new THREE.MeshBasicMaterial({ color: 0x333333 });


        let geometry = new TextGeometry('Developpe ton empire !', config);
        var textGeo = new THREE.Mesh(geometry, material);
        textGeo.position.set(-4400, 100, 0);
        scene.add(textGeo);

        geometry = new TextGeometry('améliore tes batiments !', config);
        textGeo = new THREE.Mesh(geometry, material);
        textGeo.position.set(-3400, 100, 0);
        scene.add(textGeo);

        geometry = new TextGeometry('obtien des ressource', config);
        textGeo = new THREE.Mesh(geometry, material);
        textGeo.position.set(-2400, 100, 0);
        scene.add(textGeo);

        geometry = new TextGeometry('nourrit tes sujet ', config);
        textGeo = new THREE.Mesh(geometry, material);
        textGeo.position.set(-1400, 100, 0);
        scene.add(textGeo);

        geometry = new TextGeometry('projetphp', config);
        textGeo = new THREE.Mesh(geometry, material);
        textGeo.position.set(-400, 100, 0);
        scene.add(textGeo);

        config = {
            font: font,
            size: 220,
            height: 5,
            curveSegments: 12,
            bevelEnabled: true,
            bevelThickness: 8,
            bevelSize: 5,
            bevelOffset: 0,
            bevelSegments: 5
        };
        var material = new THREE.MeshBasicMaterial({ color: 0xf54a60 });
        geometry = new TextGeometry('DETRUIT LES TOUS', config);
        textGeo = new THREE.Mesh(geometry, material);
        textGeo.position.set(500, 100, -2000);
        scene.add(textGeo);


    });
}

function arch(x, y, z) {
    console.log('arch' + x + y + z)
    //bas
    var geometry = new THREE.BoxGeometry(1000, 100, 100);
    var material = new THREE.MeshBasicMaterial({ color: 0xcbcb41 });
    var cubeMesh = new THREE.Mesh(geometry, material);
    cubeMesh.position.set(x, y, z);
    cubeMesh.position.y += -500;
    scene.add(cubeMesh);
    //haut
    geometry = new THREE.BoxGeometry(1000, 100, 100);
    material = new THREE.MeshBasicMaterial({ color: 0xcbcb41 });
    var cubeMesh2 = new THREE.Mesh(geometry, material);
    cubeMesh2.position.set(x, y, z);
    cubeMesh2.position.y += 500;
    scene.add(cubeMesh2);
    //droite
    geometry = new THREE.BoxGeometry(100, 1000, 100);
    material = new THREE.MeshBasicMaterial({ color: 0xcbcb41 });
    var cubeMesh3 = new THREE.Mesh(geometry, material);
    cubeMesh3.position.set(x, y, z);
    cubeMesh3.position.x += 500;
    scene.add(cubeMesh3);
    //gauche
    geometry = new THREE.BoxGeometry(100, 1000, 100);
    material = new THREE.MeshBasicMaterial({ color: 0xcbcb41 });
    var cubeMesh4 = new THREE.Mesh(geometry, material);
    cubeMesh4.position.set(x, y, z);
    cubeMesh4.position.x += -500;
    scene.add(cubeMesh4);

}
function animate() {


    camera.position.x = -4000 + scrollPercent * 90;

    if (wind) {
        wind.rotation.set(Math.PI / 2, wind.rotation.y + 0.003, Math.PI / 2);
    }

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}
init();