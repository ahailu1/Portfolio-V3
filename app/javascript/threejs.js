import * as THREE from 'three';
import gsap from 'gsap';
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 800 );
camera.position.z = 200;
camera.position.x = 3;
camera.position.y = 20;
const renderer = new THREE.WebGLRenderer({antialias: true, alpha: true})
const loader = new THREE.FontLoader();
loader.load('./Ubuntu_Bold.json', (font) => {
    const geometry = new THREE.TextGeometry( 'Portfolio', {
		font: font,
		size: 25,
		height:10,
    });
    let item = new THREE.AmbientLight( 'white', 0.95 );
const mesh = new THREE.Mesh(geometry, [
    new THREE.MeshPhongMaterial({color : '#ffffff'}),
    new THREE.MeshPhongMaterial({color: '#ff5e5e'}),
    new THREE.MeshPhongMaterial({color: '#f7f7f7'}),
]);



var timeline = gsap.timeline();
timeline.to(mesh.position, {
    z: "-100",
    y: "-=10",
    x: "-100",
    duration: 3,
    ease: 'Power2.easeOut',
    yoyo: true,
    yoyoEase: true,

}).to(mesh.position, {
    z: "-10",
    y: "50",
    x: "-=70",
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
    z: "-= 50",
    x: "+= 0.5",
    y: "-=5",
    ease: 'Power2.easeOut',
    yoyo: true,
    yoyoEase: true,
    repeat: -1,
}).to(mesh.rotation, {
    duration: 2,
    z: "+= 0.05",
    x: "-= 0.01",
    y: "+= 0.01",
    ease: 'Power2.easeOut',
    yoyo: true,
    yoyoEase: true,
    repeat: -1,
})
mesh.castShadow = true;
scene.add(item);
scene.add(mesh);
})
loader.load('./Ubuntu_Bold.json', (font) => {
    const geometry = new THREE.TextGeometry( 'V³', {
		font: font,
		size: 25,
		height:10,
    });
    let item = new THREE.AmbientLight( 'white', 0.1 );
const mesh = new THREE.Mesh(geometry, [
    new THREE.MeshPhongMaterial({color : '#ffffff'}),
    new THREE.MeshPhongMaterial({color: '#ff5e5e'}),
]);
var timeline = gsap.timeline();
timeline.to(mesh.position, {
    z: "-500",
    y: "-=25",
    x: "40",
    duration: 2,
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
let resizeRendererToDisplaySize = (renderer) => {
    const canvas = renderer.domElement;
    const pixelRatio = window.devicePixelRatio;
    const width  = canvas.clientWidth  * pixelRatio | 0;
    const height = canvas.clientHeight * pixelRatio | 0;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
    }
    return needResize;
  }
*/
  

let animate = () => {
    /*
    if (resizeRendererToDisplaySize(renderer)) {
        const canvas = renderer.domElement;
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
      }
      */
    requestAnimationFrame(animate);
    renderer.render(scene, camera)
}
animate();

window.addEventListener('resize', () => {	
   if(document.body.clientWidth < 1000 && document.body.clientWidth > 768 ) {
       renderer.setSize(400,400);
       camera.updateProjectionMatrix();
   }
   if(document.body.clientWidth >= 320 && document.body.clientWidth <= 768){
    renderer.setSize(200,200);
    camera.updateProjectionMatrix();
   }
   if(document.body.clientWidth > 1000) {
    renderer.setSize( 800,450);
    camera.updateProjectionMatrix();

   }

})

renderer.setSize( 800,450);

document.getElementsByClassName('home__text__welcome__wrapper')[0].appendChild(renderer.domElement);


renderer.setPixelRatio(window.devicePixelRatio)
renderer.shadowMap.enabled = true;

//scene.add(plane)
//scene.add(new AmbientLight('#ffffff', 0.8))
