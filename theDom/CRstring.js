const mydiv=document.querySelector('.item');
const width=500;
const src= `https://tse4.mm.bing.net/th?id=OIP.eIEz73xZoLmYwqTF92FciwHaEw&pid=Api&P=0&h=220/${width}`;
const alt= `cute puppu   <img  onload="alert('hacked')" src="img/th.jpg" alt="img">`;

const myhtml=`
<div class="wrapper">

<h2>hey i am div</h2>
<img src="${src}" alt="${alt}"/>

</div>
`;

// console.log(myhtml);
// const itemimg=document.querySelector(.wrapper img);
// console.log(itemimg);
// itemimg.classList.add('round');


// turn a string into dom element
const hello=document.createRange().createContextualFragment(myhtml);
console.log(hello.querySelector('img'));
console.log( hello);


document.body.append(myhtml);