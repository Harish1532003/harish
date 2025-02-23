function addTask() {
    let taskText = document.getElementById('taskInput').value;
    let teamName = document.getElementById('teamName').value;
    let email = document.getElementById('email').value;
    let dueDate = document.getElementById('dueDate').value;
    let priority = document.getElementById('priority').value;

    if (!taskText.trim() || !teamName.trim() || !email.trim()) return;

    let taskDiv = document.createElement('div');
    taskDiv.className = 'task';
    taskDiv.innerHTML = `<p><strong>${taskText}</strong></p>
                         <p>Team: ${teamName}</p>
                         <p>Email: ${email}</p>
                         <p>Priority: ${priority}</p>
                         <p>Due: ${dueDate || 'No deadline'}</p>
                         <p>Status: In Progress</p>
                         <button onclick="updateStatus(this, 'Completed')">Mark as Completed</button>
                         <button onclick="updateStatus(this, 'In Progress')">In Progress</button>
                         <button onclick="deleteTask(this)">Delete Task</button>`;

    document.getElementById('taskList').appendChild(taskDiv);
    document.getElementById('taskInput').value = '';
    document.getElementById('teamName').value = '';
    document.getElementById('email').value = '';
    document.getElementById('dueDate').value = '';
}

function updateStatus(button, status) {
    button.parentElement.querySelector('p:nth-child(6)').innerText = 'Status: ' + status;
}

function deleteTask(button) {
    button.parentElement.remove();
}
