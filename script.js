var modal = document.getElementById("modal");

var btn = document.getElementById("open-modal");

var span = document.getElementById("close-modal");

var list = document.querySelector(".my-list");

btn.addEventListener("mouseenter", function () {
  modal.style.display = "block";
});

modal.addEventListener("mouseleave", function (event) {
  if (event.relatedTarget && list.contains(event.relatedTarget)) {
    return;
  }
  modal.style.display = "none";
});

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};