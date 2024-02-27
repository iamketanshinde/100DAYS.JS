const mypara=document.createElement('p');
mypara.textContent='i am paragrapg';
mypara.classList.add('special');
console.log(mypara);

const myimg=document.createElement('img');
myimg.src='	https://images.hdqwalls.com/wallpapers/sunset-nature-trees-img.jpg';
myimg.alt='its img'
console.log(myimg);


const mydiv=document.createElement('div');
mydiv.textContent='my div';
mydiv.classList.add('mydiv')
console.log(mydiv);


mydiv.appendChild(mypara);
mydiv.appendChild(myimg)

document.body.appendChild(mydiv);


// add something to top
const heading=document.createElement('h2');
heading.textContent='its heading';
mydiv.insertAdjacentElement('beforebegin',heading)



//make ul-li
const list=document.createElement('ul');
const li=document.createElement('li');
li.textContent='first li';
list.appendChild(li);

document.body.insertAdjacentElement('beforebegin',list);

const li5=document.createElement('li');
li.textContent='i am li5';
li.append(li5);


const li1=li5.cloneNode(true);
li1.textContent='hey i am texxt'
list.insertAdjacentElement('beforebegin',li1)
