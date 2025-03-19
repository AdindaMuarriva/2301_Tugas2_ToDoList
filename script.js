function addTask() {
    const taskInput = document.getElementById("taskInput");
    const deadlineInput = document.getElementById("deadlineInput");
    const taskList = document.getElementById("taskList");
    const taskText = taskInput.value.trim();
    const deadline = deadlineInput.value;
    if (taskText === "") return;

    const li = document.createElement("li");
    li.className = "flex flex-col bg-gray-200 p-2 rounded-lg";
    li.innerHTML = `
        <div class="flex justify-between items-center">
            <span class="flex-1">${taskText}</span>
            <div class="flex gap-2">
                <button onclick="completeTask(this)" class="text-green-500">✅</button>
                <button onclick="editTask(this)" class="text-yellow-500">✏️</button>
                <button onclick="deleteTask(this)" class="text-red-500">❌</button>
            </div>
        </div>
        <small class="text-gray-600">Deadline: ${deadline || "Tidak ada"}</small>
    `;
    taskList.appendChild(li);
    taskInput.value = "";
    deadlineInput.value = "";
}

function deleteTask(button) {
    button.parentElement.parentElement.parentElement.remove();
}

function editTask(button) {
    const li = button.parentElement.parentElement.parentElement;
    const taskText = li.querySelector("span").innerText;
    document.getElementById("taskInput").value = taskText;
    deleteTask(button);
}

function completeTask(button) {
    const taskText = button.parentElement.parentElement.querySelector("span");
    taskText.classList.toggle("line-through");
    taskText.classList.toggle("text-gray-500");
}
