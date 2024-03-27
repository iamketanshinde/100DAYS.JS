console.clear();
const numbers = [2, 34, 3, 23, 42, 3, 1, 65, 364, 5, 645, 6];

const name = 'Wes Bos';

const wes={
    name:'wes',
    age:35,
    cool:true,
}

// for 

// for(let i=0;i<=10;i++){
//     console.log(i);
// }

for(let i=0;i<numbers.length;i++){
    console.log(numbers[i]);
}

//for of
for(const letter of name){
    console.log(letter);
}

// for in used for looping over key of an object
for (const prop in  wes){
    console.log(prop);
};




const basehuman={
neck:1,
legs:3,
eyes:2,
hands:2,
}

function human(name){
    this.name = name;
}
 
human.prototype=basehuman; 
 
const wes2 = new human('wes')
console.log(Object.keys(wes2));


for(const prop in wes2){
    console.log(prop);
}
//while llop
let cool=true;
let i =1 ;

while(cool===true){
console.log('you are cool');
i++;
if(i>100){
    cool=false;
}
}
//do while loop