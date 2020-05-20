function add() {

    var task = document.createElement("span");
    task.setAttribute("class", "task");
    task.innerHTML = document.getElementById("myText").value;
    var x = document.createElement("img");
    x.setAttribute("src", "x.png");
    x.setAttribute("class", "x");


    var sp1 = document.createElement("span");
    var sp2 = document.createElement("span");
    sp1.appendChild(x);
    sp2.appendChild(task)
    var task_x_container = document.createElement("DIV");
    task_x_container.setAttribute("id", "task_x_container")
    task_x_container.appendChild(sp1);
    task_x_container.appendChild(sp2);
    if (document.getElementById("myText").value != "") {
        document.getElementById("list").appendChild(task_x_container);
    }

}

function deleteAll() {
    document.querySelector("#list").innerHTML = "";
}


document.addEventListener("click", removeTask);

function removeTask(e) {
    var element = e.target;
    if (element.className == 'x') {
        console.log("vdvdsved");
        e.target.parentElement.parentElement.remove();
    }
}

document.addEventListener("click", lineRemove);


function lineRemove(e) {
    var element = e.target;
    if (element.className == 'task') {
        e.target.style.textDecorationLine = "line-through";
        e.target.setAttribute("class", "taskDone");
    } else if (element.className == 'taskDone') {
        e.target.style.textDecorationLine = "none";
        e.target.setAttribute("class", "task");
    }
}


document.getElementById("myText").addEventListener("click", resetInput);

function resetInput() {
    document.getElementById("myText").value = ""
}