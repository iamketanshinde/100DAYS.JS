const mymap=new Map();
//.set() Method
mymap.set('name','wes')
console.log(mymap);
mymap.set(100,'thid is a number');



const score=200;
const prizes=new Map();
prizes.set(100,'bear');
prizes.set(200,'duck');
prizes.set(300,'cat');
console.log(`you won ${prizes.get(score)}`);

const ul=document.querySelector('.prizes');
for(const [points,prize] of prizes){
   const li=`<li>${points} - ${prize}</li>`;
   ul.insertAdjacentHTML('beforeend',li)
}
//has() Method

//Delete()Method