
let myInput, button, taskList;
let userTask=[];
myInput = document.querySelector('#box_input')
button  = document.querySelector('button')
taskList = document.querySelector('#list_conteneur')
button.addEventListener('click',AddTask);

function AddTask() {
   
        let li = document.createElement("li")
        li.innerHTML = myInput.value +'<button id="removeToDo" onclick="removeTask(this)"><ion-icon name="trash-outline"></ion-icon></button>'
        taskList.appendChild(li);
        myInput.value = " ";
        
    }
function removeTask(button) {
    const btn = myInput.value
    const tache = button.parentNode
    taskList.removeChild(tache);
}
