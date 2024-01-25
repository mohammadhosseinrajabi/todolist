function addTask(){
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');
    
    if(taskInput.value.trim()===''){
        alert('please enter a task :))))');
        return
    }
    var li = document.createElement('li');
    li.innerHTML = `
    <span>${taskInput.value}</span>
    <button class="delete-button" onclick="deleteTask(this)">delete</button>
    `;
    li.addEventListener('click',function(){
        this.classList.toggle('completed');
    });
    taskList.appendChild(li);
    taskInput.value = '';
}
function deleteTask(button){
    var li = button.parentElement;
    li.remove();
}