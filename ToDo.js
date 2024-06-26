function ShowTasks() {
    var storedTasks = localStorage.getItem("AllTasks");
    document.getElementById("Tasks").innerHTML="";
    for (let i = 0; i < localStorage.length; i++) {
        key = localStorage.key(i);
        task=localStorage.getItem(key);
        document.getElementById("Tasks").innerHTML+=`<li>${task} <button onclick="DeleteFromList(${key})" class="DeleteButton">×</button></li>`;
    }
}

ShowTasks();

function AddToList(){
    var NewTask=document.getElementById("TasksEntered").value;
    if (NewTask!=""){
    localStorage.setItem(Date.now().toString(),JSON.stringify(NewTask));
    document.getElementById("TasksEntered").value="";
    ShowTasks();
    }
}

function ClearList(){
    localStorage.clear();
    document.getElementById("Tasks").innerHTML="";
}

function DeleteFromList(key){
    localStorage.removeItem(key);
    ShowTasks()
}
