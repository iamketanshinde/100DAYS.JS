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




const person1={
    first:'ketan',
    last:'shinde',
    clothing:{
        shirt:20,
        pantt:30,
    }
}
const person2={
    first:'hello',
    last:'kait',
}
// person3=person1;// change person1.first name....
// person3.first ='larry';
// console.log(person1);
// console.log(person3);

//3 dot operator....!
const person3={...person1}
person3.first='larry';//will not change person1.first name
person3.clothing.pantt=50;


//if you hange the value of anything in object will affect other value in other variable or other object
const person4=_.cloneDeep(person3);
person4.clothing.pantt=400;
console.log(person4);

//inventory property :-
const meatinventory={
    meat:3,
    fish:4,
}
const veginventory={
    tomato:5,
    pannner:6,
    fish:10,//will change value of fish

}

const inventory={...meatinventory,...veginventory
,oyster:9,
head:19,
}//change property in it

function dostuff(data){
data.fish=1000000000,
    console.log(data);
}
dostuff(inventory)// can moddifed value inn inventory