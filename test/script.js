document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("burger").addEventListener("click", function(){
     document.querySelector("header").classList.toggle("open")
    })
})
var modal = document.getElementById("myModal");
var buttons = document.getElementsByClassName("openModal");
var span = document.getElementsByClassName("close")[0];

function openModal() {
    modal.style.display = "block";
}

for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = openModal;
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}