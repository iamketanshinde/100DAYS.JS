const onclub={
    name:'ketan',
    age:30,
    status:'avtive',
    statement:false,
    dog:'snicker',
    'cool-dude':'hello',
    clothing:{
        shirt:30,
        pant:24,
    },
    sayhi: function(greeeting='hey'){
        return `${greeeting} ${this.name}`
    }
};

onclub.age=50;
onclub.job="wevdev";
onclub.status=false;
console.log(onclub);


// const propertycheck=prompt('hey i want to check an age');
// console.log(propertycheck);
// console.log(onclub[propertycheck]);

const nameInput=document.querySelector('[name="first"]');
// const name=nameInput.value;
// console.log(name);

const hello=nameInput?nameInput.value:'';
console.log(hello);

console.log(delete onclub.job);
console.log(delete onclub.age);