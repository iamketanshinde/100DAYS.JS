//ternary
const count=4483;
// let word;

// if(count===1){
//     word='item'
// }else{
//     word='items'
// };
const ward=count===1?'item':'items';

const sentence=`you have ${count} ${ward} in your basket`

console.log(sentence);

function truefunct(){
    console.log('hey adminbar is true');
}
const isadmin=true;
// isadmin?truefunct():null;
isadmin&&truefunct();





//and and trrick
function check1(){
    console.log('rennung check pass 1');
    return true;
}
function check2(){
    console.log('rennung check pass 2');
    return true;
}
function check3(){
    console.log('rennung check pass 3');
    return true;
}


if(check1() && check2() && check3()){
    console.log('all check passed!');
}else{
    console.log('some check failed');
};