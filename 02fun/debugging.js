const people = [{name:'ram',status:true,country:'ayodhya'},
            {name:'henrry',status:true,country:'london'},
            {name:'john',status:false,country:'canada'},       ];

// people.forEach((person,index) => {
//     if(people.name === 'ram') {
//         console.warn('dump name');
//     }
// });
// console.table(people);
 

people.forEach((person,index) => {
    console.groupCollapsed(`${person.name}`);
    console.log(`${person.status}`);
    console.log(`${person.country}`);
    console.log('hey swimmer');
    console.groupEnd(`${person.name}`);
});


function doctorize(name){
    // console.count(`running docotorizee for ${name}`)
    return `dr.${name}`
}
 function alotofstuff(){
    console.group('hey i am ');
    console.warn('hebwqfv');
    console.error('hey i am ram');
    console.groupEnd('hey i am ');
 }




 function greet(name){
  dosentexist();
   return `hey i am ${name}`;
 }
 function go(){
    const name =doctorize(greet('wes'));
    console.log(name);
 }
 function bootstrap(){
    console.log('running bootstrap');
    go();
 }
//  bootstrap();