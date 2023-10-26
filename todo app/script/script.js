let todoInput = document.getElementById('todo-input');
let todoDisplay = document.getElementById('display-todo');
console.log("Script aded")
const addtodo = () => {
    todoDisplay.innerHTML +=
        `<div class="todo-list">
        <li class="todo-list-item">${todoInput.value}</li><i class="fa-solid fa-trash"
            onclick="deletetodo(event.target)"></i>
    </div>`
    todoInput.value = " ";
}
const deletetodo= (item)=>{
    console.log(item.parentElement.remove())
}