const pic=document.querySelector('.round')
pic.classList.toggle('round');
console.log(pic.classList);


function toggleround(){
    pic.classList.add('round');
}
pic.addEventListener('click', toggleround);