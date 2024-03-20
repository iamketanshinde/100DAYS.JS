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