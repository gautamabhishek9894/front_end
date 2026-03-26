let count=0;
const dec = document.getElementById('dec')
dec.disabled=true;
const counterUI=document.getElementById('Counter_UI');
const incFunc=()=>{
    count++;
    counterUI.innerHTML='';
    counterUI.append(`Counter: ${count}`);
    if(count>0){
        dec.disabled=false;
    }
};
const resFunc=()=>{
    count=0;
    counterUI.innerHTML='';
    counterUI.append(`Counter: ${count}`);
    if(count<=0){
        dec.disabled=true;
    }
};
const decFunc=()=>{
    count--;
    counterUI.innerHTML='';
    counterUI.append(`Counter: ${count}`);
    if(count>=0){
        dec.disabled=true;
    }
};
