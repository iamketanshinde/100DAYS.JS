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