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

const toggleCtrls = [
  {
    path: document.querySelector('#toggle1 path'),
    circle: document.querySelector('#toggle1 circle'),
    fill: '#00809d',
    cx: '28'
  },
  {
    path: document.querySelector('#toggle2 path'),
    circle: document.querySelector('#toggle2 circle'),
    fill: '#00809d',
    cx: '28'
  },
  {
    path: document.querySelector('#toggle3 path'),
    circle: document.querySelector('#toggle3 circle'),
    fill: '#00809d',
    cx: '28'
  }
];

toggleCtrls.forEach(function(ctrl) {
  const toggleCtrl = ctrl.circle.parentElement;
  toggleCtrl.addEventListener('click', function() {
    if (ctrl.path.getAttribute('fill') === ctrl.fill) {
      ctrl.path.setAttribute('fill', '#444');
      ctrl.circle.setAttribute('cx', '10');
    } else {
      ctrl.path.setAttribute('fill', ctrl.fill);
      ctrl.circle.setAttribute('cx', ctrl.cx);
    }
  });
});




