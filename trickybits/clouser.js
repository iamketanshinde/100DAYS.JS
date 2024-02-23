// function outer(){
//     const outervar='hey i am outer!';
//     function inner(){
//         const innervar='hey i am inner';
//         console.log(innervar);
//         console.log(outervar);
//     }
//   return inner;
// }
// const  innerfn = outer();
// innerfn();


// function creategreeting(greeting=''){
//     const mygreet=greeting.toUpperCase();
//     return function(name){
//         return`${mygreet}${name}`;
//     }
// }
// const sayhello=creategreeting('hello ');
// const sayhey=creategreeting('hey ');
// console.log(sayhello('wes'));
// console.log(sayhey('kait'));

function creategame(gamename){
    let score=0;
    return function win(){
        score++;
        return `${gamename} ${score}`
    }
}
const game=creategame('hockey');
