// let tasks = [];
const input = document.querySelector('#input-field')
const button = document.querySelector('#input-btn')
const tasksUl = document.querySelector('#tasks-para')
const clearing = document.querySelector('#clearall')
const ul = document.querySelector("ul");
const list = document.getElementsByTagName("li");
const trash = document.getElementsByClassName("delete");
const btndelete = document.getElementById("trash");
const container = document.querySelector('.container ul')

button.addEventListener('click', (e) => {
  if (input.value != "") {
    e.preventDefault();
 
    const myLi = document.createElement('li')
    myLi.innerHTML = input.value;
    container.appendChild(myLi)

    const mySpan = document.createElement('span')
    mySpan.innerHTML = 'x'
    myLi.appendChild(mySpan)

  }
  const close = document.querySelectorAll('span');
  for (let i = 0; i < close.length; i++) {
    close[i].addEventListener('click', () => {
      close[i].parentElement.style.opacity = 0;

      
        




        setTimeout(() => {
          close[i].parentElement.style.display = 'none';
          close[i].parentElement.remove();
        }, 500)
    })
  }





input.value = ''


})


document.onkeydown = function (e) {
  e = e || window.event;
  switch (e.which || e.keyCode) {
        case 13 : 
        if (input.value != "") {
          e.preventDefault();
        
          const myLi = document.createElement('li')
          myLi.innerHTML = input.value;
          container.appendChild(myLi)
      
          const mySpan = document.createElement('span')
          mySpan.innerHTML = 'x'
          myLi.appendChild(mySpan)
      
        }
        const close = document.querySelectorAll('span');
        for (let i = 0; i < close.length; i++) {
          close[i].addEventListener('click', () => {
            close[i].parentElement.style.opacity = 0;
              setTimeout(() => {
                close[i].parentElement.style.display = 'none';
                close[i].parentElement.remove();
              }, 500)
          })}
              input.value = ''
            break;
  }
}


/*
 
button.addEventListener('click', function(){
tasks.push(input.value)

input.value = ''
localStorage.setItem("myleads", JSON.stringify(tasks))

addli()
})

for (var i = 0; i < list.length; i++) {
    list[i].addEventListener("click", strikeout);
  }
  
  //toggle between classlist
  function strikeout() {
    this.classList.toggle("done");
  }
  
  //check the length of the string entered
  function inputlength() {
    return input.value.length;
  }

const localLeads = JSON.parse(localStorage.getItem("myleads"))
    if (localLeads) {
        tasks = localLeads
        addli();
    }
function addli() {


         
        
        const li = document.createElement("li");
        const btn = document.createElement("button");
        btn.className = "delete";
        btn.innerHTML = "X";
        btn.addEventListener("click", function(e) {
          e.target.parentNode.remove();
        });
        li.addEventListener("click", strikeout);
        li.innerHTML = input.value + " ";
        li.appendChild(btn);
        ul.appendChild(li);






     





 
}

function addListAfterClick() {
    if (inputlength() > 0) {
      addli();
    }
  }
  
  //this will add a new list item with keypress
  function addListKeyPress(event) {
    if (inputlength() > 0 && event.which === 13) {
      addli();
    }
  }
  
  //this will check for the event/keypress and create new list item
  input.addEventListener("click", addListKeyPress);
  
  //this will check for a click event and create new list item
  button.addEventListener("click", addListAfterClick);


clearing.addEventListener('dblclick', function() {
tasks = [];
tasksUl.innerHTML = ''
localStorage.clear()



}) */