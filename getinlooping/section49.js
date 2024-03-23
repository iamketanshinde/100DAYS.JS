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