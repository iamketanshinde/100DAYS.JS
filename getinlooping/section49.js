const toppings = ['Mushrooms ', 'Tomatoes', 'Eggs', 'Chili', 'Lettuce', 'Avocado', 'Chiles', 'Bacon', 'Pickles', 'Onions', 'Cheese'];

function logtopping(topping,index,Orignalarray){
    const prevtopping=Orignalarray[index+1]
    const nexttopping=Orignalarray[index-1]
    //log the topping
    console.log(topping);
    //log the previous toopping if their is one
    prevtopping?console.log(prevtopping):null;
    //log the next topping if their is one
    nexttopping?console.log(nexttopping):null;
 
    //if its last array say good by
    index===Orignalarray.length -1 ?
    console.log('good bye buddy'):
    console.log('meet you in next topic'); 
    // index===Orignalarray.length && console.log('good buy');
    console.log('-------!-------');
}
toppings.forEach(logtopping);




//maps , reduce ,filter()
console.clear();
const faces = ['😃', '🤠', '🤡', '🤑', '😵', '🌞', '🐶', '😺'];

function armsface(face){
    return ` 👋 ${face} 👋 `
};
const toys=faces.map(armsface);
console.log(toys);

function bosify(name){
    return `${name} boss`
};

function uppercaseify(word){
    return ` ${word[0].toUpperCase()}+${word.slice(1)}`;
}
const fullname=['wes','kait','henry'].map(uppercaseify).map(bosify);
console.log(fullname);

const orderTotals = [342, 1002, 523, 34, 634, 854, 1644, 2222];


const ordertotal=orderTotals.map(total =>total*1.13);
console.log(ordertotal);


const people = [
    {
      birthday: 'April 22, 1993',
      names: {
        first: 'Keith',
        last: 'Buckley'
      }
    },
    {
      birthday: 'January 3, 1975',
      names: {
        first: 'Larry',
        last: 'Heep'
      }
    },
    {
      birthday: 'February 12, 1944',
      names: {
        first: 'Linda',
        last: 'Bermeer'
      }
    }
  ];

  const callperson=people.map(function(person){
    console.log(person);
//time stamp()
    const brithday=new Date(person.birthday).getTime();
    //now timestamp  
    const now=Date.now();
    const age=Math.floor((now-brithday) / 31536000000);
  return {
    age,
    name:`${person.names.first}${person.names.last}`
  }
    // console.log(brithday,now);
    //get their bd
    // figure out how old they are
    // returnn their full name and bday
  });
  console.table(callperson);

  //filter will return actual thing wht yu want
  const over40=callperson.filter(person=> person.age> 40 );
  console.table(over40);

  const students = [
    {
      id: '11ce',
      first_name: 'Dall',
      last_name: 'Puckring',
    },
    {
      id: '2958',
      first_name: 'Margarete',
      last_name: 'Brandi',
    },
    {
      id: '565a',
      first_name: 'Bendicty',
      last_name: 'Woodage',
    },
    {
      id: '3a16',
      first_name: 'Micki',
      last_name: 'Mattes',
    },
    {
      id: 'f396',
      first_name: 'Flory',
      last_name: 'Gladeche',
    },
    {
      id: 'de5f',
      first_name: 'Jamill',
      last_name: 'Emilien',
    },
    {
      id: '54cb',
      first_name: 'Brett',
      last_name: 'Aizikowitz',
    },
    {
      id: '9135',
      first_name: 'Lorry',
      last_name: 'Smallman',
    },
    {
      id: '978f',
      first_name: 'Gilly',
      last_name: 'Flott',
    },
  ];




  function findbyid(id){
    return function isstudent(student){
        return student.id===id;
    }
  };


  function prop(prop,propbyname){
    return function istudent(student){
        return student[prop]===propbyname;
    }
  }
  const student=students.find(findbyid('54cb'));
  const student2=students.find(prop('first_name','Micki'));
  console.log(student);
  console.log(student2);




  //reduce
  console.clear();

  function tallyvalue(tally,currentvalue){
    console.log(`the tally is ${tally}`);
    console.log(`the current value is ${currentvalue}`);
    console.log('-------');
    return tally+currentvalue;
  }

  const ordertally=orderTotals.reduce(tallyvalue,0);
  console.log(ordertally);

  const inventory = [
    { type: 'shirt', price: 4000 },
    { type: 'pants', price: 4532 },
    { type: 'socks', price: 234 },
    { type: 'shirt', price: 2343 },
    { type: 'pants', price: 2343 },
    { type: 'socks', price: 542 },
    { type: 'pants', price: 123 },
  ];


function inventorytally(totals,item){
    console.log(`loooping item ${item.type}`);

    //increment the type by one
    totals[item.type ] = totals[item.type ]+ 1 || 1;


    // if(totals.shirt){
    //     totals.shirt=totals.shirt + 1;

    //     //total.shirt++;
    // }else{
    //     totals.shirt = 1;
    // }

                                    //instead of if braces we can try this
    totals.shirt ? totals.shirt + 1 : totals.shirt = 1;

    //return total so the next loop can we use
    return totals;
};

const orderpantshirt=inventory.reduce(inventorytally,{})
console.log(orderpantshirt);


const inventacc=inventory.reduce((acc,item)=>acc+item.price,0)

console.log(inventacc);




//reduce exercise
const text=`
The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place. Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0).

Try it

Syntax
JS
Copy to Clipboard
reduce(callbackFn)
reduce(callbackFn, initialValue)
Parameters
callbackFn
A function to execute for each element in the array. Its return value becomes the value of the accumulator parameter on the next invocation of callbackFn. For the last invocation, the return value becomes the return value of reduce(). The function is called with the following arguments:

accumulator
The value resulting from the previous call to callbackFn. On the first call, its value is initialValue if the latter is specified; otherwise its value is array[0].

currentValue
The value of the current element. On the first call, its value is array[0] if initialValue is specified; otherwise its value is array[1].

currentIndex
The index position of currentValue in the array. On the first call, its value is 0 if initialValue is specified, otherwise 1.

array
The array reduce() was called upon.

initialValue Optional
A value to which accumulator is initialized the first time the callback is called. If initialValue is specified, callbackFn starts executing with the first value in the array as currentValue. If initialValue is not specified, accumulator is initialized to the first value in the array, and callbackFn starts executing with the second value in the array as currentValue. In this case, if the array is empty (so that there's no first value to return as accumulator), an error is thrown.
`;
const everything=text.split('')

const result=everything.filter(char=>{
    //if that char is a-zA-Z0-9 then we want to keep it 
    if (char.match(/[a-zA-Z0-9]/)){
        return true;
    }else{
        return false;
    }
})


