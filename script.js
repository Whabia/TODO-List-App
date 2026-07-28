const inputBox = document.querySelector(".input-class");
const taskBox = document.getElementById("tasks");
function AddTask(){
    if(inputBox.value == ""){
        alert("You must write somthing!");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        taskBox.appendChild(li);
        let spanTag = document.createElement("span");
        spanTag.innerHTML = "\u00d7"
        li.appendChild(spanTag);
    }
    inputBox.value = "";
    saveData()
}

taskBox.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
},false );

function saveData(){
    localStorage.setItem("data" , taskBox.innerHTML);
}

function showTask(){
    taskBox.innerHTML = localStorage.getItem("data");
}
showTask()