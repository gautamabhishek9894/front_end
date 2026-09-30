let dataBase=JSON.parse(localStorage.getItem(localStorage.key(0))) || [];
const todo=()=>{
    const value=document.querySelector('#taskVal').value;
    const todo={
        id:Date.now(),
        text:value,
        isEdite:false,
        isComplete:false,
    };
    dataBase.push(todo);
    localStorage.setItem('todo', JSON.stringify('dataBase'));
    

};