// function init(){
//     const p=document.querySelector('p')
// console.log(p);
// }

// document.addEventListener('theDom',init());




// const p=document.querySelector('p')
// const divs=document.querySelectorAll('.item')
// const h3=document.querySelectorAll('.item2 h3')
//  console.log(p);
//  console.log(divs);
//  console.log(h3);



const heading = document.querySelector('h2');
console.log(heading.innerHTML.toUpperCase());
//we seet an text content properrties to an element
// heading.textContent='hey i am text-content';
// console.log(heading.textContent.toUpperCase());//(dir will show you properties)
console.log(heading.innerHTML);
console.log(heading.outerHTML);



const pizzalist=document.querySelector('.pizza');
console.log(`${pizzalist.textContent} i ate 10 pizza`);
pizzalist.insertAdjacentText('beforebegin','25');
pizzalist.insertAdjacentText('beforeend','15');
