


function addtodolist() {
    let taskname = document.getElementById('taskname').value
    let mytodo = document.getElementById('mytodo')

    let newTodoItem = document.createElement('div')
    let todoName = document.createElement('li')

    let deleteBtn = document.createElement('i')
    deleteBtn.classList.add('far')
    deleteBtn.classList.add('fa-trash-alt')

    todoName.innerHTML = taskname
    newTodoItem.appendChild(todoName)
    newTodoItem.appendChild(deleteBtn)
    mytodo.appendChild(newTodoItem)


}


let mytodo = document.getElementById("mytodo")
mytodo.addEventListener('click', deletItem)

function deletItem(e) {
    const element = e.target
    if (element.classList[0] === 'far') {
        element.parentElement.remove()
    }
}