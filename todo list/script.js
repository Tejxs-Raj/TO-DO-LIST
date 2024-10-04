// Array to hold the list of tasks
let tasks = [];

// Function to add a task to the list
function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        // Add the task to the array
        tasks.push(taskText);
        taskInput.value = ''; // Clear the input field
        displayTasks();
    } else {
        alert("Please enter a task");
    }
}

// Function to display the tasks in the list
function displayTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = ''; // Clear the list before displaying

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${task}
            <button class="complete-btn" onclick="completeTask(${index})">Done</button>
        `;
        taskList.appendChild(li);
    });
}

// Function to mark a task as completed and remove it from the array
function completeTask(index) {
    tasks.splice(index, 1); // Remove the task from the array
    displayTasks(); // Update the display
}
