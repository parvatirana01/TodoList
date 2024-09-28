// Initialize the todoList from localStorage if available, otherwise use default
let todoList = JSON.parse(localStorage.getItem('todoList')) || [
    {item: 'first', dueDate: '4/10/2024'}, 
    {item: 'second', dueDate: '4/10/2024'}
];

// Display items when the page is loaded
displayItems();

function addTodo(){
    let todoInput = document.querySelector('#todoInput');
    let dateELement = document.querySelector('#todoDate');
    let todoItem = todoInput.value;
    let todoDate = dateELement.value;
    
    // Add new item to the todoList array
    todoList.push({item: todoItem, dueDate: todoDate});
    
    // Clear the input fields
    todoInput.value = '';
    dateELement.value = '';
    
    // Update localStorage
    saveToLocalStorage();
    
    // Update the display
    displayItems();
}

function displayItems(){
    let containerElement = document.querySelector('.todo-container');
    let newHtml = '';
    
    for(let i = 0; i < todoList.length; i++){
        let {item, dueDate} = todoList[i];
        newHtml += `
        <span>${item}</span>
        <span>${dueDate}</span>
        <button class="deleteBtn" onclick="deleteItem(${i})">Delete</button>
        `;
    }
    
    containerElement.innerHTML = newHtml;
}

// Save the todoList to localStorage
function saveToLocalStorage() {
    localStorage.setItem('todoList', JSON.stringify(todoList));
}

// Delete an item from the todoList
function deleteItem(index){
    todoList.splice(index, 1);
    
    // Update localStorage after deletion
    saveToLocalStorage();
    
    // Update the display
    displayItems();
}
