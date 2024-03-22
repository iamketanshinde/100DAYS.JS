const prices={
    burger:453,
    hotdog:743,
    chilligrind:224,
    heatburger:231,
}

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