const prices={
    burger:453,
    hotdog:743,
    chilligrind:224,
    heatburger:231,
}
const meats={
    beef:7,
    halwa:3,
    chicken:4,
}
const topping=["hann","mulga","madhe","kunal","khotahe","topis"];

const ordertotal=[200,259,463,423,547,765,744]

const feedback=[
{Comment:'i love burger', rating:4},
{Comment:'i love hotdog', rating:4},
{Comment:'i love chilligrind', rating:1},
{Comment:'too good heatburger', rating:2},
{Comment:'too cheezy', rating:2},
];
//find the frist rating that talks about burger with find()

// function findrating(singlefeedback){
//     return singlefeedback.Comment.includes('burger');
// }
// const findrating= function(singlefeedback){
//     return singlefeedback.Comment.includes('burger');
// }
//arrow funct
// const findrating = (singlefeedback) => singlefeedback.Comment.includes('burger');
// const findsmoothierating = (singlefeedback) => singlefeedback.Comment.includes('smoothie');

const findbyword=function(word){
    return function(singlefeedback){
        return singlefeedback.Comment.includes(word)
    }
}
const burgRating = feedback.find(findbyword('hotdog'));
const  soomthierating=feedback.find(findbyword('burger'))

console.log(burgRating);
console.log(soomthierating);

// find all rating that are above 2

function filterbyminrating(minrating){
    return function(singlefeedback){
       return singlefeedback.rating > minrating
    }
};
// const goodviews=feedback.filter(singlefeedback=>singlefeedback.rating>=2);
const goodviews=feedback.filter(filterbyminrating(4))
console.table(goodviews);

//find all the rating that talk about filter()
const burRating =feedback.filter(singlefeedback=>feedback.filter(findbyword('burger')));


console.table(burRating);

//reemove the ne  starr rating however you like
const singlerating=feedback.filter(single=>single.rating!== 1);
console.table(singlerating);


// check at leats their is 5 of one type of meat their by some()
const onetypemeat= Object.values(meats).some(meatvalue=>meatvalue>=4);
console.table(onetypemeat);

//make sure we have  at least 3 of every meat with every()
const onetypemeatthree= Object.values(meats).some(meatvalue=>meatvalue>=3);
console.table(onetypemeatthree);

//sort the toppping alphabetically wuth sort()
const numbers=[1,3,5,7,100,150]
const sorted=numbers.sort((firstsite,secondsite)=> firstsite-secondsite);
console.log(sorted);

//sort the order total most expensive to leeast with sort()
function numbersort(a,b){
    return a-b
};
console.log(ordertotal.sort(numbersort));



//sort the prices
 const sortedprice=Object.entries(prices).sort(function (a,b){
    const aprice=a[1];
    const bprice=b[1];
    return aprice-bprice;
 });
 console.table(sortedprice);