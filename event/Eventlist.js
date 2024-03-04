// const butts=document.querySelector('.butts');
// butts.addEventListener('click',function(){
//     console.log('hey clicked me!');
// });


const butts=document.querySelector('.butts');

function clicked(){
    console.log('hey you clicked me!....');
}
// we can use funct more time

butts.addEventListener('click',clicked);


const buybutton=document.querySelectorAll('button.buy');

function handlebuyitem(event){
    console.log('hy yoou clickedd on button');
    const button = event.target
    console.log(button);
    console.log(event.currentTarget);
 console.log('hey item is collected');
 console.log(event.target.dataset.price);
//  event.stopPropagation();
};
 buybutton.forEach(function(buybutton){
    buybutton.addEventListener('click',handlebuyitem)
 });
 window.addEventListener('click',function(event){
    console.log('hey you clicked on window');
    console.log(event.target);
    console.log(event.type);
    event.stopPropagation();
    console.log(event.bubbles);
    // event.stopPropagation();
 },{capture:true})


  const elph=document.querySelector('.photo');
  elph.addEventListener('mousemove',function(event){
    console.log(event.currentTarget);
    console.log(this);
  })

// function buyitem(){
//     console.log('buying item !!');
// }

// function handleclick(anythingwewant){
//     console.log('hey we are binding buttons');
//     anythingwewant.addEventListener('click',buyitem)
// };

// buybutton.forEach(handleclick);``


//arrow function
// buybutton.forEach(button=>{
//     button.addEventListener('click',()=>{
//         console.log('you clicked it!!!');
//     });
// });