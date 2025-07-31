const onClickAdd = () => {
  const inputText = document.getElementById("input-todo").value;
  if (inputText.trim() === "") return;
  document.getElementById("input-todo").value = "";
  createTodo(inputText);
};

const createTodo = (todo) => {
  const li = document.createElement("li");

  const div = document.createElement("div");
  div.className = "list-row";

  const p = document.createElement("p");
  p.className = "todo-item";
  p.innerText = todo;

  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    const backbutton = document.createElement("button");
    backbutton.innerText = "戻す";
    backbutton.addEventListener("click", () => {
      const todoText = backbutton.previousElementSibling.innerText;
      createTodo(todoText);
      backbutton.closest("li").remove();
    });
    div.appendChild(backbutton);
    completeButton.nextSibling.remove();
    completeButton.remove();
    const moveTarget = backbutton.closest("li");
    document.getElementById("complete-todos").appendChild(moveTarget);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    const deleteTarget = deleteButton.closest("li");
    document.getElementById("incomplete-todos").removeChild(deleteTarget);
  });

  li.appendChild(div);
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  document.getElementById("incomplete-todos").appendChild(li);
};

document.getElementById("add-button").addEventListener("click", onClickAdd);
