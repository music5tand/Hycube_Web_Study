function Button() {
    var time = document.getElementById("table");
    
    if (time.style.display !== "none") {
        time.style.display = "none";
    } else {
        time.style.display = "block";
    }
    
}

function Move() {
    var time = document.getElementById("table");
    time.style.marginTop = "20px";
}

function Change() {
    document.getElementById("button").innerHTML = "ihbubu bu";
}

function Add() {
    var newone = document.createElement("a");
    var menu = document.getElementById("menu");
    newone.innerHTML = "새항목";
    menu.appendChild(newone);
    
}