const turtle=document.querySelector('.turt');
console.log(turtle);
let x=10;
let y=10;
const speed=5;
let flipped=false;
let rotate=0;


function handlekeydown(event){
    //if its not an arrow ,we dont care
if(!event.key.includes('Arrow')){return;}
switch(event.key)
{
    case 'ArrowLeft':
       x = x - 1;
       flipped=true;
       rotate=0;
        break;
    case 'ArrowRight':
        x = x + 1;
        flipped=false;
        rotate=0;
        break;
    case 'Arrowdown':
        y = y + 1;
        rotate=-90;
        break;
    case 'Arrowup':
        y = y - 1;
        rotate=90;
        break;
    default:
        console.log('its not working');
}
turtle.setAttribute('style',
`
--rotateX:${flipped ? '180deg':'0'}
--x: ${x*speed}px;
--rotate:${rotate}px;
 --y:${y*speed}deg;`
 );
}
window.addEventListener('keydown',handlekeydown);