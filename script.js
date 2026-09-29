const taskForm = document.getElementById("taskForm");
const taskTitle = document.getElementById("taskTitle");
const taskDescription = document.getElementById("taskDescription");
const taskList = document.getElementById("taskList");
const message = document.getElementById("message");

taskForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const title = taskTitle.value.trim();
    const description = taskDescription.value.trim();

    if (title === "" || description === "") {
        message.textContent = "Please enter both task title and description.";
        message.className = "error-message";
        return;
    }

    const taskCard = document.createElement("article");
    taskCard.className = "task-card";

    const taskHeading = document.createElement("h3");
    taskHeading.textContent = title;

    const taskParagraph = document.createElement("p");
    taskParagraph.textContent = description;

    taskCard.appendChild(taskHeading);
    taskCard.appendChild(taskParagraph);

    taskList.appendChild(taskCard);

    message.textContent = "Task added successfully.";
    message.className = "success-message";

    taskForm.reset();
    taskTitle.focus();
});