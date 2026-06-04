const addToList=document.querySelector("#addButton");
const toDoText=document.querySelector("#toDo-Text");
const tasksBox=document.querySelector("#tasks");
const deleteBtn=document.querySelector(".btnDelete");



function add(){
    if(toDoText.value==0){
        addToList.classList.add("btn-danger");
    }else{
        tasksBox.innerHTML +=`<div class="p-2">
              <div
                class="d-flex p-2 align-items-center justify-content-between"
              >
                <span>${toDoText.value}</span>

                <div class="p-2 align-items-center">
                  <button onclick="remove(e)" class="btnDelete btn btn-danger">Delete</button>
                </div>
              </div>
            </div>`;
            addToList.classList.remove("btn-danger");
    }
    toDoText.value=""
}

function remove(event){
  alert(event.target.innerHTML);
}


addToList.addEventListener("click",add);
// deleteBtn.addEventListener("click",remove);