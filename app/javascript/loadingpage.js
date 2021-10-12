import * as THREE from 'three';
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
particleGeometry.setAttribute('position', new THREE.BufferAttribute(itemsArray, 3));

const thisMaterial = new THREE.PointsMaterial({size: .05});
const sphere = new THREE.Points(geometry, thisMaterial)
const particlesMesh = new THREE.Points(particleGeometry, thisMaterial);
particleGeometry.setAttribute('position', new THREE.BufferAttribute(itemsArray, 3));


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
        z: '150',
        y: "-=1",
        y: "-=1",
        duration: 50,
        repeat: -1,
        yoyo: true,
    })
    return timeline3
     }
myTimeline.add(intro()).add(intro1()).add(afterEffects());
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
renderer.setSize( window.innerWidth, window.innerHeight );

let page = document.getElementsByClassName('loading__page')[0];
page.appendChild(renderer.domElement);
animation();