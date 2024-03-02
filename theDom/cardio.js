//make a div
const div=document.createElement('div');
// add class of wrapper to it
div.classList.add('wrapper');
//put that into body
document.body.appendChild(div);

//make un list and addd three li with words 
const ul=`<ul>
        <li>one</li>
        <li>two</li>
        <li>three</li>
</ul>`;

// add that list to wrapper
div.innerHTML=ul;
console.log(div);

//create an img 
const img=document.createElement('img');
//set an src to an img
img.src='https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2019/07/coding-apps.jpg';
//set width and height to it  
img.width=300;
img.height=200;
//add a classs of cute
img.classList.add('cute');
//add an alt to img
img.alt='cute puppy';
//append an img to the wrapper
div.appendChild(img);
console.log(div);

// make string with html code ,make div inside it add two paragraph
const myHTML=`
    <div class="mydiv">
        <p>paragraph one</p>
        <p>pragraph two</p>
    </div>
`;

const ULELEMENT=div.querySelector('ul')
console.log(ULELEMENT);
//put this divv before ul from above
ULELEMENT.insertAdjacentHTML('beforebegin',myHTML)
//add  a class to second prgraph called warning
const mydiv=div.querySelector('.mydiv');
console.log(mydiv);
mydiv.children[1].classList.add('warning');
// remove first paragraph
mydiv.firstElementChild.remove();

//create a function called generateplayercard that takes three argument :name , age , height....
function generateplayercard(name,age,height){
const html= `
<div class="playercard">
<h2>${name}-${age}</h2>
<p>their height is ${height} and ${age} woulb be.
 and years old
${age*7} thats would be tall dog</p>
</div>
<button class="delete" type="button">&times;delete</button>
`;
return html;
}


//make a new div with class of cards
const cards=document.createElement('div')
cards.classList.add('card');
//have that function with 4 cards 
let cardhtml=generateplayercard('RAM',12,7);
cardhtml=cardhtml+generateplayercard('wes',12,7);
cardhtml=cardhtml+generateplayercard('laksh',12,7);
cardhtml=cardhtml+generateplayercard('kait',12,7);
cards.innerHTML=(cardhtml);
div.insertAdjacentElement('beforebegin',cards)

// create button :-which is createed in function......!

//select all buttons
const buttons=document.querySelectorAll('.delete');
//make dlte  funtioon
function deletecard(event){
    const buttonthatgotclick=event.currentTarget;
    buttonthatgotclick.parentElement.remove();
}
//loop over them and add listener
 buttons.forEach(button=>button.addEventListener('click',deletecard));