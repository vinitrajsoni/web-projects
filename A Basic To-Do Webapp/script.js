// Data arrays for storing tasks
let pendingTasks = [];
let completedTasks = [];

// Form submission handler
document.getElementById("todo-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const dateAdded = new Date().toLocaleString();

  // Create a new task object
  const task = { title, description, dateAdded };

  // Add task to pending list
  pendingTasks.push(task);
  updatePendingTasks();

  // Reset form fields
  document.getElementById("title").value = "";
  document.getElementById("description").value = "";
});

// Update the pending tasks table
function updatePendingTasks() {
  const tableBody = document
    .getElementById("pending-tasks-table")
    .getElementsByTagName("tbody")[0];
  tableBody.innerHTML = ""; // Clear the table before adding updated rows

  pendingTasks.forEach((task, index) => {
    const row = tableBody.insertRow();
    row.innerHTML = `
            <td>${task.title}</td>
            <td>${task.description}</td>
            <td>${task.dateAdded}</td>
            <td>
                <button class="complete" onclick="markComplete(${index})">Complete</button>
                <button class="delete" onclick="deleteTask(${index}, 'pending')">Delete</button>
            </td>
        `;
  });
}

// Update the completed tasks table
function updateCompletedTasks() {
  const tableBody = document
    .getElementById("completed-tasks-table")
    .getElementsByTagName("tbody")[0];
  tableBody.innerHTML = ""; // Clear the table before adding updated rows

  completedTasks.forEach((task, index) => {
    const row = tableBody.insertRow();
    row.innerHTML = `
            <td>${task.title}</td>
            <td>${task.description}</td>
            <td>${task.dateCompleted}</td>
            <td>
                <button class="delete" onclick="deleteTask(${index}, 'completed')">Delete</button>
            </td>
        `;
  });
}

// Mark a task as complete
function markComplete(index) {
  const task = pendingTasks[index];
  task.dateCompleted = new Date().toLocaleString();

  // Move task to completed list
  completedTasks.push(task);
  pendingTasks.splice(index, 1);

  updatePendingTasks();
  updateCompletedTasks();
}

// Delete a task from the list
function deleteTask(index, type) {
  if (type === "pending") {
    // Remove the task from the pending tasks array
    pendingTasks.splice(index, 1);
    updatePendingTasks();
  } else if (type === "completed") {
    // Remove the task from the completed tasks array
    completedTasks.splice(index, 1);
    updateCompletedTasks();
  }
}
