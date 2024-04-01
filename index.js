document.addEventListener("DOMContentLoaded", function() {
    var addTaskBtn = document.getElementById('addTaskBtn');
    addTaskBtn.addEventListener('click', addTask);

    function addTask() {
        var taskInput = document.getElementById('taskInput');
        var taskText = taskInput.value.trim();
        if (taskText !== '') {
            var taskList = document.getElementById('taskList');
            var li = document.createElement('li');
            var checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.addEventListener('change', function() {
                if (checkbox.checked) {
                    li.classList.add('completed');
                } else {
                    li.classList.remove('completed');
                }
            });
            var span = document.createElement('span');
            span.textContent = taskText;
            li.appendChild(checkbox);
            li.appendChild(span);
            taskList.appendChild(li);
            taskInput.value = '';
        }
    }
});

