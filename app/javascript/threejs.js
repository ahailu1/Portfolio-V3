import * as THREE from 'three';
import gsap from 'gsap';
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 800 );
camera.position.z = 200;
camera.position.x = 3;
camera.position.y = 20;
const renderer = new THREE.WebGLRenderer({antialias: true, alpha: true})
const loader = new THREE.FontLoader();
loader.load('../app/images/Ubuntu_Bold.json', (font) => {
    const geometry = new THREE.TextGeometry( 'Portfolio', {
		font: font,
		size: 30,
		height:10,
    });
    let item = new THREE.AmbientLight( 'white', 0.95 );
const mesh = new THREE.Mesh(geometry, [
    new THREE.MeshPhongMaterial({color : '#ffffff'}),
    new THREE.MeshPhongMaterial({color: '#ff3a3a'}),
    new THREE.MeshPhongMaterial({color: '#f7f7f7'}),
]);

var timeline = gsap.timeline();
timeline.to(mesh.position, {
    z: "-500",
    y: "-=15",
    x: "-100",
    opacity: 0.1,
    duration: 5,
    ease: 'Power2.easeOut',
    yoyo: true,
    yoyoEase: true,

}).to(mesh.position, {
    z: "-10",
    y: "50",
    x: "-=70",
    opacity: 0.95,
    ease: 'Power2.easeOut',
    yoyo: true,
    yoyoEase: true,
}).to(mesh.rotation, {
    duration: 1,
    x: 0,
    y: "0",
    stagger: 0.5,
    ease: 'Power2.easeOut',
    yoyo: true,
    yoyoEase: true,
}).to(mesh.position, {
    duration: 2,
    z: "+= 0.5",
    x: "+= 0.5",
    y: "-=5",
    ease: 'Power2.easeOut',
    yoyo: true,
    yoyoEase: true,
    repeat: -1,
}).to(mesh.rotation, {
    duration: 5,
    z: "+= 0.05",
    x: "-= 0.01",
    y: "+= 0.01",
    ease: 'Power2.easeOut',
    yoyo: true,
    yoyoEase: true,
    repeat: -1,

})
mesh.castShadow = true;
scene.add(item)
scene.add(mesh)
})
loader.load('../app/images/Ubuntu_Bold.json', (font) => {
    const geometry = new THREE.TextGeometry( 'V³', {
		font: font,
		size: 25,
		height:10,
    });
    let item = new THREE.AmbientLight( 'white', 0.95 );
const mesh = new THREE.Mesh(geometry, [
    new THREE.MeshPhongMaterial({color : '#ffffff'}),
    new THREE.MeshPhongMaterial({color: '#ff3a3a'}),
    new THREE.MeshPhongMaterial({color: '#f7f7f7'}),
]);

var timeline = gsap.timeline();
timeline.to(mesh.position, {
    z: "-500",
    y: "-=25",
    x: "40",
    opacity: 0.1,
    duration: 5,
    ease: 'Power2.easeOut',
    yoyo: true,
    yoyoEase: true,

}).to(mesh.position, {
    z: "-10",
    y: "60",
    x: "+=10",
    ease: 'Power2.easeOut',
    duration: 5
}).to(mesh.rotation, {
    duration: 1,
    repeat: 1,
    z: "0",
    y: "0",
    x: "0",
    ease: 'Power2.easeOut',
    yoyo: true,
    yoyoEase: true,
}).to(mesh.rotation, {
    duration: 50,
    z: "0",
    x: "0",
    y: "25",
    ease: 'Power2.easeOut',
    repeat: -1,

})
mesh.castShadow = true;
scene.add(item)
scene.add(mesh)
})
/*
loader.load('../app/images/Ubuntu_Bold.json', (font) => {
    let geometry1 = new THREE.TextGeometry('welcome to my portfolio',{
       font: font,
       height: 1.5,
       size: 4.25 
    })
    let ambientLight1 = new THREE.AmbientLight('#ffffff', 0.9)
    let material1 = [new THREE.MeshPhongMaterial({color : '#ffffff'}),
    new THREE.MeshPhongMaterial({color: '#ff3a3a'})]
    
    let mesh1 = new THREE.Mesh(geometry1, material1)
    gsap.to(mesh1.rotation, {
        x: "-=0.1",
        duration: 5,
        stagger: 0.5,
        repeat: 3,
        ease: 'Power2.easeOut',
        yoyo: true,
        yoyoEase: true,
    })
    gsap.to(mesh1.position, {
        x: "-=0.1",
        y: "-=0.5",
        duration: 5,
        stagger: 0.5,
        ease: 'Power2.easeOut',
        yoyo: true,
        yoyoEase: true,
    })
    mesh1.PerspectiveCamera = 0.8;
    mesh1.position.x =  -85;
    mesh1.position.y = -15;
    mesh1.position.z = -6;
    mesh1.rotation.y = -0.35;
    mesh1.castShadow = true;
    //scene.add(ambientLight1)
    scene.add(mesh1)
});
*/
let animate = () => {

    requestAnimationFrame(animate)
    renderer.render(scene, camera)
}
animate()

renderer.setSize( 700, 300 );

document.getElementsByClassName('home__text__welcome__wrapper')[0].appendChild(renderer.domElement);


renderer.setPixelRatio(window.devicePixelRatio)
renderer.shadowMap.enabled = true;

//scene.add(plane)
//scene.add(new AmbientLight('#ffffff', 0.8))
