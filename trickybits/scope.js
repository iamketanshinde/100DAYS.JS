// const age = 100 ;

// function go(){
//     const myage=200;
//     const hair = 'blounde';
//     console.log(age);
//     console.log(hair);
//     console.log(myage);
// }
// // the variables which is declared in curly-braces that can be run betwn curly-braces/can be defined in that function block only.....

// go();
// console.log(age);

// let cool;
// if(1===1){
//  cool=true;
// }
// console.log(cool);

// var variables are function scope and let&const are block scope
// function isCool(name){
// var cool;
// if( name ==='wes' ) {
//  cool=true;
// }
// console.log(cool);
// return cool;
// }



// for( let i=0;i<10;i++){
//     console.log(i);
// };

const dog='sneckers';
function logdog(dog){
    console.log(dog);
}
function go(){
    const dog='sunny';
    logdog(dog);
}
go();


function sayhi(name){
    function yell() {
        console.log(name.toUpperCase());
    }
   yell();
}

