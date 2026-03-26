let count=0;
const counterUI=document.getElementById('Counter_UI');
const incFunc=()=>{
    count++;
    counterUI.innerHTML='';
    counterUI.append(`Counter: ${count}`);
};
const countUI=document.getElementById('Counter_UI');
const resFunc=()=>{
    count=0;
    countUI.innerHTML='';
    countUI.append(`Counter: ${count}`);
};
const count1=document.getElementById('Counter_UI');
const decFunc=()=>{
    count--;
    count1.innerHTML='';
    count1.append(`Counter: ${count}`);
};
