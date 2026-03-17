// let icecreame=new Promise((res , rej)=>{
//     let flag=false;
//     if(flag){
//         res('get');
//     }else{
//         rej('not found');
//     }
// });

// icecreame
// .then((res)=>console.log('res:->',res))
// .catch((err)=>console.log('err:->',err))
// .finally((res)=>console.log('done'))

//////////////////////////////////////////////////////////

// let promise_1=new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res('hello');
//     },2000);
// });
// let promise_2=new Promise((res,_)=>{
//     setTimeout(()=>{
//         res('hello');
//     },1000);
// });
// let promise_3=new Promise((res,rej)=>{
//     setTimeout(()=>{
//         rej('hello');
//     },500);
// });
// async function getData() {
//     try{
//         let res= await  Promise.all([promise_1,promise_2,promise_3])
//         console.log(res);
//     }catch(error){
//         console.log(error);
//     }
// }


// queestion
let Promise=new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(Math.floor(Math.random()*10))
    },1000);
});

async function getData(){
    let res=await Promise.all([promise_1,promise_2])
    console.log(res);
    let result=res.reduce((acc ,curr)=>{
        return acc+curr
    })
    console.log(result);
}
getData();




