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
    if (document.getElementById("myText").value != "")
        document.getElementById("list").appendChild(task_x_container);


}

function deleteAll() {
    document.querySelector("#list").innerHTML = "";
}