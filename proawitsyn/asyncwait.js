function wait(ms=0){
    return new Promise((resolve)=>{
        setTimeout(resolve,ms);
    })
};

async function go(){
    console.log('starting');
    await wait(2000)
    console.log('ending');
};
go();



//sometypes


// functon declerattion
async function fd()={}

// arrow function
const arrowfn=async ()=>{}

// call back function
window.addEventListener('click',async function(){

})


//
const person={
    //method
    sayhi: async function(){},
    //method shorthand
    async sayhello(){},
    //function property
    sayhi: async ()=>{},
};