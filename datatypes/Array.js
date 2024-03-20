const names=['KETAN','PIYUSH','VAISHNAVI','AJAY']
// console.log('names');

names.push('PAYAL')
console.log(names);
const names2 = [...names,'PAYAL'];
//(...spear opeartor combine/update mu names)


console.log(names2);


names.unshift('poppy');//using unshift will keep that name in front of that array /at (0-index)
console.log(names);

const names3=['POPPY',...names]//2 nd Method to add name in first index
console.log(names3);

names.splice(4,6);
console.log(names);


const bikes=['panasonic','sonic','tumtam','hero']
const newbikes=[
    ...bikes.slice(0,2),
    'pulsar',
    ...bikes.slice(2)];//how to add betwn array


const newbikes2=[
    ...newbikes.slice(0,3),
    ...newbikes.slice(4)
];//how to remove elemt betwb array
    console.log(newbikes2);


const comments=
[{text:'hey cool',id:122},
{text:'hey cool',id:123},
{text:'hey cool',id:124},
{text:'hey cool',id:125}];


function deletecomment(id,comments){
    //first find the index of  an array
    const commentindex=comments.findIndex(comment=>comment.id===id)
    //makee neew array without item in it
    return[
        console.log(0,commentindex),
        console.log(commentindex+1),
    ]
    //return our new array
}


const piyushindex=names.findIndex(names=>names==='PIYUSH');
//get everything up to piyush
const newkait=[
    ...names.slice(0,piyushindex),
    //every thing after piyush index
    ...names.slice(piyushindex+1)
].flat();
console.log(newkait);














// const numbers=[1,2,3,4,5,6,7,8,9]
// console.log(numbers);


// //mutation Method
// // numbers.reverse();//change orignal data
// console.log(numbers);


// //copy of an Array
// const numberReversed=[...numbers].reverse();
// console.log(numberReversed);



// //Imutable Method
// const pizzaslice = numbers.slice(2,4) //they do not change the orignal data
// console.log(pizzaslice);
// console.log(numbers);


