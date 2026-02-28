//  this is node collections to get output
// function getData(){
//    let value=document.body.getElementsByTagName('h1')
//    console.log(value);
// }
// for(i=0; i < value.length; i++){
//     console.log(value[i].innerText);

// // herr we are converrt into array strructure  find the output with array prototype..

// console.log(Array.isArray(value));
// let valueOfarr=Array.from(document.body.getElementsByTagName('h1'));
// // console.log(Array.isArray(valueOfarr));
//  let  value=[...document.body.getElementsByTagName('h1')];
// valueOfarr.map((el)=>{
//     console.log(el.innerText);
// });
// }
//  getData();

    // const handleAdd=()=>{
    //     const  text=document.getElementById('textValue').value;
    //     const output=document.getElementsByClassName('output')[0];
    //     output.innerText='';


    //     p.innerText=text;

    //     output.innerText='<p>${text}</p>';
    //     // output.innerHTML='<p>${text}</p>';
    //     // output.textContent='<p>${text}</p>';
    //     output.append();
    // };


    // create jokes

    const cretaeJokes=()=>{
        const BASED_URL="https://official-joke-api.appspot.com/random_joke";

        //api Fetching
     fetch(BASED_URL)
     .then((res)=>res.json())
     .then((res)=>renderUI(res))
     .catch((err)=>console.log(err)
    );
    }
    const renderUI=(value)=>{
        console.log(value);
        const output=document.getElementsByClassName('output')[0];
        output.innerHTML='';

        // create Element by js
        const id=document.createElement('h4')
        const punchline=document.createElement('h2');
        const setup=document.createElement('h3')
        const type=document.createElement('h5');

        id.textContent=value.id;
        punchline.innerText=value.punchline;
        setup.textContent=value.setup;
        type.textContent=value.type;

        punchline.style='color:tomato;backgroaund:#000';
        output.append(id,punchline,setup, type);
    }
