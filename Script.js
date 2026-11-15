// Get references to DOM elements
const addTaskBtn = document.getElementById("addTaskBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") return; // Prevent adding empty tasks

  // Create a new list item
  const li = document.createElement("li");
  li.textContent = taskText;

  // Add event listener for deleting task on click
  li.addEventListener("click", function () {
    taskList.removeChild(li);
  });

  // Append new task to list
  taskList.appendChild(li);

  // Clear input field
  taskInput.value = "";
}

// Event: Add task when button is clicked
addTaskBtn.addEventListener("click", addTask);

// Event: Add task when pressing Enter key in input
taskInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});
