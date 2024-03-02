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

function buyitem(){
    console.log('buying item !!');
}

function handleclick(anythingwewant){
    console.log('hey we are bunding buttons');
    anythingwewant.addEventListener('click',buyitem)
};

buybutton.forEach(handleclick);


//arrow function
buybutton.forEach(button=>{
    button.addEventListener('click',()=>{
        console.log('you clicked it!!!');
    });
});