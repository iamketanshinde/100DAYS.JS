// select the element on the page-canvas,shake btn....
const canvas=document.querySelector('#etch-e-sketch');
const ctx = canvas.getContext('2d');

const shakebtn=document.querySelector('.shake');


//setup our canvas for drawing
// make a variable called height and width from the same properties on our canvas
const {width,height}=canvas;
let x = Math.floor(Math.random()* width);
let y = Math.floor(Math.random()* height);
// const {width,height}=canvas;

ctx.lineJoin='round';
ctx.lineCap='round';
ctx.linewidth=40;

ctx.beginPath();//start drawing
ctx.moveTo(x,y);
ctx.lineTo(x,y);
ctx.stroke();

//write a draw funtion
 function draw({key}){
    console.log(key);
// start path
beginPath();
ctx.moveTo(x,y);
// move our values depending on what did user did
x -= x 10;
y -= y 10;
ctx.lineTo(x,y);
ctx.stroke();
 }
//write a handler for the keys
function handlekey(e){
    if(e.key.inculdes('arrow')){
        draw({key:e.key});
        e.preventDefault();
        console.log(e.key);
        console.log('handle key !!');
    }
}
//clear shake funt

//listen for arrow fuct
window.addEventListener('keydown',handlekey);
