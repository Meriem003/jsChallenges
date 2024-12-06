let taskList = document.getElementById("taskList");

function addTask() {
    let taskValue = document.getElementById("taskInput").value;

  if (taskValue === "") {
    return;
  }

  let li = document.createElement("li");
  li.textContent = `${taskValue}`;
  taskList.appendChild(li);
  taskInput.value = "";
}
