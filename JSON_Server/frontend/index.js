const Base_URL =  'http://localhost:8080/todo';

const fetchData = async () => {
  let res = await fetch(Base_URL);
  let data = await res.json();
  return data;
};

const addTodo = () => {
  const textValue = document.querySelector('#value').value;
  const todo = {
    text: textValue,
    isEdit: false,
    isCompleted: false,
  };

  fetch(Base_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo),
  });
};

const Render_UI = async () => {
  const apiData = await fetchData();
  if(typeof apiData=='object'&& !Array.isArray(apiData))return;

  const main = document.querySelector('#todo');
  console.log(apiData);
  apiData?.forEach((items) => {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'card_div';

    const id = document.createElement('h2');
    const text = document.createElement('h2');

    const editButton = document.createElement('button');
    const deleteButton = document.createElement('button');
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';

    id.innerText = items.id;
    text.innerText = items.text;
    editButton.innerText = 'edit';
    deleteButton.innerText = 'delete';
    editButton.addEventListener('click',()=>{
      const singleValue=apiData 
      ?.filter((el)=>el.id==items.id)
      .map((el)=>(el.id==items.id ?
        {...el, isEdit:true}:el));
        fetch(`${Base_URL}/${items.id}`,{
          method:'DELETE',
          headers:{
            'Content-Type':'application/json',
          },
        });
    });
    cardDiv.append(checkBox, id, text, editButton, deleteButton);
    main.append(cardDiv);
  });
  /* apiData?.map((items) => {
    console.log(' ~ items:', items);
    sub_child.innerHTML = `
      <input type="checkbox" />
      <h2>${items.id}</h2>
      <h2>${items.text}</h2>
      <button>edit</button>
      <button>delete</button>
    `;
    cardDiv.append(sub_child);
  });
  main.append(cardDiv);
  console.log(' ~ main:', mai-n); */
};