let newTask = document.getElementById("newTask");
let addTask = document.getElementById("add-btn");
let taskList = document.getElementById("tasks");

let tasks = [];

function createTask(taskValue) {
  let task = document.createElement("li");
  let removeTask = document.createElement("button");

  removeTask.innerText = "X";

  task.classList.add(
    "p-2",
    "border-2",
    "mb-3",
    "rounded-xl",
    "bg-gray-950",
    "flex",
    "m-auto",
    "justify-between",
  );
  removeTask.classList.add(
    "bg-red-600",
    "border-none",
    "text-amber-100",
    "rounded-full",
    "w-10",
    "h-10",
    "text-center",
    "hover:bg-red-700",
  );

  task.append(taskValue);
  task.append(removeTask);

  removeTask.addEventListener("click", () => {
    task.remove();
    let removeItem = tasks.indexOf(taskValue);
    tasks.splice(removeItem, 1);
    localStorage.setItem("tasklist", JSON.stringify(tasks));
  });

  taskList.append(task);
}

let tList = localStorage.getItem("tasklist");
if (tList !== null) {
  let savedList = JSON.parse(tList);
  tasks = savedList;

  for (let i = 0; i < tasks.length; i++) {
    createTask(tasks[i]);
  }
}

addTask.addEventListener("click", () => {
  let taskValue = newTask.value;
  if (taskValue == "") {
    alert("Please enter a task to be added");
    return;
  }
  createTask(taskValue);

  tasks.push(taskValue);
  localStorage.setItem("tasklist", JSON.stringify(tasks));
  newTask.value = "";
});
