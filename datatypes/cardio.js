//make function  that creates length X,Y with ARRAY from....
function createrange(start,end){
const range=Array.from({length:end-start},
function(item ,index){
return index + start;
});
return range;
};

const myrange=createrange(3,7);
//check the last array you cteated is really array with isarray 
console.log(Array.isArray(myrange));


const meats={
    beyond:20,
    beaf:29,
    chicken:25,
}
//take the meeat object and make threee array with object.entries(),object.keys,object.values......

console.log(Object.entries(meats));
console.log(Object.keys(meats));
console.log(Object.values(meats));

Object.entries(meats).forEach((key,value)=>{
//  const key=entry[0];
//  const value=entry[1];
 console.log(key,value);
});

//
// instance method


//display all buns using join()
const buns=['egg','chicken','boliedchicken'];
console.log(buns.join(' or '));


//we have a string "hotdog,hamburger,sausercake,buns"use split to trun it into string
const burgers="hotdog,hamburger,sausercake,buns";
console.log(burgers.split(','));

//take the last element of  array using pop()
const topping=["hann","mulga","madhe","kunal","khotahe","topis"];
const lastitem= topping.pop();
//add uut back with push
console.log(topping.push(lastitem));
console.log(topping);
//take the first ittem of topping with shift()
const firstitem=topping.shift();
console.log(firstitem);
//put it  back with unshift
console.log(topping.unshift(firstitem));
//do the last four but,immutable(with spread and  new variable)
let newtopping=topping.slice(0,topping.length-1);
console.log(newtopping);
newtopping=[...newtopping,topping[topping.length-1]]


//make a copy on array using slice
const toppingcopy=topping.slice(0);
topping[0]='hello';
console.log(topping);
console.log(toppingcopy);
//make a copy of topping array using spread
const topping2= [...topping];
// take out item 3 to 5 of your nw topping array with splice()/remove
toppingcopy.splice(3,5)
console.log(toppingcopy);

//find the indexof avacado with indexof()/findindex
const avocado=topping.indexOf('avocado');
console.log(avocado);

//check hot dog in topping using includes
const isintopping=topping.includes('ketan');
console.log(isintopping);
//add it if it nots
if(!isintopping){
    topping.push('ketan')
};
console.log(isintopping);
//fllip that topping reverse()
// topping.reverse();
// console.log(topping);//mutable method
//immutable method
const toppreversed=[...topping].reverse();
console.log(topping);