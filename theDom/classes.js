const pic=document.querySelector('.round')
pic.classList.toggle('round');
console.log(pic.classList);


function toggleround(){
    pic.classList.add('round');
}
pic.addEventListener('click', toggleround);
pic.alt='naturefeels';
pic.width=288;
console.log(pic.naturalwidth);



// pic.addEventListener('load',function(){
//     console.log(pic.naturalwidth);   
// })
pic.setAttribute('Alternative','wes is cool');
console.log(pic.getAttribute('alt'));


const custom=document.querySelector('.vogue');
console.log(custom.dataset);

custom.addEventListener('click',function(){
alert(`welcome to img section ${custom.dataset.name} ${custom.dataset.last}`)
});