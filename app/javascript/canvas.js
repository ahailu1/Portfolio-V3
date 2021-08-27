import gsap from 'gsap';
const canvas = document.getElementById('canvas');
let width = canvas.offsetWidth;
let height = canvas.offsetHeight;
let context = canvas.getContext('2d');
let centerX = width / 2;
// this determines the location of the item on x axis
let centerY = height / 2;
//determines location of item on y axis
let perspective = width * 1000;
// width of perspective
const DOT_RADIUS = 200; // Radius of the dots
let GLOBE_RADIUS = Math.min(width, height) * 0.3;
let dots = [];

let textGlobe = ['Development', 'Design','JavaScript', 'ReactJs', 'Git', 'GitHub',
'Version Control','Command Line','NodeJs','ExpressJs','HTTP','REST', 'Backend', 'Web','PAAS','Cloud','Azure','DEVOPS','HTML5','CSS','BootStrap','Big Data','Analytics','OOP','Python','Pandas','NumPy','Sorting','Filtering','Database'
,'PostgreSql'
]

let onResize = () => {
    width = canvas.offsetWidth;
    height = canvas.offsetHeight;

    if(window.devicePixelRatio > 1){
        canvas.width = canvas.clientWidth * 2;
        canvas.height = canvas.clientHeight * 2;
        context.scale(2,2);
    } else {
        canvas.height = height;
        canvas.width = width;
    }
}

window.addEventListener('resize', onResize);

onResize();
function getTexture(text) {

    let colors = ['#ff3a3a', '#e7e7e7c5', '#e7e7e7', '#ff5e5e', '#e7e7e7']
    let num = Math.floor(Math.random() * 5);
    const tempCanvas = document.createElement("canvas");
    const tempCtx = tempCanvas.getContext("2d");
    tempCtx.textAlign = 'center';
    tempCtx.textBaseline = 'middle';
         if(text.length <= 4) {
            tempCanvas.width = '400';
            tempCanvas.height = '400';
            tempCtx.fillStyle = `${colors[num]}`;
            tempCtx.font = 'normal 800 25px sans-serif';
            tempCtx.fillText(`${text}`, 100, 100);

         } else if (text.length > 4 & text.length < 8){
            tempCanvas.width = '600';
            tempCanvas.height = '600';
            tempCtx.font = 'normal 800 40px sans-serif';
            tempCtx.fillStyle = `${colors[num]}`;
            tempCtx.fillText(`${text}`, 300, 300);

         } else if ( text.length >= 8 & text.length <= 14) {
            tempCanvas.width = '400';
            tempCanvas.height = '400';
            tempCtx.fillStyle = `${colors[num]}`;
            tempCtx.font = 'normal 900 30px sans-serif';
            tempCtx.fillText(`${text}`, 120, 120);
         } else {
            tempCanvas.width = '300';
            tempCanvas.height = '300';
            tempCtx.fillStyle = `${colors[num]}`;
            tempCtx.fillText(`${text}`, 120, 120);
            tempCtx.font = 'normal 900 50px sans-serif';

        }
      return tempCanvas;      
  }
    const textures = textGlobe.map(el => {
           el = getTexture(el);
           return el;
        });

        const DOTS_AMOUNT = textures.length;
  class Item {

    constructor() {
        this.theta = Math.random() * 2 * Math.PI; // Random value between [0, 2Pi]
        this.phi = Math.acos((Math.random() * 2) - 1); // Random value between [0, Pi]
        this.texture = textures[Math.floor(Math.random() * textures.length)];
//  assign random x position
this.x = 0;
this.y = 0;
this.z = 0;

this.radius = Math.random() * (GLOBE_RADIUS * 0.2) + (GLOBE_RADIUS * 0.8);
this.xCoordinate = 0;
// location of x coordinate
this.yCoordinate = 0;
// location of y coordinate
this.scaled = 0;

gsap.to(this, {
    duration: 30,
    theta: this.theta + Math.PI * 2,
    repeat: -1,
    ease: 'power0.easeNone',
  });
    }
initIem(){ 
// scale of elemet

this.x = this.radius * Math.sin(this.phi) * Math.cos(this.theta);
this.y = this.radius * Math.cos(this.phi);
this.z = this.radius * Math.sin(this.phi) * Math.sin(this.theta) + this.radius;
this.scaled = perspective / (perspective + this.z);
this.xCoordinate = (this.x * this.scaled) + centerX;
    this.yCoordinate = (this.y * this.scaled) + centerY;

}
drawItem(){
context.drawImage(this.texture,this.xCoordinate - DOT_RADIUS,this.yCoordinate - DOT_RADIUS, DOT_RADIUS * 2 * this.scaled, DOT_RADIUS * 2 * this.scaled)
}
}


let createItems = () => {
    dots.length = 0;
for(let i = 0; i < DOTS_AMOUNT; i++) {

    dots.push(new Item());

}
}



let render = () => {
    context.clearRect(0, 0, width, height);
    for(let i = 0; i < dots.length; i++){  

        dots[i].initIem();

    }
    dots.sort((dot1, dot2) => {
        return dot1.projected - dot2.projected;
      });
    
    for (var i = 0; i < dots.length; i++) {

        dots[i].drawItem();

    }
    window.requestAnimationFrame(render);    
}
render();
createItems();
