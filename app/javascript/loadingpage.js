import * as THREE from 'three';
import gsap from 'gsap';
const myTimeline = gsap.timeline();
const group = new THREE.Group();
const scenes = new THREE.Scene();
var geometry = new THREE.TorusGeometry(.7, .2, 16, 100);
let camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.01, 100 );
let renderer = new THREE.WebGLRenderer({antialias: true, alpha: true, transparent: false});
camera.position.set(0, 0, 100);
scenes.add(camera);
let particleGeometry = new THREE.BufferGeometry();
let particles = 15000;
const itemsArray = new Float32Array(particles * 3);
let mapTexture = new THREE.TextureLoader().load('../app/images/normalmap1.jpg');
let moonTexture = new THREE.TextureLoader().load('../app/images/surfacemoon.jpg');

//new THREE.MeshStandardMaterial
const moon = new THREE.Mesh(
    new THREE.SphereGeometry(2, 16, 16),
        new THREE.MeshStandardMaterial(
    { 
        normalMap: mapTexture,
    map:moonTexture,
    })
        );
const light = new THREE.AmbientLight( 0xffffff);
light.position.set(25,15,1);
for(let i = 0; i < particles * 3; i++){
    itemsArray[i] = (Math.random() - 0.4) * (Math.random() * 45);;
}
particleGeometry.setAttribute('position', new THREE.BufferAttribute(itemsArray, 3));

const thisMaterial = new THREE.PointsMaterial({size: .005, transparent: true});
const sphere = new THREE.Points(geometry, thisMaterial)
const particlesMesh = new THREE.Points(particleGeometry, thisMaterial);
particleGeometry.setAttribute('position', new THREE.BufferAttribute(itemsArray, 3));


particlesMesh.scale.y = 0.01;
particlesMesh.scale.x = 0.01;
particlesMesh.scale.z = 0.01;

let pointsLight = new THREE.PointLight(0xffffff);
scenes.add(pointsLight)
var mouseY, mouseX = 0;
document.addEventListener('mousemove', (e) => {
mouseY = e.clientY;
mouseX = e.clientX;
})
scenes.add(light);

moon.position.set(10,3,80);
let initMoon = () => {
let moonAnimation = new gsap.timeline();
moonAnimation.to(moon.rotation, {
    y: 20,
    duration: 42,
    repeat: -1,
});
return moonAnimation;
};

gsap.to(moon.rotation, {
    y: 360,
    duration: 400,
    repeat: -1,
});


let intro = () => {
    let timeline1 = new gsap.timeline();
timeline1.to(particlesMesh.position, {
    x: "-15",
    y: "+15",
    z: "0",
     duration: 3,
 }).to(particlesMesh.scale, {
     duration: 2,
     x: 3,
     y: 3,
     z: 3,
 })
 return timeline1;
}

let intro1 = () => {
    let timeline2 = new gsap.timeline()
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
        z: '150',
        y: "-=1",
        y: "-=1",
        duration: 50,
        repeat: -1,
        yoyo: true,
    })
    return timeline3
     }
let callback = () => {
    return myTimeline.add(intro()).add(intro1()).add(afterEffects())
}
let callItem = (callback) => {
    callback();
}
callItem(callback);
var mouseY, mouseX;
document.addEventListener('mousemove', (e) => {
mouseY = e.clientY;
mouseX = e.clientX;
});

let animation = () => {
    if(mouseY !== undefined) {
        particlesMesh.rotation.y = mouseY * 0.0003;
    }
    requestAnimationFrame(animation);
    renderer.render(scenes, camera);
}
renderer.setSize( window.innerWidth, window.innerHeight);
scenes.add(moon);
scenes.add(sphere, particlesMesh);
let page = document.getElementsByClassName('loading__page')[0];
page.appendChild(renderer.domElement);
animation();