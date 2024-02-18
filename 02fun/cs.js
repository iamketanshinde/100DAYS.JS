// fun defination
function calBill(billamt,taxrate){ // billamt and taxrate is parameters

    console.log(billamt,taxrate=0.13,tiprate=0.18);
    console.log('running calculate bill');
    const total = Math.floor (billamt+(billamt * taxrate)+(billamt * tiprate));
    return total;
}




//fun call
const wes=500;
 const westax=0.3
const mytotal = calBill(wes,westax); // 100,0.13 is arguments
// console.log(mytotal);
// console.log(`my total bill is $${calBill()}`);


function sayhito(firstname){
    return`hello ${firstname}`
}
// const greeting=sayhito('ketan');
// console.log(greeting);
const kait=120;
const mytotal3=Math.floor(calBill(kait+160,0.1));


function doctorize(name){
    return`dr. ${name}`;
};

function yeill(name='santosh shinde'){
    return`hey ${name.toUpperCase()}`;
};

const total4=calBill(233,false,0.18);