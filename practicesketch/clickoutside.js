const cardbtn=document.querySelectorAll('.card button');
const model=document.querySelector('.model-inner');
const modelouter=document.querySelector('.model-outer');

function handleclickbtn(event){
    const button = event.currentTarget;
    const card =  button.closest('.card');
    const imgsrc=card.querySelector('img').src;
    const desc=card.dataset.description;
    const name= card.querySelector('h2').textContent;

    // grab that img
    console.log(desc);
    
    // populate the model with new info
    model.innerHTML = `
        <img src="${imgsrc.replace('200','300')}" "${imgsrc}"/>
        <p>${desc}</p>
    `;
    
    //show the model
    modelouter.classList.add('open');
};
cardbtn.forEach(button=>button.addEventListener('click',handleclickbtn));
function closemodel(){
    modelouter.classList.remove('open');
}

modelouter.addEventListener('click',function(event){
    const isout=event.target.closest('.model-inner');
    if(isout){
       closemodel();
    }
});

window.addEventListener('keydown',(event)=>{
   if(event.key==='Escape'){
   closemodel();
   }
});
