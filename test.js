let object = {
    name: 'riad',
    age: 23,
};

//const = wife = 'wife';
//object[wife] = 'mitu';

object.wife = 'mitu';


for(key in object){
    value = object[key];
    console.log(key,value);
}