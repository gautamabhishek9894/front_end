const value=undefined;
switch(null){
    case true:
        console.log('yes');
        break;

        case false:
            console.log('no');
            break;

            default:
                console.log('please select boolean value true / false');       
}

//  Function

function sumofvalue(a, b, c) {
    console.log(a + b + c);
    return a + b + c;    
}   
console.log(sumofvalue(10, 6, 12));
const arrowFunc = (a, b, c) => {
    return a + b + c;
};
console.log(arrowFunc(1, 2, 3));





