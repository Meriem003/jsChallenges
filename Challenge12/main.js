let taskList = document.getElementById("taskList");

function addTask() {
    let taskValue = document.getElementById("taskInput").value;
  if (taskValue === "") {
    return;
  }

  let li = document.createElement("li");
  li.innerHTML = `${taskValue}`;

  let deleteButton = document.createElement("button");
  deleteButton.innerHTML = '<ion-icon name="trash-outline" class="delete"></ion-icon>';
  deleteButton.onclick = function() {
    deleteTask(li);
  };

  li.appendChild(deleteButton);
  taskList.appendChild(li);
  taskInput.value = "";
}

function deleteTask(task){
    taskList.removeChild(task);
}