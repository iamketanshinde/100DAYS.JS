
function makepizza(toppings=[]){
  return new Promise(function (resolve,reject){
    //if they ordered pineaple pizza thenn it will be rejected
    if(toppings.includes('pineapple')){
        reject('dont have pineapple flavour');
    };
    const timeoutable= 500 +(toppings.length*200)
        //wait one sec for delevery
        setTimeout(function(){
        resolve(`here is your pizza 🐶${toppings.join(' ')}`);
        },timeoutable)
    });
}

// if you want ti check value of it then do this
// const Paperonion = makepizza(['paperonion']);
// const oniionsprop=makepizza(['panner,paperonion,cheez']);



console.log('GIVEORDER!');
makepizza(['paperonion'])
.then(function(pizza){
    console.log(pizza);
    return makepizza(['cheezy','yummm']);
})
.then(function(pizza){
    console.log(pizza);
   return makepizza(['heyyyy','cheezy','hotttt'])
})
.then(function(pizza){
    console.log(pizza);
    return makepizza(['pineapple']);
})
.then(function(pizza){
    console.log(pizza);
    return makepizza(['oilyy','graunted','branded'])
})
.then(pizza=>{
    console.log('here is you last order');
    console.log(pizza);
}).catch(handleerr)
// // console.log('HAVE YOU GET YOUR ORDER');

// const pizzapromise1= makepizza(['cheezy','yummm']);
// const pizzapromise2= makepizza(['heyyyy','cheezy','hotttt']);
// const pizzapromise3= makepizza(['oilyy','graunted','branded']);

// const dinner=Promise.all([pizzapromise1,pizzapromise2,pizzapromise3]);

// dinner.then(function(pizza){
//     console.log(pizza);
// });

// const firstpromise=Promise.race([pizzapromise1,pizzapromise2,pizzapromise3]);

// firstpromise.then(function(pizza){
// console.log('here is the firstone ready');
// console.log(pizza);
// })

function handleerr(err){
    console.log('ohh noooooO!');
    console.log(err);
}
makepizza(['cheezy','pineapple']).then(pizza=>{
    console.log(pizza)
}).catch(handleerr);


const p1 = makepizza(['pep']);
const p2 = makepizza(['pineapple']);

const dinnerpromise2=Promise.allSettled([p1,p1]).catch(handleerr)

dinnerpromise2.then(result=>{
    console.log(result);
})

