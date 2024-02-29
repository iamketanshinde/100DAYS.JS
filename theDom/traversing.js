const wes=document.querySelector('.wes');
console.log(wes.children);//will give you child elements....

//.children
//.childNodes
//.firstElementChild
//.previousElementSibling
//.lastElementChild
//.parentElement
//.nextElementSibling

const p=document.querySelector('p');
p.textContent='i am removed';
document.body.appendChild(p);
p.remove();// easy to remove tag