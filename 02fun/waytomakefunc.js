// function doctorize(firstname){
//     return `dr.${firstname}`
// }


// anon  function
// function (firstname){
//     return `dr.${firstname}`
// }


//function expression
// const docotorize = function doctorize(firstname){
//     return `dr.${firstname}`;
// }




// const inchestoCm = function(inches){
//  return inches*2.54;
// }

// arrow ffunc

// const inchestoCm() = (inches) => inches * 2.54;

// function add( a, b=3 ){
//     const total=a+b;
//     return total;
// }

// const add = ( a, b=3 ) =>  a + b;


// function baby(firstname,secondname){
//     const fullname = {
//        name: `${firstname} ${secondname}`,
//        age:0,
//     }
//     return fullname;
// }


// const baby =(firstname,secondname) => ({ name: `${firstname} ${secondname}`, age:0,});


// IIFE
// immediately invoked funct expression
// (function(){
//     console.log("running anon funct");
//     return 'we are cool';
// })();

(function(age){
    return `we are cool and age ${age}`;
})(20);


// way to decelare Method
const wes = {
    name:'westopher',
    // method
    sayhi:function(){
        console.log(`hey this is ${this.name}`);
        console.log('hey wes');  
    return 'hey wes' ;
    },
    // short hand method
    yellhi(){
        console.log('hey wesssss');
    },
    // arrow funct
    // wisperhi:()=>{
    //     console.log('hey wes hi');
    // }
}

function handleclick(){
    console.log("working");
}

// callback funt
// click callback
 const button = document.querySelector(".clickme");
button.addEventListener("click",function(){
    console.log('nice job!!');
});

