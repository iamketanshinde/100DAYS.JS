// fun defination
function calBill(){
    console.log('running calculate bill');
    const total=Math.floor(100*1.13);
    return total;
}




//fun call
const mytotal = calBill();
// console.log(mytotal);
console.log(`my total bill is $${calBill()}`);