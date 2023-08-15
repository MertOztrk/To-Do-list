const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
addTaskBtn.addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    
    if (taskText !== "") {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <span class="taskText">${taskText}</span>
            <button class="changeBtn">Change</button>
            <button class="deleteBtn">Delete</button>
        `;
        
        taskList.appendChild(listItem);
        
        taskInput.value = "";
        
        const deleteBtn = listItem.querySelector(".deleteBtn");
        const changeBtn = listItem.querySelector(".changeBtn");
        const taskTextSpan = listItem.querySelector(".taskText");
        
        deleteBtn.addEventListener("click", () => {
            listItem.remove();
        });
        
        changeBtn.addEventListener("click", () => {
            const newText = prompt("Enter new task text:");
            if (newText !== null && newText.trim() !== "") {
                taskTextSpan.textContent = newText.trim();
            }
        });
    } else {
        alert("Empty area.");
    }
}
