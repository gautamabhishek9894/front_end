const base_URL = "http://localhost:8080/todo";

const fetchData = async () => {
  let res = await fetch(base_URL);
  let data = await res.json();
  return data;
};

const addTodo = (e) => {
  e.preventDefault();

  const textValue = document.querySelector("#value").value;

  const todo = {
    text: textValue,
    isEdit: false,
    isCompleted: false,
  };

  fetch(base_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  }).then(() => Render_UI());
};

const Render_UI = async () => {
  const apiData = await fetchData();

  if (typeof apiData !== "object" || !Array.isArray(apiData)) return;

  const main = document.querySelector("#todo");
  main.innerHTML = "";

  console.log("apiData:", apiData);

  apiData.forEach((items) => {
    const cardDiv = document.createElement("div");
    cardDiv.className = "card_div";

    const id = document.createElement("h2");
    const text = document.createElement("h2");
    const editButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    // we can create 4 button
    const cancelButton = document.createElement("button");
    const confirmButton = document.createElement("button");

    const inputField = document.createElement("input");

    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.checked = items.isCompleted;

    id.innerText = items.id;
    text.innerText = items.text;
    text.className = "text";

    inputField.className = "inputField";
    inputField.name = "editField";

    // ===== edit & delete btn start =====
    editButton.innerText = "edit";
    deleteButton.innerText = "delete";

    editButton.className = "edit";
    deleteButton.className = "delete";
    // ===== edit & delete btn end =====

    // ===== cancel & confirm btn start =====
    cancelButton.innerText = "cancel";
    confirmButton.innerText = "confirm";

    cancelButton.className = "cancel";
    confirmButton.className = "confirm";
    // ===== cancel & confirm btn end =====

    // we have to toggle the button
    if (items.isEdit) {
      text.style.display = "none";
      inputField.style.display = "block";
      editButton.style.display = "none";
      deleteButton.style.display = "none";
      confirmButton.style.display = "block";
      cancelButton.style.display = "block";
      inputField.value = items.text;
    } else {
      text.style.display = "block";
      inputField.style.display = "none";
      editButton.style.display = "block";
      deleteButton.style.display = "block";
      confirmButton.style.display = "none";
      cancelButton.style.display = "none";
    }

    editButton.addEventListener("click", () => {
      const singleValue = apiData
        ?.filter((el) => el.id === items.id)
        .map((el) =>
          el.id === items.id ? { ...el, isEdit: true } : el
        );

      fetch(${base_URL}/${items.id}, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(...singleValue),
      }).then(() => Render_UI());
    });

    deleteButton.addEventListener("click", () => {
      fetch(${base_URL}/${items.id}, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }).then(() => Render_UI());
    });

    confirmButton.addEventListener("click", () => {
      fetch(${base_URL}/${items.id}, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: inputField.value,
          isEdit: false,
        }),
      }).then(() => Render_UI());
    });

    cancelButton.addEventListener("click", () => {
      fetch(${base_URL}/${items.id}, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          isEdit: false,
        }),
      }).then(() => Render_UI());
    });

    checkBox.addEventListener("change", () => {
      fetch(${base_URL}/${items.id}, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          isCompleted: checkBox.checked,
        }),
      });
    });

    cardDiv.append(
      checkBox,
      id,
      text,
      inputField,
      editButton,
      deleteButton,
      cancelButton,
      confirmButton
    );

    main.append(cardDiv);
  });
};

Render_UI();