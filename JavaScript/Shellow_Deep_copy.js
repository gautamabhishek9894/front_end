let object={
    name:'abhishek',
    age:22,
    married:false,
    hobbies:['coc', 'goW', 'pub-g'],
    city:{
    live_IN:'Mumbai',
    plan_TO:'UK',
    dream_TO:'Switzerland',},
};

//  here we have to 'Shallow' copy
// spread operator

// let newObject={
//     ...object,
// };

// constructor method

// let newObject=Object.assign({},object);
// newObject.hobbies[0]='gautam';
// console.log(newObject);
// console.log(object);

//  here we have to "Deep copy".
let deepCopy=JSON.stringify(object); // json
console.log(deepCopy, 'type:', typeof deepCopy);

let anotherValue=JSON.parse(deepCopy); //object
anotherValue.hobbies[0]='gautam';
console.log(anotherValue , 'type:', typeof anotherValue);
console.log(object);
    





