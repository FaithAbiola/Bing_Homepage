var btn = document.getElementById("open-burger");
var menu = document.getElementById("menu");
var span = document.getElementById("exit-menu");




btn.onclick = function() {
  menu.style.display = "block";
}

span.onclick = function () {
  menu.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == menu) {
    menu.style.display = "none";
  }
};