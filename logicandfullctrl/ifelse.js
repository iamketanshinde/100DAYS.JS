const age=73;
if(age>40){
console.log('your age is under 50');
}else if(age>50){
console.log('you are fifty');
}else if(age>70){
    console.log('you are seventies');
}else{
    console.log('nothing');
}


function slugify(sentence,lowercase){
    const slug=sentence.replace(/\s/g,'-')
    if(lowercase){
      return slug.ToLowercase();
    }
    return slug;
}

const name='wes';
const last='bos';

if(name==='scot'||(name==='wes' && last==='bos'))
{
    console.log('cool name');
}

const awesomename='awesome'.includes(name);
if(awesomename){
    console.log('hey preety cool name');
}
function nameisawesome(name){
    return 'awesome'.includes(name);
}
if (nameisawesome==='wes'){
    console.log('cool name!');
}