// links are used to change the page
// buttons aee used for actions that happens inside application 





const google=document.querySelector('.google');

google.addEventListener('click',function(event){
    const wellwisher=confirm('hey this site must be have some load isssue');
    if(!wellwisher){
        event.preventDefault();
        console.log('it cant be load');
    }
});


const signupform=document.querySelector('[name="signup"]');

signupform.addEventListener('submit',function(event){
    const name = event.currentTarget.name.value;
    if(name.includes('chad')){
    alert('ssorry bro name is incorrect');
    event.preventDefault();
  }
});



function logEvent(event){
    console.log(event.type);
    console.log(event.currentTarget.value);
}
signupform.name.addEventListener('keyup',logEvent);
signupform.name.addEventListener('keydown',logEvent);
signupform.name.addEventListener('blur',logEvent);
signupform.name.addEventListener('focus',logEvent);



const pht=document.querySelector('.photoimg');

function handleimgclick(event){
    if(event.type==='click' || event.key === 'Enter'){
        console.log('hey you enter img');
    }
    console.log('hey you click img...!');
   
}
 pht.addEventListener('click',handleimgclick);
 pht.addEventListener('keyup',handleimgclick)