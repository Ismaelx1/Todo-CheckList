let tasks = [];
const inputField = document.querySelector('#input-field')
const inputBtn = document.querySelector('#input-btn')
const tasksUl = document.querySelector('#tasks-para')



inputBtn.addEventListener('click', function(){
tasks.push(inputField.value)

inputField.value = ''
localStorage.setItem("myleads", JSON.stringify(tasks))

renderOut()
})


const localLeads = JSON.parse(localStorage.getItem("myleads"))
    if (localLeads) {
        tasks = localLeads
        renderOut();
    }
function renderOut() {

    let listItems = ''
    
for (let i = 0; i < tasks.length; i++) {
    let indexIs = tasks.indexOf(tasks[i])
        listItems += `
        <li> 
                ${tasks[i]} 
                <label for="${indexIs}">
                <input type="checkbox" id="${indexIs}">
                </label>
        </li>`;
                
             
        

}
tasksUl.innerHTML = listItems
 
}

