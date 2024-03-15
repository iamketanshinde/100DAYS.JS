function buzzer(){
    // console.log('done!!');
}
setTimeout(buzzer,500);
setInterval(buzzer,2000);

function setImmiadiateInterval(functiontorun,ms){
    functiontorun();
   return setInterval(functiontorun,ms);
}
setImmiadiateInterval(buzzer,400 );
function sayhi(){
    // console.log('hello!');
}
setImmiadiateInterval(sayhi,200)




//destroy webpage
function destroy(){
    document.body.innerHTML=`<p>DESTROYED!</p>`;
}
const bombtimer=setTimeout(destroy,2000);
window.addEventListener('click',function(){
    console.log('you havpopIntervale savee the world');
    clearTimeout(bombtimer);//stop the timmer
});



const popInterval=setInterval(function(){
    console.log('heyid');
},10)
setTimeout(function(){
    clearTimeout(popInterval)
},5000)
