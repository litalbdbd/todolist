function add() {

    var task = document.createElement("DIV");
    task.setAttribute("id", "task");
    task.innerHTML = document.getElementById("myText").value;
    document.getElementById("list").appendChild(task);
}

function deleteAll() {
    document.querySelector("#list").innerHTML = "";
}