import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import gsap from 'gsap';
const myTimeline = gsap.timeline()
const scenes = new THREE.Scene();
var geometry = new THREE.TorusGeometry(.7, .2, 16, 100);
let camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.01, 2000 );
let renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
const material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
camera.position.set(0, 0, 100);
scenes.add(camera);
let particleGeometry = new THREE.BufferGeometry();
let particles = 15000;
const itemsArray = new Float32Array(particles * 3);
const loader = new THREE.FontLoader();

for(let i = 0; i < particles * 3; i++){
    itemsArray[i] = (Math.random() - 0.4) * (Math.random() * 45);;
}
particleGeometry.setAttribute('position', new THREE.BufferAttribute(itemsArray, 10));

const thisMaterial = new THREE.PointsMaterial({size: .05});
const sphere = new THREE.Points(geometry, thisMaterial)
const particlesMesh = new THREE.Points(particleGeometry, thisMaterial);
particleGeometry.setAttribute('position', new THREE.BufferAttribute(itemsArray, 3))
particlesMesh.position.x = 2;
particlesMesh.position.y = 2;
particlesMesh.position.z = 9;
particlesMesh.scale.y = 0.01;
particlesMesh.scale.x = 0.01;
particlesMesh.scale.z = 0.01;

let pointsLight = new THREE.PointLight(0xffffff, 0.1)
pointsLight.position.set(2,3,4);
scenes.add(pointsLight)

scenes.add(sphere, particlesMesh)


var mouseY, mouseX = 0;

document.addEventListener('mousemove', (e) => {
mouseY = e.clientY;
mouseX = e.clientX;
});

let intro = () => {
    let timeline1 = new gsap.timeline();
timeline1.to(particlesMesh.position, {
    x: "-15",
    y: "+15",
    z: "+=5",
     duration: 1,
 }).to(particlesMesh.scale, {
     duration: 2,
     x: 5.5,
     y: 5.5,
     z: 50.55,
 })
 return timeline1;
}

let intro1 = () => {
    let timeline2 = new  gsap.timeline()
    timeline2.to('.navbar__logo', {
        opacity: 1,
        ease: 'power3.out'
    })
    .to('.navbar__anchortag', {
        opacity: 1,
        ease: "elastic.out(13, 1)",
    })
    .to('.home__text__intro', {
        opacity: 1,
                duration: 1,
                ease: "elastic.out(13, 1)",
                y: "-=5"
    })
    .to('.home__text__span', {
        ease: "elastic.out(20, 1)",
        y: "+=1",
        opacity: 1,
    })
    .to('.home__text__welcome', {
        ease: "elastic.out(15, 0.3)",
        y: "+=2",
        delay: 0.5,
        opacity: 1,
    })
    .to('.sidebar', {
        opacity: 1,
        duration: 1,
    })
    return timeline2
}
let afterEffects = ()=> {
    let timeline3 = new gsap.timeline()
    timeline3.to(particlesMesh.position, {
        z: '+=200',
        y: "-=15",
        y: "-=15",
        duration: 35,
        repeat: -1,
        yoyo: true,
        yoyoEase: 10,
    })
    return timeline3
     }
myTimeline.add(intro()).add(intro1()).add(afterEffects());
 

 

/*
myTimeline.to(particlesMesh.scale, {
    delay: 3,
    z: 25,
    y: 2,
    x: 1,
    duration: 1,
}).to(particlesMesh.position, {
    z: 100,
    duration: 5,
    repeat: -1,
}).to(particlesMesh.scale, {
    z: 0,
    x: 0,
    y: 0,
    duration: 3,
})
*/
/*
for(let i = 0; i < 1000; i++){
    let item = new THREE.Mesh(geometry, material);
    let star = new THREE.Vector3(Math.random() * 600 - 300,
    Math.random() * 600 - 300,
    Math.random() * 600 - 300)
    geometry.setAttribute('position', new THREE.BufferAttribute())
}

var loader = new GLTFLoader();

loader.load('../app/images/designlogo.glb', (image) => {
    console.log(image);
    console.log(image.scene);
    image.scene.castShadow = true;
    console.log(image.scenes[0]);
    image.scene.position.set(0, 0,12)
    image.scene.rotation.x = 0.15;
    image.scene.rotation.z = -0.5;
    image.scene.rotation.y = 0.85;
    image.scene.scale.x = 1.25;
    image.scene.scale.y = 1.25;
    image.scene.scale.z = 1.25;
    myTimeline.to(image.scene.position, {
        z: 85,
        duration: 5
    }).to(image.scene.rotation, {
        y: 5,
        duration: 10,
        repeat: -1,
    })
    //let item = new THREE.HemisphereLight(0xffffff, 0x000000, 2);
    let item = new THREE.AmbientLight( 'white', 0.95 );
   
    //scenes.add(item)
//scenes.add(image.scene)
});
*/
let animation = () => {
    //particlesMesh.rotation.z = mouseY * 0.003;
    requestAnimationFrame(animation);
    renderer.render(scenes, camera);
}
renderer.setSize( window.innerWidth, window.innerHeight );

let page = document.getElementsByClassName('loading__page')[0];
page.appendChild(renderer.domElement)
animation();